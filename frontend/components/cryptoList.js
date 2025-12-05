"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function percentColor(value) {
  return value >= 0 ? "text-green-600" : "text-red-600";
}

export default function CryptoList({ crypto }) {
  return (
    <div className="px-4">
      <Table>
        <TableCaption>List of Crypto Currencies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Rank</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>1h Change</TableHead>
            <TableHead>24h Change</TableHead>
            <TableHead>7d Change</TableHead>
            <TableHead>30d Change</TableHead>
            <TableHead>Volume (24h)</TableHead>
            <TableHead>Market Cap</TableHead>
            <TableHead>Dominance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className={`font-semibold text-[12px]`}>
          {crypto.map((currency) => (
            <TableRow key={currency.id}>
              <TableCell>{currency.cmc_rank}</TableCell>
              <TableCell className={`font-semibold`}>
                {currency.name} ({currency.symbol})
              </TableCell>
              <TableCell>${currency.quote.USD.price.toFixed(2)}</TableCell>
              <TableCell
                className={percentColor(currency.quote.USD.percent_change_1h)}
              >
                {currency.quote.USD.percent_change_1h.toFixed(2)}%
              </TableCell>
              <TableCell
                className={percentColor(currency.quote.USD.percent_change_24h)}
              >
                {currency.quote.USD.percent_change_24h.toFixed(2)}%
              </TableCell>
              <TableCell
                className={percentColor(currency.quote.USD.percent_change_7d)}
              >
                {currency.quote.USD.percent_change_7d.toFixed(2)}%
              </TableCell>
              <TableCell
                className={percentColor(currency.quote.USD.percent_change_30d)}
              >
                {currency.quote.USD.percent_change_30d.toFixed(2)}%
              </TableCell>
              <TableCell>${currency.quote.USD.volume_24h.toFixed(2)}</TableCell>
              <TableCell>${currency.quote.USD.market_cap.toFixed(2)}</TableCell>
              <TableCell>
                {currency.quote.USD.market_cap_dominance.toFixed(2)}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
