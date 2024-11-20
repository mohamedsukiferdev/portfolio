import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const baseUrl = "https://ajthameem.github.io/portfolio/";

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);
 
  return (
    <header className="header" id="home">
      <div className="container">
        <div className="header-content">
          <h4
            className="header-subtitle"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Hello, I am
          </h4>
          <h1
            className="text-danger"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            Mohamed Sukifer
          </h1>
          <h6
            className="header-mono"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            Frontend Developer
          </h6>
          <div className="d-flex align-items-center">
            <a 
            // href="/assets/resume/Sukifer_resume.pdf"
              href={`${
                window.location.hostname === "localhost" ? "/" : baseUrl
              }assets/resume/Sukifer_resume.pdf`}
              download={"Sukifer_resume.pdf"}
            >
              <button className="btn btn-primary btn-rounded d-flex align-items-center">
                <span>Resume </span>
                &nbsp;
                <span className="material-symbols-outlined">download</span>
              </button>
            </a>
            <span
              class="material-symbols-outlined icon-color-2 pointer ml-1"
              title="Open resume in new tab"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1yyPw_RU1SNTChEHb0OcILztRBdwFyejQ/view",
                  "__blank"
                );
              }}
            >
              open_in_new
            </span>
          </div>

          <ul className="social-icons pt-3">
            <li className="social-item" title="Linkedin">
              <a
                className="social-link text-light"
                href="#"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/mohamed-sukifer-s/",
                    "__blank"
                  )
                }
              >
                <i className="ti-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li
              className="social-item"
              title="Github"
              onClick={() =>
                window.open("https://github.com/mohamedsukiferdev", "__blank")
              }
            >
              <a className="social-link text-light" href="#">
                <i className="ti-github" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
