export default function Footer() {
  return (
    <footer className="mt-12 pt-6 pb-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Swan Htat Aung. All rights reserved,
          probably.
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/aungsh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/aungsh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
