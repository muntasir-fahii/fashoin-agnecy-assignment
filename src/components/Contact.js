import { CiFacebook, CiInstagram, CiYoutube, CiTwitter } from "react-icons/ci";

const Contact = () => {
  return (
    <section className="wrapper">
      <div className="contact">
        <div className="contact-right">
          <h2 className="contact-title">contact</h2>
          <p>Finland, Helsinki, 2 boulevard de Cimiez, 08000.</p>
          <p>+300 549 86664</p>
          <p>+398 319 05628</p>
          <p>+333 297 56375</p>
          <div className="icons">
            <span>
              <CiInstagram />
            </span>
            <span>
              <CiFacebook />
            </span>
            <span>
              <CiTwitter />
            </span>
            <span>
              <CiYoutube />
            </span>
          </div>
        </div>
        <div className="contact-form">
          <label htmlFor="Name">
            <input
              className="input"
              type="text"
              placeholder="Name"
              id="name"
              required
            />
          </label>
          <label htmlFor="email">
            <input
              className="input"
              type="email"
              placeholder="Email"
              id="email"
              required
            />
          </label>
          <label htmlFor="text">
            <input
              className="input"
              type="text"
              placeholder="Messege"
              id="Messege"
              required
            />
          </label>
          <button className="join-btn">Send For Join</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
