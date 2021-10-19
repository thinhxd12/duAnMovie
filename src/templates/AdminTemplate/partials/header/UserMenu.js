import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Transition from '../../utils/Transition';

import { useSelector } from 'react-redux';
import { ACCESS_TOKEN, USER_LOGIN } from '../../../../util/setting';
import { Avatar } from 'antd';
import { history } from "../../../../App";

function UserMenu() {

  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="inline-flex justify-center items-center group"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf', textTransform: 'capitalize', fontWeight: 'bold' }}
          size="large">{userLogin.taiKhoan?.substr(0, 1)}</Avatar>
        <div className="flex items-center truncate">
          <span className="truncate ml-2 text-sm font-medium group-hover:text-gray-800">{userLogin.hoTen}</span>
          <svg className="w-3 h-3 flex-shrink-0 ml-1 fill-current text-gray-400" viewBox="0 0 12 12">
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </button>

      <Transition
        className="origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="invisible -translate-y-2"
        enterEnd="visible translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="visible"
        leaveEnd="invisible"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-gray-200">
            <div className="font-medium text-gray-800">{userLogin.taiKhoan}</div>
            <div className="text-xs text-gray-500 italic">{userLogin.maLoaiNguoiDung == 'QuanTri' ? 'Quản trị' : 'Khách hàng'}</div>
          </div>
          <ul>
            <li>
              <Link
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                to="/admin/edituser"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Settings
              </Link>
            </li>
            <li>
              <button
                className="font-medium text-sm text-red-500 hover:text-red-600 flex items-center py-1 px-3"
                onClick={() => {
                  localStorage.removeItem(USER_LOGIN);
                  localStorage.removeItem(ACCESS_TOKEN);
                  history.push('/home');
                  window.location.reload();
                  setDropdownOpen(!dropdownOpen)
                }}
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  )
}

export default UserMenu;