import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VerifiedIcon from "@mui/icons-material/Verified";

const statusOpen = () => {
  return (
    <>
      <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
        <span class="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
        Open Hiring
      </span>
    </>
  );
};

const statusClose = () => {
  return (
    <>
      <span class="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
        <span class="w-2 h-2 me-1 bg-red-500 rounded-full"></span>
        Close
      </span>
    </>
  );
};

const Loker = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(`API error ${error}`);
      });
  }, []);

  const handleJobStatus= (param)=>{
    return param === 1 ? statusOpen() : statusClose();
  };

  const scrollToTop = () => {
    // window.scrollTo({
    //   top: 0,
    // });
  };

  return (
    <>
      <div
        id="job-vacancy"
        class="grid grid-cols-3 gap-4 p-8 md:grid-cols-3 md:p-4 bg-white rounded-lg  dark:bg-gray-800"
      >
        {/* card */}
        {data !== null &&
          data.map((res) => (
            <div class="flex items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img
                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={res.company_image_url}
                alt={res.id}
              />
              <div class="flex-1 flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {res.title}
                </h5>
                
                <div class="mb-2 text-sm tracking-tight text-gray-900 dark:text-white">
                {handleJobStatus(res.job_status)}
                </div>
                <h5 class="mb-2 font-normal text-gray-700 dark:text-gray-400">
                  {res.company_name} &nbsp;{" "}
                  <VerifiedIcon className="text-blue-500" />
                </h5>
                <h5 class="mb-2 font-normal text-gray-700 dark:text-gray-400">
                  <LocationOnIcon /> &nbsp;
                  {res.company_city}
                </h5>
                <h5 class="mb-2 font-normal text-gray-700 dark:text-gray-400">
                  <WorkOutlineIcon /> &nbsp;
                  {res.job_type} &nbsp;
                  
                </h5>
                <a
                  href={`/about/${res.id}`}
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Loker;
