/* eslint-disable @next/next/no-img-element */
import React from "react";
import teamSkillsProgress from "../../common/teamSkillsProgress";
import tooltipEffect from "../../common/tooltipEffect";
import teamsDate from "../../data/sections/team.json";
import { useRouter } from "next/router";
//import en from "../../../locales/en.json";
//import fr from "../../../locales/fr.json";

const Team = () => {

    const router = useRouter();
    const { locale } = router;
  //  const t = locale === "en" ? en : fr;

    React.useEffect(() => {
        teamSkillsProgress();
        setTimeout(() => {
            tooltipEffect();
        }, 1000);
    }, []);
    return (
        <div className="team-crv section-padding" id="Caracter"> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 valign">
                        <div
                            className="content wow fadeInUp md-mb30"
                            data-wow-delay=".5s"
                        >
                            {/* <div className="sub-title">
                                <h6>Our Staff</h6>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div> */}
                            <h3 className="co-tit mb-15">
                            {locale=="en"? "Technical Skills" : "Compétences techniques "}
                            </h3>
                            <div className="skills-box mt-40">
                                {teamsDate.skills.map((skill) => (
                                    <div className="skill-item" key={skill.id}>
                                        <h6 className="custom-font">
                                            {locale=="en" ? skill.textEN : skill.textFR}
                                        </h6>
                                        <div className="skill-progress">
                                            <div
                                                className="progres"
                                                data-value={skill.value}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-6 offset-lg-1 slider-stwo"
                        // the slider-stwo class isn't supposed to be used here
                        // so we have to ovveride the minHeight to solve some issues
                        style={{ minHeight: "auto", padding: "0 15px" }}
                    >
                        <h3 className="co-tit mb-65">
                         {locale=="en" ? "Character" : "Caractères"}
                        </h3>
                        <ul className="row" style={{ rowGap: 75 }}>
                            <li className="col-6">
                                <div>
                                <span className="icon pe-7s-help2 pe-spin">
                                        <span className="bord"></span>
                                    </span>
                                </div>
                                <div className="cont">
                                    <h6> {locale=="en" ? "Curious" : "Curieux"}</h6>
                                </div>
                            </li>
                            <li className="col-6">
                                <div>
                                        <span className="fa-solid fa-pen-rule" >
                                            <span className="bord"></span>
                                        </span>
                                    </div>
                                <div className="cont">
                                    <h6>  {locale=="en" ? "Creative" : "Créatif"}</h6>
                                </div>
                            </li>

                            <li className="col-6">
                                <div>
                                    <span className="icon pe-7s-help2">
                                        <span className="bord"></span>
                                    </span>
                                </div>
                                <div className="cont">
                                    <h6>Sociable</h6>
                                </div>
                            </li>
                            <li className="col-6">
                                <div>
                                    <span className="icon pe-7s-help2">
                                        <span className="bord"></span>
                                    </span>
                                </div>
                                <div className="cont">
                                    <h6>{locale=="en" ? "Methodical" : "Méthodique"}</h6>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
