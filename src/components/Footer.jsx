export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <span>© {year} Leonardo M. F. Santos</span>
      <span className="footer__built">Built with React · Vite</span>
    </footer>
  );
}
