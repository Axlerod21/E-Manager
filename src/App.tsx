import React, { useState } from "react";
import "./App.css";
import DashHeader from "./components/dashHeader";
import ErezList from "./components/erezList";
import ErezInfo from "./components/erezInfo";
import { ErezStatus } from "./components/ErezDef";

const dummyData = [
  {
    id: 123456789,
    name: "123_5678_1462",
    status: ErezStatus.awake,
  },
  {
    id: 987654321,
    name: "123_5678_9012",
    status: ErezStatus.awake,
  },
  {
    id: 147258369,
    name: "123_5678_5512",
    status: ErezStatus.asleep,
  },
  {
    id: 369258147,
    name: "123_5678_1012",
    status: ErezStatus.awake,
  },
  {
    id: 123456789,
    name: "123_5678_1462",
    status: ErezStatus.awake,
  },
  {
    id: 987654321,
    name: "123_5678_9012",
    status: ErezStatus.awake,
  },
  {
    id: 147258369,
    name: "123_5678_5512",
    status: ErezStatus.asleep,
  },
  {
    id: 369258147,
    name: "123_5678_1012",
    status: ErezStatus.awake,
  },
  {
    id: 123456789,
    name: "123_5678_1462",
    status: ErezStatus.awake,
  },
  {
    id: 987654321,
    name: "123_5678_9012",
    status: ErezStatus.awake,
  },
  {
    id: 147258369,
    name: "123_5678_5512",
    status: ErezStatus.asleep,
  },
  {
    id: 369258147,
    name: "123_5678_1012",
    status: ErezStatus.awake,
  },
  {
    id: 123456789,
    name: "123_5678_1462",
    status: ErezStatus.awake,
  },
  {
    id: 987654321,
    name: "123_5678_9012",
    status: ErezStatus.awake,
  },
  {
    id: 147258369,
    name: "123_5678_5512",
    status: ErezStatus.asleep,
  },
  {
    id: 369258147,
    name: "123_5678_1012",
    status: ErezStatus.awake,
  },
];

function App() {
  // const [erezPressed, setErezPressed] = useState(false);
  const [erezId, setErezId] = useState<number | undefined>();

  const onClickErezId = (newId: number) => {
    setErezId(newId);
  };

  return (
    <div className="App">
      <DashHeader />
      <div className="erezBody">
        <ErezInfo id={erezId} />
        <ErezList
          initialErezList={dummyData}
          onErezClick={onClickErezId}
        />
      </div>
    </div>
  );
}

export default App;
