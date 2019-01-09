import React from "react";
import "./imagesContainer.css";

function ImagesContainer(props) {
  return (
        <div className="col-md-3 col-sm-6 col-xs-12">
            <img alt={props.alt} src={props.image} className="img-responsive" />
        </div>
  );
}

export default ImagesContainer;
