import "./stayHeader.css";
export default function StayHeader({ data }) {
  return (
    <div className="stayHeader">
      <h1 className="stayHeader__title">Stays in Finland</h1>
      <p className="stayHeader__total">{data.length}</p>
    </div>
  );
}
