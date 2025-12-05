"use client";

function percentColor(value) {
  return value >= 0 ? "text-green-600" : "text-red-600";
}

export default function CryptoList({ crypto }) {
  return (
    <div className="px-4">
      <h2 className="font-bold text-2xl mb-4">Crypto Currencies List</h2>

      <div className="bg-gray-200 p-2 rounded-2xl space-y-2">
        {crypto.map((currency) => (
          <div
            key={currency.id}
            className="bg-white rounded-2xl px-4 py-2 shadow-md"
          >
            {/* Header (name + symbol) */}
            <div className="flex md:flex-row md:items-center md:justify-between">
              <div className={`flex justify-center items-center space-x-2`}>
                <h3 className="text-xl font-bold">
                  {currency.name}{" "}
                  <span className="text-gray-500">({currency.symbol})</span>
                </h3>
                <Ministat label="Current Rank" value={currency.cmc_rank} />
                <Ministat
                  label="Market Cap"
                  value={`$${currency.quote.USD.market_cap.toFixed(2)}`}
                />
                <Ministat
                  label="Market Dominance"
                  value={`${currency.quote.USD.market_cap_dominance.toFixed(
                    2
                  )}%`}
                />
              </div>
            </div>

            {/* Stats Section */}
            <div
              className="
              mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2
              "
            >
              <Stat
                label="Market Price"
                value={`$${currency.quote.USD.price.toFixed(2)}`}
              />

              <Stat
                label="Volume (24h)"
                value={`$${currency.quote.USD.volume_24h.toFixed(2)}`}
              />

              <Stat
                label="Volume Change 24h"
                value={`${currency.quote.USD.volume_change_24h.toFixed(2)}%`}
                valueClass={percentColor(currency.quote.USD.volume_change_24h)}
              />

              <Stat
                label="1h Change"
                value={`${currency.quote.USD.percent_change_1h.toFixed(2)}%`}
                valueClass={percentColor(currency.quote.USD.percent_change_1h)}
              />

              <Stat
                label="24h Change"
                value={`${currency.quote.USD.percent_change_24h.toFixed(2)}%`}
                valueClass={percentColor(currency.quote.USD.percent_change_24h)}
              />

              <Stat
                label="7d Change"
                value={`${currency.quote.USD.percent_change_7d.toFixed(2)}%`}
                valueClass={percentColor(currency.quote.USD.percent_change_7d)}
              />

              <Stat
                label="30d Change"
                value={`${currency.quote.USD.percent_change_30d.toFixed(2)}%`}
                valueClass={percentColor(currency.quote.USD.percent_change_30d)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/*stat components */
function Stat({ label, value, valueClass }) {
  return (
    <div className="flex flex-col bg-gray-100 p-2 rounded-2xl shadow-sm">
      <span className="text-gray-600 text-[12px]">{label}</span>
      <span className={`font-semibold text-[12px] ${valueClass || ""}`}>
        {value}
      </span>
    </div>
  );
}
function Ministat({ label, value }) {
  return (
    <div>
      <span className={`text-[14px] font-semibold`}>
        {label}: {value}
      </span>
    </div>
  );
}
