import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Select } from "antd";
//hook đa ngôn ngữ
import { useTranslation } from "react-i18next";
import _ from 'lodash';
import { Fragment } from "react";
import { useSelector } from "react-redux";
import UserMenu from "../../../templates/AdminTemplate/partials/header/UserMenu";
const { Option } = Select;

export default function Header(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const { t, i18n } = useTranslation();

  const handleChange = (value) => {
    i18n.changeLanguage(value);
  };
  const [headerStyle, setHeaderStyle] = useState("lg:h-16 h-18");

  useEffect(() => {
    window.onscroll = () => {
      const scrollCheck = window.scrollY;
      if (scrollCheck >= 200) {
        setHeaderStyle(
          "bg-gray-300 bg-opacity-80 backdrop-filter backdrop-blur-md h-18 text-black shadow-md"
        );
      } else setHeaderStyle("lg:h-16 h-18");
    };
  }, []);

  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <i className="fa fa-user-circle mr-2 text-2xl"></i>
          <NavLink to="/login" className="header-login">
            {t("signin")}
          </NavLink>
          <span>/</span>
          <NavLink to="/register" className="header-login">
            {t("signup")}
          </NavLink>
        </Fragment>
      );
    }
    return <UserMenu />;
  };
  function toggleMenu() {
    const navToggle = document.getElementsByClassName("toggle");
    for (let i = 0; i < navToggle.length; i++) {
      navToggle.item(i).classList.toggle("hidden");
    }
  }

  return (
    <nav
      className={`header flex flex-wrap items-center justify-between py-2 px-5 sticky top-0 z-50 w-full bg-gray-200 transition-all duration-400 ease-in ${headerStyle}`}
    >
      <NavLink to="/" className="header-brand">
        <div className="flex items-center justify-center">
          <img
            src="https:i.imgur.com/lC22izJ.png"
            alt="logo"
            style={{ maxWidth: "40px" }}
          />
          <span className="block md:hidden lg:block text-xl font-bold ml-2">Movie Cybersoft</span>
        </div>
      </NavLink>
      <div className="flex md:hidden">
        <button
          className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          onClick={toggleMenu}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <div className="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t border-gray-700 md:border-none">
        <ul className="flex flex-col items-end md:flex-row list-none lg:flex">
          <li className="flex">
            <a href="/" className="header-menu header-menu-active">
              {t('homepage')}
            </a>
          </li>
          <li className="flex">
            <a href="/#footer" className="header-menu">
              {t("contact")}
            </a>
          </li>
          <li className="flex">
            <a href="/#news" className="header-menu">
              {t("news")}
            </a>
          </li>
          <li className="flex">
            <a href="/#application" className="header-menu">
              {t("application")}
            </a>
          </li>
        </ul>
      </div>
      <div className="toggle hidden md:flex w-full md:w-auto md:items-center px-4 py-2">
        <div className="flex items-center justify-end">
          {renderLogin()}
          <Select
            defaultValue="vi"
            onChange={handleChange}
            className="ml-2 w-40 text-sm"
            style={{ border: 'none', outline: 'none' }}
            suffixIcon={
              <svg className="w-3 h-3 text-gray-400 fill-current" viewBox="0 0 12 12">
                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
              </svg>
            }
          >
            <Option value="eng">
              <img src="../../../img/flags/555417.png" alt="..." width={28} className="inline mr-2" />
              English
            </Option>
            <Option value="chi">
              <img src="../../../img/flags/940194.png" alt="..." width={28} className="inline mr-2" />
              Chinese
            </Option>
            <Option value="vi">
              <img src="../../../img/flags/555515.png" alt="..." width={28} className="inline mr-2" />
              Vietnamese
            </Option>
          </Select>
        </div>
      </div>
    </nav>
  );
}