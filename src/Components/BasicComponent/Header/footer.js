import React, { Component } from 'react';
import Logo from "../../../Assests/Icons/footer-white-logo.svg";
import {Container} from "react-bootstrap";
import "./fontawesome-5/css/all.min.css"
import "./header.css";
class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <footer>
                <Container>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="footlogo"><img src={Logo} alt="footlogo" /></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="leftsc">
                                <p>Tell your friends and family about IMMPROVED</p>
                                <ul>
                                    <li><a href="https://www.facebook.com/Immproved-104284631564766" target="_blank"><i aria-hidden="true" class="fab fa-facebook"></i></a></li>
                                    <li><a href="https://twitter.com/Immproved1" class="twittersc" target="_blank"><i aria-hidden="true" class="fab fa-twitter"></i></a></li>
                                    <li><a href="https://www.instagram.com/immproved/" target="_blank"><i aria-hidden="true" class="fab fa-instagram"></i></a></li>
                                    <li><a href="https://www.youtube.com/channel/UC7njSr8eJrko8y2usuvYZGw" target="_blank"><i aria-hidden="true" class="fab fa-youtube"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/get-immproved" target="_blank"><i aria-hidden="true" class="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="rightsc">
                                <p>Connect with us on our social networks</p>
                                <ul>
                                    <li><a href="https://www.facebook.com/Immproved-104284631564766" target="_blank"><i aria-hidden="true" class="fab fa-facebook"></i></a></li>
                                    <li><a href="https://twitter.com/Immproved1" class="twittersc" target="_blank"><i aria-hidden="true" class="fab fa-twitter"></i></a></li>
                                    <li><a href="https://www.instagram.com/immproved/" target="_blank"><i aria-hidden="true" class="fab fa-instagram"></i></a></li>
                                    <li><a href="https://www.tiktok.com/@immproved1?lang=en" class="tiktiksc" target="_blank"><i class="fab fa-tiktok"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row bottom_foot">
                        <div class="col-md-5">
                            <ul class="footmenu mobilesc">
                                <li><a href="https://getimmproved.com/privacy-policy/">Privacy Policy</a></li>
                                <li><a href="https://getimmproved.com/terms-and-conditions/">Terms and Conditions</a></li>
                            </ul>
                            <p class="desksc">2020 IMMPROVED Incorporated - a registered Canadian company.</p></div>
                        <div class="col-md-7">
                                <p class="mobilesc">2020 IMMPROVED Incorporated - a registered Canadian company.</p>
                                <ul class="footmenu desksc">
                                    <li><a href="https://getimmproved.com/privacy-policy/">Privacy Policy</a></li>
                                    <li><a href="https://getimmproved.com/terms-and-conditions/">Terms and Conditions</a></li>
                                </ul>
                        </div>
                    </div>
                </Container>
            </footer>
         );
    }
}
 
export default Footer;
