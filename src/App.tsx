import { useState } from "react";
import { useQuery } from 'react-query';
import "./App.css";
import DashHeader from "./components/dash_header";
import ErezList from "./components/erez_list";
import ErezInfo from "./components/erez_info";
import { Erez, ErezMode } from "./models/erez";
import erezApiClient from "./API/erez_api";

const dummyData: Erez[] = [
  {
    _id: 123456789,
    name: "a",
    asleep: false,
    channelA: 123,
    channelB: 456,
    connected: true,
    frequency: 678,
    ip: '178.178.123.456',
    mode: ErezMode.B,
    multicastA: '123.123.123.123',
    multicastB: '223.123.123.123',
    multicastC: '323.123.123.123',
    ndpIp: '323.123.123.123',
    ndpPort: 1234,
    sipIp: '123.123.12.3',
    sipPort: 5060
  },
  {
    _id: 123457479,
    name: "b",
    asleep: false,
    channelA: 123,
    channelB: 456,
    connected: true,
    frequency: 678,
    ip: '178.178.123.456',
    mode: ErezMode.B,
    multicastA: '123.123.123.123',
    multicastB: '223.123.123.123',
    multicastC: '323.123.123.123',
    ndpIp: '323.123.123.123',
    ndpPort: 1234,
    sipIp: '123.123.12.3',
    sipPort: 5060
  },
  {
    _id: 1232344389,
    name: "c",
    asleep: false,
    channelA: 123,
    channelB: 456,
    connected: true,
    frequency: 678,
    ip: '178.178.123.456',
    mode: ErezMode.B,
    multicastA: '123.123.123.123',
    multicastB: '223.123.123.123',
    multicastC: '323.123.123.123',
    ndpIp: '323.123.123.123',
    ndpPort: 1234,
    sipIp: '123.123.12.3',
    sipPort: 5060
  }
];

function App() {
  const {
    isLoading,
    isSuccess,
    isError,
    error,
    data,
  } = useQuery('erez',  )
  const [erez, setErez] = useState<Erez | undefined>();



  const onErezClicked = (clickedErez: Erez) => {
    setErez(clickedErez);
  };

  return (
    <div className="App">
      <DashHeader />
      <div className="erezBody">
        <ErezInfo erez={erez} />
        <ErezList
          initialErezList={dummyData}
          onErezClick={onErezClicked}
        />
      </div>
    </div>
  );
}

export default App;
