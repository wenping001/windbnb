import React, { useState } from "react";
import "./styles.css";
import NavBar from "./NavBar";
import StayList from "./StayList";
import { stays } from "./staysData";
export default function App() {
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [filterByGuest, setFilterByGuest] = useState(0);
  const [filterByLocation, setFilterByLocation] = useState(
    "Where are you going?"
  );
  const [stayList, setStayList] = useState(stays);
  const onFilter = () => {
    if (filterByLocation && child + adult) {
      let stayListCopy = [...stays];
      let [city, country] = filterByLocation.split(",");
      let filterdStays = stayListCopy.filter(
        (stay) =>
          stay.city === city &&
          stay.country === country &&
          stay.maxGuests >= child + adult
      );
      setStayList(filterdStays);
    }
  };

  const Increment = (c) => {
    if (c === "adult") {
      setAdult((currCount) => currCount + 1);
    } else {
      setChild((currCount) => currCount + 1);
    }
  };
  const Decrement = (c) => {
    if (c === "adult") {
      if (adult === 0) return;
      setAdult((currCount) => currCount - 1);
    } else {
      if (child === 0) return;
      setChild((currCount) => currCount - 1);
    }
  };
  return (
    <div className="app">
      <NavBar
        filterByLocation={filterByLocation}
        filterByGuest={filterByGuest}
        changeLocation={(e) => {
          setFilterByLocation(e.target.innerText);
        }}
        onFilter={onFilter}
        onIncrement={Increment}
        onDecrement={Decrement}
        child={child}
        adult={adult}
      />
      <StayList data={stayList} />
    </div>
  );
}
