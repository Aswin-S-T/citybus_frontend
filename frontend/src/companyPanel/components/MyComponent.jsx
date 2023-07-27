import React, { useState } from "react";

const MyComponent = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (event) => {
    const options = Array.from(event.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setSelectedOptions(options);
  };

  return (
    <div>
      <select multiple onChange={handleSelectChange}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
      </select>
      <p>Selected options: {selectedOptions.join(", ")}</p>
    </div>
  );
};

export default MyComponent;
