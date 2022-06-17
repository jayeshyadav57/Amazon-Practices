import React from "react";
import data from "../../data";
import CardComponents from "./CardComponents";
export default function Card({ type }) {
  let Objects = data.filter((ele) => ele.type.includes(type.toLowerCase()));

  //if product match to the search item then show that item else show original data objects
  Objects = Objects.length !== 0 ? Objects : data;
  return <CardComponents info={Objects} />;
}
