import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import FolderIcon from "@mui/icons-material/Folder";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ListItemText from "@mui/material/ListItemText";
import ClearIcon from "@mui/icons-material/Clear";

import {
  Grid,
  Typography,
  Demo,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
export default function Modal({
  open,
  setopen,
  setopeninput,
  setwalletname = { setwalletname },
}) {
  const handleClose = () => {
    setopen(false);
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

  const list = [
    {
      image:
        "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjM0IiB3aWR0aD0iMzQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iLjUiIHgyPSIuNSIgeTE9IjAiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM1MzRiYjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1NTFiZjkiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9Ii41IiB4Mj0iLjUiIHkxPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii44MiIvPjwvbGluZWFyR3JhZGllbnQ+PGNpcmNsZSBjeD0iMTciIGN5PSIxNyIgZmlsbD0idXJsKCNhKSIgcj0iMTciLz48cGF0aCBkPSJtMjkuMTcwMiAxNy4yMDcxaC0yLjk5NjljMC02LjEwNzQtNC45NjgzLTExLjA1ODE3LTExLjA5NzUtMTEuMDU4MTctNi4wNTMyNSAwLTEwLjk3NDYzIDQuODI5NTctMTEuMDk1MDggMTAuODMyMzctLjEyNDYxIDYuMjA1IDUuNzE3NTIgMTEuNTkzMiAxMS45NDUzOCAxMS41OTMyaC43ODM0YzUuNDkwNiAwIDEyLjg0OTctNC4yODI5IDEzLjk5OTUtOS41MDEzLjIxMjMtLjk2MTktLjU1MDItMS44NjYxLTEuNTM4OC0xLjg2NjF6bS0xOC41NDc5LjI3MjFjMCAuODE2Ny0uNjcwMzggMS40ODQ3LTEuNDkwMDEgMS40ODQ3LS44MTk2NCAwLTEuNDg5OTgtLjY2ODMtMS40ODk5OC0xLjQ4NDd2LTIuNDAxOWMwLS44MTY3LjY3MDM0LTEuNDg0NyAxLjQ4OTk4LTEuNDg0Ny44MTk2MyAwIDEuNDkwMDEuNjY4IDEuNDkwMDEgMS40ODQ3em01LjE3MzggMGMwIC44MTY3LS42NzAzIDEuNDg0Ny0xLjQ4OTkgMS40ODQ3LS44MTk3IDAtMS40OS0uNjY4My0xLjQ5LTEuNDg0N3YtMi40MDE5YzAtLjgxNjcuNjcwNi0xLjQ4NDcgMS40OS0xLjQ4NDcuODE5NiAwIDEuNDg5OS42NjggMS40ODk5IDEuNDg0N3oiIGZpbGw9InVybCgjYikiLz48L3N2Zz4K",
      text: "Phantom",
    },
    {
      image:
        "https://apksos.com/storage/images/com/solflare/mobile/com.solflare.mobile_1.png",
      text: "Solflare",
    },
    {
      iamge: "https://cryptologos.cc/logos/solana-sol-logo.png",
      text: "Sollet",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png",
      text: "Metamask",
    },
    {
      image: "https://crypto-central.io/library/uploads/Trust-Wallet-Logo.png",
      text: "Trust",
    },
    {
      image:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMyAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYuNSIgY3k9IjE2IiByPSIxNiIgZmlsbD0iIzAzNjRGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjIxODYgOS40OTIxOUMxMC40NTM5IDkuNDkyMTkgOS44MzM5OCAxMC4xMTIxIDkuODMzOTggMTAuODc2OFYxMi40ODk4QzkuODMzOTggMTMuMjU0NSAxMC40NTM5IDEzLjg3NDQgMTEuMjE4NiAxMy44NzQ0SDEzLjY2ODRWMjIuODk3NkMxMy42Njg0IDIzLjY2MjMgMTQuMjg4MyAyNC4yODIyIDE1LjA1MyAyNC4yODIySDE2LjY2NkMxNy40MzA3IDI0LjI4MjIgMTguMDUwNiAyMy42NjIzIDE4LjA1MDYgMjIuODk3NlYxMi41MDE1QzE4LjA1MDYgMTIuNDk3NiAxOC4wNTA2IDEyLjQ5MzcgMTguMDUwNiAxMi40ODk4VjEwLjg3NjhDMTguMDUwNiAxMC4xMTIxIDE3LjQzMDcgOS40OTIxOSAxNi42NjYgOS40OTIxOUgxNS4wNTNIMTEuMjE4NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMS4zMzc2IDEzLjg3NDRDMjIuNTQ3NyAxMy44NzQ0IDIzLjUyODcgMTIuODkzNCAyMy41Mjg3IDExLjY4MzNDMjMuNTI4NyAxMC40NzMyIDIyLjU0NzcgOS40OTIxOSAyMS4zMzc2IDkuNDkyMTlDMjAuMTI3NSA5LjQ5MjE5IDE5LjE0NjUgMTAuNDczMiAxOS4xNDY1IDExLjY4MzNDMTkuMTQ2NSAxMi44OTM0IDIwLjEyNzUgMTMuODc0NCAyMS4zMzc2IDEzLjg3NDRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
      text: "Torus",
    },
    {
      image:
        "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzUgMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0ibTIzLjU4OCAwaC0xNnYyMS41ODNoMjEuNnYtMTZhNS41ODUgNS41ODUgMCAwIDAgLTUuNi01LjU4M3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuNzM5KSIvPjxwYXRoIGQ9Im04LjM0MiAwaC0yLjc1N2E1LjU4NSA1LjU4NSAwIDAgMCAtNS41ODUgNS41ODV2Mi43NTdoOC4zNDJ6Ii8+PHBhdGggZD0ibTAgNy41OWg4LjM0MnY4LjM0MmgtOC4zNDJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDUuNzM5KSIvPjxwYXRoIGQ9Im0xNS4xOCAyMy40NTFoMi43NTdhNS41ODUgNS41ODUgMCAwIDAgNS41ODUtNS42di0yLjY3MWgtOC4zNDJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMS40NzggMTEuNDc4KSIvPjxwYXRoIGQ9Im03LjU5IDE1LjE4aDguMzQydjguMzQyaC04LjM0MnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuNzM5IDExLjQ3OCkiLz48cGF0aCBkPSJtMCAxNS4xOHYyLjc1N2E1LjU4NSA1LjU4NSAwIDAgMCA1LjU4NSA1LjU4NWgyLjc1N3YtOC4zNDJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDExLjQ3OCkiLz48L2c+PC9zdmc+",
      text: "Ledger",
    },
    {
      image:
        "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHdpZHRoPSIxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNjQiIGN5PSI2NCIgZmlsbD0iIzZlNjZmYSIgcj0iNjQiLz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJtMzUuMTk2MyA1NC4zOTk4aDE5LjJ2MTkuMmgtMTkuMnoiLz48cGF0aCBkPSJtNzMuNTk3IDU0LjM5OTgtMTkuMiAxOS4ydi0xOS4ybDE5LjItMTkuMnoiIGZpbGwtb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtNzMuNTk3IDczLjU5OTgtMTkuMiAxOS4ydi0xOS4ybDE5LjItMTkuMnoiIGZpbGwtb3BhY2l0eT0iLjc1Ii8+PHBhdGggZD0ibTczLjYwNCA1NC4zOTk4aDE5LjJ2MTkuMmgtMTkuMnoiLz48cGF0aCBkPSJtNTQuMzk2OCAzNS4yIDE5LjItMTkuMnYxOS4ybC0xOS4yIDE5LjJoLTE5LjJ6IiBmaWxsLW9wYWNpdHk9Ii43NSIvPjxwYXRoIGQ9Im03My41OTE1IDkyLjgtMTkuMiAxOS4ydi0xOS4ybDE5LjItMTkuMmgxOS4yeiIgZmlsbC1vcGFjaXR5PSIuNCIvPjwvZz48L3N2Zz4=",
      text: "Slope",
    },
    {
      image:
        "data:image/png;base64,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",
      text: "Sollet(Extension)",
    },
    {
      image:
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzQiIGhlaWdodD0iNzQiIHZpZXdCb3g9IjAgMCA3NCA3NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTczLjg5NDcgMTguNTc4OEM3My44OTQ3IDI4Ljc4MTUgNjUuNjIzOCAzNy4wNTI1IDU1LjQyMTEgMzcuMDUyNUM0NS4yNTczIDM3LjA1MjUgMzcuMDEwNiAyOC44NDQ2IDM2Ljk0NzcgMTguNjk1NkMzNi44ODUzIDI4LjgxMyAyOC42ODk5IDM3LjAwMTUgMTguNTY5OSAzNy4wNTI3QzI4LjcyODQgMzcuMTA0NSAzNi45NDc0IDQ1LjM1NTUgMzYuOTQ3NCA1NS41MjYyQzM2Ljk0NzQgNjUuNzI4OSAyOC42NzY0IDczLjk5OTggMTguNDczNyA3My45OTk4QzguMjcwOTUgNzMuOTk5OCAwIDY1LjcyODkgMCA1NS41MjYyQzAgNDUuMzU1MyA4LjIxOTM5IDM3LjEwNDEgMTguMzc4MiAzNy4wNTI3QzguMjE5NzIgMzcuMDAwOSAwLjAwMDcxOTU3MiAyOC43NDk5IDAuMDAwNzE5NTcyIDE4LjU3OTNDMC4wMDA3MTk1NzIgOC4zNzY1NCA4LjI3MTY3IDAuMTA1NTkxIDE4LjQ3NDQgMC4xMDU1OTFDMjguNjM4MiAwLjEwNTU5MSAzNi44ODQ5IDguMzEzNDggMzYuOTQ3NyAxOC40NjI1QzM3LjAxMDMgOC4zMTMyNiA0NS4yNTcxIDAuMTA1MTAzIDU1LjQyMTEgMC4xMDUxMDNDNjUuNjIzOCAwLjEwNTEwMyA3My44OTQ3IDguMzc2MDUgNzMuODk0NyAxOC41Nzg4Wk01NS40MjExIDM3LjA1MjVDNDUuMjE4MyAzNy4wNTI1IDM2Ljk0NzQgNDUuMzIzNCAzNi45NDc0IDU1LjUyNjJDMzYuOTQ3NCA2NS43Mjg5IDQ1LjIxODMgNzMuOTk5OCA1NS40MjExIDczLjk5OThDNjUuNjIzOCA3My45OTk4IDczLjg5NDcgNjUuNzI4OSA3My44OTQ3IDU1LjUyNjJDNzMuODk0NyA0NS4zMjM0IDY1LjYyMzggMzcuMDUyNSA1NS40MjExIDM3LjA1MjVaIiBmaWxsPSIjMjdBNTc3Ii8+PC9zdmc+Cg==",
      text: "Clover",
    },
    {
      image:
        "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjQyIiB3aWR0aD0iNDIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTgwLjE1NiAyNy4zMDVjLS44NzEtLjM0Mi0xLjYyNy0uODU1LTIuMzI0LTEuNTQtLjY0LS42ODUtMS4xNjMtMS40MjctMS41Ny0yLjI4My0uMzQ4LS44NTYtLjU4LTEuODI2LS41OC0yLjc5NnMuMTc0LTEuODgzLjU4LTIuNzk2Yy4zNS0uODU2Ljg3Mi0xLjU5OCAxLjU3LTIuMjgyLjYzOS0uNjI4IDEuNDUzLTEuMTQxIDIuMzI0LTEuNTQuODcyLS4zNDMgMS44Ni0uNTcyIDIuODQ4LS41NzJzMS45MTguMTcyIDIuODQ4LjU3MWMuODcyLjM0MiAxLjYyNy44NTYgMi4yNjYgMS41NC42NC42MjkgMS4xNjMgMS40MjcgMS41MTIgMi4yODMuNDA2LjkxMy41OCAxLjgyNi41OCAyLjc5NnMtLjE3NCAxLjg4My0uNTggMi43OTZjLS4zNS44NTYtLjg3MiAxLjU5OC0xLjU3IDIuMjgzLS42OTcuNjI3LTEuNDUzIDEuMTQxLTIuMzI0IDEuNTQtLjg3Mi4zNDMtMS44Ni41NzEtMi44NDguNTcxLS45MyAwLTEuODYtLjE3MS0yLjczMi0uNTd6bS0xLjA0Ni0xNS41MmMtMS4xNjIuNTEzLTIuMjY2IDEuMTk4LTMuMTM4IDIuMTExLS45My45MTMtMS42MjcgMS45NC0yLjE1IDMuMDgxLS41MjMgMS4xOTktLjc1NiAyLjQ1NC0uNzU2IDMuNzY2IDAgMS4zMTMuMjMzIDIuNTY4Ljc1NSAzLjc2Ni41MjQgMS4xNDIgMS4yMjEgMi4yMjYgMi4xNSAzLjA4Mi45My45MTMgMS45NzcgMS41OTcgMy4xNCAyLjExMSAxLjIyLjUxMyAyLjQ5OC43NDIgMy44MzUuNzQyczIuNjE1LS4yMjkgMy44MzYtLjc0MmMxLjE2Mi0uNTE0IDIuMjY2LTEuMTk4IDMuMTM4LTIuMTExLjkzLS45MTMgMS42MjctMS45NCAyLjE1LTMuMDgyLjUyNC0xLjE5OC43NTYtMi40NTMuNzU2LTMuNzY2IDAtMS4zMTItLjIzMi0yLjU2Ny0uNzU1LTMuNzY2LS41MjQtMS4xNC0xLjIyMS0yLjIyNS0yLjE1LTMuMDgxLS45My0uOTEzLTEuOTc3LTEuNTk4LTMuMTQtMi4xMTEtMS4yMi0uNTE0LTIuNDk4LS43NDItMy44MzUtLjc0MnMtMi42MTUuMjI4LTMuODM2Ljc0MnptLTIxLjA5NiAwYy0xLjE2My41MTMtMi4yNjcgMS4xOTgtMy4xMzkgMi4xMTEtLjk4OC44NTYtMS42ODUgMS45NC0yLjE1IDMuMDgxLS41MjMgMS4xOTktLjc1NiAyLjUxMS0uNzU2IDMuNzY2IDAgMS4zMTMuMjkgMi41NjguNzU2IDMuODIzLjQ2NSAxLjE0MiAxLjIyIDIuMTY5IDIuMTUgMy4wODJzMS45NzYgMS41OTggMy4xMzkgMi4xMTFjMS4yMi41MTQgMi41NTcuNzQyIDMuODM1Ljc0MiAxLjMzNyAwIDIuNjE2LS4yODYgMy44MzYtLjc0MiAxLjIyLS41MTQgMi4yNjctMS4xOTggMy4xMzgtMi4wNTQuOTMtLjkxMyAxLjYyOC0xLjk0IDIuMTUtMy4xMzkuMTE3LS4yMjguMjMzLS41MTMuMjkxLS43OThoLTIuOTA2Yy0uMzQ4Ljc0MS0uODEzIDEuNDI2LTEuNDUzIDIuMDU0LS42MzkuNjI4LTEuNDUyIDEuMTQxLTIuMzI0IDEuNTQtLjg3Mi4zNDMtMS44Ni41NzEtMi44NDguNTcxcy0xLjkxOC0uMTcxLTIuNzktLjU3Yy0uODcxLS4zNDMtMS42MjctLjg1Ny0yLjMyNC0xLjU0MS0uNjQtLjY4NS0xLjE2My0xLjQyNy0xLjU3LTIuMjgzLS4zNDgtLjg1Ni0uNTgtMS44MjYtLjU4LTIuNzk2cy4xNzQtMS44ODMuNTgtMi43OTZjLjM1LS44NTYuODcyLTEuNTk3IDEuNTctMi4yODIuNjM5LS42MjggMS40NTMtMS4xNDEgMi4zMjQtMS41NC44NzItLjM0MyAxLjg2LS41NzEgMi44NDgtLjU3MXMxLjkxOC4xNyAyLjg0OC41N2MuODcyLjM0MyAxLjYyNy44NTYgMi4zMjUgMS41NC41OC41NzIgMS4wNDYgMS4yNTYgMS40NTMgMi4wNTVoMi45MDZjLS4wNTktLjI4NS0uMTc1LS41MTQtLjI5MS0uNzk5LS41MjMtMS4xNDEtMS4yMi0yLjIyNS0yLjE1LTMuMDgxLS44NzItLjg1Ni0xLjk3Ny0xLjU5OC0zLjEzOS0yLjExMS0xLjIyLS41MTQtMi40OTktLjc0Mi0zLjgzNi0uNzQyLTEuMzk0LjA1Ny0yLjczMS4yODUtMy44OTMuNzk5em0zNy44OTIgMTguNzE1aDIuNjc0di0xOS40NTdoLTIuNjc0em0zMy4wNjktMTIuNjFjMC0yLjU2OCAyLjE1MS00LjY4IDQuNzY2LTQuNjhzNC43MDcgMi4xMTEgNC43MDcgNC42OGMwIDIuNTEtMi4wOTIgNC42MjEtNC43MDcgNC42MjEtMi42NzMgMC00Ljc2Ni0yLjA1NC00Ljc2Ni00LjYyMnptLTIuMzgzLjA1NmMwIDMuODIzIDMuMTk3IDYuNzkgNy4yNjUgNi43OWgxLjYyN2wtMy4xMzggNS44NzhoMi42NzRsNC45NC05LjI0NGMuNjk3LTEuMjU1Ljk4OC0yLjM5Ny45ODgtMy40OCAwLTMuODI0LTMuMTM5LTYuODQ4LTcuMTQ5LTYuODQ4LTQuMDY4LS4wNTctNy4yMDcgMy4wMjQtNy4yMDcgNi45MDR6bTE4Ljk0NyA2Ljc5YzAtMi4yMjUgMS44Ni0zLjk5NCA0LjEyNi0zLjk5NCAyLjMyNSAwIDQuMTg1IDEuNzcgNC4xODUgMy45OTVzLTEuODYgNC4wNTEtNC4xODUgNC4wNTEtNC4xMjYtMS44MjYtNC4xMjYtNC4wNTF6bTEuMzM3LTguOWMwLTEuNDg1IDEuMjItMi43NCAyLjczMS0yLjc0czIuNzkgMS4yNTUgMi43OSAyLjc0YzAgMS40ODMtMS4yNzkgMi43MzgtMi43OSAyLjczOC0xLjQ1MyAwLTIuNzMxLTEuMjU1LTIuNzMxLTIuNzM5em0tMi4yMDkgMGMwIDEuMDgzLjM0OSAyLjExLjk4OCAyLjk2NmwuNTIzLjc0Mi0uNjk3LjU3Yy0xLjM5NSAxLjE0Mi0yLjIwOSAyLjg1NC0yLjIwOSA0LjYyMyAwIDMuNDIzIDIuODQ4IDYuMjIgNi4zMzUgNi4yMiAzLjU0NSAwIDYuMzkzLTIuNzk3IDYuMzkzLTYuMjIgMC0xLjgyNi0uODE0LTMuNDgxLTIuMjA4LTQuNjhsLS42OTgtLjU3LjU4MS0uNzQyYy42NC0uNzk5Ljk4OC0xLjgyNi45ODgtMi45MSAwLTIuNjgyLTIuMjA4LTQuNzkzLTQuOTk4LTQuNzkzLTIuODQ4LS4wNTctNC45OTggMi4wNTQtNC45OTggNC43OTN6bS0yNC41MjYtNC43OTR2MTUuMTIxYzAgLjg1Ni0uNDY1IDEuMzctMS4yNzggMS40MjctLjgxNCAwLTEuMjc5LS42MjgtMS40NTMtLjk3bC02LjEwMy0xMi45NTNjLS4zNDgtLjgtLjg3MS0xLjQyNy0xLjYyNy0xLjk0LS42OTctLjQ1Ny0xLjUxMS0uNjg1LTIuMzgzLS42ODUtMS4wNDYgMC0xLjk3Ni4zNDItMi43MzEuOTEzLS4wNTggMC0uMDU4LjA1Ny0uMTE2LjA1Ny0uODcyLjc0Mi0xLjI3OSAxLjY1NS0xLjI3OSAyLjczOXYxNS43NDloMi44NDh2LTE1LjM1YzAtLjc5OS41ODEtMS4zNyAxLjMzNi0xLjM3LjU4MiAwIDEuMTA1LjM0MyAxLjQ1MyAxLjAyOGwuMDU5LjExNGMxLjQ1MiAzLjEzOCA0LjY0OSA5Ljk4NiA2LjU2NyAxMy42MzguNjM5IDEuMTk4IDEuNzQzIDEuNzY5IDMuNDg3IDEuNzY5IDEuMDQ2IDAgMi4wMzQtLjI4NiAyLjc5LS45MTMuODcxLS42ODUgMS4zMzYtMS4yNTYgMS4zMzYtMi42MjV2LTE1Ljc1aC0yLjkwNnptLTg1Ljg0LTEwLjA0MmgtMjUuODYxYy00LjEyNyAwLTcuNDQgMy4yNTItNy40NCA3LjMwNHYyNS4zOTJjMCA0LjA1MiAzLjMxMyA3LjMwNCA3LjQ0IDcuMzA0aDI1Ljg2YzQuMDY5IDAgNy40NC0zLjI1MiA3LjQ0LTcuMzA0di0yNS4zOTJjMC00LjA1Mi0zLjMxMy03LjMwNC03LjQ0LTcuMzA0aC4wMDF6bS02LjI3NiA5Ljk4NmMzLjAyMiAwIDUuNDYzIDIuMzk2IDUuNDYzIDUuMzY0IDAgLjkxMi0uMjMzIDEuNzY4LS42NCAyLjU2Ny0uNjk3LS41MTMtMS40NTItLjk3LTIuMjY2LTEuMjU1LjIzMi0uNC4zNDktLjg1Ni4zNDktMS4zMTIgMC0xLjU0MS0xLjI3OS0yLjc5Ni0yLjg0OC0yLjc5Ni0xLjU3IDAtMi44NDggMS4yNTUtMi44NDggMi43OTYgMCAuNDU2LjExNi45MTIuMzQ5IDEuMzEyLS44MTQuMjg1LTEuNjI4LjY4NS0yLjI2NyAxLjI1NS0uNDY1LS43OTktLjY0LTEuNjU1LS42NC0yLjU2OC0uMTE1LTIuOTY3IDIuMzI2LTUuMzYzIDUuMzQ4LTUuMzYzem0tMTMuMzEgMjAuMDI4Yy0zLjAyMSAwLTUuNDYyLTIuMzk2LTUuNDYyLTUuMzYzaDIuNjE1YzAgMS41NCAxLjI3OSAyLjc5NiAyLjg0OCAyLjc5NnMyLjg0OC0xLjI1NiAyLjg0OC0yLjc5NmgyLjYxNWMwIDIuOTY3LTIuNDQxIDUuMzYzLTUuNDYzIDUuMzYzem0wLTcuNTMyYy0zLjQ4NiAwLTYuMzM0LTIuNzk2LTYuMzM0LTYuMjIgMC0zLjQyMyAyLjg0OC02LjI3NiA2LjMzNS02LjI3NnM2LjM5MyAyLjc5NiA2LjM5MyA2LjI3NmMtLjA1OCAzLjQyNC0yLjkwNiA2LjIyLTYuMzkzIDYuMjJ6bTEzLjMxIDcuNTMyYy0zLjQ4NyAwLTYuMzkzLTIuNzk2LTYuMzkzLTYuMjIgMC0zLjQ4IDIuODQ4LTYuMjc2IDYuMzkzLTYuMjc2IDMuNDg3IDAgNi4zMzUgMi43OTYgNi4zMzUgNi4yNzcgMCAzLjQyMy0yLjg0OCA2LjIyLTYuMzM1IDYuMjJ6bTMuNzc3LTYuMjc2YzAgMi4wNTQtMS42ODUgMy42NTEtMy43NzcgMy42NTFzLTMuNzc4LTEuNjU0LTMuNzc4LTMuNjUxYzAtMi4wNTUgMS42ODYtMy43MSAzLjc3OC0zLjcxIDIuMDkyLjA1OCAzLjc3NyAxLjcxMiAzLjc3NyAzLjcxem0tMTMuMzY3LTcuNDc2YzAgMi4wNTUtMS42ODUgMy43MS0zLjc3NyAzLjcxLTIuMDkzIDAtMy43NzgtMS42NTUtMy43NzgtMy43MSAwLTIuMDU0IDEuNjg1LTMuNzA5IDMuNzc4LTMuNzA5IDIuMTUgMCAzLjc3NyAxLjY1NSAzLjc3NyAzLjcxeiIgZmlsbD0iI2Q5YjQzMiIvPjwvc3ZnPg==",
      text: "Coin98",
    },
    {
      image:
        "data:image/png;base64,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",
      text: "Solong",
    },
    {
      image:
        "http://medishares.oss-cn-hongkong.aliyuncs.com/logo/math/Logo_Icon_black.png",
      text: "MathWallet",
    },
  ];

  const [showlist, setshowlist] = React.useState(false);
  return (
    <div>
      <Dialog style={{ height: "100%" }} open={open} onClose={handleClose}>
        <div
          style={{
            background: "#10141f",
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "15px",
          }}
        >
          <button
            onClick={() => setopen(false)}
            className="wallet-adapter-modal-button-close"
          >
            <svg width="14" height="14">
              <path d="M14 12.461 8.3 6.772l5.234-5.233L12.006 0 6.772 5.234 1.54 0 0 1.539l5.234 5.233L0 12.006l1.539 1.528L6.772 8.3l5.69 5.7L14 12.461z"></path>
            </svg>
          </button>
        </div>
        <DialogTitle
          style={{
            background: "#10141f",
            color: "white",
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "600",
            width: "100%",
          }}
        >
          You'll need a wallet <br /> to continue
        </DialogTitle>
        <svg
          width="97"
          height="96"
          style={{ background: "#10141f", width: "100%" }}
          viewBox="0 0 97 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="48.5"
            cy="48"
            r="48"
            fill="url(#paint0_linear_880_5115)"
            fill-opacity="0.1"
          ></circle>
          <circle
            cx="48.5"
            cy="48"
            r="47"
            stroke="url(#paint1_linear_880_5115)"
            stroke-opacity="0.4"
            stroke-width="2"
          ></circle>
          <g clip-path="url(#clip0_880_5115)">
            <path
              d="M65.5769 28.1523H31.4231C27.6057 28.1523 24.5 31.258 24.5 35.0754V60.9215C24.5 64.7389 27.6057 67.8446 31.4231 67.8446H65.5769C69.3943 67.8446 72.5 64.7389 72.5 60.9215V35.0754C72.5 31.258 69.3943 28.1523 65.5769 28.1523ZM69.7308 52.1523H59.5769C57.2865 52.1523 55.4231 50.289 55.4231 47.9985C55.4231 45.708 57.2864 43.8446 59.5769 43.8446H69.7308V52.1523ZM69.7308 41.0754H59.5769C55.7595 41.0754 52.6539 44.1811 52.6539 47.9985C52.6539 51.8159 55.7595 54.9215 59.5769 54.9215H69.7308V60.9215C69.7308 63.2119 67.8674 65.0754 65.5769 65.0754H31.4231C29.1327 65.0754 27.2692 63.212 27.2692 60.9215V35.0754C27.2692 32.785 29.1326 30.9215 31.4231 30.9215H65.5769C67.8673 30.9215 69.7308 32.7849 69.7308 35.0754V41.0754Z"
              fill="url(#paint2_linear_880_5115)"
            ></path>
            <path
              d="M61.4231 46.6172H59.577C58.8123 46.6172 58.1924 47.2371 58.1924 48.0018C58.1924 48.7665 58.8123 49.3863 59.577 49.3863H61.4231C62.1878 49.3863 62.8077 48.7664 62.8077 48.0018C62.8077 47.2371 62.1878 46.6172 61.4231 46.6172Z"
              fill="url(#paint3_linear_880_5115)"
            ></path>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_880_5115"
              x1="3.41664"
              y1="98.0933"
              x2="103.05"
              y2="8.42498"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9945FF"></stop>
              <stop offset="0.14" stop-color="#8A53F4"></stop>
              <stop offset="0.42" stop-color="#6377D6"></stop>
              <stop offset="0.79" stop-color="#24B0A7"></stop>
              <stop offset="0.99" stop-color="#00D18C"></stop>
              <stop offset="1" stop-color="#00D18C"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_880_5115"
              x1="3.41664"
              y1="98.0933"
              x2="103.05"
              y2="8.42498"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9945FF"></stop>
              <stop offset="0.14" stop-color="#8A53F4"></stop>
              <stop offset="0.42" stop-color="#6377D6"></stop>
              <stop offset="0.79" stop-color="#24B0A7"></stop>
              <stop offset="0.99" stop-color="#00D18C"></stop>
              <stop offset="1" stop-color="#00D18C"></stop>
            </linearGradient>
            <linearGradient
              id="paint2_linear_880_5115"
              x1="25.9583"
              y1="68.7101"
              x2="67.2337"
              y2="23.7879"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9945FF"></stop>
              <stop offset="0.14" stop-color="#8A53F4"></stop>
              <stop offset="0.42" stop-color="#6377D6"></stop>
              <stop offset="0.79" stop-color="#24B0A7"></stop>
              <stop offset="0.99" stop-color="#00D18C"></stop>
              <stop offset="1" stop-color="#00D18C"></stop>
            </linearGradient>
            <linearGradient
              id="paint3_linear_880_5115"
              x1="58.3326"
              y1="49.4467"
              x2="61.0002"
              y2="45.4453"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9945FF"></stop>
              <stop offset="0.14" stop-color="#8A53F4"></stop>
              <stop offset="0.42" stop-color="#6377D6"></stop>
              <stop offset="0.79" stop-color="#24B0A7"></stop>
              <stop offset="0.99" stop-color="#00D18C"></stop>
              <stop offset="1" stop-color="#00D18C"></stop>
            </linearGradient>
            <clipPath id="clip0_880_5115">
              <rect
                width="48"
                height="48"
                fill="white"
                transform="translate(24.5 24)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
        <DialogContent
          style={{ background: "#10141f" }}
          onClick={() => setshowlist(!showlist)}
        >
          <p
            style={{
              color: "white",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Already have a wallet? View options{" "}
            {showlist ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          </p>
          {showlist && (
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Demo style={{ background: "#10141f" }}>
                  <List dense={true}>
                    {list.map((item, index) => {
                      return (
                        <ListItem key={index}>
                          <ListItemAvatar>
                            <img src={item.image} width={45} />
                          </ListItemAvatar>
                          <p
                            style={{
                              color: "#fff",
                              fontSize: "15px",
                              marginTop: "19px",
                            }}
                            onClick={() => {
                              setopen(false);
                              setopeninput(true);
                              setwalletname(item.text);
                            }}
                          >
                            {item.text}
                          </p>
                        </ListItem>
                      );
                    })}
                  </List>
                </Demo>
              </Grid>
            </Grid>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
