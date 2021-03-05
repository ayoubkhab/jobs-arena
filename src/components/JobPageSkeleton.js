import React from 'react';


const JobPageSkeleton = () => {

	return (
		<div className="main-job-page">
			<div className="main-job-page-description">
				<div className="skeleton-job-title-wrapper">
					<div className="skeleton-job-title"></div>
					<div className="skeleton-job-line"></div>
					<div className="skeleton-job-line-long"></div>
					<div className="skeleton-job-description"></div>
				</div>
			</div>
			<div className="main-job-page-company">
				<div className="company-logo-skeleton"></div>
				<div className="skeleton-job-line"></div>
				<div className="skeleton-job-line-long"></div>
			</div>
			<div className="main-job-page-how-to-apply">
				<div className="skeleton-job-title"></div>
				<div className="skeleton-job-line-long"></div>
			</div>
		</div>
		);
}

export default JobPageSkeleton;