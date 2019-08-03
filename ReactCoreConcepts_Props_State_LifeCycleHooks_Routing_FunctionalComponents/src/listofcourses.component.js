import React from 'react';
import CourseComponent from './course.component';// name of file

export default class ListOfCoursesComponent extends React.Component {
    constructor() {
        super();
        this.courses = [{ name: "React", duration: "3 Days" },
        { name: "Angular", duration: "5 Days" },
        { name: "C#", duration: "6 Days" },
        { name: "Redux", duration: "3 Days" },
        { name: "Node", duration: "3 Days" }];
    }
    render() {

        var coursesToBeCreated = this.courses.map(c =>
            <CourseComponent coursedetails={c} />);

        return <div className="container">
                    <div className="row">
                        {coursesToBeCreated}
                    </div>
                </div>
    }
}

export function Add(x, y) {
    return x + y;
}

export const PI = 3.14;