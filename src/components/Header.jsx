import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <header
      className="
        sticky top-0 z-50
        bg-[var(--bg-secondary)]
        border-b border-[var(--border)]
        backdrop-blur-xl
      "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div
            className="
              w-10 h-10 rounded-xl
              bg-[var(--hero-gradient)]
              flex items-center justify-center
              text-gray font-bold text-lg
              shadow-lg
            "
          >
            M
          </div>

          <div className="leading-tight">
            <h1
              className="
                text-lg font-semibold
                text-[var(--text-primary)]
                font-[var(--font-heading)]
              "
            >
              MindSlate
            </h1>
            <p
              className="
                text-xs tracking-widest
                text-[var(--text-secondary)]
              "
            >
              PREMIUM INSIGHTS
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div
            className="
              w-10 h-10
              flex items-center justify-center
              rounded-full
              hover:bg-[var(--bg-primary)]
              transition
            "
          >
            <ThemeToggle />
          </div>
          <button
            className="
              px-6 py-2
              rounded-full
              bg-[var(--accent)]
              text-white
              font-semibold
              transition
              hover:brightness-110
              shadow-md
            "
          >
            Join Now
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
