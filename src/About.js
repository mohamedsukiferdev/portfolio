import React, { useState } from "react";
const baseUrl = "https://ajthameem.github.io/portfolio/";

const About = () => {
  let [tickOn, setTickOn] = useState("");

  const Copy = (value) => {
    navigator.clipboard.writeText(value);
    setTickOn(value);

    setTimeout(() => {
      setTickOn("");
    }, 1500);
  };

  return (
    <div className="container-fluid" id="about">
      <div className="row about-section">
        <div
          className="col-lg-4 about-card para-style"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <h3 className="font-weight-light">Who am I ?</h3>
          <span className="line mb-5" />
          <h5 className="mb-3">A Software Engineer Located In India</h5>
          <p className="mt-20">
            Innovative Front-End Developer creating responsive, user-friendly
            web applications. Passionate about leveraging modern JavaScript
            frameworks and eager to expand full-stack expertise.
          </p>
          <a
            href={`${
              window.location.hostname === "localhost" ? "/" : baseUrl
            }assets/resume/Sukifer_resume.pdf`}
            download={"Sukifer_resume.pdf"}
          >
            <button className="btn btn-outline-danger">
              <i className="icon-down-circled2 " />
              Download My CV
            </button>
          </a>
        </div>
        <div
          className="col-lg-4 about-card para-style"
          data-aos="fade-down"
          data-aos-duration="2500"
        >
          <h3 className="font-weight-light">Personal Info</h3>
          <span className="line mb-5" />
          <ul className="mt40 info list-unstyled">
            <li>
              <span>Birth date</span> : 05/12/2002
            </li>
            <li>
              <span>Email</span> :{" "}
              <a href="mailto:mohamedsukifer@gmail.com">
                mohamedsukifer@gmail.com
              </a>{" "}
              &nbsp;
              {tickOn === "mohamedsukifer@gmail.com" ? (
                <span className="material-symbols-outlined pointer">check</span>
              ) : (
                <span
                  className="material-symbols-outlined pointer"
                  onClick={() => Copy("mohamedsukifer@gmail.com")}
                >
                  content_copy
                </span>
              )}
            </li>
            <li>
              <span>Phone</span> :{" "}
              <a href="tel:+919344855011">
                {" "}
                <em> (+91) 9344855011</em>{" "}
              </a>{" "}
              &nbsp;
              {tickOn === "+919344855011" ? (
                <span class="material-symbols-outlined pointer">check</span>
              ) : (
                <span
                  class="material-symbols-outlined pointer"
                  onClick={() => Copy("+919344855011")}
                >
                  content_copy
                </span>
              )}
            </li>
            <li>
              <span>Address</span> : Tenkasi, TamilNadu, India - 627415
            </li>
            <li>
              <span>Languages</span> : Tamil, English
            </li>
          </ul>
          <ul className="social-icons pt-3">
            <li
              className="social-item"
              title="LinkedIn"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/mohamed-sukifer-s/",
                  "__blank"
                )
              }
            >
              <a className="social-link" href="#">
                <i className="ti-linkedin" aria-hidden="true" />
              </a>
            </li>
            <li
              className="social-item pt-1"
              title="Github"
              onClick={() =>
                window.open("https://github.com/mohamedsukiferdev", "__blank")
              }
            >
              <a className="social-link" href="#">
                <i className="ti-github" aria-hidden="true" />
              </a>
            </li>
            <li
              className="social-item"
              title="Work samples"
            
            >
              <a className="social-link" href="#works">
                <i className="ti-link" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
        <div
          className="col-lg-4 about-card para-style"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          <h3 className="font-weight-light">Expertise in</h3>
          <span className="line mb-5" />
          <div className="row">
            <div className="col-1 text-danger">
              <span class="material-symbols-outlined icon-lg">
                desktop_windows
              </span>
            </div>
            <div className="col-10 mr-3">
              <h6 className="pb-0">Front-End Development</h6>
              <hr />
            </div>
          </div>

          <div className="row">
            <div className="col-1 text-danger ">
              <span class="material-symbols-outlined">responsive_layout</span>
            </div>
            <div className="col-10 mr-3">
              <h6 className="pb-0">Responsive Design</h6>
              <hr />
            </div>
          </div>

          <div className="row">
            <div className="col-1 text-danger ">
              <span class="material-symbols-outlined icon-lg">groups</span>
            </div>
            <div className="col-10 mr-3">
              <h6 className="pb-0">Team Collaboration</h6>
              <hr />
            </div>
          </div>

          <div className="row">
            <div className="col-1 text-danger ">
              <span class="material-symbols-outlined icon-lg">
                record_voice_over
              </span>
            </div>
            <div className="col-10 mr-3">
              <h6 className="pb-0">Effective Communication</h6>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
