import React from "react";
import "./Pagination.css";

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div>
      {gotoPrevPage && (
        <button
          data-testid="gotoPreviousButton"
          className="button-style"
          onClick={gotoPrevPage}
        >
          Previous
        </button>
      )}
      {gotoNextPage && (
        <button
          data-testid="gotoNextButton"
          className="button-style"
          onClick={gotoNextPage}
        >
          Next
        </button>
      )}
    </div>
  );
}
