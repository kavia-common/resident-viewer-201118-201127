import React from "react";
import ResidentCard from "./ResidentCard";

/**
 * PUBLIC_INTERFACE
 */
export default function ResidentList({ residents, emptyTitle, emptyDescription }) {
  /** Responsive grid list of resident cards, with empty state messaging. */
  if (!residents || residents.length === 0) {
    return (
      <section className="emptyState" aria-live="polite">
        <h2 className="emptyTitle">{emptyTitle || "No residents found"}</h2>
        <p className="emptyDesc">
          {emptyDescription || "Try a different search term, or clear the filter."}
        </p>
      </section>
    );
  }

  return (
    <section className="grid" aria-label="Resident list">
      {residents.map((resident) => (
        <ResidentCard key={resident.id} resident={resident} />
      ))}
    </section>
  );
}
