import React from "react";
import "./style.css";
import Navbar from "../../components/shared/Navbar";

export const ContactUs = () => {
  return (
    <div>
      <Navbar />

      {/* Contact section */}
      <section className="contact_section long_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="form_container">
                <div className="heading_container">
                  <h2>Contáctanos</h2>
                </div>
                <form action="">
                  <div>
                    <input type="text" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <input type="text" placeholder="Telefono" />
                  </div>
                  <div>
                    <input type="email" placeholder="Correo electronico" />
                  </div>
                  <div>
                    <input type="text" className="message-box" placeholder="Mensaje" />
                  </div>
                  <div className="btn_box">
                    <button type="submit">ENVIAR</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="map_container">
                <div className="map">
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3901.1107365615308!2d-76.9661559!3d-12.104571!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c70ab0d014df%3A0x74bac44ff903b9d5!2sStartUPC!5e0!3m2!1ses-419!2spe!4v1699051185313!5m2!1ses-419!2spe"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End contact section */}
    </div>
  );
};
