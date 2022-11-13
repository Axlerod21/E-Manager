import { Erez } from "../models/erez";
import "./erez_info.css";

interface ErezProps {
  erez?: Erez;
}

const ErezInfo = (props: ErezProps) => {
  const { erez } = props;

  if (!erez) {
    return <div className="emptyInfoBox"></div>;
  }

  return (
    <div className="infoBox">
      <div
        className="erezName"
        style={{ gridColumnStart: "0", gridColumnEnd: "span 2" }}
      >
        <h1>{erez.name}</h1>
        <h3>{erez.ip}</h3>
      </div>
      <div className="info">{erez.connected} :פעיל</div>
      <div className="info">{erez.mode} :מצב</div>
      <div className="info">{erez.ndpPort} :RCS PORT</div>
      <div className="info">{erez.ndpIp} :RCS IP</div>
      <div className="info">{erez.sipPort} :SIP PORT</div>
      <div className="info">{erez.sipIp} :SIP IP</div>
      <div className="info">{} :FW PORT</div>
      <div className="info">{} :FW IP</div>
      <div className="info">{erez.channelA} :(Erez A) עורק</div>
      <div className="info">{erez.frequency} :(גלוי) תדר</div>
      <div className="info">{erez.multicastB} :MULTICAST B</div>
      <div className="info">{erez.multicastA} :MULTICAST A</div>
    </div>
  );
};

export default ErezInfo;
