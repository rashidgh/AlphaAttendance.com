import React, { Fragment, useEffect, useState } from "react";
import Axiosinstance from "../api/AxiosInstance";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiSearch } from "react-icons/fi";
import { toast } from "react-toastify";
import { FaUserCheck } from "react-icons/fa6";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { TbCategory } from "react-icons/tb";
import { LuPencilRuler } from "react-icons/lu";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AllBatch = () => {
  let [state, setState] = useState([]);
  let [inp, setInp] = useState("");
  let [singleUserData, setSingleUserData] = useState();
  console.log(inp);

  // !getAllUser
  useEffect(() => {
    let fetchData = async () => {
      let { data } = await Axiosinstance.get(`/user/all`);
      setState(data.body);
      console.log(data.body);
    };
    fetchData();
  }, []);

  // !handleDelete:
  let handleDelete = async userId => {
    try {
      let deleteData = await Axiosinstance.delete(`/user/${userId}`);
      console.log(deleteData);
      console.log(userId);
      if (deleteData.status == 200) {
        toast.success(deleteData.data.message);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.data.message);
    }
  };

  // !aos animation:
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className=" w-[98vw]">
      <div className="flex items-center justify-around">
        <span className="relative ">
          <input
            className="p-[15px] text-black w-[50vw] rounded-full border-2 mt-[30px]"
            type="text"
            name="inp"
            value={inp}
            id=""
            placeholder="Search User by EmpId, Name, Role, Category, Status"
            onChange={e => setInp(e.target.value)}
          />
          <span className="absolute right-5 top-[45px] text-2xl text-gray-700">
            <FiSearch />
          </span>
        </span>
      </div>
      {state.length < 0 ? (
        "LOADING..."
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3  md:grid-cols-4 gap-4 p-[30px] text-gray-700 shadow-md card">
          {state.reverse().map((li, ind) => {
            if (
              li.empId.toString().includes(inp.toString()) ||
              li.name.toLowerCase().includes(inp.toLowerCase()) ||
              li.userRole.toLowerCase().includes(inp.toLowerCase()) ||
              li.userCategory.toLowerCase().includes(inp.toLowerCase()) ||
              li.userStatus.toLowerCase().includes(inp.toLowerCase())
            ) {
              return (
                <div
                  key={ind}
                  className=" rounded-lg p-4  shadow-md transform transition-transform hover:scale-120 hover:shadow-lg"
                  data-aos="zoom-in"
                >
                  <p className="text-5xl flex items-center text-gray-600 justify-center mb-2">
                    <FaCircleUser />
                  </p>
                  <p className="mb-2 flex">
                    <span className="mr-[10px] mt-1 text-xl">
                      <FaUserCheck />
                    </span>
                    <strong className="text-gray-700 inline-block w-[100px]">
                      Employee ID:
                    </strong>{" "}
                    {li.empId}
                  </p>
                  <p className="mb-2 flex">
                    <span className="mr-[10px] mt-1 text-xl">
                      <MdDriveFileRenameOutline />
                    </span>
                    <strong className="text-gray-700 inline-block  w-[100px]">
                      Name:
                    </strong>{" "}
                    {li.name}
                  </p>
                  <p className="mb-2 flex">
                    <span className="mr-[10px] mt-1 text-xl">
                      <MdOutlineMarkEmailRead />
                    </span>
                    <strong className="text-gray-700 inline-block  w-[100px]">
                      Email:
                    </strong>{" "}
                    {li.email}
                  </p>

                  <p className="mb-2 flex">
                    <span className="mr-[10px] mt-1 text-xl">
                      <MdOutlineLocalPhone />
                    </span>
                    <strong className="text-gray-700 inline-block  w-[100px]">
                      Phone:
                    </strong>{" "}
                    {li.phone}
                  </p>
                  <p className="mb-2 flex">
                    <span className="mr-[10px] mt-1 text-xl">
                      <TbCategory />
                    </span>
                    <strong className="text-gray-700 inline-block  w-[100px]">
                      Category:
                    </strong>{" "}
                    {li.userCategory}
                  </p>
                  <p className="mb-2 flex">
                    <span className="mr-[10px] mt-1 text-xl">
                      <LuPencilRuler />
                    </span>
                    <strong className="text-gray-700 inline-block  w-[100px]">
                      Role:
                    </strong>{" "}
                    {li.userRole}
                  </p>
                  <p className="mb-2 flex">
                    <span className="mr-[10px] mt-1 text-xl">
                      <HiOutlineStatusOnline />
                    </span>
                    <strong className="text-gray-700 inline-block  w-[100px]">
                      Status:
                    </strong>{" "}
                    {li.userStatus}
                  </p>
                  <div className="flex space-x-2 mt-4">
                    <Link to="/updatedata" state={li}>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded border border-blue-600">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(li.userId)}
                      className="bg-red-500 text-white px-4 py-2 rounded border border-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default AllBatch;
