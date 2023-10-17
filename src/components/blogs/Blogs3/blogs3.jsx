import React from "react";
import Link from "next/link";

const Blogs3 = () => {
  return (
    <section className="blog-grid section-padding position-re" id="Blog">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
              Art1cl3s_r3c3nts.Init
              </h6>
              <h3 className="wow color-font">De mes blogs.</h3>
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
                      <i>06</i> Janviers 2022
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
                        L&apos;avenir de la <br />blockchain.                    
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
                      <i>03</i> Mars 2023
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
                    Tout ce que vous devez savoir sur la 5G.
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
                      <i>07</i> juillet 2023
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
                    Cookies : le consentement biaisé des internautes.
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
