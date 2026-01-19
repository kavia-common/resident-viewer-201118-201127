import React from "react";

/**
 * PUBLIC_INTERFACE
 */
export default function SearchBar({ value, onChange, placeholder = "Search residents by name…" }) {
  /** A clearable, accessible search input. */
  return (
    <div className="searchBar" role="search">
      <label className="srOnly" htmlFor="residentSearch">
        Search residents by name
      </label>
      <div className="searchInputWrap">
        <span className="searchIcon" aria-hidden="true">
          ⌕
        </span>
        <input
          id="residentSearch"
          className="searchInput"
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete="off"
        />
        {value ? (
          <button
            type="button"
            className="iconButton"
            onClick={() => onChange("")}
            aria-label="Clear search"
          >
            ✕
          </button>
        ) : null}
      </div>
    </div>
  );
}
