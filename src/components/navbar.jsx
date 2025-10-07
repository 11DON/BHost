import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../components/styles/navbar.module.css";
import { useState, useEffect, useRef } from "react";
import DropdownItemWithSubmenu from "../components/drop"; // our reusable dropdown
import { Link } from "react-router-dom";
import InquiryModal from "./inquiryModal";

export default function CustomNavbar() {
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);
  const [showInquiry, setShowInquiry] = useState(false);

  // close search if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Navbar expand="lg" bg="transparent" className={styles.navbar}>
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Logo"
            style={{ height: "150px", marginRight: "10px"}}
          />
        </Navbar.Brand>

        {/* Mobile toggle */}
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar" className="justify-content-end">
          <div className="d-flex flex-column ">
            {/* Top links */}
            <Nav className="mb-2 ms-auto">
              <Nav.Link href="/" className={styles.navLink} style={{ fontSize: "0.7rem" }}>Home</Nav.Link>
              <Nav.Link href="/aboutPage" className={styles.navLink} style={{ fontSize: "0.7rem" }}>About I Sources</Nav.Link>
              {/* <Nav.Link href="/careers" className={styles.navLink} style={{ fontSize: "0.7rem" }}>Careers</Nav.Link> */}
              {/* <Nav.Link href="/blog" className={styles.navLink} style={{ fontSize: "0.7rem" }}>Blog</Nav.Link> */}
              <Nav.Link href="/contactPage" className={styles.navLink} style={{ fontSize: "0.7rem" }}>Contact Us</Nav.Link>

              {/* Search */}
              <div className="d-flex ms-auto align-items-center gap-2" ref={searchRef}>
                <form
                  className="d-flex search-form"
                  role="search"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    className={`form-control me-2 ${styles.searchInput} ${showSearch ? styles.searchInputShow : ""}`}
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-outline-dark btn-search"
                    type="button"
                    onClick={() => {
                      if (showSearch) {
                        console.log("Searching...");
                      } else {
                        setShowSearch(true);
                      }
                    }}
                  >
                    {!showSearch ? <i className="bi bi-search"></i> : "Go"}
                  </button>
                </form>
              </div>
            </Nav>

            {/* Main Nav */}
            <Nav className="flex-column flex-lg-row ">
              {/* Services */}
              <DropdownItemWithSubmenu
                title="Services"
                items={[
                  {
                    label: "Application Development",
                    to: "/applDevPage",
                    children: [
                      { to: "/customDigitalAppPage", label: "Custom Digital Applications" },
                      { to: "/cloudPage", label: "Cloud Native Applications" },
                      { to: "/chatBotPage", label: "Chatbots & Digital Assistants" },
                      { to: "/mobAppPage", label: "Mobile Applications" },
                      { to: "/oracleFormsPage", label: "Oracle Forms Modernization" },
                    ],
                  },
                  {
                    label: "Integration",
                    href: "#",
                    to:"/intMainPage",
                    children: [
                      { to: "/integPage", label: "Application Integration" },
                      { href: "/identityIntegPage", label: "Identity Integration" },
                      { href: "/pautoPage", label: "Process Automation" },
                      { href: "/cloudIntegPage", label: "Cloud Integration" },
                    ],
                  },
                  {
                    label: "Data Management",
                    href: "#",
                    to: "/dataManageMainPage",
                    children: [
                      { href: "/dataIntePage", label: "Data Integration" },
                      { href: "/contentManagePage", label: "Content Management" },
                      { href: "/dataVisuaPage", label: "Data Visualization" },
                      { href: "/machLearnPage", label: "Machine Learning" },
                    ],
                  },
                  {
                    label: "Managed Services",
                    href: "#",
                    to:"/managedServicesPage",
                    children: [
                      { to: "/supportPage", label: "Support" },
                      { href: "/outsourcingPage", label: "Outsourcing" },
                      { href: "/trainPage", label: "Training" },
                    ],
                  },
                ]}
              />

              {/* Consulting */}
              <Nav.Link href="/consultPage" className={styles.navLink}>Consulting</Nav.Link>

              {/* Products */}
              <DropdownItemWithSubmenu
                title="Products"
                items={[
                  { to: "/rayaInsuPage", label: "Reaya Insurance" },
                  { to: "/crmPage", label: "CRM" },
                  { to: "/edisysPage", label: "eduSIS" },
                  { to: "/spmPage", label: "SPM" },
                ]}
              />

              {/* Other links */}
              <Nav.Link href="/techPage" className={styles.navLink}>Technologies</Nav.Link>
              {/* <Nav.Link href="/clients" className={styles.navLink}>Our Clients</Nav.Link> */}

              {/* Inquiry Button */}
                <>
                  <Button
                    onClick={() => setShowInquiry(true)}
                    className="mt-3 mt-lg-0 ms-lg-3"
                    style={{
                      background: "linear-gradient(135deg, #5A4FCF, #6A5EFF)",
                      border: "none",
                      fontWeight: "bold",
                      padding: "8px 16px",
                      borderRadius: "4px",
                      fontSize: "0.9rem",
                    }}
                  >
                    SEND <span style={{ fontSize: "0.8rem" }}>INQUIRY</span>
                  </Button>
                  <InquiryModal show={showInquiry} onHide={() => setShowInquiry(false)} />
                </>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
