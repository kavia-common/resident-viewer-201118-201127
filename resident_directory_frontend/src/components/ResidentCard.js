import React from "react";
import { Link } from "react-router-dom";

function initialsFromName(name) {
  const parts = String(name || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  const first = parts[0]?.[0] || "?";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

/**
 * PUBLIC_INTERFACE
 */
export default function ResidentCard({ resident }) {
  /** Card showing summary info for a single resident. */
  const snippet =
    resident?.notes && resident.notes.length > 90
      ? resident.notes.slice(0, 90) + "…"
      : resident?.notes || "No notes yet.";

  return (
    <Link to={`/resident/${resident.id}`} className="cardLink">
      <article className="card" aria-label={`${resident.name}, unit ${resident.unit}`}>
        <div className="cardHeader">
          <div className="avatar" aria-hidden="true">
            {resident.avatarUrl ? (
              <img src={resident.avatarUrl} alt="" />
            ) : (
              <span className="avatarInitials">{initialsFromName(resident.name)}</span>
            )}
          </div>
          <div className="cardTitleBlock">
            <h3 className="cardTitle">{resident.name}</h3>
            <div className="cardMeta">
              <span className="pill">Unit {resident.unit}</span>
              <span className="muted">Age {resident.age}</span>
            </div>
          </div>
        </div>

        <p className="cardBody muted">{snippet}</p>

        <div className="cardFooter">
          <span className="linkHint">View details</span>
        </div>
      </article>
    </Link>
  );
}
