import React   from "react";
import Header  from "./Header";
import Content from "./Content";
import Footer  from './Footer'

const Course = ({ course }) => {

    return(
        <>
            <Header name = {course.name} />
            <Content parts = {course.parts} />
            <Footer  parts = {course.parts} />
        </>
    )

}

export default Course