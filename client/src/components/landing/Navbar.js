import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";

const Navbar = () => {
  const [notLanding, setNotLanding] = useState(false);

  const {
    container,
    container_notLanding,
    title,
    side,
    search,
    search_notLanding,
    signin,
  } = styles;

  const path = useLocation().pathname;

  useEffect(() => {
    if (path === "/login") {
      setNotLanding(true);
    }
  }, [path]);

  return (
    <div className={cn(container, { [container_notLanding]: notLanding })}>
      <div className={title}>QUIET</div>
      <div className={side}>
        <form>
          <input
            type="text"
            className={cn(search, { [search_notLanding]: notLanding })}
            placeholder="Quiet places..."
          />
        </form>
        <Link to="/login" className={signin}>
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
