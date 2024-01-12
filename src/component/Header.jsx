import React, { useEffect, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserCheck } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

const Header = () => {
  let [toggle, setToggle] = useState(false);
  let user = JSON.parse(sessionStorage.getItem("user"));

  // !aos animation:
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // !handleLogout:
  let handleLogout = () => {
    sessionStorage.clear();
    window.location.assign("/");
  };

  return (
    <div>
      <div className="w-[100%] h-[72px] bg-[#2677b0] flex items-center justify-around text-white">
        <div className="text-xl text-lg w-[15%] flex items-center justify-center">
          <Link to="/">Alpha Attendance</Link>
        </div>
        <div className="w-[50%]  flex items-center justify-center gap-10">
          <span>
            <Link to="/createdata">Create Batch</Link>
          </span>
          <span>
            <Link to="/allbatch">All Batch</Link>
          </span>
        </div>
        <div className="w-[10%] flex items-center justify-center relative ">
          <div>
            <span
              className="text-3xl cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <FaRegCircleUser />
            </span>
            {user ? (
              toggle ? (
                <div
                  class="shadow-lg w-[260px] rounded-lg p-6 mx-auto my-6 max-w-md  absolute top-[40px] right-[0] z-20 bg-[#89abfa] text-[#fff]"
                  data-aos="fade-left"
                >
                  <div class="flex items-center mb-4 text-[#fff]">
                    <div class="mr-4">
                      <span class="text-5xl ">
                        <FaRegCircleUser />
                      </span>
                    </div>
                    <div>
                      <h3 class="text-xl font-semibold">{user.name}</h3>
                      <p class="">{user.userRole}</p>
                    </div>
                  </div>

                  <div class="">
                    <div>
                      <p class="flex">
                        <span className="mr-[10px] mt-1 text-xl">
                          <FaUserCheck />
                        </span>
                        Employee ID: {user.empId}
                      </p>
                      <p class="flex">
                        <span className="mr-[10px] mt-1 text-xl">
                          <MdOutlineMail />
                        </span>
                        Email: {user.email}
                      </p>
                    </div>
                    <div>
                      <button
                        onClick={handleLogout}
                        class="bg-red-500 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-red mt-3"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

