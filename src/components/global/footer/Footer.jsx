import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__blocks">
          <div className="footer__blocks-items">
            <h5 className="footer__blocks-header">get in touch</h5>
            <p>
              Fusce dapibus, tellus commodo, tortor mauris condimentum utellus
              fermentum, porta sem malesuada magna.{" "}
            </p>
            <ul className="footer__blocks-contacts">
              <li className="footer__blocks-adress">
                Moonshine Street No: 14/05 Light City, Jupiter
              </li>
              <li className="footer__blocks-phone">0247 541 65 87</li>
              <li className="footer__blocks-email">support@longwave.com</li>
            </ul>
          </div>
          <div className="footer__blocks-items">
            <h5 className="footer__blocks-header">twitter</h5>
            <ul className="footer__blocks-second">
              <li>
                Aenean lacinia bibendum nulla sed leo posuere erat a ante
                venenatis dapibus posuere velit aliquet.
              </li>
              <li>
                Donec ullamcorper metus auctor fringilla. Nullam quis risus
                eget.
              </li>
              <li>
                Vestibulum id ligula porta euismod semper. Maecenas faucibus
                mollis.
              </li>
            </ul>
          </div>
          <div className="footer__blocks-items">
            <h5 className="footer__blocks-header">popular posts</h5>
            <ul className="footer__blocks-third">
              <li>
                <p>
                  Vivamus sagittis lacus vel augue laoreet rutrum dolor auctor.
                </p>
                <time dateTime="14-11-2021">14 Nov, 2021 </time>
              </li>
              <li>
                <p>Scelerisque nisl consectetur et..</p>
                <time dateTime="14-11-2021">22 May, 2021 </time>
              </li>
              <li>
                <p>
                  Pellentesque ornare sem lacinia quam venenatis vestibulum.
                </p>
                <time dateTime="14-11-2021">15 July, 2021 </time>
              </li>
            </ul>
          </div>

          <div className="footer__blocks-items">
            <h5 className="footer__blocks-header">about us</h5>
            <p className="footer__block-four">
              Vestibulum id ligula porta felis euismod semper. Duis mollis, est
              non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
              sem nec elit.{" "}
            </p>

            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus curabitur blandit tempus.
            </p>
          </div>
        </div>

        <p className="footer__copyright">
          © 2021 Orion. All rights reserved. Theme by elemis.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
