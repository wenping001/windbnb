import { useState } from "react";
import Logo from "./images/logo.svg";
import "./navBar.css";
import SearchBar from "./SearchBar";
import SearchIcon from "./SearchIcon";
export default function NavBar({
  filterByLocation,
  filterByGuest,
  changeLocation,
  onFilter,
  onIncrement,
  onDecrement,
  child,
  adult
}) {
  const [navBarIsActive, setNavBarIsActive] = useState(false);

  const handleClick = () => {
    setNavBarIsActive(!navBarIsActive);
  };

  let className = "searchBar";
  if (!navBarIsActive) className += " hide";

  return (
    <nav className="nav">
      <img className="logo" src={Logo} alt="windbnb" />
      <div className="nav__right" onClick={handleClick}>
        <div
          className={
            filterByLocation === "Where are you going?"
              ? "location"
              : "location-black"
          }>
          {filterByLocation}
        </div>
        <input
          placeholder="Add Guests"
          className="guests"
          value={filterByGuest === 0 ? "" : `${filterByGuest} guests`}
        />
        <SearchIcon color="#EB5757" />
      </div>

      <SearchBar
        className={className}
        onClick={handleClick}
        changeLocation={changeLocation}
        filterByLocation={filterByLocation}
        filterByGuest={filterByGuest}
        onFilter={onFilter}
        child={child}
        adult={adult}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />

      {navBarIsActive && <div className="gray-bg" onClick={handleClick}></div>}
    </nav>
  );
}
