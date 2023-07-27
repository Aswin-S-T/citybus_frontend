import React, { useState } from "react";

const SelectBox = ({ data }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleSelect = (e) => {
    const selectedOption = e.target.value;
    setSelectedOptions((prevOptions) => [...prevOptions, selectedOption]);
  };

  const handleDelete = (option) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.filter((selectedOption) => selectedOption !== option)
    );
  };

  return (
    <div>
      <select onChange={handleSelect} className="form-control col-md-4">
        <option value="">Select routes</option>
        {data &&
          data.length > 0 &&
          data.map((route) => <option value={route}>{route}</option>)}
      </select>
      <ul className="row mt-4">
        {selectedOptions.map((option, index) => (
          <li key={index} className="route-list text-white p-1">
            {option}
            <button
              onClick={(e) => {
                e.preventDefault();
                handleDelete(option);
              }}
              className="m-1 text-white"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectBox;
