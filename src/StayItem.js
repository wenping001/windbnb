import "./stayItem.css";
export default function StayItem({ data }) {
  return (
    <div className="stayItem">
      <img className="stayItem__photo" src={data.photo} alt="a" />
      <div className="stayItem__detail">
        <div className="stayItem__detail--content">
          {data.superHost && (
            <span className="stayItem__detail--superhost">Super Host</span>
          )}
          <span className="stayItem__type">{data.type}</span>
          <span className="stayItem__beds">{data.beds}</span>
        </div>
        <div className="stayItem__detail--rating">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon-star"
            viewBox="0 0 20 20"
            fill="#EB5757">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="stayItem__detail--score">{data.rating}</span>
        </div>
      </div>
      <p className="stayItem__title">{data.title}</p>
    </div>
  );
}
