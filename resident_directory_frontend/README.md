# Resident Directory (Frontend-only)

A lightweight React resident directory with a searchable resident list and a resident detail view.  
All data is local mock data (no backend).

## Features

- Searchable resident list (client-side, case-insensitive)
- Responsive grid of resident cards
- Resident detail route: `/resident/:id`
- Loading skeleton on initial mount
- Empty states for “no data” and “no matches”
- Light/modern theme:
  - primary `#3b82f6`
  - success `#06b6d4`
  - background `#f9fafb`
  - surface `#ffffff`
  - text `#111827`

## Mock Data

Edit the local dataset in:

- `src/data/residents.js`

## Available Scripts

In this directory, you can run:

### `npm start`

Runs the app in development mode at http://localhost:3000

### `npm test`

Runs tests.

### `npm run build`

Builds the app for production.
