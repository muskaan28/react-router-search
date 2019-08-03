import React from 'react';
import {Route,BrowserRouter,Link} from 'react-router-dom';

var HomePage =() => <div className="jumbotron"> Home Page !</div>
var UsersPage =() => <div className="jumbotron"> Users Page !</div>
var UserPage =(props) =>{
    var {match:{params}} = props;
           return    <div className="jumbotron"> 
           Specific User Page  for {params.userid}</div>
} 
var MainLayout =() =>(
    <div className="container">
            <nav>
                {/* <a> tag Refreshes the page,use Link instead !! */}
                {/* <a href="/">Home</a>
                <a href="/users">Users</a> */}
                {/* <Link to="/">Home </Link>
                <Link to="/users">Users  </Link>
                <Link to="/users/10"> A Specific User  </Link> */}

<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link className="navbar-brand" to="/">Routing Basics</Link>
    </div>
    <ul className="nav navbar-nav">
      <li><Link to="/">Home </Link></li>
      <li><Link to="/users">Users  </Link></li>
      <li> <Link to="/users/10"> A Specific User  </Link> </li>   
    </ul>
  </div>
</nav>
            </nav>
            <Route path="/" exact component={HomePage} />            
            <Route path="/users" exact component={UsersPage} />
            <Route path="/users/:userid" exact component={UserPage} />

    </div>
);

export var RouterApp = ()=>(
    <BrowserRouter>
            <MainLayout />
    </BrowserRouter>
)
