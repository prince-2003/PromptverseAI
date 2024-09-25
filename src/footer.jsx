function Footer() {
    const navigationItems = [
      "Home",
      "About",
      "Contact",
      "Services",
      "Blog",
      "Gallery",
      "Music",
      "Features",
      "Trending",
    ];
  
    const contactItems = [
      "Email: promptverser@gmail.com",
      "Phone: +91 1234567890",
      "Address: 123, xyz street, abc city",
    ];
  
    return (
      <footer className="w-full mt-10 px-10 md:px-20 flex flex-col justify-between items-center bg-[#0E0E0E] pt-20">
        <div className="w-full flex flex-col md:flex-row gap-10 justify-between">

          <nav className="text-gray-400 text-[1.2rem]" aria-label="Footer Navigation">
            <p className="font-semibold">Navigation</p>
            <div className="text-white my-10 grid grid-cols-2 gap-x-20 gap-y-4 text-[1rem]">
              {navigationItems.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
          </nav>

          <address className="text-gray-400 text-[1.2rem] not-italic">
            <p className="font-semibold">Contact Us</p>
            <div className="text-white my-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-[1rem]">
              {contactItems.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
          </address>
        </div>

        <div className="text-gray-400 text-[1rem] mt-10">
          © 2024 — Promptverse AI
        </div>
      </footer>
    );
  }
  
  export default Footer;
  