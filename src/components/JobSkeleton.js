import React from 'react';


const JobSkeleton = () => {

	return (
		<div className="job-item">
			<div className="skeleton-job-title-wrapper">
				<div className="skeleton-job-title">
					
				</div>
				<div className="skeleton-job-line">
					
				</div>
			</div>
			<div className="skeleton-job-extra-info">
				<div className="skeleton-job-line"></div>
				<div className="skeleton-job-line"></div>
				<div className="skeleton-job-line"></div>
			</div>
		</div>
		);
}

export default JobSkeleton;