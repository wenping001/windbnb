import "./numberField.css";

export default function NumberField({
  category,
  data,
  onIncrement,
  onDecrement
}) {
  let decrementBtn = "btn enabled-btn";
  if (data === 0) {
    decrementBtn = "btn disabled-btn";
  }

  return (
    <div className="number-field">
      <div className={decrementBtn} onClick={() => onDecrement(category)}>
        -
      </div>
      <span className="number">{data}</span>
      <div className="btn enabled-btn" onClick={() => onIncrement(category)}>
        +
      </div>
    </div>
  );
}
