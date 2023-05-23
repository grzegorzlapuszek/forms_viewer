import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { detailsId } = useParams();
  return <div>Details for form id = {detailsId}</div>;
};

export default Details;
