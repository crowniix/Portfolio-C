import React from "react";
import { useRouter } from "next/router";
import en from "../../locales/en.json";
import fr from "../../locales/fr.json";

const SContactForm = ({ noLine }) => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === "en" ? en : fr;
    return (
        <section className="contact-sec section-padding position-re" id="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="sec-head text-center">
                            <h6 className="wow fadeIn" data-wow-delay=".5s">
                            
                            {t == en ? "0nt4Ct_M3.MSI" : "M3_C0nt4Ct3r.MSI" }
                            </h6>
                            <h3 className="wow color-font">
                                {t["Title-Contact"]}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="form wow fadeInUp" data-wow-delay=".5s">
                            <form
                                id="contact-form"
                                action="https://formspree.io/f/mqknpjpl"
                                method="POST"
                            >
                                <div className="messages"></div>
                                <div className="controls">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <input
                                                    id="form_name"
                                                    type="text"
                                                    name="name"
                                                    placeholder={t == fr ? "Nom" : "Full name"}
                                                    required="required"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <input
                                                    id="form_email"
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    required="required"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <input
                                                    id="form_test"
                                                    type="text"
                                                    name="test"
                                                    placeholder="Mobile"
                                                    required="required"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea
                                                    id="form_message"
                                                    name="message"
                                                    placeholder="Message"
                                                    rows="4"
                                                    required="required"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="text-center">
                                                <button
                                                    type="submit"
                                                    href="#0"
                                                    className="butn bord curve mt-30"
                                                >
                                                    <span className="">
                                                        {t == fr ? "Envoyer le message" : "Send the message"}
                                                        </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {!noLine && <div className="line bottom left"></div>}
        </section>
    );
};

export default SContactForm;
