import React from "react";

const Seat = ({ seatNumber, isSelected, onClick }) => {
  const seatClassName = isSelected ? "selected" : "";

  return (
    <div className={`seat ${seatClassName}`} onClick={onClick}>
      {seatNumber}
    </div>
  );
};

const SeatArrangement = ({ seatLayout, selectedSeats, onSeatClick }) => {
  const renderSeatRow = (row, rowIndex) => {
    return row.map((seat, seatIndex) => {
      const seatKey = `${rowIndex}-${seatIndex}`;
      const isSelected = selectedSeats.includes(seatKey);

      return (
        <Seat
          key={seatKey}
          seatNumber={seat}
          isSelected={isSelected}
          onClick={() => onSeatClick(seatKey)}
        />
      );
    });
  };

  const renderSeatLayout = () => {
    return seatLayout.map((row, rowIndex) => (
      <div key={rowIndex} className="seat-row">
        {renderSeatRow(row, rowIndex)}
      </div>
    ));
  };

  return <div className="seat-layout">{renderSeatLayout()}</div>;
};

export default SeatArrangement;
