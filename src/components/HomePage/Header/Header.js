import React from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../../App";
import { Select } from "antd";
//hook đa ngôn ngữ
import { useTranslation } from "react-i18next";
import _ from "lodash";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { USER_LOGIN } from "../../../util/setting";
import { ACCESS_TOKEN } from "../../../util/setting";
const { Option } = Select;

export default function Header(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const { t, i18n } = useTranslation();

  const handleChange = (value) => {
    i18n.changeLanguage(value);
  };

  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <button
            onClick={() => {
              history.push("/login");
            }}
            className="self-center px-8 py-2 rounded"
          >
            {t("signin")}
          </button>
          <button
            onClick={() => {
              history.push("/register");
            }}
            className="self-center px-8 py-2 font-semibold rounded bg-red-600 text-white"
          >
            {t("signup")}
          </button>
        </Fragment>
      );
    }
    return <Fragment>
      <button
        onClick={() => {
          history.push("/profile");
        }}
        className="self-center px-8 py-2 rounded"
      >
        Hello! {userLogin.taiKhoan}
      </button>
      <button
            onClick={() => {
              localStorage.removeItem(USER_LOGIN);
              localStorage.removeItem(ACCESS_TOKEN);
              history.push("/home");
              window.location.reload();
            }}
            className="text-red-500 mr-2 cursor-pointer"
          >
            Đăng xuất
          </button>
      </Fragment>;
  };

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
