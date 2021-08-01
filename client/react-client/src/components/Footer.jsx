import React from "react";


function Footer() {
  return (
    <footer className="footer-distributed">
    <div className="footer-left">
    <img className="topImg"
              src="https://lh3.googleusercontent.com/v_La9fN347Xp4mx5YTP09ifrzdGV-0FO3_MZym9Qimvi1MmCdgGz3gPU72i6nIgRkbjmWsBQ82Hi7AIObAOF9bGfl8zHPoxgLn2ihp2aXFl5WggpmOAScplBcHJvzCxwWeSUZLdrT03_Uszc8n1-2UxCgA53tdICsRS6tN9ZXKZjC-nv5vZ6m95q5fG9kWUy67U8vkgJcOIw8gZNcZJDUAqKF-dnqiEu2Xtwp8XTAzrVUG7RhXChgOilRimKp0KirWeherwyet3dSYUzuA_sfPp_RHizT9S7cuRiLken0ztD05JWogtDdhbHd9vJQVa2isw4Sq6MlwZxsGG1yWYO_DJaAI9uXK8bDpMcY6bVLDMBwiadXuvv5R7h49mw9U1Co8Xhez-Iy03xoSvR6l73yxiia_hlSM-d6vm6lfYg0MJ74TH6rVfDlQPcxtQzQ_6naLB30w74l7CD5EfkwEhmO8DkaL3Iz24R5SQYMP_OKdS6lX4r7RwLg0jyBv_PX_6iyMRMWn8vkF7yvq1xoMwmsfClS2FvJzBRFqurwPPBMg7MRmgXNjN9DAH9Pt2rdrTxxp-gAynS6cM3Ukb57oUDprqKIBlo1mv8_pPobY4LYW1Rl5OgnIy4lX8B0MR9ChGruUT3keIMTIDdbNSnQbcDWyEMwWUym6zDSyUZgHRQUnbs0TaFoLJ41gNC3zMmXYHSGgDHhZcHxleQpCYainqe_60=w317-h238-no?authuser=0"
              alt=""
            />
      <p className="footer-links">
        <a href="#" className="link-1">Home</a>
        <a href="#">HOME</a>
        <a href="#">Movies</a>
        <a href="#">ADMIN</a>
        <a href="#">Sign_in</a>
        <a href="#">LOGIN</a>
      </p>
      <p className="footer-company-name"> <span className="ft">RBK@na © 2021 </span></p>
    </div>
    <div className="footer-center">
      <div>
        <i className="fa fa-map-marker" />
        <p><span>RBK Tunisia</span></p>
      </div>
      <div>
        <i className="fa fa-phone" />
        <p>+216 71 586 231</p>
      </div>
      <div>
        <i className="fa fa-envelope" />
        <p><a href="#"></a>Rbk@tunisia</p>
      </div>
    </div>
    <div className="footer-right">
      <p className="footer-company-about">
        <span>About the company</span>
        Do you like to watch movies online and spend a lot of time looking for something interesting? 
        So you can follow RBK @ana.
      </p>
      <div className="footer-icons">
        <a href="#"><i className="fa fa-facebook" /></a>
        <a href="#"><i className="fa fa-twitter" /></a>
        <a href="#"><i className="fa fa-linkedin" /></a>
        <a href="#"><i className="fa fa-github" /></a>
      </div>
    </div>
  </footer>
  );
}

export default Footer;