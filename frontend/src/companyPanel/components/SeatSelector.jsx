import React, { useState } from "react";

const SeatSelector = () => {
  // Define the initial seat layout
  const initialSeatLayout = [
    [1, 2, "", 3, 4, 5],
    [6, 7, "", 8, 9, 10],
    [11, 12, "", 13, 14, 15],
    [16, 17, "", 18, 19, 20],
  ];

  const [seatLayout, setSeatLayout] = useState(initialSeatLayout);
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Function to handle seat selection
  const handleSeatSelection = (rowIndex, seatIndex) => {
    const seatValue = seatLayout[rowIndex][seatIndex];
    if (seatValue === "") {
      // Seat is already selected, so deselect it
      const updatedSeats = selectedSeats.filter(
        (seat) => !(seat.rowIndex === rowIndex && seat.seatIndex === seatIndex)
      );
      setSelectedSeats(updatedSeats);
    } else {
      // Seat is not selected, so select it
      const seatInfo = {
        rowIndex,
        seatIndex,
        seatNumber: seatValue,
      };
      setSelectedSeats([...selectedSeats, seatInfo]);
    }
  };

  // Function to render the seat layout
  const renderSeatLayout = () => {
    return seatLayout.map((row, rowIndex) => (
      <div key={rowIndex} className="seat-row">
        {row.map((seat, seatIndex) => (
          <div
            key={seatIndex}
            className={`seat ${seat === "" ? "seat-gap" : ""} ${
              isSelected(rowIndex, seatIndex) ? "selected" : ""
            }`}
            onClick={() => handleSeatSelection(rowIndex, seatIndex)}
          >
            {seat !== "" ? seat : ""}
          </div>
        ))}
      </div>
    ));
  };

  // Function to check if a seat is selected
  const isSelected = (rowIndex, seatIndex) => {
    return selectedSeats.some(
      (seat) => seat.rowIndex === rowIndex && seat.seatIndex === seatIndex
    );
  };

  return (
    <div>
      <h2>Select your seats:</h2>
      <div className="seat-layout">{renderSeatLayout()}</div>
    </div>
  );
};

export default SeatSelector;
