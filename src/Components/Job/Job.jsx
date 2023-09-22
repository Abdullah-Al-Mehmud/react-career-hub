import PropTypes from "prop-types";
import { CiLocationOn, CiDollar } from "react-icons/ci";

const Job = ({ job }) => {
  const {
    logo,
    company_name,
    job_title,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className=" card-compact  bg-base-100 border-2 px-5 py-5">
      <figure>
        <img src={logo} alt={company_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="mt-3">
          <button className="bg-transparent border-[1px] border-blue-500 text-blue-500 px-5 py-1 rounded-sm font-bold">
            {remote_or_onsite}
          </button>
          <button className="bg-transparent border-[1px] border-blue-500 text-blue-500 px-5 py-1 ml-2 rounded-sm font-bold">
            {job_type}
          </button>
        </div>
        <div className="flex items-center gap-1 mt-3">
          <CiLocationOn className="text-black text-sm font-semibold"></CiLocationOn>
          <span>{location}</span>
          <div className="flex items-center ml-2 gap-1">
            <CiDollar className="text-black text-sm font-semibold"></CiDollar>
            <span>Salary : {salary}</span>
          </div>
        </div>
        <div className="card-actions justify-start mt-4">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};
Job.propTypes = {
  job: PropTypes.object.isRequired,
};
export default Job;
