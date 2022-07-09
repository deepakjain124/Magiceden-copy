import React from "react";
import "./firstItemMargin.css"
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Arrow({
  children,
  disabled,
  onClick
}) {
  return (
    <button
    disabled={disabled}
      onClick={onClick}
      style={{
        cursor: "pointer",
        width:"40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems:"center",
        background:"rgba(28,19,38)",
        border:"2px solid rgba(36,24,47)",
        height:"40px",
        borderRadius:"100px",
        display: disabled ? "none" : "block",
        userSelect: "none",
        color:"white",
        padding:"7px"
      }}
    >
      {children}
    </button>
  );
}

export function LeftArrow() {
  const {
    isFirstItemVisible,
    scrollPrev,
    visibleItemsWithoutSeparators,
    initComplete
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow style={{color:"white"}} disabled={disabled} onClick={() => scrollPrev()}>
      <ArrowBackIosIcon style={{fontSize:'15px'}}/>
    </Arrow>
  );
}

export function RightArrow() {
  const {
    isLastItemVisible,
    scrollNext,
    visibleItemsWithoutSeparators
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !visibleItemsWithoutSeparators.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollNext()}>
      <ArrowForwardIosIcon style={{fontSize:'15px'}}/>
    </Arrow>
  );
}
