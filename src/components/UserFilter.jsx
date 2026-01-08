function UserFilter({ selectedUser, setSelectedUser }) {
  return (
    <div className="w-full flex justify-end">
      <select
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
        className="border border-gray-300 rounded-xl px-4 py-2 mb-6
               bg-white shadow-sm
               focus:outline-none focus:ring-2 focus:ring-blue-500
               hover:border-gray-400 transition"
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
