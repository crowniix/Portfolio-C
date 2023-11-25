import React from "react";
import Split from "../Split";
import Link from "next/link";
import { useRouter } from "next/router";

import fr from "../../locales/fr.json";
import en from "../../locales/en.json";


const CallToAction = ({ img }) => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === "en" ? en : fr;

    return (
        <section
            className="call-action section-padding sub-bg bg-img"
            id="Call"
            style={{
                backgroundImage: `url(${img ? img : "/img/patrn.svg"})`,
                padding: "52px 0",
            }}
        >
            <h2 className="color-font text-center fs-4xl font-weight-bold pb-4">
                
                {locale == "fr" ? "RDV en ligne" : "Online appointment" }
                
            </h2>

            <div className="container">
                <div className="d-flex flex-column justify-content-between align-items-center flex-md-row">
                    <div className="col-md-7">
                        <div className="content sm-mb30 d-flex flex-column gap-3">
                            <h3 className="pb-2 fs-xl font-weight-bold">
                               {t["Take-rdv"]}
                            </h3>
                            <p>
                            {t["Description-rdv"]}
                            </p>
                            <ul className="d-flex flex-column gap-4 fs-lg font-weight-semibold">
                                <li className="d-flex align-items-center gap-4">
                                    <i
                                         className="icon fas fa-coffee"
                                         style={{ width: 20 }}
                                    ></i>
                                    <span>
                                    {t["Duration-rdv"]}
                                    </span>
                                </li>
                                <li className="d-flex align-items-center gap-4">
                                    <i
                                          className="icon fas fa-stopwatch"
                                        style={{ width: 18 }}
                                    ></i>
                                    <span>{t["Entretien-personnalise"]}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="valign col-md-4 justify-content-center">
                        <div className="d-flex flex-column text-center">
                            <h3 className="fs-xl font-weight-bold">
                            {t["Dispos"]}
                            </h3>
                            <div className="img p-3">
                                <img
                                     src="/img/camil1.png"
                                    alt=""
                                    style={{
                                        borderRadius: "50%",
                                        width: 150,
                                        height: 150,
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                            <span className="font-weight-bold mb-4">
                            Camil
                            </span>
                            <Link
                                 href={`https://calendly.com/contact-camil`}
                            >
                                <a
                                className="butn bord curve wow fadeInUp"
                                data-wow-delay=".5s"
                                >
                                <span> {t==fr ? "Prendre RDV" : "Schedule an Appointment"}</span>
                                </a>
                            </Link>
                        </div>

                       
              
            
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
