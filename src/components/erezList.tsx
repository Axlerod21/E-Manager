import React, { useState } from "react";
import "./erezList.css";
import { Erez } from "./ErezDef";
import { Tooltip, IconButton, ListItemButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface ErezProps {
  initialErezList: Erez[];
  onErezClick: (id: number) => void;
}

const ErezList = (props: ErezProps) => {
  
  const [list, setList] = useState(props.initialErezList);

  const removeErez = (id: Number) => {
    setList(list.filter((erez) => erez.id !== id));
  };

  // TODO handle click
  const handleErezId = (id: number) => {
    props.onErezClick(id);
  };

  //TODO check rtl / ltr
  return (
    <div className="listContainer">
      <div className="listHeader"></div>
      <div className="list">{
        list.map((erez: Erez) => {
          return (
            <ListItemButton
              color="inherit"
              className="listItem"
              alignItems="center"
              onClick={() => handleErezId(erez.id)}
            >
              <Tooltip title="Delete" onClick={() => removeErez(erez.id)}>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
              <div style={{ display: "flex", alignItems: "baseline" }}> 
                <div data-status={erez.status} className="status"></div>
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
