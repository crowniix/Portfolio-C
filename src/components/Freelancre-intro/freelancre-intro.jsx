/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { useRouter } from "next/router";
import en from "../../locales/en.json";
import fr from "../../locales/fr.json";

const FreelancreIntro = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === "en" ? en : fr;

    

   
    const [showIcons, setShowIcons] = useState(false);
    useEffect(() => setShowIcons(true), []);
    return (
        <header className="freelancre valign">
            <div className="container">
                <div className="d-flex flex-column flex-column-reverse flex-md-row flex-md-row">
                    <div className="col-lg-8 valign">
                        <div className="cont">
                            <div className="sub-title mb-5">
                                <h6>Hello Friend</h6>
                            </div>
                            <h1 className="cd-headline clip fs-5xl">
                                Camil Arslan Bouteba
                            </h1>

                            <p className="fs-xl mb-4 color-font">
                                <Typewriter
                                    options={{
                                        strings: [
                                            //"Ingénieur & Consultant CyberSécurité",
                                            t["Poste"],
                                            "From nothing, power comes forth."
                                            
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 60,
                                    }}
                                />
                            </p>

                            <ul className="d-flex flex-column gap-3">
                                <li className="d-flex gap-2 align-items-center">
                                    <span className="icon pe-7s-mail color-font fs-lg"></span>
                                    <a href="mailto:Contact@camil-bouteba.com">
                                        Contact@Camil-Bouteba.com</a>
                                </li>
                                <li className="d-flex gap-2 align-items-center">
                                <span className="icon pe-7s-call color-font fs-lg"></span>
                                    <a href="tel:+33613940182">+33 6 13 94 01 82</a>
                                </li>
                                <li className="d-flex gap-2 align-items-center">
                                    <span className="icon pe-7s-map-marker color-font fs-lg"></span>
                                    17 Rue Béssiere, 75017 Paris, France
                                </li>
                            </ul>
                            {showIcons && (
                                <div className="social d-flex gap-3 pt-4">
                                    <a href="#0">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="https://twitter.com/uCr0w_" rel="noopener" target="_blank"> 
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#0" >
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/camil-arslan/" rel="rel=noopener" target="_blank">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                            </div>
                            )}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="img">
                                <img src="/img/camil1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="line bottom left"></div>
        </header>
    );
};

export default FreelancreIntro;
