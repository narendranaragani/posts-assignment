function PostCard({ post, isFavourite, onToggleFavorite }) {
  return (
    <div className="relative h-full overflow-hidden flex flex-col gap-5 p-8 rounded-[var(--radius-md)] bg-[var(--bg-secondary)] border border-[var(--border)] shadow-[var(--card-shadow)] transition-all duration-300 ease-out hover:-translate-y-1"
    >
      <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[var(--hero-gradient)]"/>

      <div className="flex justify-between items-center">
        <span className="text-[0.7rem] font-bold px-3 py-1 rounded-md bg-[var(--accent)]/10 text-[var(--accent)] font-[var(--font-heading)]">
          CASE #{post.id}
        </span>

        <button onClick={() => onToggleFavorite(post.id)}className={`text-xl cursor-pointer transition-all duration-200 hover:scale-125 hover:rotate-12
            ${
              isFavourite
                ? "text-yellow-400 opacity-100"
                : "text-[var(--text-secondary)] opacity-60 hover:text-yellow-400"
            }
          `}
        >
          ★
        </button>
      </div>

      <h3 className="text-[1.35rem] font-bold leading-snug text-[var(--text-primary)] font-[var(--font-heading)] line-clamp-2">
        {post.title}
      </h3>
      <p className="text-base leading-relaxed text-[var(--text-secondary)] flex-1 line-clamp-3">
        {post.body}
      </p>
      <div className="pt-5 mt-auto border-t border-[var(--glass-border)] flex justify-between items-center">
        <div className="flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)]">
          <div className="w-8 h-8 rounded-full bg-[var(--border)] border-2 border-[var(--bg-secondary)] flex items-center justify-center text-[0.7rem] text-[var(--text-secondary)]">
            U{post.userId}
          </div>
          Author {post.userId}
        </div>
      </div>
    </div>
  );
}

export default PostCard;
