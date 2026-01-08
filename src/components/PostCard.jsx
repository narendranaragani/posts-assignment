function PostCard({ post }) {
  return (
    <div className="relative rounded-2xl bg-gradient-to-b from-[#0b1220] to-[#050a18] border border-white/10 p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
      <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold rounded-full bg-indigo-500/10 text-indigo-400">
        CASE #{post.id}
      </span>

      <h3 className="text-lg font-semibold text-white mb-3 leading-snug line-clamp-2">
        {post.title}
      </h3>

      <p className="text-sm text-gray-400 leading-relaxed line-clamp-4">
        {post.body}
      </p>
    </div>
  );
}
export default PostCard;
