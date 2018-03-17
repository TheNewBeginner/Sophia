import React from "react";
import {Link} from "react-router-dom";
import "../css/Homepage.css";
import "semantic-ui-css/semantic.min.css"
// import '@fortawesome/fontawesome';
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid/Grid";
// import  FontAwesome  from 'react-fontawesome';


const HomePage = () => (
<div className="img_wrap overlay">
<div className="ui secondary pointing menu">
  <a className=" header" href="">
    SOPHIA 1.0
  </a>
  <div className="right menu">
        <a className="ui item active">
      Sign up
    </a>
    <Link to="/login" className="ui item header">Login</Link>    
  </div>
</div>
<Grid>
    <div className="ui search">
        <div className="ui icon input">
            <input className="prompt" placeholder="Search courses..." type="text"/>
            <i className="search icon"></i>
            <div className="results"></div>
        </div>
    </div>
</Grid>
<div className="container">
    <div className="row">
        <div className="col-xs-12">
                <a href="/BookHub"><div className="col-xs-4 rounded-circle"><i style={{color: " #027607"}} className="fa fa-book Center-Container Absolute-center fa-5x"></i> </div></a>
               <a href=""> <div className="col-xs-4 rounded-circle"><i style={{color: "blue"}} className="fa fa-file-alt Center-Container Absolute-center fa-5x"></i></div></a>
              <a href="">  <div className="col-xs-4 rounded-circle"><i style={{color: "#ca1603"}} className="fa fa-file-pdf  Center-Container Absolute-center fa-5x"></i></div></a>
            </div>
            </div>
        </div>
        <div className="container">
    <div className="row">
        <div className="col-xs-12">
               <p className="power_motto"><span style={{color: " #027607"}}>READ</span>.<span style={{color: "blue"}}>SOLVE</span>.<span  style={{color: "#ca1603"}}>RESEARCH</span></p>
            </div>
            </div>
        </div>
    </div>
);
export default HomePage;