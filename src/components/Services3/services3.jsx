import React from "react";
import Link from "next/link";
import cardMouseEffect from "../../common/cardMouseEffect";
import { useRouter } from "next/router";
import en from "../../locales/en.json";
import fr from "../../locales/fr.json";

const Services3 = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === "en" ? en : fr;
    
    React.useEffect(() => {
        cardMouseEffect(document.querySelectorAll(".feat .items"));
    }, []);
    return (
        <section className="feat sub-bg section-padding" id="Services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10">
                        <div className="sec-head">
                            <h6 className="wow fadeIn" data-wow-delay=".5s">
                               M3s_S3rv1c3s.BAT 
                            </h6>
                            <h3 className="wow color-font">
                                {t["Title-Mes-Services"]}       <br />
                                                         
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-3 items md-mb30">
                        <div className="item wow fadeIn" data-wow-delay=".3s">
                            <span className="icon">
                            <img style={{height :"205px"}} src="/img/icon/Filled_Hacker.svg" alt="" />
                            </span>
                            <h5>{t["Title-Pentest"]}</h5>
                            
                                
                            <p style={{ marginTop: "10px", color : "white"}}>
                             {t["p1-Pentest"]}
                            </p>
                            <p style={{ marginTop: "10px", color : "white"}}>
                            {t["p2-Pentest"]}
                            </p>
                            <p style={{ marginTop: "10px", color : "white"}}>
                            {t["p3-Pentest"]}
                            </p>
                            <p style={{ marginTop: "10px", color : "white"}}>
                            {t["p4-Pentest"]}
                            </p>
                            <p style={{ marginTop: "10px", color : "white"}}>
                            {t["p5-Pentest"]}
                            </p>
                            <p style={{ marginTop: "10px", color : "white"}}>
                            {t["p6-Pentest"]}
                            </p>
                            <p style={{ marginTop: "10px", color : "white"}}>
                            {t["p7-Pentest"]}
                            </p>
                            




                            <Link href="#Services">
                                <a className="more-stroke">
                                <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                     <div className="col-lg-4 col-md-3 items sm-mb30">
                        <div className="item wow fadeIn" data-wow-delay=".3s">
                            <span className="icon">
                                <img style={{height :"205px"}} src="/img/icon/Filled_Privacy Policy.svg" alt="" />
                            </span>
                            <h5>{t["Title-GRC"]}</h5>
                                <p style={{ marginTop: "10px", color : "white"}}>
                                 {t["p1-GRC"]}
                                </p>
                                <p style={{ marginTop: "10px", color : "white"}}>
                                {t["p2-GRC"]}
                                </p>
                                <p style={{ marginTop: "10px", color : "white"}}>
                                {t["p3-GRC"]}
                                </p>
                                <p style={{ marginTop: "10px", color : "white"}}>
                                {t["p4-GRC"]}
                                </p>
                                <p style={{ marginTop: "10px", color : "white"}}>
                                {t["p5-GRC"]}
                                </p>
                    
                           
                            <Link href="#Services">
                                <a className="more-stroke">
                                <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-3 items active md-mb30">
                        <div className="item wow fadeIn" data-wow-delay=".3s">
                            <span className="icon">
                            <img style={{height :"205px"}} src="/img/icon/Filled_Office_Security.svg" alt="" />
                            </span>
                            <h5> {t["Title-Consultation"]}</h5>
        
                            <p style={{ marginTop: "10px", color : "white"}}>
                            {t["p2-Consultation"]}
                            </p>
                            <p style={{ marginTop: "10px", color : "white"}}>
                            {t["p3-Consultation"]}                            </p>
                            <p style={{ marginTop: "10px", color : "white"}}>
                            {t["p4-Consultation"]}                            </p>
                            <p style={{ marginTop: "10px", color : "white"}}>
                            {t["p5-Consultation"]}                            </p>
                            <p style={{ marginTop: "10px", color : "white"}}>
                            {t["p6-Consultation"]}                            </p>
                    
                            
                            <Link href="#Services">
                                <a className="more-stroke">
                                <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                   
                    
                </div>
            </div>
        </section>
    );
};

export default Services3;
