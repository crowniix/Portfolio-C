/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
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

  return (
    <section className="blog-crv sub-bg" id="Project">
      <h2 style={{ display: "none" }}>&nbsp;</h2>
      <div className="stories">
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
                        Application de sécurité 
                          </h5>
                        <div className="info">
                          
                        <h3>
                        Application d&apos;E-mail Tracking 
                          </h3>
                        </div>
                        <div className="title">
                          <h5>
                              Conception & Développement <span className="wow color-font">(en cours)</span>
                          </h5>
                        </div>
                        <div className="text" >
                          <p>
                          Cet outil de suivi des e-mails ajoutent une image invisible d&apos;un pixel à l&apos;intérieur du mail envoyé. 
                           Cette image pixel est chargée lorsque le destinataire ouvre les e-mails, ce qui permet de savoir quand celui-ci est ouvert 
                           et plein d&apos;autres informations peuvent être collectées lors du chargement de l&apos;image.

                           <br /><br />
                            <span style={{color :"white"}}>L&apos;information fournit : </span>

                            <br /> <br />
                            • Notification de la réception et de l&apos;ouverture du mail à une date et heure précise. <br />
                            • L&apos;adresse ip et la localisation du destinataire du mail.  <br />
                            • La version du navigateur. <br />
                            • Le système et le navigateur. <br />
                            • Moteur de rendu du navigateur.
                          </p>
                        </div>
                        
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="item wow fadeIn" data-wow-delay=".6s">
                      <div className=" content" style={{ textAlign : "left"}}>
                        <h5 className="wow color-font" >
                        Outil d&apos;évaluation
                          </h5>
                        <div className="info">
                          
                        <h3>
                        Maturité de la sécurité <br /> d&apos;un Système d&apos;information
                          </h3>
                        </div>
                        <div className="title">
                          <h5>
                          Conception & Développement
                          </h5>
                        </div>
                        <div className="text" >
                          <p>
                          L&apos;outil consiste à évaluer la maturité d&apos;un SI, en terme de sécurité, au regard de référentiels des bonnes pratiques reconnues (ISO 27001,
                                                     ISO 27005, NIST, Guide d&apos;hygiène de l&apos;ANSSI). Cette démarche a pour enjeux de lutter contre la cyber-criminalité, 
                                                     de respecter les cadres réglementaires français et européens, d&apos;affirmer la conformité du Groupe et 
                                                     de renforcer la confiance et la satisfaction des clients, enjeu majeur pour le client.


                                                    
                                                     
                                                     <br />
                                               <br />
                                               <span style={{color :"white"}}>  il contient : </span>

                                               <br /> <br />
                                                • Évaluation de la maturité selon 5 niveaux biens définis. <br />
                                                • L&apos;évaluation s&apos;oppere sur le CIS Critical Security Controls et le guide d&apos;hygiène de l&apos;ANSSI. <br />
                                                • Représentation des données globale sur la maturité d&apos;un SI sous différentes formes (radar, sous secteur, etc...). <br />
                                                • Un rendu visible et instantannée du niveau de maturité du Système d&apos;information.
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

                          La retro-ingénierie va permettre de tracer l&apos;exécution du programme et de changer certaines variables et le fonctionnement initial du logiciel. <br /> <br />
                          •  Réalisation de plusieurs exercices et CTF de Retro-ingénierie. <br /> 
                          •  Maitrise des outils de Retro-ingénierie :  <br />
                          GDB : GNU Debugger <br />
                          Radare2 : <a className="wow color-font" href="www.github.com/radareorg/radare2">www.github.com/radareorg/radare2</a> <br />
                          Ghidra, utilisé par la NSA : <a className="wow color-font" href="www.ghidra-sre.org">www.ghidra-sre.org</a>  <br />
                          IDA : <a  className="wow color-font"href="www.hex-rays.com/products/ida">www.hex-rays.com/products/ida</a> <br />
                          • Analyse statique de programmes. <br /> <br />

                          j&apos;ai étudié le comportement des programmes exemples, pour y déceler des bugs ou des failles potentiels. <br />
                          L&apos;analyseur PMD : <a className="wow color-font" href="www.pmd.github.io/ ">www.pmd.github.io</a> <br />
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
                        Test d&apos;intrusion <br /> et entrainement de la sécurité Web.
                          </h3>
                        </div>
                        <div className="title">
                          <h5>
                          Challenge & Entrainement
                          </h5>
                        </div>
                        <div className="text" >
                          <p>
                          WebGoat est une application Web délibérément non sécurisée maintenue par l&apos; OWASP conçue pour s&apos;entrainer sur des notions de sécurité 
                           des applications Web.

                            Ce programme est une démonstration des failles courantes des applications orientées serveur. Les exercices sont destinés à être utilisés par des personnes pour en savoir plus sur la 
                           sécurité des applications et les techniques de test de pénétration.

                                                     
                                                     <br />
                                                <br />
                          <span style={{color:"white"}}>OWASP Top 10 - 2021 :</span>

                                                <br /><br />
                           • Broken Access Control • Échecs cryptographiques • Injection • Conception non sécurisée • Mauvaise configuration de la sécurité •
                            Composants vulnérables et obsolètes • Échecs d&apos;identification et d&apos;authentification • Échecs de l&apos;intégrité des logiciels et des données
                            • Échecs de journalisation et de surveillance de la sécurité • Faux demande côté serveur <br />
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
                         
                          Cette application a pour but d&apos;aider les médecins à saisir leurs consultations, à suivre leurs patients mais aussi à gérer la comptabilité du cabinet.
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
                          Un &quot;Smart Mirror&quot; est un miroir sans tinte avec un écran derrière qui est utilisé pour afficher des informations utiles comme l&apos;heure, la date, la météo, le calendrier et toutes sortes d&apos;autres d&apos;informations.
                                                    <br /> <br />
                                                   <span style={{ color:"white"}}>il contient :</span> 

                                                    <br /> 
                                                    • API &quot;MagicMirror&quot;. <br />
                                                    • Cadre de l&apos;image. <br />
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
                          L&apos;objet du projet est la création d&apos;un site web d&apos;enchères inversées (à l&apos;aveugle). Le principe étant que 
                          chaque participant peut proposer un ou plusieurs prix pour une enchère en cours. À la fin de l&apos;enchère, 
                          la personne avec le prix le plus bas remporte l&apos;enchère. Comme, il se peut qu&apos;il n&apos;y ait pas de gagnant.
                           Dans ce cas, il sera nécessaire de re-créditer les jetons utilisés de chaque participant, pour l&apos;enchère non remportée. <br />
                                                <br />
                                                <span style={{color:"white"}}>Il contient : </span>

                                                <br />
                                                • Page de connexion et de session pour le client.
                                                <br />
                                                • Algorithme d&apos;enchères inversées.
                                                <br />
                                                • Interface de gestion des enchères pour l&apos;administrateur.
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
                        Showcase site for a Fitness and Bodybuilding halls
                          </h3>
                        </div>
                        <div className="title">
                          <h5>
                          Conception & Développement
                          </h5>
                        </div>
                        <div className="text" >
                          <p>
                          Développement du design et création du site fitness et musculation pour une meilleure cohérence professionnelle de la salle.
                                               <br />
                                              <br />
                                               <span style={{ color :"white"}}> Il contient : </span> 

                                               <br />
                                                • page de présentation de la salle de sport
                                               <br />
                                                • Mise en place d&apos;un système de réservation ou d&apos;enregistrement de créneaux.
                                              <br />
                                                • Création de spots publicitaires pour les offres en cours.
                                              <br />
                                                • Surveillance de la sécurité et de la maintenance du site.

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
