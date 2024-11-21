import React, { useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import AOS from "aos";
import 'aos/dist/aos.css';


const Contact = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    const form = useRef()

    const sendEmail = (e) => {

        console.log(e, "--e")
        console.log(form.current, "form.current")

        e.preventDefault();

        emailjs
            .sendForm('service_bmytv1j', 'template_1x06udx', form.current, {
                publicKey: 'gO8XH-K1ggqeLtpkK',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset()
                    Swal.fire({
                        icon: "success",
                        text: "Sent successfully!",
                        confirmButtonColor: "#F85C70"
                    })
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    }

    return (
        <div class="section contact" id="contact">
            <div class="container">
                
                <div className="d-flex align-items-center">
                    <h1 className="mb-5">
                        <span className="text-danger">C</span>ontact
                    </h1>
                </div>
                <div class="row">
                    <div class="col-lg-8 col-md-12 col-sm-12" >
                        <div class="contact-form-card">
                            <h4 class="contact-title">Send a message</h4>
                            <form ref={form} onSubmit={sendEmail}>
                                <div class="form-group">
                                    <input class="form-control" name="user_name" type="text" placeholder="Name *" required />
                                </div>
                                <div class="form-group">
                                    <input class="form-control" name="user_email" type="email" placeholder="Email *" required />
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control" id="" placeholder=" Message *" name="message" rows="7" required></textarea>
                                </div>
                                <div class="form-group ">
                                    <button type="submit" class="form-control btn btn-primary" >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <div className="col-lg-3 col-md-3"></div> */}
                    <div class="col-lg-4 col-sm-12 col-md-12">
                        <div class="contact-info-card ">
                            <h4 class="contact-title">Get in touch</h4>
                            <div class="row mb-2">
                                <div class="mr-1">
                                    <i class="ti-mobile icon-md"></i>
                                </div>
                                &nbsp;
                                <h6 class="d-inline mb-0">Phone : <span class="text-muted">(+91) 9344855011 </span></h6>
                            </div>
                            <br />
                            <div class="row mb-2">
                                <div class="mr-1">
                                    <i class="ti-map-alt icon-md"></i>
                                </div>
                                &nbsp;
                                <h6 class="d-inline mb-0">Address : <span class="text-muted">Tamilnadu, India</span></h6>
                            </div>
                            <br />
                            <div class="row mb-2">
                                <div class="mr-1">
                                    <i class="ti-envelope icon-md"></i>
                                </div>
                                &nbsp;
                                <h6 class="d-inline mb-0">Email : <span class="text-muted">mohamedsukifer@gmail.com</span></h6>
                            </div>
                            <ul class="social-icons pt-4">
                                <li class="social-item"><a class="social-link text-dark" href="mailto:>mohamedsukifer@gmail.com"><i class="ti-google" aria-hidden="true"></i></a></li>
                                <li class="social-item"
                                    onClick={() => window.open("https://www.linkedin.com/in/mohamed-sukifer-s/", "__blank")}
                                ><a class="social-link text-dark" href="#"><i class="ti-linkedin" aria-hidden="true"></i></a>
                                </li>
                                <li class="social-item"
                                    onClick={() => window.open("https://github.com/mohamedsukiferdev", "__blank")}
                                ><a class="social-link text-dark" href="#"><i class="ti-github" aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="col-lg-3 col-md-3"></div> */}
                </div>

            </div >
        </div >
    )
}

export default Contact;