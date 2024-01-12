import React, { useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AxiosInstance from "../../api/AxiosInstance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { GlobalApi } from "../../api/ContextApi";
import { GoEye } from "react-icons/go";
import { FiEyeOff } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import bgImage from "../../asset/createEmpbg.jpg";
import { CiEdit } from "react-icons/ci";



const Login = () => {
  let [post, setPost] = useState({
    username: "",
    password: "",
  });
  let [eye, setEye] = useState(false);
  let { username, password } = post;
  let { isLogin, setisLogin } = useContext(GlobalApi);
  // let navigate = useNavigate();
  // !handle submit:
  let handleSubmit = async e => {
    e.preventDefault();
    setPost({ username: "", password: "" });

    try {
      const loginData = await AxiosInstance.post(
        `/user/verify?username=${username}&password=${password}`
      );
      setisLogin(true);
      sessionStorage.setItem("isLogged", isLogin);
      sessionStorage.setItem("user", JSON.stringify(loginData.data.body));
      console.log(loginData.data.body);
      

      if (loginData.data.statusCode == 200) {
        toast.success(loginData.data.message);
        // navigate("/");
        window.location.reload();
      }
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };
  // !handleChange:
  let handleChange = e => {
    let { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };
  // !aos animation:
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="h-[100vh] w-[100%] flex items-center flex-col bg-cover bg-center "
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* <h2 className="text-2xl pb-3.5 mt-[100px] text-white">Login users</h2> */}
      <h2 className="text-2xl pb-3.5 mt-[100px] text-white flex">
        <span className="mr-3 mt-1 text-4xl">
          <CiEdit />
        </span>
        Login users
      </h2>
      <form
        className="p-[20px]  bg-[#7BA0F9] rounded"
        onSubmit={handleSubmit}
        data-aos="zoom-in"
      >
        <div className="relative">
          {/* <label className="" htmlFor="">Name:</label> */}
          <input
            className="p-[10px] m-[10px] w-[300px] rounded"
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
            placeholder="enter email or phone_no"
          />
          <span
            className="absolute top-[20px] right-[20px] text-xl text-gray-900 cursor-pointer"
            onClick={() => setEye(!eye)}
          >
            <MdOutlineMailOutline />
          </span>
        </div>

        <div className="relative">
          {/* <label htmlFor="">Password:</label> */}
          <input
            className="p-[10px] m-[10px] w-[300px] rounded"
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

        <button className="w-[300px] font-semibold bg-[#2677b0] hover:bg-[#6774ED] transition-colors duration-300 p-[10px] m-[10px] rounded text-white cursor-pointer">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

