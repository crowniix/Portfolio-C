import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const Blogs3 = () => {

  const router = useRouter();
  const { locale } = router;

  return (
    <section className="blog-grid section-padding position-re" id="Blog">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
              
              {locale=="en" ? "R3c3nt_Art1c13s.init" : "Art1cl3s_r3c3nts.init"}
              </h6>
              <h3 className="wow color-font">{locale=="en" ? "My Blogs" : "Mes blogs."}</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
            <div
              className="item bg-img"
              style={{ backgroundImage: "url(/img/blog/1.jpg)" }}
            >
              <div className="cont">
                <Link href="#Blog">
                  <a className="date">
                    <span>
                      <i>06</i>/ 01 / 2022
                    </span>
                  </a>
                </Link>
                <div className="info">
                  <a href="#Blog" className="author">
                    <span>by /</span>
                  </a>
                  <Link href="#Blog">
                    <a className="tag">
                      <span>R3800T</span>
                    </a>
                  </Link>
                </div>
                <h6>
                  <Link href="#Blog">
                    <a>
                      
                        {locale=="en" ? "The future of blockchain" : "L'avenir de la blockchain"}                 
                    </a>
                  </Link>
                </h6>
                <div className="btn-more">
                  <Link href="#Blog">
                    <a className="simple-btn">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
            <div
              className="item active bg-img"
              style={{ backgroundImage: "url(/img/blog/2.jpg)" }}
            >
              <div className="cont">
                <Link href="#Blog">
                  <a className="date">
                    <span>
                      <i>03</i>/ 03 / 2023
                    </span>
                  </a>
                </Link>
                <div className="info">
                  <a href="#Blog" className="author">
                    <span>by /</span>
                  </a>
                  <Link href="#Blog">
                    <a className="tag">
                      <span>R3800T</span>
                    </a>
                  </Link>
                </div>
                <h6>
                  <Link href="#Blog">
                    <a>
                    
                    {locale=="en" ? "All you need to know about the 5G network." : "Tout ce que vous devez savoir sur la 5G."} 
                    </a>
                  </Link>
                </h6>
                <div className="btn-more">
                  <Link href="#Blog">
                    <a className="simple-btn">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".9s">
            <div
              className="item bg-img"
              style={{ backgroundImage: "url(/img/blog/3.jpg)" }}
            >
              <div className="cont">
                <Link href="#Blog">
                  <a className="date">
                    <span>
                      <i>07</i>/ 07 / 2023
                    </span>
                  </a>
                </Link>
                <div className="info">
                  <a href="#Blog" className="author">
                    <span>by /</span>
                  </a>
                  <Link href="#Blog">
                    <a className="tag">
                      <span>R3800T</span>
                    </a>
                  </Link>
                </div>
                <h6>
                  <Link href="#Blog">
                    <a>
                    
                    {locale=="en" ? "Cookies: the biased consent of Internet users." : "Cookies : le consentement biaisé des internautes."}  
                    </a>
                  </Link>
                </h6>
                <div className="btn-more">
                  <Link href="#Blog">
                    <a className="simple-btn">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line top right"></div>
      <div className="line bottom left"></div>
    </section>
  );
};

export default Blogs3;
