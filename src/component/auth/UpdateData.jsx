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
import { useLocation } from "react-router-dom";
import { FiEdit } from "react-icons/fi";

const UpdateData = () => {
  let [eye, setEye] = useState(false);
  let location = useLocation();
  let { state } = location;

  console.log(state);

  const [userPost, setUserPost] = useState({
    empId: state.empId,
    name: state.name,
    email: state.email,
    password: state.password,
    phone: state.phone,
    userRole: state.userRole,
    userStatus: state.userStatus,
    userCategory: state.userCategory,
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

  // setUserPost(location);

  const handleSubmit = async e => {
    e.preventDefault();
    // let payload = { ...userPost, timestampes: true };
    // console.log(payload);
    let payload = {
      userId: state.userId,
      empId: empId,
      name: name,
      email: email,
      password: password,
      phone: phone,
      userRole: userRole,
      userStatus: userStatus,
      userCategory: userCategory,
    };
    try {
      let { data } = await AxiosInstance.patch(
        `/user/${state.userId}`,
        payload
      );

      console.log(data);
      console.log(payload);
      if (data.statusCode == 200) {
        toast.success(data.message);
      };

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

  const handleChange = e => {
    const { name, value } = e.target;
    setUserPost(prevUserPost => ({
      ...prevUserPost,
      [name]: value,
    }));
  };

  // useEffect(() => {
  //   if (state) {
  //     setUserPost({
  //       empId: state.empId || "",
  //       name: state.name || "",
  //       email: state.email || "",
  //       password: state.password || "",
  //       phone: state.phone || "",
  //       userRole: state.userRole || "",
  //       userStatus: state.userStatus || "",
  //       userCategory: state.userCategory || "",
  //     });
  //   }
  //   AOS.init();
  //   AOS.refresh();
  // }, []);

  return (
    <div
      className="h-[100vh] w-[auto] flex items-center flex-col bg-cover bg-center w-[100vw]"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/background/20221226/pngtree-blue-purple-gradient-corporate-website-banner-background-image_1496915.jpg')",
      }}
    >
      <h2 className="text-2xl pb-3.5 mt-[10px] text-white flex">
        <span className="mr-3 mt-1 text-4xl">
          <FiEdit />
        </span>{" "}
        Update Batch
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
            value={userRole}
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
            value={userStatus}
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
            value={userCategory}
            onChange={handleChange}
            className="p-[8px] m-[10px] w-[300px] rounded"
          >
            <option value="">select user category</option>
            <option value="TRAINER">TRAINER</option>
            <option value="LATERAL">LATERAL</option>
          </select>
        </div>

        <button className="w-[300px] font-semibold bg-[#2677b0] hover:bg-[#6774ED] transition-colors duration-300 p-[10px] m-[10px] rounded text-white">
          Update Batch
        </button>
      </form>
    </div>
  );
};

export default UpdateData;
