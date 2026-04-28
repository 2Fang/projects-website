function Header({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <h1>Project Portfolio - Shayan Sadjady</h1>
      <button
        className="theme-toggle"
        type="button"
        onClick={onToggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        {theme === "dark" ? "Light" : "Dark"}
      </button>
    </header>
  );
}

export default Header;
