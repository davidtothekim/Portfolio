// Styles
import './body.scss';

// Components
import JobsTable from '../JobsTable/JobsTable';
import ProjectCard from '../ProjectCard/ProjectCard';

// Dependencies
import Spline from '@splinetool/react-spline';

function Body() {
	// Props
	let projects = [
		{
			name: 'WebTracer - A Productivity Tool to track your screen time!',
			type: 'Google Chrome Extension',
			description:
				'Discover and track your browsing habits! A simple chrome extension that tracks how much time you spend on the web everyday. View your total browsing time and a list of websites orderd by duration. Webtracer is available on the Chrome Web Store for free!',
			technologies: [ 'React', 'TypeScript', 'SASS', 'Google Web Store' ],
			gitHubUrl: 'https://github.com/davidtothekim/WebTracer',
			demoUrl:
				'https://chromewebstore.google.com/detail/webtracer-a-productivity/cbcjdipdfpjomdjfbhimgbkebeekbepm',
			image: '/assets/WebTracer-project-image.png',
			position: 'right'
		},
		{
			name: 'SET Volleyball',
			type: 'Full-Stack Web App',
			description:
				'A web app that allows uers to host, join and browse volleyball games in and around the GTA! Includes features to filter games by level, gender, or experience and provides a map to see the games that are closest to you.',
			technologies: [
				'React',
				'Express',
				'Firebase',
				'Passport.js',
				'Google Maps API',
				'Google Places API',
				'SASS'
			],
			gitHubUrl: 'https://github.com/davidtothekim/set-app',
			demoUrl: ' http://3.17.28.169/',
			image: '/assets/set-app-project-image.png',
			position: 'left'
		},
		{
			name: 'Pokédoro - Pomodoro Productivity App',
			type: 'React Native',
			description:
				'A Pokémon themed pomodoro timer that helps you implement the Pomodoro technique, an effective time management method that can boost your productivity and focus.  \n\n This project is still a work in progress!',
			technologies: [ 'React Native', 'PokéAPI' ],
			gitHubUrl: '',
			demoUrl: '',
			image: '/assets/pokedoro-project-image.png',
			position: 'right'
		}
	];

	return (
		<div className="body">
			<section className="hero">
				<h1 className="hero__header">David Kim</h1>
				<h2 className="hero__subheader hero__subheader--white">Full-Stack Software Engineer</h2>
				<h2 className="hero__subheader hero__subheader--white">
					<span className="hero__title">Currently &nbsp;</span>Product Manager @ Scotia Digital
				</h2>
				{/* <h3 className="hero__title">Product Manager @ Scotia Digital</h3> */}
				<div className="hero__image-container">
					<Spline
						className="hero__image"
						scene="https://prod.spline.design/QtD8uPBZG2ic5UFb/scene.splinecode"
					/>
				</div>
			</section>

			<section className="about content-wrapper" id="about-section">
				<h2 className="numbered-heading">About Me</h2>
				<div>
					<p className="about__text">
						Hi there! My name is David, <span className="about__text--white">Product Manager</span> by day
						and <span className="about__text--yellow">Software Engineer</span> by night.
					</p>
					<p className="about__text">
						I enjoy bringing digital products to life, with a keen focus on creating experiences that drive
						<span className="about__text--yellow"> engagement</span> &{' '}
						<span className="about__text--yellow">growth</span>. My interest for software engineering
						started from my experiences as a Product Manager where I realized the value in being a{' '}
						<span className="about__text--yellow">product-oriented engineer</span> that can identify and
						build features that solve real <span className="about__text--yellow">user needs</span> and
						generate <span className="about__text--yellow">business revenue</span>.
					</p>
					<p className="about__text">Here are the technologies I use the most:</p>
				</div>
				<ul className="about__skills-list">
					<li>Javascript & ReactJS</li>
					<li>React Native</li>
					<li>HTML</li>
					<li>CSS & SASS</li>
					<li>Node.js & Express</li>
					<li>TypeScript</li>
					<li>MySQL</li>
					<li>MongoDB</li>
				</ul>
			</section>

			<section className="experiences content-wrapper" id="experiences-section">
				<h2 className="numbered-heading">My Experiences</h2>
				<JobsTable />
			</section>

			<section className="experiences content-wrapper" id="projects-section">
				<h2 className="numbered-heading">Projects I've Built</h2>
				<div className="experiences__projects">
					{projects.map((project, index) => {
						return <ProjectCard key={index} details={project} />;
					})}
				</div>
			</section>

			<section className="connect content-wrapper" id="contact-section">
				<h2 className="numbered-heading">Lets Keep in touch!</h2>
				<h3 className="connect__subheader">
					I appreciate you taking the time to stop by! Feel free to connect with me below and lets find some
					time to chat :)
				</h3>

				<div className="connect__bttn">
					<a className="connect__link" href="https://www.linkedin.com/in/david-dg-kim/" target="_blank">
						Send a message!
					</a>
				</div>
			</section>
		</div>
	);
}

export default Body;
