import style from "../components/styles/footer.module.css";
import Footer2 from "./footer2";
export default function Footer({ className = "" }) {
  // Accepts an optional className for background override
  return (
    <div>
      <footer
        className={`text-center text-lg-start bg-body-tertiary text-muted ${style.footer} ${className}`}
      >
        {/* Links section */}
        <section>
          <div className="container text-center text-md-start mt-6">
            <div className="row mt-5">

              {/* Useful links */}
              <div className="col-md-3 col-lg-2 col-xl-2  mb-4 fot">
                <h6 className="text-uppercase fw-bold mb-4">Services</h6>
                <p><a href="#!" className="text-reset">Applications Development</a></p>
                <p><a href="#!" className="text-reset">Integration</a></p>
                <p><a href="#!" className="text-reset">Data Management</a></p>
                <p><a href="#!" className="text-reset">Managed Services</a></p>
                <p><a href="#!" className="text-reset">Cloud</a></p>
                <p><a href="#!" className="text-reset">Consulting</a></p>
              </div>

              {/* Products */}
              <div className="col-md-2 col-lg-2 col-xl-2  mb-4 fot">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p><a href="#!" className="text-reset">Reaya Insurance</a></p>
                <p><a href="#!" className="text-reset">CRM</a></p>
                <p><a href="#!" className="text-reset">eduSIS</a></p>
                <p><a href="#!" className="text-reset">SPM</a></p>
              </div>

              {/* Contact */}
              <div className="col">
                <div className="row">
                  <div className="col-md-4 col-lg-3 col-xl-3  mb-md-0 mb-4 fot">
                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                    <p><i className="fas fa-home me-3"></i>Elserag Mall,Tower2,Entrance 3, 9th floor,</p>
                    <p><i className="fas fa-envelope me-3"></i> Nasr City, Cairo, Egypt .</p>
                    <p><i className="fas fa-phone me-3"></i> Phone: +2 01157522667</p>
                  </div>
                  <div className="col-md-4 col-lg-3 col-xl-3  mb-md-0 mb-4 fot">
                    <h6 className="text-uppercase fw-bold mb-4">KSA</h6>
                    <p><i className="fas fa-home me-3"></i>302B Al-Imam Saud Ibn Faysal Rd.</p>
                    <p><i className="fas fa-envelope me-3"></i>  Al-Malaqa District, Riyadh .</p>
                    <p><i className="fas fa-phone me-3"></i> Phone: 00966541884447</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer2/>
      </footer>
    </div>
  );
}


