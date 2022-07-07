import React,{useState} from "react";
import ReactDOM from "react-dom";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import { LeftArrow, RightArrow } from "./Arrow";
import  Card  from "./Card";
import usePreventBodyScroll from "./usePreventBodyScroll";

// NOTE: embrace power of CSS flexbox!
import "./hideScrollbar.css";
// import "./firstItemMargin.css";


const elemPrefix = "test";
const getId = (index) => `${elemPrefix}${index}`;

const getItems = () =>
  Array(10)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

function Carousal({coming}) {
  const[data,setdata]=useState(coming)

  const [items] = React.useState(getItems);
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  return (
    <>
      <div className="example" style={{width:"100%",marginTop:"20px"}}>
        <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            onWheel={onWheel}
          >
            {/* {items.map(({ id }) => (
              <Card
                title={id}
                itemId={id} // NOTE: itemId is required for track items
                key={id}
                // item={item}
              />
            ))} */}
            {
              data?.map((item)=>{
                return <Card
                title={item.id}
                itemId={item.id} // NOTE: itemId is required for track items
                key={item.id}
                item={item}
                />
              })
            }
          </ScrollMenu>
        </div>
      </div>
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
