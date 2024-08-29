//Styles
import './project-card.scss';

//Assets
// import githubIcon from '../../../public/assets/github-icon.svg';
// import externalLinkIcon from '../../../public/assets/external-link-icon.svg';

import githubIcon from '/assets/github-icon.svg';
import externalLinkIcon from '/assets/external-link-icon.svg';

function ProjectCard({ details }) {
	return (
		<div className={`project-card project-card--${details.position}`}>
			<div className="project-card__mobile-hero">
				<img className="project-card__hero-image" src={details.image} />
			</div>

			<div className="project-card__desktop-hero">
				<div className="project-card__hero-image-container">
					<div className="project-card__hero-image-backdrop" />
					<img className="project-card__hero-image" src={details.image} />
				</div>
			</div>

			<div className={`project-card__carousel project-card__carousel--${details.position}`}>
				<div className={`project-card__header project-card__header--${details.position}`}>
					<p className="project-card__tag">{details.type}</p>
					<h3 className="project-card__title">{details.name}</h3>
				</div>
				<div className="project-card__body">
					<p className={`project-card__description project-card__description--${details.position}`}>
						{details.description}
					</p>
				</div>
				<ul className={`project-card__technology-list project-card__technology-list--${details.position}`}>
					{details.technologies.map((technology, index) => {
						return (
							<li className="project-card__tech-stack" key={index}>
								{technology}
							</li>
						);
					})}
				</ul>
				<div className={`project-card__links project-card__links--${details.position}`}>
					<a className="project-card__link" target="_blank" href={details.gitHubUrl}>
						<img className="project-card__icon" src={githubIcon} />
					</a>
					<a className="project-card__link" href={details.demoUrl} target="_blank">
						<img className="project-card__icon" src={externalLinkIcon} />
					</a>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
