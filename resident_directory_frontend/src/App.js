import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import ResidentsPage from "./pages/ResidentsPage";
import ResidentDetailPage from "./pages/ResidentDetailPage";

const THEME_STORAGE_KEY = "resident_directory_theme";

function getSystemTheme() {
  if (typeof window === "undefined") return "light";
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "dark" || stored === "light") return stored;
  return getSystemTheme();
}

function applyThemeToDocument(theme) {
  // Apply theme via <html data-theme="..."> so all components can key off CSS variables.
  document.documentElement.dataset.theme = theme;
}

/**
 * PUBLIC_INTERFACE
 */
function App() {
  /** App entry: provides routing between resident list and resident detail views. */
  const [theme, setTheme] = useState(() => getInitialTheme());

  useEffect(() => {
    applyThemeToDocument(theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  // If user has not explicitly chosen a theme yet, track system changes.
  useEffect(() => {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "dark" || stored === "light") return;

    const mql = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
    if (!mql) return;

    const onChange = () => setTheme(mql.matches ? "dark" : "light");

    // Safari < 14 uses addListener/removeListener
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    }
    mql.addListener(onChange);
    return () => mql.removeListener(onChange);
  }, []);

  const toggleLabel = useMemo(() => (theme === "dark" ? "Switch to light mode" : "Switch to dark mode"), [theme]);

  return (
    <BrowserRouter>
      <div className="AppShell">
        <a className="skipLink" href="#mainContent">
          Skip to content
        </a>

        <header className="topNav">
          <div className="navInner">
            <Link to="/" className="brand" aria-label="Resident Directory Home">
              <span className="brandMark" aria-hidden="true" />
              <span className="brandText">Resident Directory</span>
            </Link>

            <nav aria-label="Primary navigation" className="navLinks">
              <Link className="navLink" to="/">
                Residents
              </Link>

              <button
                type="button"
                className="themeToggle"
                onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
                aria-label={toggleLabel}
                title={toggleLabel}
              >
                <span className="themeToggleIcon" aria-hidden="true">
                  {theme === "dark" ? "☾" : "☀"}
                </span>
                <span className="themeToggleText">{theme === "dark" ? "Dark" : "Light"}</span>
              </button>
            </nav>
          </div>
        </header>

        <div id="mainContent">
          <Routes>
            <Route path="/" element={<ResidentsPage />} />
            <Route path="/resident/:id" element={<ResidentDetailPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        <footer className="footer">
          <div className="footerInner">
            <span className="muted">
              Frontend-only demo • Local mock data in <code>src/data/residents.js</code>
            </span>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
