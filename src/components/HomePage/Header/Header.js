import React from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../../App";
import _ from 'lodash';
import { useSelector } from "react-redux";
import { ACCESS_TOKEN, USER_LOGIN } from "../../../util/setting";
import { Avatar } from "antd";


export default function Header(props) {

  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);

  const renderLogin = () => {
    return (!_.isEmpty(userLogin)) ?
      <div className="flex content-center items-center">
        <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }} size="large">{userLogin.taiKhoan.substr(0, 1)}</Avatar>
        <div>
          <button className="text-base ml-2 block" onClick={() => {
            history.push('/profile')
          }}>
            {userLogin.taiKhoan}
          </button>
          <button onClick={() => {
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(ACCESS_TOKEN);
            history.push('/home');
            window.location.reload();
          }} className="text-sm ml-2 text-blue-500 block">Đăng xuất</button>
        </div>
      </div>
      : <div className="items-center flex-shrink-0 hidden lg:flex">
        <button onClick={() => {
          history.push('/login')
        }} className="self-center px-8 py-2 rounded">Sign in</button>
        <button className="self-center px-8 py-2 font-semibold rounded bg-red-600 text-white">
          Sign up
        </button>
      </div>

  }



  return (
    <header className="p-2 bg-black text-white fixed z-50 w-full bg-opacity-30">
      <div className="container flex justify-between h-16 mx-auto">
        <NavLink
          to="/"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            src="https://i.imgur.com/lC22izJ.png"
            alt="logo"
            style={{ maxWidth: "55px" }}
          />
        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <a
              href="/"
              className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-red-600 border-red-600"
            >
              Trang chủ
            </a>
          </li>
          <li className="flex">
            <a
              href="/"
              className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent hover:text-red-600"
            >
              Liên hệ
            </a>
          </li>
          <li className="flex">
            <a
              href="/"
              className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent hover:text-red-600"
            >
              Tin tức
            </a>
          </li>
          <li className="flex">
            <a
              href="/"
              className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent hover:text-red-600"
            >
              Ứng dụng
            </a>
          </li>
        </ul>

        {renderLogin()}

        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-coolGray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
