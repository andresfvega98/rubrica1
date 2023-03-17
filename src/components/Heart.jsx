import React, { useEffect, useState } from "react";
import { changeData } from "../helpers/getDatos";
import "../styles/Heart.css";

export const Heart = ({ like = false, id }) => {
  const [liked, setLiked] = useState(like);
  const [fill, setFill] = useState(liked ? "red" : "white");

  useEffect(() => {
      changeData(id, liked);
  }, [liked, id]);

  return (
    <button className="btn-custom mb-3" onClick={ () => { setLiked( liked ? false : true ); setFill( liked ? "white" : "red" ); } }>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill} stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
    </button>
  );
};
