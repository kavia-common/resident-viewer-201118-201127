import React, { useEffect, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getResidentById } from "../data/residents";

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
export default function ResidentDetailPage() {
  /** Detail view for a single resident. */
  const { id } = useParams();
  const navigate = useNavigate();

  const resident = useMemo(() => getResidentById(id), [id]);

  useEffect(() => {
    // Focus management for page navigation: move focus to the page title.
    const el = document.getElementById("residentDetailTitle");
    if (el) el.focus();
  }, [id]);

  if (!resident) {
    return (
      <main className="container">
        <div className="detailTopBar">
          <button type="button" className="btn btnSecondary" onClick={() => navigate(-1)}>
            ← Back
          </button>
        </div>

        <section className="emptyState" aria-live="polite">
          <h1 className="emptyTitle" tabIndex={-1} id="residentDetailTitle">
            Resident not found
          </h1>
          <p className="emptyDesc">
            The resident id <code>{id}</code> doesn’t exist in local mock data.
          </p>
          <Link className="btn btnPrimary" to="/">
            Go to Residents
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="container">
      <div className="detailTopBar">
        <button type="button" className="btn btnSecondary" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <Link className="btn btnGhost" to="/">
          Residents
        </Link>
      </div>

      <section className="detailCard" aria-label="Resident details">
        <header className="detailHeader">
          <div className="avatar avatarLarge" aria-hidden="true">
            {resident.avatarUrl ? (
              <img src={resident.avatarUrl} alt="" />
            ) : (
              <span className="avatarInitials">{initialsFromName(resident.name)}</span>
            )}
          </div>

          <div className="detailHeaderText">
            <h1 className="detailTitle" id="residentDetailTitle" tabIndex={-1}>
              {resident.name}
            </h1>
            <div className="detailMeta">
              <span className="pill">Unit {resident.unit}</span>
              <span className="pill pillSuccess">Age {resident.age}</span>
              <span className="muted">ID: {resident.id}</span>
            </div>
          </div>
        </header>

        <div className="detailGrid">
          <div className="detailSection">
            <h2 className="sectionTitle">Contact</h2>
            <dl className="dl">
              <div className="dlRow">
                <dt>Phone</dt>
                <dd>{resident.phone || "—"}</dd>
              </div>
              <div className="dlRow">
                <dt>Email</dt>
                <dd>
                  {resident.email ? (
                    <a className="textLink" href={`mailto:${resident.email}`}>
                      {resident.email}
                    </a>
                  ) : (
                    "—"
                  )}
                </dd>
              </div>
            </dl>
          </div>

          <div className="detailSection">
            <h2 className="sectionTitle">Notes</h2>
            <p className="notes">{resident.notes || "No notes available."}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
