import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../../App";
import { Avatar, Select } from "antd";
//hook đa ngôn ngữ
import { useTranslation } from "react-i18next";
import _ from "lodash";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { USER_LOGIN } from "../../../util/setting";
import { ACCESS_TOKEN } from "../../../util/setting";
import './Header.css'
const { Option } = Select;


export default function Header(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const { t, i18n } = useTranslation();

  const handleChange = (value) => {
    i18n.changeLanguage(value);
  };
  const [headerStyle, setHeaderStyle] = useState('text-white h-24');

  useEffect(() => {

    window.onscroll = () => {
      const scrollCheck = window.scrollY;
      if (scrollCheck >= 200) {
        setHeaderStyle('bg-gray-300 bg-opacity-80 backdrop-filter backdrop-blur-md h-20 text-black shadow-md')
      } else setHeaderStyle('text-white h-24')
    }
  }, []);

  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <button
            onClick={() => {
              history.push("/login");
            }}
            className="self-center px-8 py-2 rounded text-base font-semibold"
          >
            {t("signin")}
          </button>
          <button
            onClick={() => {
              history.push("/register");
            }}
            className="self-center px-8 py-2 text-base font-semibold rounded bg-red-600 text-white mr-2"
          >
            {t("signup")}
          </button>
        </Fragment>
      );
    }
    return <div className="flex items-center justify-center pr-4 font-semibold">
      <Avatar style={{
        color: '#f56a00',
        backgroundColor: '#fde3cf',
        width: '40px',
        height: '40px'
      }}
        size="large"
        className="capitalize"
      >{userLogin.taiKhoan.substr(0, 1)}
      </Avatar>
      <div>
        <button className="text-base ml-1 block" onClick={() => {
          history.push('/profile')
        }}>
          Hello! {userLogin.taiKhoan}
        </button>
        <button onClick={() => {
          localStorage.removeItem(USER_LOGIN);
          localStorage.removeItem(ACCESS_TOKEN);
          history.push('/home');
          window.location.reload();
        }} className="text-sm font-bold ml-1 text-red-600 block">Đăng xuất</button>
      </div>
    </div>
  };

  return (
    <header className={`p-2 items-center justify-center flex fixed z-50 w-full border-b border-opacity-25 border-gray-50 transition-all duration-400 ease-in ${headerStyle}`}>
      <div className="container flex justify-between mx-auto">
        <NavLink
          to="/"
          aria-label="Back to homepage"
          className="flex items-center p-2 hover:text-red-600"
        >
          <div className="flex items-center">
            <img
              src="https://i.imgur.com/lC22izJ.png"
              alt="logo"
              style={{ maxWidth: "40px" }}
            />
            <span className="text-3xl font-bold ml-2 text-red-600">Movie Cybersoft</span>
          </div>
        </NavLink>
        <ul className="items-stretch hidden text-base font-semibold space-x-3 lg:flex">
          <li className="flex">
            <a
              href="/"
              className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-red-600 hover:text-red-600"
            >
              Trang chủ
            </a>
          </li>
          <li className="flex">
            <a
              href="/#footer"
              className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent hover:text-red-600"
            >
              Liên hệ
            </a>
          </li>
          <li className="flex">
            <a
              href="/#news"
              className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent hover:text-red-600"
            >
              Tin tức
            </a>
          </li>
          <li className="flex">
            <a
              href="/#application"
              className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent hover:text-red-600"
            >
              Ứng dụng
            </a>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {renderLogin()}

          <Select
            defaultValue="vi"
            style={{ width: 80 }}
            onChange={handleChange}
          >
            <Option value="eng">Eng</Option>
            <Option value="chi">Chi</Option>
            <Option value="vi">Vi</Option>
          </Select>
        </div>





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
