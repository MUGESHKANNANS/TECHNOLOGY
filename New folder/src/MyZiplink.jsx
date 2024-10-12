import React, { useState } from 'react'; // Import useState for toggle functionality
import './MyZiplink.css';
import myZiplinkLogo from './myziplink_logo.png';
import myZiplinkTextLogo from './myziplink.png';
import homeImage from './home.jpg';
import skilledLaborImage from './images/Skilled Labor Services.png';
import technicalImage from './images/Technical & Automotive Services.jpeg';
import creativeImage from './images/Creative Services.jpg';
import eventImage from './images/Event & Decoration Services2.jpg';
import digitalImage from './images/Digital & Development Services.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp, faEnvelope, faPhone, faMapMarkerAlt, faQuestionCircle, faBars, faTimes, faHome, faCog } from '@fortawesome/free-solid-svg-icons';

const MyZiplink = () => {
  const [navOpen, setNavOpen] = useState(false); // State for toggling navigation

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setNavOpen(false); // Close the sliding menu when a section is clicked
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setNavOpen(false); // Close the sliding menu when "Home" is clicked
  };

  // Show the back-to-top button only in the contact section
  const handleScroll = () => {
    const contactSection = document.querySelector('.contact-section');
    const button = document.querySelector('.back-to-top');

    // Check if the contact section is in view
    const rect = contactSection.getBoundingClientRect();
    const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

    if (isVisible) {
      button.classList.add('show');
    } else {
      button.classList.remove('show');
    }
  };

  window.addEventListener('scroll', handleScroll);

  // Toggle navigation for mobile
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div>
      <header className="header" id='home'>
        <div className="logo-container">
          <div className="logo_png">
            <img src={myZiplinkLogo} alt="logo" />
          </div>
          <div className="logo">
            <img src={myZiplinkTextLogo} alt="MyZiplink Logo" />
          </div>
        </div>
        <nav className={`navi ${navOpen ? 'show' : ''}`}>
          <ul className="nav-links">
            <li className="instagram">
              <a href="https://www.instagram.com/myziplink.in/?igsh=d3hwa2luamt2anZq&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="x" />
              </a>
            </li>
            <li><a href="#home" onClick={scrollToTop}>Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services" onClick={() => scrollToSection('home_bottom')}>Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
         {/* Close icon for mobile menu */}
<div className="close-menu" onClick={toggleNav}>
  <FontAwesomeIcon icon={faTimes} />
</div>

<div className="slide">
  <li>
    <a
      href="#home"
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
        toggleNav(); // Close the navigation after clicking
      }}
    >
      <FontAwesomeIcon icon={faHome} />Home
    </a>
  </li>
  <li>
    <a
      href="#about"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection('about');
        toggleNav();
      }}
    >
      <FontAwesomeIcon icon={faQuestionCircle} />About
    </a>
  </li>
  <li>
    <a
      href="#services"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection('skilled-labor');
        toggleNav();
      }}
    >
      <FontAwesomeIcon icon={faCog} />Services
    </a>
  </li>
  <li>
    <a
      href="#contact"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection('contact');
        toggleNav();
      }}
    >
      <FontAwesomeIcon icon={faEnvelope} />Contact
    </a>
  </li>
</div>
        </nav>
        {/* Hamburger Icon */}
        <li className="instagram" id="insta">
  <a
    href="https://www.instagram.com/myziplink.in/?igsh=d3hwa2luamt2anZq&utm_source=qr"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon
      icon={faInstagram}
      size="m"
      style={{ color: '#015265' }} // Set the color here
    />
  </a>
</li>
        <div className={`hamburger ${navOpen ? 'hide' : ''}`} onClick={toggleNav}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </header>

      <main className="main">
        <div className="main-content">
          <div className="image-hide">
            <img src={homeImage} alt="Services Image" />
          </div>
          <h1>WELCOME TO MYZIPLINK</h1>
          <p>YOUR ONE-STOP SOLUTION FOR ALL SERVICES</p>
          <p>
            We pride ourselves on offering a wide range of professional
            services to meet your everyday needs. From skilled labor to creative services,
            we are your trusted partner in ensuring top-quality, reliable solutions.
          </p>
        </div>
        <div className="main-image">
          <img src={homeImage} alt="Services Image" />
        </div>
      </main>
      <div id="home_bottom">
        <h3>MYZIPLINK - CONNECTING YOU TO QUALITY SERVICES</h3>
      </div>

      {/* Services section */}
      <div className="services-content" id="services-content">
        <div className="services-text" id='skilled-labor'>
          <h2>Skilled Labor Services</h2>
          <ul>
            <li><strong>Welding :</strong> Professional metalwork solutions for residential and commercial projects.</li>
            <li><strong>Painting :</strong> Interior, exterior, and custom painting services for homes and businesses.</li>
            <li><strong>Carpentering :</strong> Custom woodworking, furniture building, and repair services.</li>
            <li><strong>Delivery Persons :</strong> Reliable, on-time delivery services for businesses and individuals.</li>
            <li><strong>Household Services :</strong> Trusted professionals for all your household maintenance and repair needs.</li>
            <li><strong>Acting Drivers :</strong> Temporary drivers for personal or business use, available on-demand.</li>
            <li><strong>Small-Scale Manufacturing :</strong> Tailored production services for small businesses and startups.</li>
            <li><strong>Laborers in Informal Businesses :</strong> Reliable labor for various industries and tasks.</li>
          </ul>
        </div>
        <div className="services-image">
          <img src={skilledLaborImage} alt="Skilled Labor Services Image" />
        </div>
      </div>

      <div className="services-content">
        <div className="services-text">
          <h2>Technical & Automotive Services</h2>
          <ul>
            <li><strong>Automotive Services :</strong> Car maintenance, repair, and detailing.</li>
            <li><strong>CNC Works :</strong> Precision machining and fabrication for custom parts and projects.</li>
          </ul>
        </div>
        <div className="services-image">
          <img src={technicalImage} alt="Technical & Automotive Services Image" />
        </div>
      </div>

      <div className="services-content">
        <div className="services-text">
          <h2>Creative Services</h2>
          <ul>
            <li><strong>Clothing :</strong> Bespoke designs and tailoring for individuals and brands.</li>
            <li><strong>Photography :</strong> Professional photography for events, products, and personal projects.</li>
            <li><strong>Rental Cameras :</strong> High-quality cameras for hire, ideal for projects or events.</li>
            <li><strong>Video Production :</strong> Full-service video production for corporate, commercial, and personal needs.</li>
          </ul>
        </div>
        <div className="services-image">
          <img src={creativeImage} alt="Creative Services Image" />
        </div>
      </div>

      <div className="services-content">
        <div className="services-text">
          <h2>Event & Decoration Services</h2>
          <ul>
            <li><strong>Party Decoration :</strong> Elegant and creative decorations to make your events memorable.</li>
            <li><strong>Event Management :</strong> Comprehensive event planning and coordination services for all occasions.</li>
          </ul>
        </div>
        <div className="services-image">
          <img src={eventImage} alt="Event & Decoration Services Image" />
        </div>
      </div>

      <div className="services-content">
        <div className="services-text">
          <h2>Digital & Development Services</h2>
          <ul>
            <li><strong>Web Designing :</strong> Creative and responsive website designs that drive engagement.</li>
            <li><strong>Website Development :</strong> End-to-end website solutions to establish your online presence.</li>
            <li><strong>Graphic Designing :</strong> Eye-catching designs to elevate your brand identity.</li>
            <li><strong>Brand Development :</strong> Comprehensive brand strategy and identity development.</li>
            <li><strong>Web/Mobile App Development :</strong> Custom applications that solve real-world problems.</li>
          </ul>
        </div>
        <div className="services-image">
          <img src={digitalImage} alt="Digital & Development Services Image" />
        </div>
      </div>
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p id="have_ques">
          <FontAwesomeIcon icon={faQuestionCircle} /> Have questions? We’re here to help! Reach out to us!
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:myziplink@gmail.com">myziplink@gmail.com</a>
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} /> Phone: +91 97909 72463
        </p>
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Address: Coimbatore, Tamilnadu.
        </p>
        {/* Back to Top Button (Visible only on contact page) */}
        <a href="#home" className="back-to-top" title="Back to Top" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faChevronUp} />
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 MyZiplink. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MyZiplink;
