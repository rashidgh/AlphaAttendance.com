import React from "react";
import image from "../asset/userlogo.jpg";

const Profile = () => {
  return (
    <div className="wrapper h-[250px] w-[250px] flex" >
      <div className="left bg-gradient-to-r from-teal-500 to-cyan-400 p-8 rounded-l-2xl text-center text-white">
        <img src={image} alt="" className="rounded-lg mb-4" />
        <h4 className="mb-4">Alex William</h4>
        <p className="text-sm">Trainer</p>
      </div>
      <div className="right bg-white p-8 rounded-r-2xl">
        <div className="info">
          <h3 className="mb-6 pb-2 border-b border-gray-300 text-gray-700 uppercase tracking-wider text-lg font-bold">
            Profile
          </h3>
          <div className="info_data flex justify-between">
            <div className="data w-45">
              <h4 className="text-gray-700 mb-2 font-bold">Email</h4>
              <p className="text-gray-500 text-sm mb-4">alex@gmail.com</p>
            </div>
            <div className="data w-45">
              <h4 className="text-gray-700 mb-2 font-bold">Phone</h4>
              <p className="text-gray-500 text-sm mb-4">0001-213-998761</p>
            </div>
          </div>
        </div>
        <div className="projects">
          <h3 className="mb-6 pb-2 border-b border-gray-300 text-gray-700 uppercase tracking-wider text-lg font-bold">
            Role-Admin
          </h3>
          <div className="projects_data flex justify-between">
            <div className="data w-45">
              <h4 className="text-gray-700 mb-2 font-bold">Status</h4>
              <p className="text-gray-500 text-sm mb-4">Active</p>
            </div>
            <div className="data w-45">
              <h4 className="text-gray-700 mb-2 font-bold">Employee id</h4>
              <p className="text-gray-500 text-sm mb-4">25</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
