import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AxiosInstance from "../../api/AxiosInstance";
import { toast } from "react-toastify";
import { GoEye } from "react-icons/go";
import { FiEyeOff } from "react-icons/fi";
import { FaUserTie } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import bgImage from "../../asset/createEmpbg.jpg";

const CreateData = () => {
  let [eye, setEye] = useState(false);
  const [userPost, setUserPost] = useState({
    empId: "",
    name: "",
    email: "",
    password: "",
    phone: "",
    userRole: "",
    userStatus: "",
    userCategory: "",
  });

  const {
    empId,
    name,
    email,
    password,
    phone,
    userRole,
    userStatus,
    userCategory,
  } = userPost;
  let payload = { ...userPost, timestampes: true };
  
  // !handleSubmit:
  const handleSubmit = async e => {
    e.preventDefault();
    console.log(userPost);
    try {
      let {data} = await AxiosInstance.post(`/user`, payload);
      console.log(data);
      if (data.statusCode == 201) {
        toast.success(data.message);
      }

      setUserPost({
        empId: "",
        name: "",
        email: "",
        password: "",
        phone: "",
        userRole: "",
        userStatus: "",
        userCategory: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  // !handleChange:
  const handleChange = e => {
    const { name, value } = e.target;
    setUserPost(prevUserPost => ({
      ...prevUserPost,
      [name]: value,
    }));
  };

  // !Aos
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      className="h-[100vh] w-[auto] flex items-center flex-col bg-cover bg-center w-[100vw]"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <h2 className="text-2xl pb-3.5 mt-[10px] text-white flex">
        <span className="mr-3 mt-1 text-4xl">
          <CiEdit />
        </span>
        Create Batch
      </h2>
      <form
        className="p-[20px]  bg-[#7BA0F9] rounded  text-gray-700"
        onSubmit={handleSubmit}
        data-aos="zoom-in"
      >
        <div className="relative">
          <input
            className="p-[8px] m-[10px] w-[300px] rounded "
            type="text"
            id="empId"
            name="empId"
            value={empId}
            onChange={handleChange}
            placeholder="enter employeeId"
            autoFocus
          />
          <span
            className="absolute top-[20px] right-[20px] text-xl text-gray-900 cursor-pointer"
            onClick={() => setEye(!eye)}
          >
            <FaUserTie />
          </span>
        </div>

        <div className="relative">
          <input
            className="p-[8px] m-[10px] w-[300px] rounded "
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="enter name"
          />
          <span
            className="absolute top-[20px] right-[20px] text-xl text-gray-900 cursor-pointer"
            onClick={() => setEye(!eye)}
          >
            <FaRegUser />
          </span>
        </div>
        <div className="relative">
          <input
            className="p-[8px] m-[10px] w-[300px] rounded"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="enter email"
          />
          <span
            className="absolute top-[20px] right-[20px] text-xl text-gray-900 cursor-pointer"
            onClick={() => setEye(!eye)}
          >
            <MdOutlineMailOutline />
          </span>
        </div>
        <div className="relative">
          <input
            className="p-[8px] m-[10px] w-[300px] rounded"
            type={eye ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="enter password"
          />
          <span
            className="absolute top-[20px] right-[20px] text-xl text-gray-900 cursor-pointer"
            onClick={() => setEye(!eye)}
          >
            {eye ? <FiEyeOff /> : <GoEye />}
          </span>
        </div>
        <div className="relative">
          <input
            className="p-[8px] m-[10px] w-[300px] rounded"
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={handleChange}
            placeholder="enter phone_no"
          />
          <span
            className="absolute top-[20px] right-[20px] text-xl text-gray-900 cursor-pointer"
            onClick={() => setEye(!eye)}
          >
            <MdOutlinePhoneEnabled />
          </span>
        </div>
        <div>
          <select
            name="userRole"
            onChange={handleChange}
            className="p-[8px] m-[10px] w-[300px] rounded"
          >
            <option value="">select user role</option>
            <option value="ADMIN">ADMIN</option>
            <option value="HR">HR</option>
          </select>
        </div>
        <div>
          <select
            name="userStatus"
            onChange={handleChange}
            className="p-[8px] m-[10px] w-[300px] rounded"
          >
            <option value="">select user status</option>
            <option value="ACTIVE">ACTIVE</option>
            <option value="INACTIVE">INACTIVE</option>
          </select>
        </div>
        <div>
          <select
            name="userCategory"
            onChange={handleChange}
            className="p-[8px] m-[10px] w-[300px] rounded"
          >
            <option value="">select user category</option>
            <option value="TRAINER">TRAINER</option>
            <option value="LATERAL">LATERAL</option>
          </select>
        </div>

        <button className="w-[300px] font-semibold bg-[#2677b0] hover:bg-[#6774ED] transition-colors duration-300 p-[10px] m-[10px] rounded text-white">
          Create Batch
        </button>
      </form>
    </div>
  );
};

export default CreateData;
