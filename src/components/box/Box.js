import React from "react";
import "./box.scss";
function Box(props) {
  let mapingList = props.list.map((info) => {
    return (
      <div className="box col-md-3" key={info.id}>
        <div className="img-Holder">
          <img src={info.img} />
        </div>
        <h3 className="box-head">{info.head}</h3>
        <p className="disc">{info.disc}</p>
      </div>
    );
  });
  return mapingList;
}

export default Box;
