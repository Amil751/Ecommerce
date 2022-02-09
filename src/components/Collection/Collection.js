import React, { useState } from "react";
import { AddCartButton } from "../AddToCartIconButton/AddCartButton";
import { Card } from "../Card";
import classes from "./Index.module.css";
export const Collection = ({ collection }) => {
  const [addtoCart, setAddTocart] = useState(0);
  console.log(addtoCart);
  return (
    <Card>
      <div>
        <img src={collection.url} alt="collections" />
      </div>
      <div className={classes.list}>
        <ul>
          <li>Price :{collection.price}</li>
          <li>Brand :{collection.inf.brand}</li>
        </ul>
      </div>
      <AddCartButton
        a={() => {
          setAddTocart((prev)=>prev+1);
          console.log("amil");
        }}
      />
    </Card>
  );
};
