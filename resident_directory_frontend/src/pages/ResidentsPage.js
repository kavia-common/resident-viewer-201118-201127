import React, { useEffect, useMemo, useState } from "react";
import SearchBar from "../components/SearchBar";
import ResidentList from "../components/ResidentList";
import ResidentListSkeleton from "../components/ResidentListSkeleton";
import { getResidents } from "../data/residents";

/**
 * PUBLIC_INTERFACE
 */
export default function ResidentsPage() {
  /** Main list view with client-side search and initial loading placeholder. */
  const [loading, setLoading] = useState(true);
  const [residents, setResidents] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // Simulate async initial load for better UX (no backend involved).
    const t = setTimeout(() => {
      setResidents(getResidents());
      setLoading(false);
    }, 500);

    return () => clearTimeout(t);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return residents;
    return residents.filter((r) => String(r.name).toLowerCase().includes(q));
  }, [query, residents]);

  return (
    <main className="container" aria-label="Resident directory">
      <header className="pageHeader">
        <div>
          <h1 className="pageTitle">Residents</h1>
          <p className="pageSubtitle">Search and view resident details (frontend-only).</p>
        </div>
      </header>

      <div className="toolbar">
        <SearchBar value={query} onChange={setQuery} />
        <div className="countPill" aria-label="Resident count">
          {loading ? "Loading…" : `${filtered.length} shown`}
        </div>
      </div>

      {loading ? (
        <ResidentListSkeleton />
      ) : residents.length === 0 ? (
        <ResidentList
          residents={[]}
          emptyTitle="No residents in the directory"
          emptyDescription="Add entries to src/data/residents.js to get started."
        />
      ) : filtered.length === 0 ? (
        <ResidentList
          residents={[]}
          emptyTitle="No matches"
          emptyDescription="No residents match your search. Clear the search and try again."
        />
      ) : (
        <ResidentList residents={filtered} />
      )}
    </main>
  );
}
