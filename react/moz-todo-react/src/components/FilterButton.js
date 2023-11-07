// src/components/FilterButton.js
import React from "react";

function FilterButton(props) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed} // This should be a dynamic value, not a string.
      onClick={() => props.setFilter(props.name)} // Added the onClick event handler.
    >
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;
