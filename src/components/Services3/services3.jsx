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
                            Expérience, Expertise, Excellence : Votre Partenaire en Cybersécurité
                               
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
                            <h5>Test d&apos;intrusion</h5>
                            
                                
                            <p style={{ marginTop: "10px", color : "white"}}>
                            • Tests de pénétration sur des réseaux externes, internes et sans fil. 
                            </p>
                            <p style={{ marginTop: "10px", color : "white"}}>
                            • Tests de sécurité d’applications Web et mobiles.
                            </p>
                            <p style={{ marginTop: "10px", color : "white"}}>
                            • Revues d’architecture de sécurité réseau.
                            </p>
                            <p style={{ marginTop: "10px", color : "white"}}>
                            • Revue de code.<br />
                            </p>
                            <p style={{ marginTop: "10px", color : "white"}}>
                            • Remédiation de vulnérabilité.
                            </p>
                            <p style={{ marginTop: "10px", color : "white"}}>
                            • Rédaction de la documentation (POC, présentations etc.) pour différents interlocuteurs : techniques ou métiers.
                            </p>
                            <p style={{ marginTop: "10px", color : "white"}}>
                            • Formation en Pentest et Campagne de hameçonnage
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
                            <h5>Gouvernance, Risque et Conformité</h5>
                                <p style={{ marginTop: "10px", color : "white"}}>
                                • Mise en place d&apos;un système de Management de la securité de l&apos;information(iso-27001).
                                </p>
                                <p style={{ marginTop: "10px", color : "white"}}>
                                • Élaboration et mettre en œuvre des politiques de cybersécurité. 
                                </p>
                                <p style={{ marginTop: "10px", color : "white"}}>
                                • Identification des menaces potentielles et évaluation des risques liés à la cybersécurité (Ebios RM).
                                </p>
                                <p style={{ marginTop: "10px", color : "white"}}>
                                • Mise en place des mécanismes de suivi et gestion des incidents de sécurité(iso-27005).
                                </p>
                                <p style={{ marginTop: "10px", color : "white"}}>
                                • Évaluations de la conformité pour s&apos;assurer que les politiques de sécurité sont respectées.
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
                            <h5>Consultation Cybersécurité</h5>
                            
                            <p style={{ marginTop: "10px", color : "white"}}>
                            o Assistance à la MOA pour la rédaction de matrices d’Habilitation(IAM).<br />
                             </p>
                            <p style={{ marginTop: "10px", color : "white"}}>
                            o Assistance MOA dans la sélection/choix des solutions de projet 
                            </p>
                            <p style={{ marginTop: "10px", color : "white"}}>
                            o Assurance que l&apos;entreprise est en conformité avec les réglementations en matière de cybersécurité et de protection des données(RGPD, ISO-27001).<br />
                            </p>
                            <p style={{ marginTop: "10px", color : "white"}}>
                            o Définition des exigences de sécurité , telles que la gestion des accès, des backups et la surveillance des journaux.<br />
                            </p>
                            <p style={{ marginTop: "10px", color : "white"}}>
                            o Gestion de la continuité des activités au sein d&apos;une organisation. (PCA et PRA)<br />
                            </p>
                            <p style={{ marginTop: "10px", color : "white"}}>
                            o Formation en GRC et Sensibilisation de la sécurité de l&apos;information.<br />
                            </p>
                    
                            
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
