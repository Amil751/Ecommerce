import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { Card } from "../Card";
export const ProductsList = () => {
    const params=useParams()
  return (
    <div style={{color:'white'}}>
      <Card>{params.name}</Card>
    </div>
  );
};
