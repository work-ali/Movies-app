import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <div className="page-bg">
        <div className="content" style={{ color: 'white' }}>
          <div className="item-row-wrap">
            <div className="container">
              <div className="items-box">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
