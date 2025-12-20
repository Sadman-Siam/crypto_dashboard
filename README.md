# Crypto Dashboard

A real-time cryptocurrency tracking dashboard built with Next.js and Express.
- [View Live Site](https://crypto-graph-dashboard.vercel.app)

## Features

- View top cryptocurrencies with real-time data
- Sort by Market Cap, Volume (24h), or Market Price
- Track price changes (1h, 24h, 7d, 30d)
- Dark/Light theme support
- Responsive design

## System Design

![system design](images/Diagram2.png)

## Tech Stack

**Frontend:**
- Next.js 16
- React 19
- TanStack Query
- Tailwind CSS
- Radix UI components

**Backend:**
- Node.js
- Express
- Axios
- CoinMarketCap API

## API Endpoints
- `GET /api/cryptocurrencies` - Fetch all cryptocurrencies

## License

MIT
