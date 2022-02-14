import React from 'react';
import { Link } from 'react-router-dom';

const SeekerList = ({ seekers, title }) => {
  if (!seekers.length) {
    return <h3>No Seekers Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {seekers &&
          seekers.map((seeker) => (
            <div key={seeker._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {seeker.name} <br />
                  {/* <span className="text-white" style={{ fontSize: '1rem' }}>
                    currently has {seeker.skills ? seeker.skills.length : 0}{' '}
                    endorsed skill
                    {seeker.skills && seeker.skills.length === 1 ? '' : 's'}
                  </span> */}
                </h4>

                <Link
                  className="btn btn-block btn-squared btn-light text-dark"
                  to={`/seekers/${seeker._id}`}
                >
                  View this seeker's portfolio.
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SeekerList;
