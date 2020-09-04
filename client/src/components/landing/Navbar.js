import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";

const Navbar = () => {
  const [isLoginPage, setIsLoginPage] = useState(false);

  const {
    container,
    container_login,
    title,
    title_login,
    side,
    search,
    signin,
  } = styles;

  const path = useLocation().pathname;

  useEffect(() => {
    if (path === "/login") {
      setIsLoginPage(true);
    }
  }, [path]);

  return (
    <div className={cn(container, { [container_login]: isLoginPage })}>
      <div className={cn(title, { [title_login]: isLoginPage })}>QUIET</div>
      <div className={side}>
        <form>
          <input type="text" className={search} placeholder="Quiet places..." />
        </form>
        <Link to="/login" className={signin}>
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
