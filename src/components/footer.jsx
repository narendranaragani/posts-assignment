function Footer() {
  return (
    <footer
      className="
        w-full
        bg-[var(--glass-bg)]
        border-t border-[var(--glass-border)]
        backdrop-blur-xl
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">

        {/* Copyright */}
        <p className="text-sm text-[var(--text-secondary)]">
          © 2026{" "}
          <span className="font-semibold text-[var(--text-primary)]">
            MindSlate
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
