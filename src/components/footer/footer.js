import React from "react";
import './footer.css'

const footer = () => {
  return (
    <div>
      <section className="links">
        <div className="links-inner">
          <ul>
            <li>
              <h3>ABOUT</h3>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Stories</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Wholesale</a>
            </li>
          </ul>
          <ul>
            <li>
              <h3>HELP</h3>
            </li>
            <li>
              <a href="#">Payments</a>
            </li>
            <li>
              <a href="#">Shipping</a>
            </li>
            <li>
              <a href="#">Cancellation & Returns</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Report Infringement</a>
            </li>
          </ul>
          <ul>
            <li>
              <h3>POLICY</h3>
            </li>
            <li>
              <a href="#">Return Policy</a>
            </li>
            <li>
              <a href="#">Terms Of Use</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
            <li>
              <a href="#">EPR Compliance</a>
            </li>

          </ul>
          <ul>
            <li>
              <h3>SOCIAL</h3>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">YouTube</a>
            </li>
            <li>
              <a href="#">Mail Us:</a>
            </li>
            <li>
              <a href="#">Fax</a>
            </li>
          </ul>
         </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <i style={{color:'white'}} className="fas fa-globe fa-2x"></i>English(United States)
          </div>
        <div>
              <h4>Follow us on</h4>
        </div>
          <ul>
            <li>
              <a href="https://www.instagram.com/" target='_blank'><i class="fab  fa-instagram fa-3x" aria-hidden="true"></i></a>
            </li>
            <li>
            <a href="https://www.twitter.com/" target='_blank'><i class="fab  fa-twitter fa-3x" aria-hidden="true"></i></a>
            </li>
            <li>
            <a href="https://www.linkedin.com/" target='_blank'><i class="fab  fa-linkedin fa-3x" aria-hidden="true"></i></a>
            </li>
            <li>
            <a href="https://www.reddit.com/" target='_blank'><i class="fab  fa-reddit fa-3x" aria-hidden="true"></i></a>
            </li>
            <li>
              <a className="name" href="#">&copy; Atul Kaushik 2020</a>
            </li>
          </ul>
        </div>
      
        {/* <section class="follow">
            <p>Follow Microsoft</p>
            <a href="Https://facebook.com">
                <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="Https://facebook.com">
                <i class="fa fa-twitter" aria-hidden="true"></i>
                
            </a>
            <a href="Https://facebook.com">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
        </section> */}


      </footer>
    </div>
  );
};

export default footer;
