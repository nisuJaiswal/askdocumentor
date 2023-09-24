import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banmain">
      <div className="wrapper">
        <div className="container">
          <div className="head">
            <div className="sub-head">
              <a
                href="#"
                className="bg-transparent text-slate-100 relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
              >
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-orange-600 group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-orange-600 group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-orange-600 group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-orange-600 group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-orange-900 opacity-0 group-hover:opacity-100"></span>
                <span
                  className="docupload relative transition-colors duration-300 delay-200 group-hover:text-white ease"
                  data-modal-toggle="authentication-modal"
                >
                  Upload Your Document
                </span>
              </a>
              {/*<p><a role="button" className='btn' data-modal-toggle="authentication-modal">Upload Your Document</a></p>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
