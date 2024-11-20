import React from "react";
import Header from "./Header";
import Education from "./Education";
import About from "./About";
import Skills from "./Skills";
import Nav from "./Nav";
import Works from "./Works";
import Contact from "./Contact";

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <>
                <Header />
                <Nav />
                <About />
                <Skills />
                <Education />
                <Works />
                <Contact />
            </>

        )
    }
}