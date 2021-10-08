import StayItem from "./StayItem.js";
import StayHeader from "./StayHeader";
import "./stayList.css";
export default function StayList({ data }) {
  return (
    <>
      <StayHeader data={data} />
      <div className="stayList">
        {data.map((item) => (
          <StayItem data={item} />
        ))}
      </div>
    </>
  );
}
