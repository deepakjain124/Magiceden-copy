import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import { LeftArrow, RightArrow } from "../MAIN/Arrow";
import Card from "../MAIN/Card";
import usePreventBodyScroll from "../MAIN/usePreventBodyScroll";

// NOTE: embrace power of CSS flexbox!
import "./hideScrollbar.css";
// import "./firstItemMargin.css";

function Carousal({ coming, open }) {
  const [data, setdata] = useState(coming);
  const [showarrow, setshowarrow] = useState(true);

  const { disableScroll, enableScroll } = usePreventBodyScroll();
  const handleResize = () => {
    if (window.innerWidth < 700) {
      setshowarrow(false);
    } else {
      setshowarrow(true);
    }
  };

  // create an event listener
  React.useEffect(() => {
    handleResize();
  }, [window.innerWidth]);

  return (
    <>
      <div className="example" style={{ width: "100%", marginTop: "20px" }}>
        <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
          <ScrollMenu
            LeftArrow={showarrow && LeftArrow}
            RightArrow={showarrow && RightArrow}
            onWheel={onWheel}
          >
            {data?.map((item) => {
              return (
                <Card
                  title={item.id}
                  itemId={item.id} // NOTE: itemId is required for track items
                  key={item.id}
                  item={item}
                />
              );
            })}
          </ScrollMenu>
        </div>
      </div>
      {!open && (
        <button
          style={{
            marginTop: "20px",
            height: "40px",
            width: "100%",
            borderRadius: "20px",
            fontWeight: "500",
            fontSize: "15px",
            background: "transparent",
            color: "#fff",
            border: "2px solid rgba(36,24,47)",
          }}
        >
          See All
        </button>
      )}
    </>
  );
}
export default Carousal;

function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

ReactDOM.render(<Carousal />, document.getElementById("root"));
