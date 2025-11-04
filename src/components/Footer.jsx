import React from "react";

const Footer = () => {
  return (
    <footer
      className="relative bg-[#385399] text-white overflow-hidden mx-auto transform transition-all duration-1000 ease-out translate-y-12 opacity-0 animate-footerSlideUp mb-5 max-w-[1480px]
      w-[95%] sm:w-[94%] md:w-[92%] lg:w-full" // 👈 adds margin on smaller screens
      style={{
        padding: "35px 50px",
        borderTopLeftRadius: "80px",
        borderTopRightRadius: "20px",
        borderBottomRightRadius: "80px",
        borderBottomLeftRadius: "20px",
        display: "flex",
        flexDirection: "column",
        marginBottom: "70px",
      }}
    >
      {/* 🔹 Contact Info Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-left items-start mb-5 w-full pl-2 sm:pl-6">
        {/* Phone */}
        <div className="flex items-center">
          <svg
            className="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z" />
          </svg>
          <p className="text-sm sm:text-base md:text-lg">(555) 123-4567</p>
        </div>

        {/* Email */}
        <div className="flex items-center break-words">
          <svg
            className="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Z" />
          </svg>
          <p className="text-sm sm:text-base md:text-lg break-all sm:break-normal">
            clerisymedicalpc@gmail.com
          </p>
        </div>

        {/* Address */}
        <div className="flex items-center">
          <svg
            className="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
          <p className="text-sm sm:text-base md:text-lg">
            123 Clerisy Ave, Medical City MC 12345
          </p>
        </div>
      </div>

      {/* 🔹 Single Border */}
      <div className="w-full border-t border-white/20 mb-5"></div>

      {/* 🔹 Main Footer Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start w-full pl-2 sm:pl-6">
        {/* Logo + Info */}
        <div className="text-start flex flex-col items-start">
          <div className="w-31 sm:w-36 mb-3">
            <img
              src="/logo.png"
              alt="Clerisy Medical Logo"
              className="w-full h-auto  rounded"
              loading="lazy"
            />
          </div>

          <p className="text-white/90 text-sm sm:text-base md:text-lg mb-3 leading-snug">
            Providing quality healthcare <br className="hidden sm:block" /> for
            over 20 years.
          </p>

          <div className="flex space-x-4 mb-3">
            {["facebook", "twitter", "instagram", "linkedin"].map((name, i) => (
              <a
                key={i}
                href="#"
                className="hover:text-white/80 transition transform hover:scale-110"
                aria-label={name}
              >
                <i className={`fab fa-${name} text-lg`} />
              </a>
            ))}
          </div>

          <div className="space-y-1 text-start">
            <a href="#" className="block text-sm sm:text-base hover:text-white/80">
              Privacy Policy
            </a>
            <a href="#" className="block text-sm sm:text-base hover:text-white/80">
              Terms & Conditions
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-start flex flex-col items-start">
          <h5 className="font-semibold text-lg mb-3">Quick Links</h5>
          <ul className="space-y-2">
            {["About Us", "Our Services", "Appointments", "Contact"].map(
              (link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm sm:text-base hover:text-white/80 transition duration-200 hover:translate-x-1 block"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Services */}
        <div className="text-start flex flex-col items-start">
          <h5 className="font-semibold text-lg mb-3">Services</h5>
          <ul className="space-y-2">
            {[
              "Primary Care",
              "Specialty Care",
              "Emergency Care",
              "Diagnostic",
            ].map((service) => (
              <li key={service}>
                <a
                  href="#"
                  className="text-sm sm:text-base hover:text-white/80 transition duration-200 hover:translate-x-1 block"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 🔹 Bottom Border */}
      <div className="w-full border-t border-white/20 mt-6"></div>

      {/* Copyright */}
    <div className="text-center mt-4">
  <p className="text-white/80 text-sm sm:text-base">
    © {new Date().getFullYear()}{" "}
    <a
      href="https://k7codelabs.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-white transition duration-300"
    >
      K7CodeLabs
    </a>
    . All rights reserved.
  </p>
</div>


      <style jsx>{`
        @keyframes footerSlideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-footerSlideUp {
          animation: footerSlideUp 1s ease-out forwards;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
