/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Intro3 = () => {
    return (
        <header className="slider-stwo valign position-re" id="Aboutme">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="img">
                            <img src="/img/slid/photoAboutMecompresser.webp" alt="" />{" "}
                            <a
                                href="#contact-form"
                                className="butn bord curve mt-30 text-center w-100"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-7 valign">
                        <div className="cont">
                            {/* <div className="sub-title mb-5">
                                <h6>Digital Consulting Agency</h6>
                            </div> */}
                            <h1 className="mb-10 fw-600">
                            whoami
                            </h1>
                            <p>
                                De ma fascination pour les jeux vidéo à la maîtrise des lignes de code, ma passion pour la technologie m&apos;a conduit vers une carrière où je protège désormais les secrets numériques. 
                                je suis également compétent en :
                            </p>
                            <ul className="row">
                                <li className="col-6 mb-3">
                                    <div>
                                        <span className="icon  fas fa-terminal" >
                                            <span className="bord"></span>
                                        </span>
                                    </div>
                                    <div className="cont">
                                     
                                    <p  style={{color : "white"}} >
                                        Dev Apps & Web security
                                        </p>
                                    </div>
                                </li>
                                <li className="col-6 mb-3">
                                    <div>
                                        <span className="icon fas fa-chart-bar">
                                            <span className="bord"></span>
                                        </span>
                                    </div>
                                    <div className="cont">
                                        
                                    <p  style={{color : "white"}} >
                                            Gourvernance & Risk Management
                                        </p>
                                    </div>
                                </li>

                                <li className="col-6">
                                    <div>
                                        <span className="icon fas fa-eye">
                                            <span className="bord"></span>
                                        </span>
                                    </div>
                                    <div className="cont">
                                        
                                    <p  style={{color : "white"}} >
                                         Conformité et réglementation
                                        </p>
                                    </div>
                                </li>
                                <li className="col-6">
                                    <div>
                                        <span className="icon fas fa-bug">
                                            <span className="bord"></span>
                                        </span>
                                    </div>
                                    <div className="cont">
                                        
                                        <p  style={{color : "white"}} >
                                            Audit de vulnérabilité & Pentest
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Intro3;
