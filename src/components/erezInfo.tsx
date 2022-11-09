import "./erezInfo.css";

interface ErezProps {
  id: number;
  isErezPressed: boolean;
}

const ErezInfo = (props: ErezProps) => {
  if (props.isErezPressed) {
    return (
      <div className="infoBox">
        <div
          className="erezName"
          style={{ gridColumnStart: "0", gridColumnEnd: "span 2" }}
        >
          <h1>{props.id}</h1>
          <h3>123.12.12.45</h3>
        </div>
        <div className="info">{} :פעיל</div>
        <div className="info">{} :מצב</div>
        <div className="info">:RCS PORT</div>
        <div className="info">:RCS IP</div>
        <div className="info">:SIP PORT</div>
        <div className="info">:SIP IP</div>
        <div className="info">:FW PORT</div>
        <div className="info">:FW IP</div>
        <div className="info">:(Erez A) עורק</div>
        <div className="info">:(גלוי) תדר</div>
        <div className="info">:URI B</div>
        <div className="info">:URI A</div>
      </div>
    );
  } else {
    return <div className="emptyInfoBox"></div>;
  }
};

export default ErezInfo;
