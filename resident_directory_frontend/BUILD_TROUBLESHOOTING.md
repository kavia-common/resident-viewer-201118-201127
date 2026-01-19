# Build Troubleshooting (CRA)

This project uses **Create React App** via `react-scripts@5`.

## Symptom: "Module not found" for webpack/babel/react-refresh/html-webpack-plugin

Example missing modules:

- `babel-loader/lib/index.js`
- `webpack-dev-server/client/index.js`
- `html-webpack-plugin/lib/loader.js`
- `@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js`

### Root cause

This happens when `node_modules/` is **incomplete or corrupted** (e.g., only partially populated). CRA expects these modules to be present because they are transitive dependencies of `react-scripts`.

### Fix

Reinstall dependencies from the lockfile:

```bash
# from resident_directory_frontend/
# If node_modules exists but is incomplete, remove it and reinstall:
rm -rf node_modules
npm ci --no-audit --no-fund
```

Then verify:

```bash
npm run build
# or
npm start
```

> Note: `npm ci` requires a committed `package-lock.json` (present in this repo) and is the recommended way to ensure deterministic installs in CI.
