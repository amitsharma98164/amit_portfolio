import React, { useEffect } from 'react';
import './App.css';
import loadAllScripts from './scripts';

function App() {
  useEffect(() => {
    // Add class to body for global styles
    document.body.classList.add('home-st8');
    // Load all required scripts
    loadAllScripts();
    // Cleanup: remove class on unmount
    return () => {
      document.body.classList.remove('home-st8');
    };
  }, []);

  return (
    <>
      {/* Cursor */}
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>

      {/* Background Lines */}
      <div className="bg-lines">
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span>
      </div>

      {/* Loading */}
      <div className="loader-wrap">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
        </svg>
        <div className="loader-wrap-heading">
          <div className="load-text">
            <span>L</span>
            <span>o</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
          </div>
        </div>
      </div>

      {/* Side Menu */}
      <div className="side_overlay"></div>
      <div className="side_overlay2"></div>
      <div className="side_menu">
        <div className="content">
          <div className="row">
            <div className="col-lg-6">
              <div className="main_links">
                <ul>
                  <li><a className="main_link" href="#">home</a></li>
                  <li><a className="main_link" href="#">About</a></li>
                  <li><a className="main_link" href="#">Services</a></li>
                  <li><a className="main_link" href="https://www.behance.net/hamida_jannat">Portfolio</a></li>
                  <li><a className="main_link" href="#">Blog</a></li>
                  <li><a className="main_link" href="https://wa.me/9816424057">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="menu-info justify-content-lg-center align-items-lg-center text-lg-center mt-5 mt-lg-0">
                <div className="cont">
                  <a href="#" className="logo">
                    <img src="/assets/img/logo.png" alt="" />
                  </a>
                  <div className="social_links d-none">
                    <a href="https://www.behance.net/hamida_jannat">
                      <i className="uil uil-behance"></i>
                    </a>
                    <a href="https://www.instagram.com/hamida_jannat20/">
                      <i className="uil uil-instagram"></i>
                    </a>
                    <a href="https://dribbble.com/hamida_jannat">
                      <i className="uil uil-dribbble"></i>
                    </a>
                  </div>
                  <ul className="contact-links">
                    <li>
                      <a href="https://wa.me/9816424057">
                        <span className="icon me-3">
                          <i className="uil uil-whatsapp"></i>
                        </span>
                        <span className="txt">9816424057</span>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:amitsharmaamit420@gmail.com">
                        <span className="icon me-3">
                          <i className="uil uil-envelope"></i>
                        </span>
                        <span className="txt">amitsharmaamit420@gmail.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="clss"><i className="uil uil-times"></i></span>
      </div>

      <div id="scrollsmoother-container">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light tc-navbar-st8">
          <div className="container-fluid p-4">
            <a href="#" className="logo th-30">
              <img src="/assets/img/logo_footer.png" alt="" />
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="nav-side ms-lg-auto d-none">
                <a className="d-none d-lg-inline-block side_menu_btn" href="#">
                  <span className="txt">menu</span>
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Header */}
        <header className="tc-header-st8">
            <div className="container">
               <div className="row gx-lg-0">
                  <div className="col-lg-7">
                     <div className="content pt-150">
                        <div className="mini-img mb-40 offset-lg-6">
                        <img src="/assets/img/header_mini.jpg" alt="" className="img-cover" />
                        </div>
                        <h1 className="bold">
                           <div className="text-row">
                              <div className="txt">Hello, I'm Amit Sharma</div>
                              <img src="/assets/img/vec2.svg" alt="" className="shap" />
                              Expert
                           </div>
                           <div className="text-row">WordPress</div>
                           <div className="text-row">Developer</div>
                        </h1>
                        <div className="text green fsz-21 fw-500 mt-50 col-lg-5 offset-lg-2">
                           <span className="cr-dark1 d-inline">
                           Website &amp; Plugin Developer | WooCommerce &amp; API Integration
                           </span>
                           Working with 300+ clients worldwide. 4 years of experience
                           <span className="cr-dark1 d-inline">
                           in PHP, WordPress, and custom plugin development. 😃
                           </span>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-5">
                     <div className="hero-img">
                        <img src="/assets/img/amit_profile.png" alt="" />
                     </div>
                  </div>
               </div>
            </div>
            <img src="/assets/img/header_shaps.png" alt="" className="header-shaps" />
            <span class="float-txt"> Amit Sharma </span>
         </header>

        {/* Main Content */}
        <main>
          {/* Marquee Sliders */}
          <section className="tc-marq-sliders">
            <div className="slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <h6 className="item fsz-24">WordPress Theme Customization</h6>
                </div>
                <div className="swiper-slide">
                  <h6 className="item fsz-24">Plugin Development & Customization</h6>
                </div>
                <div className="swiper-slide">
                  <h6 className="item fsz-24">WooCommerce & Payment Gateway Integration</h6>
                </div>
                <div className="swiper-slide">
                  <h6 className="item fsz-24">API Development & Integration</h6>
                </div>
                <div className="swiper-slide">
                  <h6 className="item fsz-24">Speed Optimization & Security</h6>
                </div>
              </div>
            </div>
            <div className="slider" dir="rtl">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <h6 className="item fsz-24">WordPress Theme Customization</h6>
                </div>
                <div className="swiper-slide">
                  <h6 className="item fsz-24">Plugin Development & Customization</h6>
                </div>
                <div className="swiper-slide">
                  <h6 className="item fsz-24">WooCommerce & Payment Gateway Integration</h6>
                </div>
                <div className="swiper-slide">
                  <h6 className="item fsz-24">API Development & Integration</h6>
                </div>
                <div className="swiper-slide">
                  <h6 className="item fsz-24">Speed Optimization & Security</h6>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="aboutH" className="tc-about-st8 wow fadeIn slow" data-wow-delay="0.2s">
            <div className="container">
              <div className="title">
                <div className="row justify-content-between align-items-center">
                  <div className="col-lg-7">
                    <h6 className="fsz-16 fw-200 mb-40">
                      <img src="/assets/img/tit_ico.svg" alt="" className="icon" />
                      <span className="txt hamida mx-2">About My Story</span>
                      <img src="/assets/img/tit_ico2.svg" alt="" className="icon" />
                    </h6>
                    <h2 className="fsz-80 hamida" style={{ textTransform: 'capitalize' }}>
                      Custom WordPress Development for Every Client
                    </h2>
                  </div>
                  <div className="col-lg-4 w-auto">
                    <a href="#" className="rotate-box" data-speed="1" data-lag="0.4">
                      <div className="rotate-circle rotate-text">
                        <svg className="textcircle" viewBox="0 0 500 500">
                          <defs>
                            <path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"></path>
                          </defs>
                          <text>
                            <textPath xlinkHref="#textcircle" textLength="900">
                              the Expert Developer amit
                            </textPath>
                          </text>
                        </svg>
                      </div>
                      <img src="/assets/img/logo.png" alt="" className="icon" />
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 offset-lg-1">
                    <div className="text-content">
                      <div className="text fsz-16 green mt-40">
                        With 4 years of experience in PHP and WordPress development, my journey began with building simple themes and plugins, which soon turned into a full-time passion. What excites me the most about WordPress development is the ability to create custom solutions that enhance website performance, security, and user experience.
                      </div>
                      <div className="text fsz-16 cr-777 mt-40">
                        <span className="cr-dark1 fw-bold">
                          I specialize in:<br />
                          ✅ Custom WordPress Theme & Plugin Development<br />
                          ✅ WooCommerce & Payment Gateway Integration<br />
                          ✅ API Development & Third-Party Integrations<br />
                          ✅ Speed Optimization & Security Enhancements<br />
                          ✅ Bug Fixing & Maintenance<br /><br />
                          
                          I prioritize your satisfaction
                          My goal is to deliver high-quality, scalable, and SEO-friendly websites tailored to your business needs. Let's collaborate to build something amazing!
                        </span>
                      </div>
                      <a href="/assets/img/amit_resume.pdf" download className="cir-butn line-butn icon-175 mt-50 d-inline-flex" target="_blank" rel="noopener noreferrer">
                        <div className="cont">
                          <span className="txt fsz-30">Resume</span>
                          <img src="/assets/img/download.png" alt="" className="arrow" />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 offset-lg-1">
                    <div className="balo">
                      <img src="/assets/img/ambadu.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skillH" className="tc-skills-st8">
            <div className="section-content wow fadeIn slow" data-wow-delay="0.2s">
              <div className="container">
                <div className="title">
                  <h6 className="fsz-16 fw-200 mb-40">
                    <img src="/assets/img/tit_ico 3.png" alt="" className="icon" />
                    <span className="txt jannat mx-2" style={{ textTransform: 'capitalize', color: '#fff' }}>
                      skills & achievement
                    </span>
                    <img src="/assets/img/tit_ico2 1.png" alt="" className="icon" />
                  </h6>
                  <h2 className="fsz-80 hamida text-uppercase" style={{ textTransform: 'capitalize', color: 'white' }}>
                    skills & achievement
                  </h2>
                  <img src="/assets/img/Vector.png" alt="" className="vec3" />
                </div>
                <div className="row gx-5">
                  <div className="col-lg-6">
                    <div className="info mt-50">
                      <div className="text fsz-16 cr-777 col-lg-5">
                        Since 2021, I have been working as a PHP WordPress Developer, creating custom themes, plugins, and optimizing website performance.
                      </div>
                      <div className="lg-txt hamida">
                        <span>a</span>
                        <span>m</span>
                        <span>i</span>
                        <span>t</span>
                      </div>
                      <div className="text fsz-16 cr-777 col-lg-5 ms-lg-auto">
                        I have successfully completed multiple projects on platforms like Fiverr and Upwork, delivering high-quality solutions to clients worldwide.
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="progress-side mt-50">
                      <div className="text fsz-16 cr-777">
                        I have worked with MetaCrown LLC (US) from 2022 to 2023 as a freelance WordPress developer, building custom solutions tailored to business needs.
                      </div>
                      <div className="progress-content pt-20">
                        <div className="progress-item mt-30">
                          <h6 className="fsz-16 jannat fw-500 mt-30" style={{ color: 'white' }}>
                            Custom WordPress Theme & Plugin Development 95%
                          </h6>
                          <br />
                          <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{ width: '95%' }}></div>
                          </div>
                        </div>
                        <div className="progress-item mt-30">
                          <h6 className="fsz-16 jannat fw-500 mt-30" style={{ color: 'white' }}>
                            WooCommerce & Payment Gateway Integration 90%
                          </h6>
                          <br />
                          <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{ width: '90%' }}></div>
                          </div>
                        </div>
                        <div className="progress-item mt-30">
                          <h6 className="fsz-16 jannat fw-500 mt-30" style={{ color: 'white' }}>
                            PHP & MySQL Database Management 85%
                          </h6>
                          <br />
                          <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{ width: '85%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Portfolio Section */}
          <section id="portH" className="tc-portfolio-st8">
            <div className="container">
              <div className="title wow fadeIn slow" data-wow-delay="0.2s">
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <h2 className="mb-5 mb-lg-0 hamida">work</h2>
                  </div>
                  <div className="col-lg-5">
                    <h3 className="fsz-50 hamida mb-10">My Portfolio</h3>
                    <div className="text fsz-16 cr-666 mb-30">
                      Explore a selection of my best projects that highlight my expertise in WordPress, PHP Development, and Custom Web Solutions. From WooCommerce stores to custom plugin development, each project showcases my ability to build dynamic, user-friendly, and high-performing websites.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-content wow fadeIn slow" data-wow-delay="0.2s" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-work1">
                <div className="projects">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6">
                        <a href="https://mikeypicks.com/" target="_blank" rel="noopener noreferrer" className="project-card">
                          <div className="img chotur">
                            <img src="/assets/img/mickey.png" alt="" className="img-cover" />
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-6">
                        <a href="https://wealthconsultant.ca/" target="_blank" rel="noopener noreferrer" className="project-card">
                          <div className="img chotur">
                            <img src="/assets/img/lead_gen.png" alt="" className="img-cover" />
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4">
                        <a href="https://abpersonalinjury.ca/" target="_blank" rel="noopener noreferrer" className="project-card">
                          <div className="img chotur">
                            <img src="/assets/img/alberts.png" alt="" className="img-cover" />
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4">
                        <a href="https://mazzeolaw.ca/" target="_blank" rel="noopener noreferrer" className="project-card">
                          <div className="img chotur">
                            <img src="/assets/img/mazzelaw.png" alt="" className="img-cover" />
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4">
                        <a href="https://sharpwaysports.com/" target="_blank" rel="noopener noreferrer" className="project-card">
                          <div className="img chotur">
                            <img src="/assets/img/sharp_sports.png" alt="" className="img-cover" />
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4">
                        <a href="https://bhaaratfilings.com/" target="_blank" rel="noopener noreferrer" className="project-card">
                          <div className="img chotur">
                            <img src="/assets/img/trademark.png" alt="" className="img-cover" />
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4">
                        <a href="https://holyimpressions.com/" target="_blank" rel="noopener noreferrer" className="project-card">
                          <div className="img chotur">
                            <img src="/assets/img/hollyimpress.png" alt="" className="img-cover" />
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4">
                        <a href="https://injuredinanaccident.ca/" target="_blank" rel="noopener noreferrer" className="project-card">
                          <div className="img chotur">
                            <img src="/assets/img/injury.png" alt="" className="img-cover" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <center>
              <a href="https://wa.me/9816424057" target="_blank" rel="noopener noreferrer" className="cir-butn icon-200">
                <div className="cont">
                  <span className="txt fsz-16">Start Now</span>
                  <img src="/assets/img/arrow_wh.svg" alt="" className="arrow" />
                </div>
              </a>
            </center>
          </section>

          {/* Testimonials Section */}
          <section className="tc-testimonials-st8">
            <div className="container">
              <div className="title text-center mb-50 wow fadeIn slow" data-wow-delay="0.2s">
                <div className="row justify-content-center">
                  <div className="col-lg-7">
                    <h6 className="fsz-16 fw-200 mb-40">
                      <img src="/assets/img/tit_ico.svg" alt="" className="icon" />
                      <span className="txt hamida mx-2">What client Says</span>
                      <img src="/assets/img/tit_ico2.svg" alt="" className="icon" />
                    </h6>
                    <h2 className="fsz-50 hamida">
                      Best of our Problem Solutions For Our Testimonials
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row align-items-center gx-5 wow fadeIn slow" data-wow-delay="0.2s">
                <div className="col-lg-6">
                  <div className="testi-slider">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="testi-card">
                          <div className="rate-wrapper">
                            <span className="icon">
                              <img src="/assets/img/qt.svg" alt="" />
                            </span>
                            <span className="num">5.00</span>
                            <div className="stars cr-orange1 ms-20">
                              <i className="uil uil-favorite"></i>
                              <i className="uil uil-favorite"></i>
                              <i className="uil uil-favorite"></i>
                              <i className="uil uil-favorite"></i>
                              <i className="uil uil-favorite"></i>
                            </div>
                            <span className="fsz-16 op-4 ms-2 text-capitalize">reviews</span>
                          </div>
                          <div className="main-txt">
                            We really loved working with Hamida! Very creative, and understood our concept really quickly Thank you for your efforts!
                          </div>
                          <div className="user-info">
                            <a href="#" className="butn-1 rounded-pill border-2 border border-dark1">
                              <span className="black">Landing page design</span>
                            </a>
                            <h6 className="fsz-24 fw-500 mt-20">Fatma Marzou</h6>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testi-card">
                          <div className="rate-wrapper">
                            <span className="icon">
                              <img src="/assets/img/qt.svg" alt="" />
                            </span>
                            <span className="num">5.00</span>
                            <div className="stars cr-orange1 ms-20">
                              <i className="uil uil-favorite"></i>
                              <i className="uil uil-favorite"></i>
                              <i className="uil uil-favorite"></i>
                              <i className="uil uil-favorite"></i>
                              <i className="uil uil-favorite"></i>
                            </div>
                            <span className="fsz-16 op-4 ms-2 text-capitalize">reviews</span>
                          </div>
                          <div className="main-txt">
                            I showed her my hand drawn mockup and what someone else had done with it and she took it and far exceeded my vision for the landing page and design. I HIGHLY recommend Hamida
                          </div>
                          <div className="user-info">
                            <a href="http://surl.li/utaqu" className="butn-1 rounded-pill border-2 border border-dark1">
                              <span className="black">Landing page design</span>
                            </a>
                            <h6 className="fsz-24 fw-500 mt-20">Lori Jwelel</h6>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testi-card">
                          <div className="rate-wrapper">
                            <span className="icon">
                              <img src="/assets/img/qt.svg" alt="" />
                            </span>
                            <span className="num">5.00</span>
                            <div className="stars cr-orange1 ms-20">
                              <i className="uil uil-favorite"></i>
                              <i className="uil uil-favorite"></i>
                              <i className="uil uil-favorite"></i>
                              <i className="uil uil-favorite"></i>
                              <i className="uil uil-favorite"></i>
                            </div>
                            <span className="fsz-16 op-4 ms-2 text-capitalize">reviews</span>
                          </div>
                          <div className="main-txt">
                            I am honestly blown away by the quality of the design! I would definitely use hamida for all my project needs in the future.
                          </div>
                          <div className="user-info">
                            <a href="http://surl.li/utapt" className="butn-1 rounded-pill border-2 border border-dark1">
                              <span className="black">website UI/UX design</span>
                            </a>
                            <h6 className="fsz-24 fw-500 mt-20">Thomas Bryian</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-pagination"></div>
                  </div>
                </div>
                <div className="col-lg-1 d-none d-lg-block">
                  <div className="trans-txt">
                    <img src="/assets/img/vec3.svg" alt="" className="icon" />
                    <span className="txt hamida">What Client Says?</span>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="img ms-lg-5 mt-5 mt-lg-0">
                    <img src="/assets/img/testi.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="tc-footer-st8">
          <div className="subscribe wow fadeIn slow" data-wow-delay="0.2s">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h2 className="hamida">Let's start Project</h2>
                </div>
                <div className="col-lg-6">
                  <a href="mailto:amitsharmaamit420@gmail.com" className="cir-butn line-butn-wh icon-200 mt-5 mt-lg-0 ms-lg-auto me-lg-0">
                    <div className="cont">
                      <span className="txt hamida fsz-30">Start Now</span>
                      <img src="/assets/img/arrow_wh.svg" alt="" className="arrow" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="links-wrapper">
              <div className="row mano__row">
                <div className="col-lg-7 mt-5 mt-lg-0">
                  <h5 className="fsz-300 hamida">Contact</h5>
                  <ul className="contact-links mt-80">
                    <li>
                      <a href="https://wa.me/9816424057">9816424057</a>
                    </li>
                    <li>
                      <a href="mailto:amitsharmaamit420@gmail.com">amitsharmaamit420@gmail.com</a>
                    </li>
                  </ul>
                  <div className="social_links behen d-none">
                    <a href="https://www.behance.net/hamida_jannat">
                      <i className="uil uil-behance"></i>
                    </a>
                    <a href="https://www.instagram.com/hamida_jannat20/">
                      <i className="uil uil-instagram"></i>
                    </a>
                    <a href="https://dribbble.com/hamida_jannat">
                      <i className="uil uil-dribbble"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-5 balo">
                  <img src="/assets/img/footer.jpg" width="100%" alt="" />
                </div>
              </div>
              <br /><br /><br /><br />
              <div className="row balo">
                <img src="/assets/img/logo_footer.png" width="100%" alt="" />
              </div>
              <p className="fsz-16 mt-50 black">
                Copyright: © 2024 by
                <a href="#" className="cr-dark1">amit_sharma</a>
              </p>
            </div>
          </div>
          <img src="/assets/img/foot_img.png" alt="" className="foot-shapes" />
        </footer>
      </div>

      {/* To Top Button */}
      <a href="#" className="to_top" id="to_top">
        <i className="uil uil-angle-up"></i>
      </a>

      {/* WhatsApp Chat Button */}
      <div className="elfsight-app-cf308353-0528-4a3e-a4ad-1740048e95a0" data-elfsight-app-lazy></div>
    </>
  );
}

export default App;
