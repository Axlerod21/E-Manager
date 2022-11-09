import React, { useState } from "react";
import "./erezList.css";
import { Erez } from "./ErezDef";

interface ErezProps {
  data: Erez[];
  currenErezId: any;
  onPress: any;
}

const ErezList = (props: ErezProps) => {

  const [list, setList] = useState(props.data);

  const erezIntoListItem = (erez: Erez) => {
    return (
      <button className="listItem" onClick={() => handleErezId(erez.id)}>
        <button
          className="delete"
          onClick={() => {
            removeErez(erez.id);
          }}
        >
          X
        </button>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <div data-status={erez.status} className="status"></div>
          <div> :מצב</div>
        </div>
        <div className="name">{erez.name}</div>
      </button>
    );
  };

  const removeErez = (id: Number) => {
    setList(list.filter((erez) => erez.id !== id));
    console.log(list);
  };

  const handleErezId = (id: number) => {
    props.onPress();
    props.currenErezId(id);
  };

  const erezList = list.map(erezIntoListItem);

  return (
    <div className="listContainer">
      <div className="listHeader"></div>
      <div className="list">{erezList}</div>
    </div>
  );
};

export default ErezList;
