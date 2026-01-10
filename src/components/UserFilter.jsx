function UserFilter({ selectedUser, setSelectedUser }) {
  return (
    <div className="w-full flex justify-end">
      <select
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
        className="
         mt-5
          px-5 py-3 mb-6
          rounded-xl
          bg-[var(--bg-primary)]
          border border-[var(--border)]
          text-[var(--text-primary)]
          text-sm
          cursor-pointer
          font-inherit
          outline-none
          transition
          hover:border-[var(--accent)]
          focus:border-[var(--accent)]
          focus:ring-4
          focus:ring-[var(--accent-glow)]
        "
      >
        <option value="">All Authors</option>
        {[...Array(10)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            Author {i + 1}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UserFilter;
