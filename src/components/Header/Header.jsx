// Styles
import './header.scss';

// Dependencies
import { useState, useEffect } from 'react';

// Assets
// import profileIcon from '../../../public/assets/profile-icon.svg';
// import resumePdf from '../../../public/assets/resume.pdf';

import profileIcon from '/assets/profile-icon.svg';
import resumePdf from '/assets/resume.pdf';

function Header() {
	// States
	// Hamburger Menu
	const [ isHamburgerMenuOpen, setIsHamburgerMenuOpen ] = useState(false);

	// Window Size
	const [ size, setSize ] = useState();

	// UseEffects
	useEffect(() => {
		function updateSize() {
			setSize([ window.innerWidth ]);
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);

	useEffect(
		() => {
			if (size > 768) {
				setIsHamburgerMenuOpen(false);
			}
		},
		[ size ]
	);

	// Event Handlers
	const handleMenuClick = () => {
		setIsHamburgerMenuOpen(isHamburgerMenuOpen ? false : true);
	};

	const handleVerticalNavLinkClick = () => {
		setIsHamburgerMenuOpen(false);
	};

	return (
		<div className="header">
			<div className="header__nav">
				<a className="header__home-icon" href="/">
					<img src={profileIcon} />
				</a>
				<div className="header__horizontal-menu">
					<ol className="header__horizontal-menu-list font-mono">
						<li className="header__horizontal-menu-list-item">
							<a className="header__horizontal-menu-link" href="/#about-section">
								01.<span className="header__horizontal-menu-link-text">About</span>
							</a>
						</li>
						<li className="header__horizontal-menu-list-item">
							<a className="header__horizontal-menu-link" href="/#experiences-section">
								02.<span className="header__horizontal-menu-link-text">Experience</span>
							</a>
						</li>
						<li className="header__horizontal-menu-list-item">
							<a className="header__horizontal-menu-link" href="/#projects-section">
								03.<span className="header__horizontal-menu-link-text">Work</span>
							</a>
						</li>
						<li className="header__horizontal-menu-list-item">
							<a className="header__horizontal-menu-link" href="/#contact-section">
								04.<span className="header__horizontal-menu-link-text">Contact</span>
							</a>
						</li>
					</ol>
					<div className="header__resume-bttn">
						<a className="header__resume-link" href={resumePdf} target="_blank">
							Resume
						</a>
					</div>
				</div>
				<div
					className={
						isHamburgerMenuOpen ? (
							`header__hamburger-menu header__hamburger-menu--open`
						) : (
							`header__hamburger-menu`
						)
					}
					onClick={handleMenuClick}
				>
					<span className="header__hamburger-menu-icon" />
					<span className="header__hamburger-menu-icon" />
					<span className="header__hamburger-menu-icon" />
					<span className="header__hamburger-menu-icon" />
					<span className="header__hamburger-menu-icon" />
					<span className="header__hamburger-menu-icon" />
				</div>
			</div>

			{isHamburgerMenuOpen ? (
				<aside className="header__menu-aside header__menu-aside--visible">
					<ol className="header__vertical-menu-list">
						<li className="header__vertical-menu-list-item">
							<p className="header__vertical-menu-numbered-item">01.</p>
							<a
								className="header__vertical-menu-link"
								href="/#about-section"
								onClick={handleVerticalNavLinkClick}
							>
								<span className="header__vertical-menu-link-text">About</span>
							</a>
						</li>
						<li className="header__vertical-menu-list-item">
							<p className="header__vertical-menu-numbered-item">02.</p>
							<a
								className="header__vertical-menu-link"
								href="/#about-section"
								onClick={handleVerticalNavLinkClick}
							>
								<span className="header__vertical-menu-link-text">Experience</span>
							</a>
						</li>
						<li className="header__vertical-menu-list-item">
							<p className="header__vertical-menu-numbered-item">03.</p>
							<a
								className="header__vertical-menu-link"
								href="/#about-section"
								onClick={handleVerticalNavLinkClick}
							>
								<span className="header__vertical-menu-link-text">Work</span>
							</a>
						</li>
						<li className="header__vertical-menu-list-item">
							<p className="header__vertical-menu-numbered-item">04.</p>
							<a
								className="header__vertical-menu-link"
								href="/#contact-section"
								onClick={handleVerticalNavLinkClick}
							>
								<span className="header__vertical-menu-link-text">Contact</span>
							</a>
						</li>
					</ol>
					<div className="header__resume-bttn">
						<a className="header__resume-link header__resume-link--aside" href={resumePdf} target="_blank">
							Resume
						</a>
					</div>
				</aside>
			) : (
				<aside className="header__menu-aside">
					<ol className="header__vertical-menu-list">
						<li className="header__vertical-menu-list-item">
							<p className="header__vertical-menu-numbered-item">01.</p>
							<a className="header__vertical-menu-link" href="/#about-section">
								<span className="header__vertical-menu-link-text">About</span>
							</a>
						</li>
						<li className="header__vertical-menu-list-item">
							<p className="header__vertical-menu-numbered-item">02.</p>
							<a className="header__vertical-menu-link" href="/#experiences-section">
								<span className="header__vertical-menu-link-text">Experience</span>
							</a>
						</li>
						<li className="header__vertical-menu-list-item">
							<p className="header__vertical-menu-numbered-item">03.</p>
							<a className="header__vertical-menu-link" href="/#projects-section">
								<span className="header__vertical-menu-link-text">Work</span>
							</a>
						</li>
						<li className="header__vertical-menu-list-item">
							<p className="header__vertical-menu-numbered-item">04.</p>
							<a className="header__vertical-menu-link" href="/#contact-section">
								<span className="header__vertical-menu-link-text">Contact</span>
							</a>
						</li>
					</ol>
					<div className="header__resume-bttn">
						<a
							className="header__resume-link header__resume-link--aside"
							href={resumePdf}
							target="_blank"
							rel="noopener noreferrer"
						>
							Resume
						</a>
					</div>
				</aside>
			)}

			{isHamburgerMenuOpen ? <div className="header__overlay" /> : null}
		</div>
	);
}

<li className="header__horizontal-menu-list-item">
	<a className="header__horizontal-menu-link" href="/#about-section">
		01.<span className="header__horizontal-menu-link-text">About</span>
	</a>
</li>;

export default Header;
