import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-center">
      <p className="text-[#ffffff]">
        © {currentYear} Dleventh. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
