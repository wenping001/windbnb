import NumberField from "./NumberField";
import "./addGuests.css";
export default function AddGuests({ adult, child, onIncrement, onDecrement }) {
  return (
    <div className="addGuests">
      <div className="adult">
        <p className="font-bold">Adults</p>
        <p className="text-gray my-2">Ages 13 or above</p>
        <NumberField
          category="adult"
          data={adult}
          onDecrement={onDecrement}
          onIncrement={onIncrement}
        />
      </div>
      <div className="children">
        <p className="font-bold">Children</p>
        <p className="text-gray my-2">Ages 2-12</p>
        <NumberField
          category="child"
          data={child}
          onDecrement={onDecrement}
          onIncrement={onIncrement}
        />
      </div>
    </div>
  );
}
