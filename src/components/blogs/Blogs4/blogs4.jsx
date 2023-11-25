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
                        {t == fr ? "CyberSécurité" : "CyberSecurity"}
                          </h5>
                        <div className="info">
                          
                        <h3>
                        {t["Retro-ingenierie"]} <br /> & {t == en ? "Static analysis of programs." : "Analyse statique de programmes."}
                          </h3>
                        </div>
                        <div className="title">
                          <h5>
                          {t == en ? "Achivements" : "Réalisation" }
                          </h5>
                        </div>
                        <div className="text" >
                          <p>
                          {t["Retro-ingenierie"]} <br />

                          {t["p1-Projects-3"]} <br /> <br />
                          •  {t["p2-Projects-3"]} <br /> 
                          •  {t["p3-Projects-3"]}  <br />
                          GDB : GNU Debugger <br />
                          Radare2 : <a className="wow color-font" href="www.github.com/radareorg/radare2">www.github.com/radareorg/radare2</a> <br />
                          Ghidra, {t == en ? "Used by the NSA" : "utilisé par la NSA"} : <a className="wow color-font" href="www.ghidra-sre.org">www.ghidra-sre.org</a>  <br />
                          IDA : <a  className="wow color-font"href="www.hex-rays.com/products/ida">www.hex-rays.com/products/ida</a> <br />
                          • {t == en ? "Static analysis of programs." : "Analyse statique de programmes."} <br /> <br />

                          {t["p4-Projects-3"]} <br />
                          {t == en ? "The PMD analyzer" : "L'analyseur PMD"} : <a className="wow color-font" href="www.pmd.github.io/ ">www.pmd.github.io</a> <br />
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
                        {t == en ? "Penetration testing":"Test d'intrusion "} <br /> {t == fr ? "et entrainement de la sécurité Web." : "and web security training." }
                          </h3>
                        </div>
                        <div className="title">
                          <h5>
                           {t == en ? "Challenge & Training" : "Challenge & Entrainement"}
                          </h5>
                        </div>
                        <div className="text" >
                          <p> {t["p1-Projects-4"]}                          
                        <br />
                        <br />
                          <span style={{color:"white"}}>OWASP Top 10 - 2021 :</span>

                                                <br /><br />
                           {t["p2-Projects-4"]}
                            <br />
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
                          {t == en ? "Medical Practice" : "Gestion"}
                         <br /> {t == en ? "management" : "de cabinet médical"}
                          </h3>
                        </div>
                        <div className="title">
                          <h5>
                           {t == en ? "Design & Development" : "Conception & Développement" }
                          </h5>
                        </div>
                        <div className="text" >
                          <p>
                         {t["p1-Projects-5"]}
                          <br />
                          <br />
                          <span style={{color :"white"}}> {t == fr ? "elle contient : " : "It includes :"} </span>

                          <br />
                          • {t["p2-Projects-5"]} <br />
                          • {t["p3-Projects-5"]} <br />
                          • {t["p4-Projects-5"]} <br />
                          • {t["p5-Projects-5"]} <br />
                          • {t["p6-Projects-5"]}
                          </p>
                        </div>
                        
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="item wow fadeIn" data-wow-delay=".6s">
                      <div className=" content" style={{ textAlign : "left"}}>
                        <h5 className="wow color-font" >
                       {t == fr ? "Projet IOT" : "IOT Project"}
                          </h5>
                        <div className="info">
                          
                        <h3>
                       {t == fr ? "Miroir intelligent" : "Smart Mirror"}

                          </h3>
                        </div>
                        <div className="title">
                          <h5>
                          {t == en ? "Design & Development" : "Conception & Développement"}
                          </h5>
                        </div>
                        <div className="text" >
                          <p>
                          {t["p1-Projects-6"]}
                                                    <br /> <br />
                                                   <span style={{ color:"white"}}>
                                                    {t == fr ? "il contient :" : "It Includes :"}
                                                    </span> 

                                                    <br /> 
                                                    • API &quot;MagicMirror&quot;. <br />
                                                    • {t==en ? "Picture frame.":"Cadre de l'image."} <br />
                                                    • {t==en ? "1080p Acer Monitor." : "Moniteur 1080p Acer." }<br />
                                                    • Raspberry Pi Kit. <br />
                                                    • {t==en?"Acrylic Mirror.":"Miroir Acrylique."} <br />
                                                    • {t==en?"90 degrees. HDMI adapter." : "90 degrés. Adaptateur HDMI."} <br />
                                                    • {t==en?"Super Glue":"Super colle."}<br />
                                                    • {t==en?"Black Acrylic Paint":"Peinture acrylique noire."} <br />
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
                          {t==en ? "Reverse auctions" : "Enchères inversées" }
                        </h3>
                        </div>
                        <div className="title">
                          <h5>
                          {t == en ? "Design & Development" : "Conception & Développement" }
                          </h5>
                        </div>
                        <div className="text" >
                          <p>
                            {t["p1-Projects-7"]}
                          <br />
                                                <br />
                                                <span style={{color:"white"}}>
                                                {t == fr ? "il contient :" : "It Includes :"}
                                                </span>

                                                <br />
                                                • {t["p2-Projects-7"]}
                                                <br />
                                                • {t["p3-Projects-7"]}
                                                <br />
                                                • {t["p4-Projects-7"]}
                                                <br />
                                                • {t["p5-Projects-7"]}
                                                <br />
                                                • {t["p6-Projects-7"]}
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
                        {t["Title-1-Projects-8"]}
                          </h3>
                        </div>
                        <div className="title">
                          <h5>
                          {t == en ? "Design & Development" : "Conception & Développement" }
                          </h5>
                        </div>
                        <div className="text" >
                          <p>
                          {t["p1-Projects-8"]}
                                               <br />
                                              <br />
                                               <span style={{ color :"white"}}> 
                                               {t == fr ? "il contient :" : "It Includes :"}
                                               </span> 

                                               <br />
                                                • {t["p2-Projects-8"]}
                                               <br />
                                                • {t["p3-Projects-8"]}
                                              <br />
                                                • {t["p4-Projects-8"]}
                                              <br />
                                                • {t["p5-Projects-8"]}

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
