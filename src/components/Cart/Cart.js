import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BackDrop } from "../Modal/BackDrop";
import classes from "./Cart.module.css";
import { CartItems } from "./CartItems";

export const Cart = () => {
  const show = useSelector((state) => state.global.visibility);
  const add = useSelector((state) => state.addtocart);
  const global = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const c = add.sort((a, b) => a.id - b.id);
  const [total, setTotal] = useState(0);
  const a = document.getElementById("body");
  a.style.overflow = "auto";
  if (show) {
    const a = document.getElementById("body");
    a.style.overflow = "hidden";
    return (
      <>
        <BackDrop showHandler={() => dispatch({ type: "show" })} />
        <div className={`${classes.table}`}>
          {c.map((item, index) => {
            if (item.id !== "")
              return (
                <CartItems
                  key={index}
                  img={item.url}
                  price={item.price}
                  name={item.inf.name}
                  id={item.id}
                  item={item}
                  totalHandler={setTotal}
                  total={total}
                  index={index}
                />
              );
          })}

          {/* </table> */}

          <div
            className={classes.icon}
            onClick={() => dispatch({ type: "hide" })}
          >
            <i className="bi bi-x"></i>
          </div>
          <p>Total amount {global.total} </p>
        </div>
      </>
    );
  } else {
    return null;
  }
};
