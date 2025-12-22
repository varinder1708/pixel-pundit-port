const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-muted-foreground">
              {/* © 2024 Full Stack Developer Portfolio. Built with React & Node.js */}
            </p>
          </div>
          <div className="flex space-x-6">
            {/* <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a> */}
            <a
              href="https://www.linkedin.com/in/varinder-s-b503b55/"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            {/* <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Twitter
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;