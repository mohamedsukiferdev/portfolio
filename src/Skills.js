import React from "react";

const Skills = () => {
    return (
        <section className="section" id="expertise">
            <div className="container">
                <h2 className="mb-5">
                    <span className="text-danger">S</span>kills
                </h2>
                <div className="row para-style-2">
                    <div className="col-lg-6 col-sm-12 col-md-6">
                        <div className="card h-50r">
                            <div className="card-header">
                                <div className="pull-left">
                                    <h4 className="mt-2">Proficiency</h4>
                                    <span className="line" />
                                </div>
                            </div>

                            <div className="card-body pt-4 pl-5 pr-5 pb-2" >
                                <h8 className="title text-danger"> Programming Languages </h8>
                                <h6 class="h6" data-aos="fade-right" data-aos-duration="1500">JavaScript</h6>
                                <div className="progress mb-3" data-aos="fade-right" data-aos-duration="1500">
                                    <div
                                        className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                        role="progressbar"
                                        style={{ width: "70%" }}
                                        aria-valuenow={25}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>

                                <hr />
                                <br />

                                <h8 className="title text-danger"> Back-End</h8>

                                <h6 class="h6" data-aos="fade-right" data-aos-duration="1700">Node JS (Learning) </h6>
                                
                                <div className="progress mb-3" data-aos="fade-right" data-aos-duration="1700">
                                    <div
                                        className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                        role="progressbar"
                                        style={{ width: "50%" }}
                                        aria-valuenow={75}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>

                                <hr />
                                <br />

                                <h8 className="title text-danger"> Code Management </h8>

                                <h6 class="h6" data-aos="fade-right" data-aos-duration="2000">Git & Github</h6>
                                <div className="progress mb-3" data-aos="fade-right" data-aos-duration="2000">
                                    <div
                                        className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                        role="progressbar"
                                        style={{ width: "70%" }}
                                        aria-valuenow={75}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <br />

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-6">
                        <div className="card h-50r">

                            <div className="card-body pb-4 pt-5rem pl-5 pr-5" >

                                 <h8 className="title text-danger"> Front-End </h8>

                                <h6 class="h6" data-aos="fade-right" data-aos-duration="2000" >HTML5</h6>
                                <div className="progress mb-3" data-aos="fade-right" data-aos-duration="2000">
                                    <div
                                        className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                        role="progressbar"
                                        style={{ width: "80%" }}
                                        aria-valuenow={25}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <br />
                                <h6 class="h6" data-aos="fade-right" data-aos-duration="2300" >CSS3</h6>
                                <div className="progress mb-3" data-aos="fade-right" data-aos-duration="2300">
                                    <div
                                        className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                        role="progressbar"
                                        style={{ width: "70%" }}
                                        aria-valuenow={25}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <br />
                                <h6 class="h6" data-aos="fade-right" data-aos-duration="2600">Bootstrap CSS</h6>
                                <div className="progress mb-3" data-aos="fade-right" data-aos-duration="2600">
                                    <div
                                        className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                        role="progressbar"
                                        style={{ width: "70%" }}
                                        aria-valuenow={75}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <br />
                                <h6 class="h6" data-aos="fade-right" data-aos-duration="2900">JavaScript DOM </h6>
                                <div className="progress mb-3" data-aos="fade-right" data-aos-duration="2900">
                                    <div
                                        className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                        role="progressbar"
                                        style={{ width: "65%" }}
                                        aria-valuenow={75}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <br />
                                <h6 class="h6" data-aos="fade-right" data-aos-duration="3000">React JS (Learning)</h6>
                                <div className="progress mb-3" data-aos="fade-right" data-aos-duration="3000">
                                    <div
                                        className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                        role="progressbar"
                                        style={{ width: "40%" }}
                                        aria-valuenow={75}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Skills;