// Styles
import './footer.scss';

// Assets
// import instagramIcon from '../../../public/assets/instagram-icon.svg';
// import emailIcon from '../../../public/assets/email-icon.svg';
// import linkedinIcon from '../../../public/assets/linkedin-icon.svg';
// import githubIcon from '../../../public/assets/github-icon.svg';

import instagramIcon from '/assets/instagram-icon.svg';
import emailIcon from '/assets/email-icon.svg';
import linkedinIcon from '/assets/linkedin-icon.svg';
import githubIcon from '/assets/github-icon.svg';

function Footer() {
	return (
		<div className="footer content-wrapper">
			<div className="footer__social-media">
				<ul className="footer__social-media-list">
					<li className="footer__social-media-item">
						<a
							className="footer__social-media-link"
							href="https://www.instagram.com/davidtothekim/"
							target="_blank"
						>
							<img className="footer__social-media-icon" src={instagramIcon} alt="instagram" />
						</a>
					</li>
					<li className="footer__social-media-item">
						<a className="footer__social-media-link" href="mailto:dgkim.david@gmail.com" target="_blank">
							<img className="footer__social-media-icon" src={emailIcon} alt="email" />
						</a>
					</li>
					<li className="footer__social-media-item">
						<a
							className="footer__social-media-link"
							href="https://www.linkedin.com/in/david-dg-kim/"
							target="_blank"
						>
							<img className="footer__social-media-icon" src={linkedinIcon} alt="linkedin" />
						</a>
					</li>
					<li className="footer__social-media-item">
						<a
							className="footer__social-media-link"
							href="https://github.com/davidtothekim"
							target="_blank"
						>
							<img className="footer__social-media-icon" src={githubIcon} alt="github" />
						</a>
					</li>
				</ul>
			</div>
			<div>
				<p className="footer__text">Built by David Kim</p>
			</div>
		</div>
	);
}

export default Footer;
