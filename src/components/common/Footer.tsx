import { FaFacebook, FaInstagram, FaPinterest, FaTiktok } from "react-icons/fa";
import InputElement from "../form-elements/InputElement";

const Footer = () => {
  return (
    <footer className="w-full bg-accent flex justify-center items-center text-white pb-8">
      <div className="max-w-1224 w-full flex flex-wrap justify-between pt-12 px-3 lg:px-0">
        <div className="w-full lg:w-5/12 ">
          {/* Left top */}
          <div className="footer-left-top w-full">
            <h5 className="text-xl font-bold mb-6">Join our club, get 15% off for your Birthday</h5>

            <InputElement
              placeholder="Enter Your Email Address"
              type="text"
              name="news-letter"
              className="mb-6 w-full max-w-lg form-input--secondary"
            />

            <div className="flex items-center ">
              <input id="newsletter-check" type="checkbox"></input>
              <label htmlFor="newsletter-check" className="text-xs mb-0 ms-2" style={{ maxWidth: "470px" }}>
                By Submittng your email, you agree to receive advertising emails from Modimal.
              </label>
            </div>
          </div>

          {/* Left bottom */}
          <div className="footer-left-bottom w-full flex gap-2 mt-24">
            <FaInstagram className="text-2xl" />
            <FaFacebook className="text-2xl" />
            <FaPinterest className="text-2xl" />
            <FaTiktok className="text-2xl" />
          </div>

          <div className="flex items-center mt-10">
            <span className="me-2">&copy;</span>
            <span>2023 modimal. All Rights Reserved.</span>
          </div>
        </div>

        {/* Right Side of the footer */}
        <div className="w-full lg:w-6/12  flex justify-between">
          {/* About Modimal */}
          <div className="flex">
            <div>
              <h5 className="text-white text-xl font-bold mb-6">About Modimal</h5>

              <ul>
                <li className="text-lg font-light mb-2">Collection</li>
                <li className="text-lg font-light mb-2">Sustainability</li>
                <li className="text-lg font-light mb-2">Privacy Policy</li>
                <li className="text-lg font-light mb-2">Support System</li>
                <li className="text-lg font-light mb-2">Terms & Condition</li>
                <li className="text-lg font-light mb-2">Copyright Notice</li>
              </ul>
            </div>
          </div>

          {/* Help & Support */}
          <div className="flex ms-6">
            <div>
              <h5 className="text-white text-xl font-bold mb-6">Help & Support</h5>

              <ul>
                <li className="text-lg font-light mb-2">Orders & Shipping</li>
                <li className="text-lg font-light mb-2">Returns & Refunds</li>
                <li className="text-lg font-light mb-2">FAQs</li>
                <li className="text-lg font-light mb-2">Contact Us</li>
              </ul>
            </div>
          </div>

          {/* About Modimal */}
          <div className="flex ms-6">
            <div>
              <h5 className="text-white text-xl font-bold mb-6">Join Up</h5>

              <ul>
                <li className="text-lg font-light mb-2">Modimal Club</li>
                <li className="text-lg font-light mb-2">Careers</li>
                <li className="text-lg font-light mb-2">Visit Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
