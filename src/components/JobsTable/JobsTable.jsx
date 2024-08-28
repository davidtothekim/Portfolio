// Styles
import './jobs-table.scss';

// Dependencies
import { useState } from 'react';
import jobs from './jobs-content';

function JobsTable() {
	// States
	const [ selectedCompany, setSelectedCompany ] = useState('Scotia Digital');
	const selectedJob = jobs.filter((job) => job.name === selectedCompany)[0];

	// Event Handlers
	const handleJobButtonClick = (e) => {
		let company = e.target.innerText;
		setSelectedCompany(company);
	};

	return (
		<div className="jobs-table">
			<div className="jobs-table__header">
				<button
					onClick={handleJobButtonClick}
					className={
						selectedJob.name === 'Scotia Digital' ? (
							'jobs-table__job-bttn jobs-table__job-bttn--selected'
						) : (
							'jobs-table__job-bttn'
						)
					}
				>
					<span>Scotia Digital</span>
				</button>
				<button
					className={
						selectedJob.name === 'DUCA' ? (
							'jobs-table__job-bttn jobs-table__job-bttn--selected'
						) : (
							'jobs-table__job-bttn'
						)
					}
					onClick={handleJobButtonClick}
				>
					<span>DUCA</span>
				</button>
				<button
					className={
						selectedJob.name === 'DDB Canada' ? (
							'jobs-table__job-bttn jobs-table__job-bttn--selected'
						) : (
							'jobs-table__job-bttn'
						)
					}
					onClick={handleJobButtonClick}
				>
					<span>DDB Canada</span>
				</button>
			</div>
			<div className="jobs-table__body">
				<h3 className="jobs-table__role">
					{selectedJob.role} <span className="jobs-table__company">@ {selectedJob.name}</span>
				</h3>
				<p className="jobs-table__date">{selectedJob.date}</p>
				<div className="jobs-table__description">
					<ul className="jobs-table__description-list">
						{selectedJob.description.map((listItem, i) => {
							return (
								<li className="jobs-table__description-list-item" key={i}>
									{' '}
									{listItem}{' '}
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default JobsTable;
