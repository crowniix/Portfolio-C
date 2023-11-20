/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";
import en from "../../../locales/en.json";
import fr from "../../../locales/fr.json";

import SwiperCore, {
  Navigation,
  Pagination,
  Parallax,
  EffectFade,
} from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { thumparallax } from "../../../common/thumparallax";
import removeSlashFromPagination from "../../../common/removeSlashpagination";


SwiperCore.use([Navigation, Pagination, Parallax, EffectFade]);

const Blogs4 = () => {

  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoad(false);
      removeSlashFromPagination();
      thumparallax();
    }, 1000);
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  return (
    <section className="blog-crv sub-bg" id="Project">
      <h2 style={{ display: "none" }}>&nbsp;</h2>
      <div className="stories">
      <div className=" text-center">
                <h6 className="wow fadeIn pt-4" data-wow-delay=".5s">
                My_Proj3ct.exe
                </h6>
            </div>
        <div className="container-fluid">
          
          <div className="row">
            <div className="col-lg-6 no-padding">
              {!load ? (
                <Swiper
                  speed={800}
                  effect="fade"
                  spaceBetween={0}
                  loop={true}
                  parallax={true}
                  navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                  }}
                  pagination={{
                    type: "fraction",
                    clickable: true,
                    el: paginationRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                    swiper.params.pagination.el = paginationRef.current;
                  }}
                  onSwiper={(swiper) => {
                    setTimeout(() => {
                      for (var i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].childNodes[0].setAttribute(
                          "data-swiper-parallax",
                          0.75 * swiper.width
                        );
                      }

                      swiper.params.navigation.prevEl =
                        navigationPrevRef.current;
                      swiper.params.navigation.nextEl =
                        navigationNextRef.current;

                      swiper.params.pagination.el = paginationRef.current;

                      swiper.navigation.destroy();
                      swiper.navigation.init();
                      swiper.navigation.update();

                      swiper.pagination.destroy();
                      swiper.pagination.init();
                      swiper.pagination.update();
                    });
                  }}
                  className="swiper-wrapper swiper-container swiper-img"
                  slidesPerView={1}
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="item wow fadeIn" data-wow-delay=".3s">
                      <div className="img">
                      <video loop muted playsinline className="img-fluid thumparallax" >
                                                    <source src="/img/blog/tracker-mail.webm" type="video/webm" />
                                                  </video>
                                                  
                      </div>
                     
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item wow fadeIn" data-wow-delay=".3s">
                      <div className="img">
                        <img
                          className="thumparallax"
                          src="/img/blog/capture-outil11.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item wow fadeIn" data-wow-delay=".3s">
                      <div className="img">
                        <img
                          className="thumparallax"
                          src="/img/blog/reverse-engineering1.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item wow fadeIn" data-wow-delay=".3s">
                      <div className="img">
                        <img
                          className="thumparallax"
                          src="/img/blog/security-risks1.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item wow fadeIn" data-wow-delay=".3s">
                      <div className="img">
                        <img
                          className="thumparallax"
                          src="/img/blog/gestion1.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item wow fadeIn" data-wow-delay=".3s">
                      <div className="img">
                        <img
                          className="thumparallax"
                          src="/img/blog/miror-connected11.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item wow fadeIn" data-wow-delay=".3s">
                      <div className="img">
                        <img
                          className="thumparallax"
                          src="/img/blog/webWWW1.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item wow fadeIn" data-wow-delay=".3s">
                      <div className="img">
                        <img
                          className="thumparallax"
                          src="/img/blog/collagered1.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              ) : null}
            </div>
            <div className="col-lg-6 no-padding valign">
              {!load ? (
                <Swiper
                  speed={800}
                  spaceBetween={0}
                  loop={true}
                  navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                  }}
                  pagination={{
                    type: "fraction",
                    clickable: true,
                    el: paginationRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                    swiper.params.pagination.el = paginationRef.current;
                  }}
                  onSwiper={(swiper) => {
                    setTimeout(() => {
                      for (var i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].childNodes[0].setAttribute(
                          "data-swiper-parallax",
                          0.75 * swiper.width
                        );
                      }

                      swiper.params.navigation.prevEl =
                        navigationPrevRef.current;
                      swiper.params.navigation.nextEl =
                        navigationNextRef.current;

                      swiper.params.pagination.el = paginationRef.current;

                      swiper.navigation.destroy();
                      swiper.navigation.init();
                      swiper.navigation.update();

                      swiper.pagination.destroy();
                      swiper.pagination.init();
                      swiper.pagination.update();
                    });
                  }}
                  className="swiper-wrapper swiper-container swiper-content"
                  slidesPerView={1}
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="item wow fadeIn" data-wow-delay=".6s">
                      <div className=" content" style={{ textAlign : "left"}}>
                        <h5 className="wow color-font" >
                            {t["Title-1-Projects-1"]}
                          </h5>
                        <div className="info">
                          
                        <h3>
                        {t["Title-2-Projects-1"]}
                          </h3>
                        </div>
                        <div className="title">
                          <h5>
                          {t["Title-3-Projects-1"]}<span className="wow color-font">  {t["Title-3.1-Projects-1"]}</span>
                          </h5>
                        </div>
                        <div className="text" >
                          <p>
                          {t["p1-Projects-1"]}

                           <br /><br />
                            <span style={{color :"white"}}> {t["p2-Projects-1"]} </span>

                            <br /> <br />
                            {t["p3-Projects-1"]} <br />
                            {t["p4-Projects-1"]}  <br />
                            {t["p6-Projects-1"]} <br />
                            {t["p7-Projects-1"]}
                          </p>
                        </div>
                        
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="item wow fadeIn" data-wow-delay=".6s">
                      <div className=" content" style={{ textAlign : "left"}}>
                        <h5 className="wow color-font" >
                        {t["Title-1-Projects-2"]}
                          </h5>
                        <div className="info">
                          
                        <h3>
                        {t["Title-2-Projects-2"]} <br /> {t["Title-3-Projects-2"]}
                          </h3>
                        </div>
                        <div className="title">
                          <h5>
                          {t["Title-4-Projects-2"]}
                          </h5>
                        </div>
                        <div className="text" >
                          <p>
                          {t["p1-Projects-2"]}


                                                    
                                                     
                                                     <br />
                                               <br />
                                               <span style={{color :"white"}}>    {t["p2-Projects-2"]} </span>

                                               <br /> <br />
                                               {t["p3-Projects-2"]} <br />
                                               {t["p4-Projects-2"]} <br />
                                               {t["p5-Projects-2"]} <br />
                                               {t["p6-Projects-2"]}
                                                </p>
                        </div>
                        
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="item wow fadeIn" data-wow-delay=".6s">
                      <div className=" content" style={{ textAlign : "left"}}>
                        <h5 className="wow color-font" >
                        CyberSécurité
                          </h5>
                        <div className="info">
                          
                        <h3>
                        Retro-ingénierie <br /> & Analyse statique de programmes.
                          </h3>
                        </div>
                        <div className="title">
                          <h5>
                          Réalisation
                          </h5>
                        </div>
                        <div className="text" >
                          <p>
                          Retro-ingénierie <br />

                          La retro-ingénierie va permettre de tracer l'exécution du programme et de changer certaines variables ainsi que le fonctionnement initial du logiciel. <br /> <br />
                          •  Réalisation de plusieurs exercices et CTF de Retro-ingénierie. <br /> 
                          •  Maitrise des outils de Retro-ingénierie :  <br />
                          GDB : GNU Debugger <br />
                          Radare2 : <a className="wow color-font" href="www.github.com/radareorg/radare2">www.github.com/radareorg/radare2</a> <br />
                          Ghidra, utilisé par la NSA : <a className="wow color-font" href="www.ghidra-sre.org">www.ghidra-sre.org</a>  <br />
                          IDA : <a  className="wow color-font"href="www.hex-rays.com/products/ida">www.hex-rays.com/products/ida</a> <br />
                          • Analyse statique de programmes. <br /> <br />

                          j'ai étudié le comportement des programmes exemples, pour y déceler des bugs ou des failles potentiels. <br />
                          L'analyseur PMD : <a className="wow color-font" href="www.pmd.github.io/ ">www.pmd.github.io</a> <br />
                          <span >SpotBugs : <a className="wow color-font" href="www.spotbugs.github.io">www.spotbugs.github.io</a></span>  <br />
                          </p>
                        </div>
                        
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="item wow fadeIn" data-wow-delay=".6s">
                      <div className=" content" style={{ textAlign : "left"}}>
                        <h5 className="wow color-font" >
                        Pentest Web (OWASP Top 10)
                          </h5>
                        <div className="info">
                          
                        <h3>
                        Test d'intrusion <br /> et entrainement de la sécurité Web.
                          </h3>
                        </div>
                        <div className="title">
                          <h5>
                          Challenge & Entrainement
                          </h5>
                        </div>
                        <div className="text" >
                          <p>
                          WebGoat est une application Web délibérément non sécurisée maintenue par l'OWASP et conçue pour s'entrainer sur des notions de sécurité 
                           des applications Web.

                            Ce programme est une démonstration des failles courantes des applications orientées web & serveur. Les exercices sont destinés à être utilisés par des personnes pour en savoir plus sur la 
                           sécurité des applications et les techniques de test de pénétration.

                                                     
                                                     <br />
                                                <br />
                          <span style={{color:"white"}}>OWASP Top 10 - 2021 :</span>

                                                <br /><br />
                           • Broken Access Control • Échecs cryptographiques • Injection • Conception non sécurisée • Mauvaise configuration de la sécurité •
                            Composants vulnérables et obsolètes • Échecs d'identification et d'authentification • Échecs de l'intégrité des logiciels et des données
                            • Échecs de journalisation et de surveillance de la sécurité • Fausse demande côté serveur. <br />
                          </p>
                        </div>
                        
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="item wow fadeIn" data-wow-delay=".6s">
                      <div className=" content" style={{ textAlign : "left"}}>
                        <h5 className="wow color-font" >
                        Java Apps
                          </h5>
                        <div className="info">
                          
                        <h3>
                        Gestion <br /> de cabinet médical
                          </h3>
                        </div>
                        <div className="title">
                          <h5>
                          Conception & Développement
                          </h5>
                        </div>
                        <div className="text" >
                          <p>
                         
                          Cette application a pour but d'aider les médecins à saisir leurs consultations, à suivre leurs patients mais aussi à gérer la comptabilité du cabinet.
                                                <br />
                                                <br />
                                                <span style={{color :"white"}}> elle contient : </span>

                                                <br />
                                                • Page de connexion pour différencier assistant et médecin. <br />
                                                • Gestion et Suivi du Dossier Médical. <br />
                                                • Gestion des rendez-vous. <br />
                                                • Gestion des fiches patient. <br />
                                                • Gestion comptable.
                                                </p>
                        </div>
                        
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="item wow fadeIn" data-wow-delay=".6s">
                      <div className=" content" style={{ textAlign : "left"}}>
                        <h5 className="wow color-font" >
                       Projet IOT
                          </h5>
                        <div className="info">
                          
                        <h3>
                        Miroir intelligent
                          </h3>
                        </div>
                        <div className="title">
                          <h5>
                          Conception & Développement
                          </h5>
                        </div>
                        <div className="text" >
                          <p>
                          Un &quot;Smart Mirror&quot; est un miroir sans tain avec un écran derrière qui est utilisé pour afficher des informations utiles comme l'heure, la date, la météo, l'agendat et toutes sortes d'autres d'informations.
                                                    <br /> <br />
                                                   <span style={{ color:"white"}}>il contient :</span> 

                                                    <br /> 
                                                    • API &quot;MagicMirror&quot;. <br />
                                                    • Cadre de l'image. <br />
                                                    • Moniteur 1080p Acer.<br />
                                                    • Raspberry Pi Kit. <br />
                                                    • Miroir Acrylique. <br />
                                                    • 90 degrés. Adaptateur HDMI. <br />
                                                    • Super colle.<br />
                                                    • Peinture acrylique noire. <br />
                                                </p>
                        </div>
                        
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="item wow fadeIn" data-wow-delay=".6s">
                      <div className=" content" style={{ textAlign : "left"}}>
                        <h5 className="wow color-font" >
                        Back & Front Web
                          </h5>
                        <div className="info">
                          
                        <h3>
                        Enchères inversées
                          </h3>
                        </div>
                        <div className="title">
                          <h5>
                          Conception & Développement
                          </h5>
                        </div>
                        <div className="text" >
                          <p>
                          L'objet du projet est la création d'un site web d'enchères inversées (à l'aveugle). Le principe étant que 
                          chaque participant peut proposer un ou plusieurs prix pour une enchère en cours. À la fin de l'enchère, 
                          la personne avec le prix le plus bas remporte l'enchère. Comme, il se peut qu'il n'y ait pas de gagnant.
                           Dans ce cas, il sera nécessaire de re-créditer les jetons utilisés de chaque participant, pour l'enchère non remportée. <br />
                                                <br />
                                                <span style={{color:"white"}}>Il contient : </span>

                                                <br />
                                                • Page de connexion et de session pour le client.
                                                <br />
                                                • Algorithme d'enchères inversées.
                                                <br />
                                                • Interface de gestion des enchères pour l'administrateur.
                                                <br />
                                                • Création de base de données Mysql.
                                                <br />
                                                • Utilisation pour la conception et la sécurité: Symphony (framework PHP).
                                              </p>
                        </div>
                        
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="item wow fadeIn" data-wow-delay=".6s">
                      <div className=" content" style={{ textAlign : "left"}}>
                        <h5 className="wow color-font" >
                        Back & Front Web
                          </h5>
                        <div className="info">
                          
                        <h3>
                        Site vitrine d'une salle de Fitness et Musculation
                          </h3>
                        </div>
                        <div className="title">
                          <h5>
                          Conception & Développement
                          </h5>
                        </div>
                        <div className="text" >
                          <p>
                          Développement du design et création du site de fitness et musculation pour une meilleure visilibitée professionnelle de la salle.
                                               <br />
                                              <br />
                                               <span style={{ color :"white"}}> Il contient : </span> 

                                               <br />
                                                • page de présentation de la salle de sport
                                               <br />
                                                • Mise en place d'un système de réservation et d'enregistrement de créneaux.
                                              <br />
                                                • Création de spots publicitaires pour les offres en cours.
                                              <br />
                                                • Surveillance de la sécurité et  maintenance du site.

                                              </p>
                        </div>
                        
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              ) : null}
            </div>
          </div>

          <div className="controls">
            <div
              ref={navigationNextRef}
              className="swiper-button-next swiper-nav-ctrl next-ctrl"
            >
              <i className="fas fa-caret-up"></i>
            </div>
            <div
              ref={navigationPrevRef}
              className="swiper-button-prev swiper-nav-ctrl prev-ctrl"
            >
              <i className="fas fa-caret-down"></i>
            </div>
            <div className="swiper-pagination" ref={paginationRef}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs4;
