import React from "react";

/**
 * PUBLIC_INTERFACE
 */
export default function ResidentListSkeleton({ count = 6 }) {
  /** Simple skeleton placeholders used while loading local data on initial mount. */
  const items = Array.from({ length: count }, (_, i) => i);
  return (
    <div className="grid" aria-label="Loading residents">
      {items.map((i) => (
        <div key={i} className="card skeletonCard" aria-hidden="true">
          <div className="skeletonHeader">
            <div className="skeletonAvatar shimmer" />
            <div className="skeletonText">
              <div className="skeletonLine shimmer" style={{ width: "70%" }} />
              <div className="skeletonLine shimmer" style={{ width: "45%" }} />
            </div>
          </div>
          <div className="skeletonLine shimmer" style={{ width: "92%" }} />
          <div className="skeletonLine shimmer" style={{ width: "86%" }} />
          <div className="skeletonLine shimmer" style={{ width: "60%" }} />
        </div>
      ))}
    </div>
  );
}
