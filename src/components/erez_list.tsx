import { useState } from "react";
import "./erez_list.css";
import { Erez } from "../models/erez";
import { Tooltip, IconButton, ListItemButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface ErezProps {
  initialErezList: Erez[];
  onErezClick: (erez: Erez) => void;
}

const ErezList = (props: ErezProps) => {
  const [list, setList] = useState(props.initialErezList);

  const removeErez = (id: number) => {
    setList(list.filter(erez => erez._id !== id));
  };

  // TODO handle click
  const handleErezClick = (erez: Erez) => {
    props.onErezClick(erez);
  };

  // TODO check rtl / ltr
  return (
    <div className="listContainer">
      <div className="listHeader"></div>
      <div className="list">{
        list.map((erez) => {
          return (
            <ListItemButton
              color="inherit"
              className="listItem"
              alignItems="center"
              onClick={() => handleErezClick(erez)}
            >
              <Tooltip title="Delete" onClick={() => removeErez(erez._id)}>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
              <div style={{ display: "flex", alignItems: "baseline" }}> 
                <div data-status={erez.connected} className="status"></div>
                <div> :מצב</div>
              </div>
              <div className="name">{erez.name}</div>
            </ListItemButton>
          );
        })
      }</div>
    </div>
  );
};

export default ErezList;
