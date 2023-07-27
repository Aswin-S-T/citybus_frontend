import React, { useState } from "react";

const MultiSelect = () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    // Add more options as needed
  ];

  const [selectedValues, setSelectedValues] = useState([]);

  const handleSelectChange = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedValues(selectedOptions);
  };

  return (
    <div>
      <label>Select Options:</label>
      <select multiple onChange={handleSelectChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {selectedValues.length > 0 && (
        <p>Selected Values: {selectedValues.join(", ")}</p>
      )}
    </div>
  );
};

export default MultiSelect;
