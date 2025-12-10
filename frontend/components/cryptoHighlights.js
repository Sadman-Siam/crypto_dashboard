import { Button } from "./ui/button";
import { useState } from "react";

export default function CryptoList({ crypto }) {
  const [marketCap, setMarketCap] = useState(true);
  const [volume, setVolume] = useState(false);
  const [marketPrice, setMarketPrice] = useState(false);

  let sortby = marketCap
    ? "Market Cap"
    : volume
    ? "Volume (24h)"
    : "Market Price";

  function handleMarketCap() {
    if (!marketCap) {
      setMarketCap(true);
      setVolume(false);
      setMarketPrice(false);
    }
  }

  function handleVolume() {
    if (!volume) {
      setVolume(true);
      setMarketCap(false);
      setMarketPrice(false);
    }
  }
  function handleMarketPrice() {
    if (!marketPrice) {
      setMarketPrice(true);
      setMarketCap(false);
      setVolume(false);
    }
  }
  return (
    <div className={`mx-4`}>
      <nav
        className={`flex flex-col justify-center items-start md:flex-row md:justify-between md:items-start md:mt-2`}
      >
        <h1 className={`font-semibold py-2 md:py-0`}>
          Top 3 crypto by {`${sortby}`}
        </h1>
        <div className="space-x-2 space-y-2">
          <Button
            variant="link"
            className=" border text-[12px]"
            onClick={handleMarketCap}
          >
            Market Cap
          </Button>
          <Button
            variant="link"
            className=" border text-[12px]"
            onClick={handleVolume}
          >
            Volume (24h)
          </Button>
          <Button
            variant="link"
            className=" border text-[12px]"
            s
            onClick={handleMarketPrice}
          >
            Market Price
          </Button>
        </div>
      </nav>
      <div className="flex flex-col space-y-2 md:grid md:grid-cols-3 md:gap-2 md:space-y-0">
        {crypto
          .sort((a, b) =>
            marketCap
              ? b.quote.USD.market_cap - a.quote.USD.market_cap
              : volume
              ? b.quote.USD.volume_24h - a.quote.USD.volume_24h
              : b.quote.USD.price - a.quote.USD.price
          )
          .slice(0, 3)
          .map((currency) => (
            <div
              key={currency.id}
              className={`flex flex-row justify-between space-2 border rounded-2xl py-2 px-4 text-[14px] font-semibold md:flex-col md:space-y-1 lg:text-[16px] lg:flex-row`}
            >
              <div>
                {currency.name} {currency.symbol}
                <div className={`text-[12px] mt-2 md:space-y-1`}>
                  <p>Price: ${currency.quote.USD.price.toFixed(2)}</p>
                  <p>Market Cap: ${currency.quote.USD.market_cap.toFixed(2)}</p>
                  <p>
                    Volume (24h): ${currency.quote.USD.volume_24h.toFixed(2)}
                  </p>
                  <p>
                    Dominace:{" "}
                    {currency.quote.USD.market_cap_dominance.toFixed(2)}%
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 text-[12px]">
                <Stat
                  name="1h Change"
                  value={currency.quote.USD.percent_change_1h.toFixed(2) + "%"}
                />
                <Stat
                  name="24h Change"
                  value={currency.quote.USD.percent_change_24h.toFixed(2) + "%"}
                />
                <Stat
                  name="7d Change"
                  value={currency.quote.USD.percent_change_7d.toFixed(2) + "%"}
                />
                <Stat
                  name="30d Change"
                  value={currency.quote.USD.percent_change_30d.toFixed(2) + "%"}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

function Stat({ name, value }) {
  return (
    <div className={`flex flex-col`}>
      <span>{name}</span>
      <span className={`${percentColor(value)}`}>{value}</span>
    </div>
  );
}
function percentColor(value) {
  return value >= 0 ? "text-green-600" : "text-red-600";
}
