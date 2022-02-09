import React from 'react';
import {Link } from "react-router-dom";
import classes from './Categories.module.css'
export const Categories = () => {
    return (
        // <div>
        //     <Link to='/categories/1'>item1</Link>
        //     <Link to='/categories/2'>item2</Link>
        //     <Link to='/categories/3'>item3</Link>
        //     <Link to='/categories/4'>item4</Link>
        // </div>
        <nav className={`sidebar card py-2 mb-4  ${classes.nav}`}>
        <ul className="nav flex-column ml-0">
            <li className="nav-item">
                <a className="nav-link" href="/#"> Link name </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/#"> electronics <b className="float-end">&raquo;</b> </a>
                <ul className="submenu dropdown-menu">
                    <li><Link className="nav-link" to="/categories/tozsoran">tozsoran </Link></li>
                    <li><Link className="nav-link" to="/categories/tozsoran">paltaryuyan </Link></li>
                    <li><Link className="nav-link" to="/categories/qabyuyan">qabyuyan </Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/#"> Treeview category <b className="float-end">&raquo;</b> </a>
                <ul className="submenu dropdown-menu">
                    <li><a className="nav-link" href="/#">Submenu item 1 </a></li>
                    <li><a className="nav-link" href="/#">Submenu item 2 </a></li>
                    <li><a className="nav-link" href="/#">Submenu item 3 <b className="float-end">&raquo;</b> </a>
                        <ul className="submenu dropdown-menu">
                            <li><a className="nav-link" href="/#">Multi level 1</a></li>
                            <li><a className="nav-link" href="/#">Multi level 2</a></li>
                            <li><a className="nav-link" href="/#">Multi level 3</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/#"> Another page </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/#"> Demo link </a>
            </li>
        </ul>
        </nav>
    );
};

