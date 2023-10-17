/* eslint-disable @next/next/no-img-element */
import React from "react";
import teamSkillsProgress from "../../common/teamSkillsProgress";
import tooltipEffect from "../../common/tooltipEffect";
import teamsDate from "../../data/sections/team.json";

const Team = () => {
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
                            Compétences techniques
                            </h3>
                            <div className="skills-box mt-40">
                                {teamsDate.skills.map((skill) => (
                                    <div className="skill-item" key={skill.id}>
                                        <h6 className="custom-font">
                                            {skill.text}
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
                        Caractères
                        </h3>
                        <ul className="row" style={{ rowGap: 75 }}>
                            <li className="col-6">
                                <div>
                                <span className="icon pe-7s-help2">
                                        <span className="bord"></span>
                                    </span>
                                </div>
                                <div className="cont">
                                    <h6>Curieux</h6>
                                </div>
                            </li>
                            <li className="col-6">
                                <div>
                                    <span className="icon pe-7s-help2">
                                        <span className="bord"></span>
                                    </span>
                                </div>
                                <div className="cont">
                                    <h6>Créatif</h6>
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
                                    <h6>Méthodique</h6>
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
