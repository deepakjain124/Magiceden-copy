import React, { useState } from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

 function Card({ title, itemId,item }) {

  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);

  return (
    <div
      role="button"
      style={{
        margin: "0 20px",
        width: "220px",
        minHeight:"200px",
        maxHeight:"256px",
        textAlign:"center",
        background:"rgba(28,19,38)",
        userSelect: "none",
        borderTopRightRadius:"0.75rem",
        borderTopLeftRadius:"0.75rem"
      }}
      tabIndex={0}
      className="card"
    >
     
        <img src={item.image} alt="image" style={{width:"220px",height:"160px",borderTopRightRadius:"0.75rem",borderTopLeftRadius:"0.75rem"}}/>
      
      <p style={{color:"rgba(248,247,248)",fontSize:".875rem",lineHeight:"1.25rem",marginBottom:"6px"}}>{item.first}</p>
      <p style={{color:" rgba(228,37,117)",fontSize:".75rem",marginBottom:"9px"}}>{item.second}</p>
      <p style={{color:"rgba(0,219,128)",borderRadius:"20px",width:"50px",margin:"auto",backgroundColor:"#312f2f",opacity:"0.4"}}>{item.third}</p>
    </div>
  );
}
export default Card