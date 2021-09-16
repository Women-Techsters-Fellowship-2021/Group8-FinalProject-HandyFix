import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages.css";
import nail from "../Images/nail.jpeg";
import food from "../Images/4food.jpeg";
import drawing from "../Images/drawing.jpeg";
import firework from "../Images/fireworks.jpeg";
import tool from "../Images/tools.jpeg";
import carpentary from "../Images/bg1.jpeg";

const LandingPage = () => {
  return (
    <body>
      {/* ------------------Hero section ------------------ */}
      <section>
        <header className="hero-section">
          <div>
            <Link to="/landinPage">
              <p className="first" id="logo">
                LOGO
              </p>
            </Link>
            <Link to="#">
              <p className="first" id="serv">
                Services
              </p>
            </Link>
            <Link to="#">
              <p className="first" id="com">
                Company
              </p>
            </Link>

            

            <Link to="/Login" className="second">
              <p className="log">Login</p>
            </Link>
            <Link to="/SignUp" ><button type="button" className="second" id="btn">
              {" "}
              Create Account
            </button> </Link>
          </div>
          <div>
            <p className="hero-text">
              Squeaky door and need help?
              <br /> <b>HandyFix</b> has your back!
            </p>
          </div>
          <div className="hero-btn">
            <button type="submit" className="bk-btn">
              Book Now
            </button>
          </div>
        </header>
      </section>

      {/*------------------section 1-------------------  */}
      <section className="sec-one">
        <h3>HandyFix at a glance</h3>
        <div id="sec1-text">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae sequi impedit, vero unde nulla velit aspernatur eveniet
            veritatis minima , amet eum numquam ipsum facere necessitatibus
            reprehenderit nam quis architecto. Voluptas.
          </p>
          <p className="pa-mar">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae sequi impedit, vero unde nulla velit aspernatur eveniet
            veritatis minima , amet eum numquam ipsum facere necessitatibus
            reprehenderit nam quis architecto. Voluptas.
          </p>
          <p className="pa-mar">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae sequi impedit, vero unde nulla velit aspernatur eveniet
            veritatis minima , amet eum numquam ipsum facere necessitatibus
            reprehenderit nam quis architecto. Voluptas.
          </p>
          <p className="pa-mar">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae sequi impedit, vero unde nulla velit aspernatur eveniet
            veritatis minima , amet eum numquam ipsum facere necessitatibus
            reprehenderit nam quis architecto. Voluptas.
          </p>
        </div>
        <div>
          <button type="submit" className="bk-btn">
            Book Now
          </button>
          {/* ='bk-btn' */}
        </div>
      </section>

      {/* --------------section 3-------------- */}
      <section className="sec-three">
        <div className="first-cat-div">
          <h3>Categories of service</h3>
          <p>
            We provide varying levels of service with technically skilled
            personnel who are trained to achieve the highest level of customer
            satisfaction. Our services include:
          </p>
          <br />
          <p>
            <ul>
              <li>Carpentary</li>
              <li>Laundry</li>
              <li>Electricals</li>
              <li>Plumbing</li>
              <li>Generator repairs</li>
              <li>Air conditioner repairs</li>
            </ul>
            <br />
          </p>
          <p>
            Please click on book now to select the service you require.
            <br />
          </p>

          <button className="bk-btn">Book Now</button>
        </div>
        <div className="img-section">
          <div>
            <img src={nail} width={210} height={120} alt="" />
            <figcaption>MANICURIST</figcaption>
          </div>
          <div>
            <img src={tool} width={210} height={120} alt="" />
            <figcaption>ELECTRICALS</figcaption>
          </div>
          <div>
            <img src={carpentary} width={210} height={120} alt="" />
            <figcaption>PLUMBING</figcaption>
          </div>
          <div>
            <img src={firework} width={210} height={120} alt="" />
            <figcaption>GENERATOR REPAIRS</figcaption>
          </div>
          <div>
            <img src={drawing} width={210} height={120} alt="" />
            <figcaption>AIR CONDITIONER REPAIRS</figcaption>
          </div>
          <div>
            <img src={food} width={210} height={120} alt="" />
            <figcaption>ELECTRICALS</figcaption>
          </div>
        </div>
      </section>

      {/* ---------------------section 4----------------- */}

      <section className="sec-four">
        <h3> WHY CHOOSE OUR SERVICES</h3>

        <div className="sec-four-img">
          <img src={firework} width={250} height={350} alt="" />

          <div className="why-us">
            <div>
              <h4>Quality Assurance</h4>
              <p>
                {" "}
                Our artisans registered with HandyFix have professional
                certifications that have been authenticated and are in line with
                regulatory guidelines.
              </p>
            </div>
            <div>
              <h4>Safety</h4>
              <p>
                {" "}
                We work assiduously to ensure our clients enjoy the best
                customer experience by ensuring that they receive quality and
                excellent customer service.
              </p>
            </div>
            <div>
              <h4>Customer Services</h4>
              <p>Our prices are friendly and affordable.</p>
            </div>
            <div>
              <h4>Conveniences</h4>
              <p>
                All our artisans are trained to be Health, Safety and
                Environmentally conscious.
              </p>
            </div>
            <div>
              <h4>Average Prices</h4>
              <p>
                We provide our services giving suitable times while we can also
                work with your time where terms and conditions apply
              </p>
            </div>
            <div>
              <h4>Trusted Workers</h4>
              <p>
                Our artisans undergo thorough security and background checks, so
                you can rest assured that your safety is our concern
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------section 5------------------ */}

      <section className="sec-five">
        <div>
          <h3> WHAT OUR CUSTOMERS SAY </h3>
          <div className="div-one">
            {/* className='sec-five-pa' */}
            <div className="div-two">
              <div className="inner-div">
                <p>
                  Relocation felt ordinary until I needed a plumber!!! Being new
                  to the city, I didn’t know who I could trust. A colleague
                  recommended HandyFix and that was all I needed. Not only was
                  the plumber very efficient, he was prompt and very
                  professional. I highly recommend.
                  <p id="name">Christy Ikechukwu -Calabar, Nigeria</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="last-sec">
        <div className="last-sec-grid">
          <div>
            <h4>Services</h4>
            <ul>
              <li>Carpentary</li>
              <li>Laundry</li>
              <li>Painting</li>
              <li>Electricals</li>
              <li>Plumbing</li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>FAQs</li>
              <li>Get Started</li>
            </ul>
          </div>

          <div>
            <h4>Resources</h4>
            <ul>
              <li>Resources</li>
              <li>Media</li>
              <li>Our Artisans </li>
              <li>Security</li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>support@handyfix.com</li>
              <li>080001283773983893803</li>
            </ul>
          </div>
        </div>
      </section>
      <footer>
        <div className="logo">
          <p>Logo</p>
          <p>HandyFix</p>
        </div>
        <div>
          <p id="copy">
            {" "}
            <b>Copyright &copy; 2021.HandyFix. All rights reserved</b>
          </p>
        </div>
      </footer>
    </body>
  );
};

export default LandingPage;
