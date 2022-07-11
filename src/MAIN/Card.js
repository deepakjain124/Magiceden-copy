import React, { useState } from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

function Card({ title, itemId, item }) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);

  return (
    <div role="button" tabIndex={0} className="card">
      <img
        src={item.image}
        alt="image"
        style={{
          width: "218px",
          height: "170px",
          borderRadius:"0.75rem",
          // borderTopRightRadius: "0.75rem",
          // borderTopLeftRadius: "0.75rem",
        }}
      />

      <p className="name_1">{item.first}</p>
      <p className="name_2">{item.second}</p>
      <p className="name_3">{item.third}</p>
      
    </div>
  );
}
export default Card;
