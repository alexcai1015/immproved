import React, { Component } from 'react';
import Logo from "../../../Assests/Icons/logo.png";
import {Container} from "react-bootstrap";
import "./header.css";
class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <header>
                    <Container fluid={true}>
                        <div class="row">
                            <div class="col-md-3">
                                <a href="https://getimmproved.com"><img src={Logo} alt="IMMPROVED" /></a>
                            </div>
                            <div class="col-md-9">
                                <div class="mainmenu">
                                        <ul>
                                            <li><a href="http://app.immproved.ca/">Check Eligibility</a></li>
                                            <li><a href="https://getimmproved.com/immigration-programs/">Immigration Programs</a></li>
                                            <li><a href="https://getimmproved.com/about-us/">About Us</a></li>
                                        </ul>
                                </div>
                                <div class="menu-wrap">
                                    <input type="checkbox" class="toggler" />
                                    <div class="hamburger"><div></div></div>
                                    <div class="menu">
                                        <div>
                                            <div>
                                                <ul>
                                                    <li><a href="http://app.immproved.ca/">Check Eligibility</a></li>
                                                    <li><a href="https://getimmproved.com/immigration-programs/">Immigration Programs</a></li>
                                                    <li><a href="https://getimmproved.com/about-us/">About Us</a></li>
                                                </ul>
                                                <div class="bottom-sc">
                                                    <ul class="menuextra">
                                                        <li><a href="https://getimmproved.com/privacy-policy/">Privacy Policy</a></li>
                                                        <li><a href="https://getimmproved.com/terms-and-conditions/">Terms and Conditions</a></li>
                                                    </ul>
                                                    <p>2020 IMMPROVED Incorporated - a registered Canadian company.  </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </header>
            </React.Fragment>
         );
    }
}
 
export default Header;