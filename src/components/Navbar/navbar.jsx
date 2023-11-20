/* eslint-disable @next/next/no-img-element */
import React, {useEffect, useRef } from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";
import { useRouter } from "next/router";
import en from "../../locales/en.json";
import fr from "../../locales/fr.json";

const Navbar = ({ lr, nr, theme }) => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === "en" ? en : fr;

    const changeLanguage = (newLang) => {
        router.push(router.pathname, router.asPath, { locale: newLang });

        document.cookie = `NEXT_LOCALE=${newLang}; max-age=31536000; path=/`;
    };

    const navbar = useRef();

    const watchScrolling = () => {
        window.scrollY > 300
            ? navbar.current.classList.add("nav-scroll")
            : navbar.current.classList.remove("nav-scroll");
    };

    useEffect(() => {
        watchScrolling();
        window.addEventListener("scroll", watchScrolling);
        return () => window.removeEventListener("scroll", watchScrolling);
    });

    const Flags = {
        Fr: () => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29.9"
                height="18.4"
                viewBox="0 0 512 342"
            >
                <g fill="none">
                    <path fill="#F0F0F0" d="M0 .331h512v341.337H0z" />
                    <path fill="#0052B4" d="M0 .331h170.663v341.337H0z" />
                    <path
                        fill="#D80027"
                        d="M341.337.331H512v341.337H341.337z"
                    />
                </g>
            </svg>
        ),
        En: () => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29.9"
                height="18.4"
                viewBox="0 0 512 342"
            >
                <g fill="none">
                    <path fill="#F0F0F0" d="M0 .331h512v341.337H0z" />
                    <path
                        d="M0 42.994h512v42.663H0zm0 85.337h512v42.663H0zm0 85.326h512v42.663H0zm0 85.337h512v42.663H0z"
                        fill="#D80027"
                    />
                    <path fill="#2E52B2" d="M0 .331h256v183.797H0z" />
                    <path
                        d="M99.822 75.624l-4.123 12.684H82.363l10.791 7.835-4.123 12.683 10.791-7.835 10.784 7.835-4.122-12.683 10.791-7.835h-13.337zm4.116 58.456l-4.116-12.683-4.123 12.683H82.363l10.791 7.836-4.123 12.683 10.791-7.836 10.784 7.836-4.122-12.683 10.791-7.836zm-56.361 0l-4.117-12.683-4.123 12.683H26.001l10.791 7.836-4.123 12.683 10.791-7.836 10.785 7.836-4.122-12.683 10.789-7.836zM43.46 75.624l-4.123 12.684H26.001l10.791 7.835-4.123 12.683 10.791-7.835 10.785 7.835-4.122-12.683 10.789-7.835H47.577zM99.822 29.85l-4.123 12.685H82.363l10.791 7.836-4.123 12.683 10.791-7.836 10.784 7.836-4.122-12.683 10.791-7.836h-13.337zm-56.362 0l-4.123 12.685H26.001l10.791 7.836-4.123 12.683 10.791-7.836 10.785 7.836-4.122-12.683 10.789-7.836H47.577zm112.723 45.774l-4.122 12.684h-13.336l10.79 7.835-4.121 12.683 10.789-7.835 10.786 7.835-4.123-12.683 10.791-7.835h-13.336zm4.118 58.456l-4.118-12.683-4.122 12.683h-13.336l10.79 7.836-4.121 12.683 10.789-7.836 10.786 7.836-4.123-12.683 10.791-7.836zm56.362 0l-4.117-12.683-4.123 12.683h-13.335l10.789 7.836-4.122 12.683 10.791-7.836 10.785 7.836-4.123-12.683 10.791-7.836zm-4.117-58.456l-4.123 12.684h-13.335l10.789 7.835-4.122 12.683 10.791-7.835 10.785 7.835-4.123-12.683 10.791-7.835h-13.336zM156.183 29.85l-4.122 12.685h-13.336l10.79 7.836-4.121 12.683 10.789-7.836 10.786 7.836-4.123-12.683 10.791-7.836h-13.336zm56.363 0l-4.123 12.685h-13.335l10.789 7.836-4.122 12.683 10.791-7.836 10.785 7.836-4.123-12.683 10.791-7.836h-13.336z"
                        fill="#F0F0F0"
                    />
                </g>
            </svg>
        ),
    };

    return (
        <nav
            ref={navbar}
            className={`navbar navbar-expand-lg change ${
                theme === "themeL" ? "light" : ""
            }`}
        >
            <div className="container">
                <Link href="/">
                    <a className="logo">
                        {theme ? (
                            theme === "themeL" ? (
                                <h6  className="myFont" style={{ color: "white", font : "Cyber"}} >Camil.Bouteba</h6>
                            ) : (
                                <h6   className="myFont" style={{ color: "white", font : "Cyber"}} >Camil.Bouteba</h6>
                            )
                        ) : (
                            <h6  className="myFont" style={{ color: "white", font : "Cyber"}} >Camil.Bouteba</h6>
                        )}
                    </a>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={handleMobileDropdown}
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="icon-bar">
                        <i className="fas fa-bars"></i>
                    </span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ml-auto">
                        {/* <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Home
              </span>
              <div className="dropdown-menu">
                <a className="dropdown-item" href={`/homepage/home1-dark`}>
                  Main Home
                </a>
                <a className="dropdown-item" href={`/homepage/home2-dark`}>
                  Creative Agency
                </a>
                <a className="dropdown-item" href={`/homepage/home5-dark`}>
                  Digital Agency
                </a>
                <a className="dropdown-item" href={`/homepage/home4-dark`}>
                  Business One Page
                </a>
                <a className="dropdown-item" href={`/homepage/home3-dark`}>
                  Corporate Business
                </a>
                <a className="dropdown-item" href={`/homepage/home6-dark`}>
                  Modern Agency
                </a>
                <a className="dropdown-item" href={`/homepage/home7-dark`}>
                  Freelancer
                </a>
                <a className="dropdown-item" href={`/homepage/home8-dark`}>
                  Architecture
                </a>
              </div>
            </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                {t.Acceuil}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Aboutme">
                               {t["A-propos"]}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Services">
                                 {t.Services}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Cv">
                               {t.Expériences} 
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Blog">
                                {t.Blog}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">
                                {t.Contact}
                            </a>
                        </li>
                    </ul>
                    <div className="d-flex gap-4 justify-content-center mt-2 mt-md-0 align-items-center font-weight-semibold fs-xs">
                        <div
                            className="d-flex gap-1"
                            onClick={() => changeLanguage("fr")}
                            style={{
                                cursor: "pointer",
                                color: locale === "fr" ? "#059dff" : undefined,
                            }}
                        >
                            <Flags.Fr />
                            <span>Français</span>
                        </div>
                        <div
                            className="d-flex gap-1"
                            onClick={() => changeLanguage("en")}
                            style={{
                                cursor: "pointer",
                                color: locale === "en" ? "#059dff" : undefined,
                            }}
                        >
                            <Flags.En />
                            <span>English</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
