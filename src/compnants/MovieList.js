import React, { useEffect, useRef } from "react";
import AddFavCom from "./AddFavCom";

export default function MovieList(props) {
  const favComp = props.favComp;
  const imageRowRef = useRef(null);
  useEffect(() => {
    const handleWheel = (event) => {
      if (imageRow) {
        event.preventDefault();
        imageRow.scrollLeft += event.deltaY;
      }
    };

    const imageRow = imageRowRef.current;
    imageRow.addEventListener("wheel", handleWheel);

    return () => {
      imageRow.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const movImg = props.mov.map((ele, key) => (
    <div key={key} className="me-2 image-container">
      <img height={400} src={ele.Poster} />
      <div
        onClick={() => props.handleFavouirtesClick(ele)}
        className="overlay d-flex  justify-content-center py-3 "
      >
        <AddFavCom text={props.text} color={props.color} />
      </div>
    </div>
  ));

  return (
    <div>
      <h3 style={{ fontFamily: "sans-serif" }}>{props.listHeading}</h3>
      <div
        style={{
          display: "flex",
          overflow: "hidden",
          width: "100%",
          cursor: "pointer",
        }}
        ref={imageRowRef}
      >
        <div></div>
        {movImg}
      </div>
    </div>
  );
}
