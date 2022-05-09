import React from 'react';
import './about.css'

const About = () => {
    return (
        <div>
            <div class="services pd">
                <div class="container">
                    <h3 class="title text-center">About Me</h3>
                    <div class="row text-center">
                        <div class="col-md-3">
                            <div class="square"><i class="fas fa-code"></i></div>
                            <div class="serv">
                                <h5>HTML,CSS,BOOTSTRAP,TAILWIND</h5>
                                <p>I have been working as a font end developer for last 3 years. I have good experience on HTML, CSS and framework. </p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="serv">
                                <div class="square"><i class="fas fa-cogs"></i></div>
                                <h5>Problem Solving</h5>
                                <p>I have solve some problem in the several website like codeforce, kata etc. I use Javascript to solve problem. So far i have solve 250+ problem.</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="square"><i class="fas fa-globe"></i></div>
                            <div class="serv">
                                <h5>Wordpress</h5>
                                <p>I have good knowledge of Wordpress, clickfunnel, wix and shopify like other CMS website. I have work with many client in the freelancing platform on wordpress. </p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="square"><i class="fas fa-user-shield"></i></div>
                            <div class="serv">
                                <h5>React , Node js, mongodb</h5>
                                <p>I am learning React Nodejs and Mongodb now. Hopefully I will be a good developer soon. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;