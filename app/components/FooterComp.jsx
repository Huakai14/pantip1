import React from "react";

const FooterComp = () => {
  return (
    <div className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white bg-purple-900">
      <div className="container p-12 flex justify-between items-center">
        <div className="flex items-center px-3 py-2 rounded">
            <p>Pantip</p>
        </div>
        <>This website is create by Nextjs.</>
        <p >All rights reserved.</p>
      </div>
    </div>
  );
};

export default FooterComp;
