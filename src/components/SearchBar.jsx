function SearchBar({ searchText, setSearchText }) {
  return (
    <div className="flex items-center gap-3 w-full bg-[var(--bg-primary)] px-5 py-3 rounded-xl border border-[var(--border)]transition focus-within:border-[var(--accent)] focus-within:ring-4 focus-within:ring-[var(--accent-glow)]">
      <svg 
      className="h-5 w-5 text-[var(--text-secondary)]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>

      <input
        type="text"
        placeholder="Search by title..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full bg-transparent outline-none border-none text-[var(--text-primary)] placeholder-[var(--text-secondary)] text-base"
      />
    </div>
  );
}

export default SearchBar;
