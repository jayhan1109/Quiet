import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";

const Navbar = () => {
  const [notLanding, setNotLanding] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(false);

  const { container, title, side, search, search_notLanding, signin } = styles;

  const path = useLocation().pathname;

  useEffect(() => {
    path === "/" ? setNotLanding(false) : setNotLanding(true);

    path === "/login" || path === "/register"
      ? setIsLoginPage(true)
      : setIsLoginPage(false);
  }, [path]);

  return (
    <div className={cn(container)}>
      <div className={title}>
        <Link to="/">QUIET</Link>
      </div>
      <div className={side}>
        <form>
          {!isLoginPage && (
            <input
              type="text"
              className={cn(search, { [search_notLanding]: notLanding })}
              placeholder="Quiet places..."
            />
          )}
        </form>
        {!isLoginPage && (
          <Link to="/register" className={signin}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
