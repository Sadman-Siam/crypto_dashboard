import { useSharedData } from "@/app/providers/DataContext";
import { Currency } from "lucide-react";
export default function CryptoDetails(crypto) {
  const { selectedCrypto } = useSharedData();

  return (
    <div className={`mt-2`}>
      {selectedCrypto ? (
        <div>
          {crypto.crypto
            .filter((currency) => currency.name === selectedCrypto)
            .map((currency) => (
              <div key={currency.id} className={`mx-4 font-semibold`}>
                {currency.name} {currency.symbol}
                <div
                  className={`flex justify-between items-start border-b-2 pb-2 md:flex-col md:space-y-2`}
                >
                  <div
                    className={`flex flex-col text-[12px] md:flex-row md:space-x-4 md:text-[14px] lg:text-[16px]`}
                  >
                    <p>
                      Price:{" "}
                      <span className="text-blue-600">
                        ${currency.quote.USD.price.toFixed(2)}
                      </span>
                    </p>
                    <p>
                      Market Cap:{" "}
                      <span className="text-blue-600">
                        ${currency.quote.USD.market_cap.toFixed(2)}
                      </span>
                    </p>
                    <p>
                      Volume (24h):{" "}
                      <span className="text-blue-600">
                        ${currency.quote.USD.volume_24h.toFixed(2)}
                      </span>
                    </p>
                    <p>
                      Dominace:{" "}
                      <span className="text-blue-600">
                        {currency.quote.USD.market_cap_dominance.toFixed(2)}
                      </span>
                      %
                    </p>
                  </div>
                  <div
                    className={`flex flex-col text-[12px] md:flex-row md:space-x-4 md:text-[14px] lg:text-[16px]`}
                  >
                    <Stat
                      name="1h Change"
                      value={
                        currency.quote.USD.percent_change_1h.toFixed(2) + "%"
                      }
                    />
                    <Stat
                      name="24h Change"
                      value={
                        currency.quote.USD.percent_change_24h.toFixed(2) + "%"
                      }
                    />
                    <Stat
                      name="7d Change"
                      value={
                        currency.quote.USD.percent_change_7d.toFixed(2) + "%"
                      }
                    />
                    <Stat
                      name="30d Change"
                      value={
                        currency.quote.USD.percent_change_30d.toFixed(2) + "%"
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : null}
    </div>
  );
}
function Stat({ name, value }) {
  return (
    <div className={`flex space-x-2 md:flex-col`}>
      <span>{name}</span>
      <span className={`${percentColor(value)}`}>{value}</span>
    </div>
  );
}
function percentColor(value) {
  return value >= 0 ? "text-green-600" : "text-red-600";
}
