import React from "react";

export default function SearchBox(props) {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        value={props.isSearch?props.searchV:""}
        onChange={(e) => {
          if (!props.isSearch) {
            props.setIsOn(true);
          }
          props.setSearchV(e.target.value)
                         

        }}
        placeholder="type for search"
        type="text"
      />
    </div>
  );
}
