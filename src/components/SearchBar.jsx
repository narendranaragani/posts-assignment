function SearchBar({ searchText, setSearchText }) {
  return (
    <div className="relative w-full mb-6">
      <svg
        className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
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
        className="w-full rounded-lg bg-[#0b1224] border border-gray-700 py-2.5 pl-11 pr-4 text-gray-100 placeholder-gray-400"
      />
    </div>
  );
}

export default SearchBar;
