import React from "react";
import { Link } from "react-router-dom";
import classes from "./Categories.module.css";
export const Categories = () => {
  return (
    <nav className={`sidebar card  mb-4  ${classes.nav}`}>
      <ul className="nav flex-column ml-">
        <li className="nav-item  ml-0 ">
          <a className="nav-link" href="/#">
            Link name
          </a>
        </li>
        <li className="nav-item ">
          <a className="nav-link m " href="/#">
            electronics <b className="float-end">&raquo;</b>
          </a>
        </li>
        <li>
          <Link className="nav-link" to="/categories/tozsoran">
            tozsoran
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/categories/tozsoran">
            paltaryuyan
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/categories/qabyuyan">
            qabyuyan
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Another page
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            Demo link
          </a>
        </li>
      </ul>
    </nav>
  );
};
