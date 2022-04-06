import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCartButton } from "../AddToCartIconButton/AddCartButton";
import { Card } from "../Card";
import classes from "./Index.module.css";
import image3 from "../../assets/images/blog/blog-04.jpg";
export const Collection = ({ collection }) => {
  const dispatch = useDispatch();
  const [addtoCart, setAddTocart] = useState(0);

  const add = useSelector((state) => state.addtocart);
  const isHave = add.some((element) => element.id === collection.id);

  const myaction = (data, value) => {
    if (data) {
      return { type: "addToCart1" };
    } else {
      return { type: "addToCart", payload: value };
    }
  };
  return (
    <Card>
      <div>
        <img src={collection.url} alt="collections" />
      </div>
      <div className={classes.list}>
        <ul>
          <li>Name: VAcuum cleaner</li>
          <li>Price :{collection.price} $</li>
          <li>Brand :{collection.inf.brand}</li>
        </ul>
      </div>
      <div>
        <AddCartButton
          a={() => {
            dispatch(myaction(isHave, collection));
            dispatch({type:'total',payload:collection.price})
          }}
          isHave={isHave}
        />
      </div>
    </Card>
  );
};
