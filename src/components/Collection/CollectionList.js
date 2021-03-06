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
    count: 1,
    url: image1,
    price: 485,
    inf: { name: "vacuum cleaner", brand: "samsung", size: "45" },
  },
  {
    id: 2,
    count: 1,
    url: image2,
    price: 85,
    inf: { name: "vacuum cleaner", brand: "samsung", size: "45" },
  },
  {
    id: 3,
    count: 1,
    url: image3,
    price: 12,
    inf: { name: "vacuum cleaner", brand: "samsung", size: "45" },
  },
  {
    id: 4,
    count: 1,
    url: image4,
    price: 36,
    inf: { name: "vacuum cleaner", brand: "samsung", size: "45" },
  },
  {
    id: 5,
    count: 1,
    url: image4,
    price: 28,
    inf: { name: "vacuum cleaner", brand: "samsung", size: "45" },
  },
];

export const CollectionList = () => {
  return (
    <div>
      <CollectionHeader />
      <div className={classes.collectionlist}>
        {collections.map((collection,index) => {
          return <Collection collection={collection} key={index} />;
        })}
      </div>
    </div>
  );
};
