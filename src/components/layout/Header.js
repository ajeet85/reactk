import React , { useEffect } from 'react';
import {Link,Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import {logout} from '../../store/actions/auth';
import PropTypes from 'prop-types';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header id="header" className="nav-down">
      <div className="corona-top">
        <div className="container">
          <div className="corona-text">
            <div className="title">Pay your college fees in 6 easy installments at 0% interest</div>
          </div>
          <a href="student-education-loan.html" className="gtm-lead-click">Learn More 
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="220.682px" height="220.682px" viewBox="0 0 220.682 220.682"  xmlSpace="preserve"><g>
            <polygon points="92.695,38.924 164.113,110.341 92.695,181.758 120.979,210.043 220.682,110.341 120.979,10.639    "></polygon>
            <polygon points="28.284,210.043 127.986,110.341 28.284,10.639 0,38.924 71.417,110.341 0,181.758     "></polygon></g></svg>
          </a>
          <div className="close-btn">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 384 384"  xmlSpace="preserve"><g><g>
            <path d="M192,0C86,0,0,86,0,192s86,192,192,192s192-86,192-192S298,0,192,0z M192,341.3c-82.5,0-149.3-66.8-149.3-149.3
                  S109.5,42.7,192,42.7S341.3,109.6,341.3,192S274.5,341.3,192,341.3z"></path></g></g><g><g>
            <polygon points="267.4,146.7 237.3,116.6 192,161.8 146.7,116.6 116.6,146.7 161.8,192 116.6,237.3 146.7,267.4 192,222.2 
                    237.3,267.4 267.4,237.3 222.2,192"></polygon></g></g></svg>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="logo1">
          <a href=""><img src="cp-assets/images/top.png" alt="CollegePadho" /></a>
        </div>
        <div className="search open-search"><svg version="1.1" id="Capa_1" width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30.239 30.239" className="searchIcon" fill="#666" xmlSpace="preserve"><g>
          <path d="M20.194,3.46c-4.613-4.613-12.121-4.613-16.734,0c-4.612,4.614-4.612,12.121,0,16.735c4.108,4.107,10.506,4.547,15.116,1.34c0.097,0.459,0.319,0.897,0.676,1.254l6.718,6.718c0.979,0.977,2.561,0.977,3.535,0c0.978-0.978,0.978-2.56,0-3.535l-6.718-6.72c-0.355-0.354-0.794-0.577-1.253-0.674C24.743,13.967,24.303,7.57,20.194,3.46zM18.073,18.074c-3.444,3.444-9.049,3.444-12.492,0c-3.442-3.444-3.442-9.048,0-12.492c3.443-3.443,9.048-3.443,12.492,0C21.517,9.026,21.517,14.63,18.073,18.074z"/></g></svg>
        </div>
        <div className="user">
          <div className="userIcon">
          <svg version="1.1" id="Capa_u" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 53 53" xmlSpace="preserve">
            <path style={{fill:'#E7ECED'}} d="M18.613,41.552l-7.907,4.313c-0.464,0.253-0.881,0.564-1.269,0.903C14.047,50.655,19.998,53,26.5,53c6.454,0,12.367-2.31,16.964-6.144c-0.424-0.358-0.884-0.68-1.394-0.934l-8.467-4.233c-1.094-0.547-1.785-1.665-1.785-2.888v-3.322c0.238-0.271,0.51-0.619,0.801-1.03c1.154-1.63,2.027-3.423,2.632-5.304c1.086-0.335,1.886-1.338,1.886-2.53v-3.546c0-0.78-0.347-1.477-0.886-1.965v-5.126c0,0,1.053-7.977-9.75-7.977s-9.75,7.977-9.75,7.977v5.126c-0.54,0.488-0.886,1.185-0.886,1.965v3.546c0,0.934,0.491,1.756,1.226,2.231c0.886,3857,3.206,6.633,3.206,6.633v3.24C20.296,39.899,19.65,40.986,18.613,41.552z"/><g>
            <path style={{fill:'#556080'}} d="M26.953,0.004C12.32-0.246,0.254,11.414,0.004,26.047C-0.138,34.344,3.56,41.801,9.448,46.76
                            c0.385-0.336,0.798-0.644,1.257-0.894l7.907-4.313c1.037-0.566,1.683-1.653,1.683-2.835v-3.24c0,0-2.321-2.776-3.206-6.633c-0.734-0.475-1.226-1.296-1.226-2.231v-3.546c0-0.78,0.347-1.477,0.886-1.965v-5.126c0,0-1.053-7.977,9.75-7.977s9.75,7.977,9.75,7.977v5.126c0.54,0.488,0.886,1.185,0.886,1.965v3.546c0,1.192-0.8,2.195-1.886,2.53c-0.605,1.881-1.478,3.674-2.632,5.304c-0.291,0.411-0.563,0.759-0.801,1.03V38.8c0,1.223,0.691,2.342,1.785,2.888l8.467,4.233c0.508,0.254,0.967,0.575,1.39,0.932c5.71-4.762,9.399-11.882,9.536-19.9C53.246,12.32,41.587,0.254,26.953,0.004z"/></g></svg>
          </div>
          { /*
            <ul>
                <li id="login"><a href="javascript:void(0)" onClick={get_login_modal} id="gtm_loginClick">Login</a></li>
                <li id="signup"><a href="javascript:void(0)" onClick={get_login_modal} id="gtm_signupClick">Signup</a></li>
            </ul>
          */}
        </div>
        
        <Navbar />
        <div className="searchContent">
          { /* SEARCH CONTENT start */ }
          <div className="dataContent container">
            <h4>Search Colleges/Institutes &amp; Exams</h4>
            <div className="close"><svg version="1.1" id="close" width="24px" height="24px" className="closeIcon" fill="#d03f2d" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 174.239 174.239" xmlSpace="preserve"><g>
              <path d="M87.12,0C39.082,0,0,39.082,0,87.12s39.082,87.12,87.12,87.12s87.12-39.082,87.12-87.12S135.157,0,87.12,0z M87.12,159.305c-39.802,0-72.185-32.383-72.185-72.185S47.318,14.935,87.12,14.935s72.185,32.383,72.185,72.185S126.921,159.305,87.12,159.305z"/>
              <path d="M120.83,53.414c-2.917-2.917-7.647-2.917-10.559,0L87.12,76.568L63.969,53.414c-2.917-2.917-7.642-2.917-10.559,0s-2.917,7.642,0,10.559l23.151,23.153L53.409,110.28c-2.917,2.917-2.917,7.642,0,10.559c1.458,1.458,3.369,2.188,5.28,2.188c1.911,0,3.824-0.729,5.28-2.188L87.12,97.686l23.151,23.153c1.458,1.458,3.369,2.188,5.28,2.188c1.911,0,3.821-0.729,5.28-2.188c2.917-2.917,2.917-7.642,0-10.559L97.679,87.127l23.151-23.153C123.747,61.057,123.747,56.331,120.83,53.414z"/></g></svg>
            </div>
            <ul className="form">
              <li>
                <input type="search" id="site_search" className="form-control textBox  site_search" placeholder="Enter what you are looking for: College, Specialization, Course or Exam" />
                <button className="search">
                <svg version="1.1" id="search" width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30.239 30.239" className="searchIcon" fill="#666" xmlSpace="preserve"><g>
                <path d="M20.194,3.46c-4.613-4.613-12.121-4.613-16.734,0c-4.612,4.614-4.612,12.121,0,16.735c4.108,4.107,10.506,4.547,15.116,1.34c0.097,0.459,0.319,0.897,0.676,1.254l6.718,6.718c0.979,0.977,2.561,0.977,3.535,0c0.978-0.978,0.978-2.56,0-3.535l-6.718-6.72c-0.355-0.354-0.794-0.577-1.253-0.674C24.743,13.967,24.303,7.57,20.194,3.46zM18.073,18.074c-3.444,3.444-9.049,3.444-12.492,0c-3.442-3.444-3.442-9.048,0-12.492c3.443-3.443,9.048-3.443,12.492,0C21.517,9.026,21.517,14.63,18.073,18.074z"/></g></svg></button>
                <div className="autoHints">
                  <div className="row">
                    <div className="col-md-6">
                        <ul id="institutes">
                        </ul>
                    </div>

                    <div className="col-md-6">
                        <ul id="exams">
                        </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* 
          SEARCH CONTENT end 
        */}
       </div>
    </header>
  )
}
export default Header;