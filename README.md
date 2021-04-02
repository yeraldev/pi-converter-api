# Pi Converter App — Backend

A fullstack application built with Svelte on the frontend and Node/Express on the backend.

This server is intended to obtain data related to the values ​​and exchange rates of the Pi cryptocurrency about Bitcoin, the US Dollar, and the Venezuelan Bolívar to simultaneously monitor and provide said values ​​to a web app that serves to calculate amounts between currencies and cryptocurrencies.

# Running it

1. Clone or Download this repo.
2. Create `.env` in the root directory and add:

```
DB_URI=<your-mongodb-connection-string>
PORT=<you-preferred-port>
```

3. Run npm install.
4. Run npm run dev (or npm run start for production mode).
