import React from "react";
const Works = () => {
  const Open = (path) => {
    const baseUrl = "";
    let pathway = "";

    if (window.location.hostname === "localhost") {
      pathway = path;
    } else {
      pathway = `${baseUrl}/${path}`;
    }

    window.open(pathway, "__blank");
  };

  return (
    <section className="section bg-custom-gray " id="works">
      {/* virtual modal */}

      {/* coffee shop  */}

      <div
        id="P1"
        class="modal fade"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Coffee Shop UI
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body">
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel"
                data-interval="3000"
                // data-ride="false"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="3"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="4"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="5"
                  ></li>
                   <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="6"
                  ></li>
                   <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="7"
                  ></li>
                   <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="8"
                  ></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="d-block w-100"
                      src="/assets/imgs/c1.png"
                      alt="First slide"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <b>Home Page </b>

                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="/assets/imgs/c2.png"
                      alt="Second slide"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <b>Share our journey, passion for coffee, and dedication to crafting the perfect brew.</b>

                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="/assets/imgs/c3.png"
                      alt="Third slide"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <b>Menu Page- card-based layout showcasing diverse coffee blends </b>

                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="/assets/imgs/c4.png"
                      alt="fourth slide"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <b>Product Page </b>

                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="/assets/imgs/c5.png"
                      alt="fifth slide"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <b>Review Page- customer testimonials with star ratings </b>

                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="/assets/imgs/c6.png"
                      alt="sixth slide"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <b> These items add variety and appeal to your coffee shop menu! </b>

                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="/assets/imgs/c7.png"
                      alt="sixth slide"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <b> </b>

                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="/assets/imgs/c8.png"
                      alt="sixth slide"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <b> </b>

                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="/assets/imgs/c9.png"
                      alt="sixth slide"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <b>responsive menu cards</b>

                    </div>
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticket booking ui */}
      <div
        id="P2"
        class="modal fade"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Coffee Shop UI
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body">
              <div
                id="Tb"
                class="carousel slide"
                data-ride="carousel"
                 data-interval="3000"
               
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#Tb"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#Tb"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#Tb"
                    data-slide-to="2"
                  ></li>
                  <li
                    data-target="#Tb"
                    data-slide-to="3"
                  ></li>
                  <li
                    data-target="#Tb"
                    data-slide-to="4"
                  ></li>
                  <li
                    data-target="#Tb"
                    data-slide-to="5"
                  ></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="d-block w-100"
                      src="/assets/imgs/tic1.png"
                      alt="First slide"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <b>Home Page </b>

                    </div>
                  </div>

                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="/assets/imgs/tic2.png"
                      alt="Second slide"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <b>About US </b>

                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="/assets/imgs/tic3.png"
                      alt="Third slide"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <b> Event booking to purchase tickets.</b>

                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="/assets/imgs/tic4.png"
                      alt="fourth slide"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <b> </b>

                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="/assets/imgs/tic5.png"
                      alt="fifth slide"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <b> </b>

                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="/assets/imgs/tic7.png"
                      alt="sixth slide"
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <b>Event booking UI to purchase tickets. </b>

                    </div>
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#Tb"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#Tb"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* login */}
      <div
        id="P3"
        class="modal fade"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Coffee Shop UI
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body">
              <div
                id="form"
                class="carousel slide"
                data-ride="carousel"
                 data-interval="3000"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#form"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#form"
                    data-slide-to="1"
                  ></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="d-block w-100"
                      src="/assets/imgs/login.png"
                      alt="First slide"
                    />
                  </div>

                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="/assets/imgs/login1.png"
                      alt="Second slide"
                    />
                  </div>
                  
                </div>
                <a
                  class="carousel-control-prev"
                  href="#form"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#form"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex align-items-center">
          <h1 className="mb-5">
            <span className="text-danger">W</span>orks
          </h1>
        </div>
        <p className="para-style d-flex align-items-center justify-content-center" data-aos="fade-down" data-aos-duration="2000">
          Here are some samples of my work. 
          {/* <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            view my documentation &nbsp;{" "}
            <svg
              xmlns=""
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#F85C70"
            >
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
            </svg>
          </a> */}
        </p>
        <br />
        <div className="vg-page page-portfolio card" id="works">
          <div className="container">
            {/* Project Grid */}
            <div className="gridder">
              <div
                className="grid-item"
                data-toggle="modal"
                data-target="#P1"
                // onClick={() => setSelectedProject(project)}
              >
                <div
                  className="img-place"
                  data-aos="fade-down"
                  data-aos-duration="2300"
                >
                  <img src="assets/imgs/W1.png" alt="Coffee Shop UI" />
                  <div className="img-caption">
                    <h5 className="text-danger"> Coffee Shop UI</h5>
                    <p class="subtitle">UI Landing Page </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gridder">
              <div
                className="grid-item"
                data-toggle="modal"
                data-target="#P2"
                // onClick={() => setSelectedProject(project)}
              >
                <div
                  className="img-place"
                  data-aos="fade-down"
                  data-aos-duration="2300"
                >
                  <img src="assets/imgs/tic1.png" alt="Coffee Shop UI" />
                  <div className="img-caption">
                    <h5 className="text-danger">Ticket Booking UI</h5>
                    <p class="subtitle">UI landing Page </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="gridder">
              <div
                className="grid-item"
                data-toggle="modal"
                data-target="#P3"
                // onClick={() => setSelectedProject(project)}
              >
                <div
                  className="img-place"
                  data-aos="fade-down"
                  data-aos-duration="2300"
                >
                  <img src="assets/imgs/login.png" alt="Login Form" />
                  <div className="img-caption">
                    <h5 className="text-danger">Login Form</h5>
                    <p class="subtitle">UI landing Page </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
