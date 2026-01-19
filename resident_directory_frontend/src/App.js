import React from "react";
import { BrowserRouter, Navigate, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import ResidentsPage from "./pages/ResidentsPage";
import ResidentDetailPage from "./pages/ResidentDetailPage";

/**
 * PUBLIC_INTERFACE
 */
function App() {
  /** App entry: provides routing between resident list and resident detail views. */
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
