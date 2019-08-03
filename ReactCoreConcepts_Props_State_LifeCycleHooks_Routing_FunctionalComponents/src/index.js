import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CourseList,{Add} from './listofcourses.component';
import ListOfButtonsComponent from './listofbutton.component';
import LifeCycleHooksComponent from './lifecyclehooks.component';
import PostsComponent from './ajax.component';
import FunctionalComponent from './functional.component';
import { Blog, Comment, Form } from './fragment.component';
import { RouterApp } from './routing.component';

// ReactDOM.render(<CourseList />, document.getElementById('root'));
// ReactDOM.render(<ListOfButtonsComponent />, document.getElementById('root'));
ReactDOM.render(<LifeCycleHooksComponent />, document.getElementById('root'));
// ReactDOM.render(<PostsComponent />, document.getElementById('root'));
// ReactDOM.render(<FunctionalComponent msg="No State here !" />, document.getElementById('root'));

// var BlogWithCommentsOnly = <Blog>
//                                                         <Comment />
//                                                     </Blog>


// var BlogWithFormOnly = <Blog>
//                                                         <Form />
//                                                     </Blog>

// var BlogWithFormAndComment = <Blog>
//                                                         <Comment/>
//                                                         <Form />
//                                                     </Blog>
// ReactDOM.render(BlogWithFormAndComment, document.getElementById('root'));

// ReactDOM.render(<RouterApp />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
