function PostCard({ post, isFavourite, onToggleFavorite }) {
  return (
    <div className="relative rounded-2xl bg-gradient-to-b from-[#0b1220] to-[#050a18] border border-white/10 p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="flex flex-row justify-between items-end">
        <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold rounded-full bg-indigo-500/10 text-indigo-400">
          CASE #{post.id}
        </span>
        <div
          onClick={() => onToggleFavorite(post.id)}
          className={`cursor-pointer text-xl mb-4 ${
            isFavourite ? "text-yellow-400" : "text-gray-500"
          }`}
        >
          ★
        </div>
      </div>

      <h3 className="text-lg font-semibold text-white mb-3 leading-snug line-clamp-2">
        {post.title}
      </h3>

      <p className="text-sm text-gray-400 leading-relaxed line-clamp-4">
        {post.body}
      </p>
      <div className="bg-white w-20 text-center rounded-lg mt-3">
        <span className="font-semibold">Author {post.userId}</span>
      </div>
    </div>
  );
}
export default PostCard;
