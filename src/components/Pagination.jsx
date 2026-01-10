function Pagination({ currentPage, totalPages, setCurrentPage }) {
  return (
    <div className="mt-[60px] flex items-center justify-center gap-6">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((p) => p - 1)}
        className="
          w-12 h-12
          rounded-full
          flex items-center justify-center
          border border-[var(--border)]
          bg-[var(--bg-secondary)]
          text-[var(--text-secondary)]
          transition-all
          disabled:opacity-40
          disabled:cursor-not-allowed
          hover:not-disabled:border-[var(--accent)]
          hover:not-disabled:text-[var(--accent)]
          hover:not-disabled:-translate-y-0.5
        "
      >
        ‹
      </button>

      {/* PAGE INFO */}
      <div className="flex items-center gap-1 text-sm font-semibold">
        <span className="font-[var(--font-heading)] text-[var(--text-primary)]">
          {currentPage}
        </span>
        <span className="text-[var(--text-secondary)]">/</span>
        <span className="font-[var(--font-heading)] text-[var(--text-secondary)]">
          {totalPages}
        </span>
      </div>
      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((p) => p + 1)}
        className="
          w-12 h-12
          rounded-full
          flex items-center justify-center
          border border-[var(--border)]
          bg-[var(--bg-secondary)]
          text-[var(--text-secondary)]
          transition-all
          disabled:opacity-40
          disabled:cursor-not-allowed
          hover:not-disabled:border-[var(--accent)]
          hover:not-disabled:text-[var(--accent)]
          hover:not-disabled:-translate-y-0.5
        "
      >
        ›
      </button>
    </div>
  );
}

export default Pagination;
