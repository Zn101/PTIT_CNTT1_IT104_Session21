import React, { useState, useRef, useEffect } from "react";

export default function Bai4() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown position-relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="btn btn-light dropdown-toggle"
        type="button"
      >
        Nguyễn Văn Nam
      </button>

      <ul
        className={`dropdown-menu dropdown-menu-end ${open ? "show" : ""}`}
      >
        <li>
          <button className="dropdown-item">Cài đặt</button>
        </li>
        <li>
          <button className="dropdown-item">Đổi mật khẩu</button>
        </li>
        <li>
          <button className="dropdown-item">Đăng xuất</button>
        </li>
      </ul>
    </div>
  );
}

