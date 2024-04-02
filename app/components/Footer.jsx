import React from "react";

const Footer = () => {
  return (
    <Footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white bg-[#121212]">
      <div className="container p-12 flex justify-between items-center">
        <div className="flex items-center px-3 py-2 rounded text-slate-600">
            <p>Pantip</p>
        </div>
        <p className="text-slate-600">This website is create by Nextjs.</p>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </Footer>
  );
};

export default Footer;
