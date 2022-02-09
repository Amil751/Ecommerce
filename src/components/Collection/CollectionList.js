import React from "react";
import image1 from "../../assets/images/blog/blog-02.jpg";
import image2 from "../../assets/images/blog/blog-03.jpg";
import image3 from "../../assets/images/blog/blog-04.jpg";
import image4 from "../../assets/images/blog/blog-05.jpg";
import classes from "./CollectionList.module.css";

import { Collection } from "./Collection";
import { CollectionHeader } from "./Collection.header";
const collections = [
  {
    id: 1,
    url: image1,
    price: 45,
    inf: { brand: "samsung", size: "45" },
  },
  {
    id: 2,
    url: image2,
    price: 45,
    inf: { brand: "samsung", size: "45" },
  },
  {
    id: 3,
    url: image3,
    price: 45,
    inf: { brand: "samsung", size: "45" },
  },
  {
    id: 2,
    url: image4,
    price: 45,
    inf: { brand: "samsung", size: "45" },
  },
];

export const CollectionList = () => {
  console.log(image3);
  return (
    <div>
      <CollectionHeader/>
      <div className={classes.collectionlist}>
        {collections.map((collection) => {
          return <Collection collection={collection} />;
        })}
      </div>
    </div>
  );
};
