import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function Footer() {
  return (
    <footer>
    <div className="footer">
       <div className="container">
          <div className="row">
             <div className="col-md-6 offset-md-3">
                <ul className="sociel">
                    <li> <Link to="/"><i className="fa fa-facebook-f"></i></Link></li>
                    <li> <Link to="/"><i className="fa fa-twitter"></i></Link></li>
                    <li> <Link to="/"><i className="fa fa-instagram"></i></Link></li>
                    <li> <Link to="/"><i className="fa fa-instagram"></i></Link></li>
                </ul>
             </div>
       </div>
       <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
             <div className="contact">
                <h3>conatct us</h3>
                <span>123 Second Street Fifth Avenue,<br/>
                  Manhattan, New York<br/>
                   +987 654 3210</span>
             </div>
          </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
             <div className="contact">
                <h3>ADDITIONAL LINKS</h3>
                <ul className="lik">
                    <li> <Link to="/">About us</Link></li>
                    <li> <Link to="/">Terms and conditions</Link></li>
                    <li> <Link to="/">Privacy policy</Link></li>
                    <li> <Link to="/">News</Link></li>
                     <li> <Link to="/">Contact us</Link></li>
                </ul>
             </div>
          </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
             <div className="contact">
                <h3>service</h3>
                 <ul className="lik">
                    <li> <Link to="/"> Data recovery</Link>    </li>
                    <li> <Link to="/">Computer repair</Link>   </li>
                    <li> <Link to="/">Mobile service</Link>    </li>
                    <li> <Link to="/">Network solutions</Link> </li>
                    <li> <Link to="/">Technical support</Link> </li>
                 </ul>
             </div>
          </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
             <div className="contact">
                <h3>About lighten</h3>
                <span>Tincidunt elit magnis nulla facilisis. Dolor Sapien nunc amet ultrices, </span>
             </div>
          </div>
       </div>
    </div>
       <div className="copyright">
          <p>Copyright 2019 All Right Reserved By <Link href="https://html.design/">Free html Templates</Link></p>
       </div>
    
 </div>
 </footer>
  );
}

export default Footer;