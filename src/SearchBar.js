import { useState } from "react";
import LocationList from "./LocationList";
import "./searchBar.css";
import SearchIcon from "./SearchIcon";
import AddGuests from "./AddGuests";
export default function SearchBar({
  className,
  onClick,
  onFilter,
  filterByLocation,
  child,
  adult,
  changeLocation,
  onIncrement,
  onDecrement
}) {
  const [showLocationList, setShowLocationList] = useState(false);
  const [showAddGuest, setShowAddGuest] = useState(false);

  const toggleLocation = () => {
    setShowAddGuest(false);
    setShowLocationList(!showLocationList);
  };

  const toggleAddGuests = () => {
    setShowLocationList(false);
    setShowAddGuest(!showAddGuest);
  };

  return (
    <div className={className}>
      <div className="searchBar__head">
        <p>Edit your search</p>
        <CloseIcon onClick={onClick} />
      </div>
      <div className="wrapper">
        <div className="searchBar__location">
          <p className="title">LOCATION</p>
          <p
            className={
              filterByLocation === "Where are you going?"
                ? "location"
                : "location-black"
            }
            onClick={toggleLocation}>
            {filterByLocation}
          </p>
          {/* {currentLocation} */}
        </div>
        <div className="searchBar__guest">
          <p className="title">GUESTS</p>
          <p
            className={
              child + adult === 0 ? "add-guests" : "add-guests text-black"
            }
            onClick={toggleAddGuests}>
            {child + adult} guests
          </p>
        </div>
      </div>
      {showLocationList && <LocationList onClick={changeLocation} />}
      {showAddGuest && (
        <AddGuests
          onClick={onClick}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          child={child}
          adult={adult}
        />
      )}
      <button
        className="search-btn"
        onClick={() => {
          onFilter();
          onClick();
        }}>
        <SearchIcon color="#fff" />
        <span>Search</span>
      </button>
    </div>
  );
}
function CloseIcon({ onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon-close"
      fill="none"
      viewBox="0 0 24 24"
      onClick={onClick}
      stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}
