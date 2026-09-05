const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kenny Nguyen. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#projects" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">Projects</a>
          <a href="#about" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">About</a>
          <a href="#contact" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
