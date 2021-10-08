import { stays } from "./staysData.js";
import "./locationList.css";
export default function LocationList({ onClick }) {
  let locations = [];
  for (let stay of stays) {
    locations.push(`${stay.city},${stay.country}`);
  }
  let locationSets = new Set(locations);

  return (
    <ul className="locationList">
      {Array.from(locationSets).map((location) => (
        <li className="locationItem" onClick={(location) => onClick(location)}>
          <LocationIcon />
          <span>{location}</span>
        </li>
      ))}
    </ul>
  );
}

function LocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon-location"
      viewBox="0 0 20 20"
      fill="#4F4F4F">
      <path
        fillRule="evenodd"
        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    </svg>
  );
}
