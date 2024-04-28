import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const About = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        setData(res.data.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleJobStatus = (param) => {
    return param === 1 ? "Open Hiring" : "Close";
  };

  return (
    <>
      <div>
        
        {data !== null &&
          data.map((res) => {
            if (res.id.toString() === id) {
              return (
                <div
                  key={res.id}
                  className="flex flex-col md:flex-row	text-center items-center my-28"
                >
                  <div className="flex-1">
                    <img
                      className="rounded-t-lg mr-0 object-contain h-80 w-full p-5"
                      src={res.company_image_url}
                      alt="company_img"
                    />
                  </div>
                  <div className="flex-1 object-contain p-5 text-left">
                    <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-black">
                      {res.title}
                    </h5>
                    <h5 className="mb-2 tracking-tight text-gray-900 dark:text-black">
                      {`(${res.job_type})`}
                    </h5>
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-black">
                      {res.company_name} - {res.company_city}
                    </h5>
                    <h5 className="mb-2 text-md font-bold tracking-tight">
                      <span className="text-black">Status:</span>{" "}
                      <span
                        className={
                          res.job_status === 1
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      >
                        {handleJobStatus(res.job_status)}
                      </span>
                    </h5>

                    <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-black">
                      {res.job_tenure}
                    </h5>
                    <h5 className="mb-2 tracking-tight text-gray-900 dark:text-black">
                      <b>Description : </b>
                      {res.job_description}
                    </h5>
                    <h5 className="mb-2 tracking-tight text-gray-900 dark:text-black">
                      <b>Qualification : </b>
                      {res.job_qualification}
                    </h5>
                    <h5 className="mb-2 tracking-tight text-gray-900 dark:text-black">
                      <b>Salary : </b>
                      {res.salary_min} - {res.salary_max}
                    </h5>
                    <Link
                      to={`/`}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Apply
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            }
            return null;
          })}
      </div>
    </>
  );
};

export default About;
