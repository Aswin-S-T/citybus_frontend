import React, { useState } from "react";
import { useEffect } from "react";

const SeatLayout = ({ booked }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
    JSON.stringify(localStorage.setItem("selectedSeats", selectedSeats));
  };

  return (
    <div className="mt-5">
      <div className="seatBox">
        <h4>Seat Layout</h4>
        <div className="row">
          <div className="available-seat m-1"></div>
          Available
          <div className="booked-seat m-1"></div>
          Booked
          <div className="selected-seat m-1"></div>
          Selected
        </div>
        <div className="seat-container">
          <div className="row">
            <Seat
              seatNumber="1"
              className="seat"
              isSelected={selectedSeats.includes("1")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="2"
              className="seat"
              isSelected={selectedSeats.includes("2")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="3"
              className="seat"
              isSelected={selectedSeats.includes("3")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="4"
              className="seat"
              isSelected={selectedSeats.includes("4")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="5"
              className="seat"
              isSelected={selectedSeats.includes("5")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="6"
              className="seat"
              isSelected={selectedSeats.includes("6")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="7"
              className="seat"
              isSelected={selectedSeats.includes("7")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="8"
              className="seat"
              isSelected={selectedSeats.includes("8")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="9"
              className="seat"
              isSelected={selectedSeats.includes("9")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="10"
              className="seat"
              isSelected={selectedSeats.includes("10")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="11"
              className="seat"
              isSelected={selectedSeats.includes("11")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="12"
              className="seat"
              isSelected={selectedSeats.includes("12")}
              onClick={handleSeatClick}
              booked={booked}
            />
          </div>
          <div className="row">
            <Seat
              seatNumber="13"
              className="seat"
              isSelected={selectedSeats.includes("13")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="14"
              className="seat"
              isSelected={selectedSeats.includes("14")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="15"
              className="seat"
              isSelected={selectedSeats.includes("15")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="16"
              className="seat"
              isSelected={selectedSeats.includes("16")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="17"
              className="seat"
              isSelected={selectedSeats.includes("17")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="18"
              className="seat"
              isSelected={selectedSeats.includes("18")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="19"
              className="seat"
              isSelected={selectedSeats.includes("19")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="20"
              className="seat"
              isSelected={selectedSeats.includes("20")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="21"
              className="seat"
              isSelected={selectedSeats.includes("21")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="22"
              className="seat"
              isSelected={selectedSeats.includes("22")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="23"
              className="seat"
              isSelected={selectedSeats.includes("23")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="24"
              className="seat"
              isSelected={selectedSeats.includes("24")}
              onClick={handleSeatClick}
              booked={booked}
            />
          </div>
        </div>
        <div className="seat-container">
          <div className="row">
            <Seat
              seatNumber="25"
              className="seat"
              isSelected={selectedSeats.includes("25")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="26"
              className="seat"
              isSelected={selectedSeats.includes("26")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="27"
              className="seat"
              isSelected={selectedSeats.includes("27")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="28"
              className="seat"
              isSelected={selectedSeats.includes("28")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="29"
              className="seat"
              isSelected={selectedSeats.includes("29")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="30"
              className="seat"
              isSelected={selectedSeats.includes("30")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="31"
              className="seat"
              isSelected={selectedSeats.includes("31")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="32"
              className="seat"
              isSelected={selectedSeats.includes("32")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="A21"
              className="seat"
              isSelected={selectedSeats.includes("A1")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="33"
              className="seat"
              isSelected={selectedSeats.includes("33")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="34"
              className="seat"
              isSelected={selectedSeats.includes("34")}
              onClick={handleSeatClick}
              booked={booked}
            />
            <Seat
              seatNumber="35"
              className="seat"
              isSelected={selectedSeats.includes("35")}
              onClick={handleSeatClick}
              booked={booked}
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="seat-container">
            <div className="row">
              <Seat
                seatNumber="36"
                className="seat"
                isSelected={selectedSeats.includes("36")}
                onClick={handleSeatClick}
                booked={booked}
              />
              <Seat
                seatNumber="37"
                className="seat"
                isSelected={selectedSeats.includes("37")}
                onClick={handleSeatClick}
                booked={booked}
              />
              <Seat
                seatNumber="38"
                className="seat"
                isSelected={selectedSeats.includes("38")}
                onClick={handleSeatClick}
                booked={booked}
              />
              <Seat
                seatNumber="39"
                className="seat"
                isSelected={selectedSeats.includes("39")}
                onClick={handleSeatClick}
                booked={booked}
              />
              <Seat
                seatNumber="40"
                className="seat"
                isSelected={selectedSeats.includes("40")}
                onClick={handleSeatClick}
                booked={booked}
              />
              <Seat
                seatNumber="41"
                className="seat"
                isSelected={selectedSeats.includes("41")}
                onClick={handleSeatClick}
                booked={booked}
              />
              <Seat
                seatNumber="42"
                className="seat"
                isSelected={selectedSeats.includes("42")}
                onClick={handleSeatClick}
                booked={booked}
              />
              <Seat
                seatNumber="43"
                className="seat"
                isSelected={selectedSeats.includes("43")}
                onClick={handleSeatClick}
                booked={booked}
              />
              <Seat
                seatNumber="44"
                className="seat"
                isSelected={selectedSeats.includes("44")}
                onClick={handleSeatClick}
                booked={booked}
              />
              <Seat
                seatNumber="45"
                className="seat"
                isSelected={selectedSeats.includes("45")}
                onClick={handleSeatClick}
                booked={booked}
              />
              <Seat
                seatNumber="46"
                className="seat"
                isSelected={selectedSeats.includes("46")}
                onClick={handleSeatClick}
                booked={booked}
              />
              <Seat
                seatNumber="47"
                className="seat"
                isSelected={selectedSeats.includes("47")}
                onClick={handleSeatClick}
                booked={booked}
              />
            </div>
            <div className="row">
              <Seat
                seatNumber="48"
                className="seat"
                isSelected={selectedSeats.includes("48")}
                onClick={handleSeatClick}
                booked={booked}
              />
              <Seat
                seatNumber="49"
                className="seat"
                isSelected={selectedSeats.includes("49")}
                onClick={handleSeatClick}
                booked={booked}
              />
              <Seat
                seatNumber="50"
                className="seat"
                isSelected={selectedSeats.includes("50")}
                onClick={handleSeatClick}
                booked={booked}
              />
              <Seat
                seatNumber="51"
                className="seat"
                isSelected={selectedSeats.includes("51")}
                onClick={handleSeatClick}
                booked={booked}
              />
              <Seat
                seatNumber="52"
                className="seat"
                isSelected={selectedSeats.includes("52")}
                onClick={handleSeatClick}
                booked={booked}
              />
              <Seat
                seatNumber="53"
                className="seat"
                isSelected={selectedSeats.includes("53")}
                onClick={handleSeatClick}
                booked={booked}
              />
              <Seat
                seatNumber="54"
                className="seat"
                isSelected={selectedSeats.includes("54")}
                onClick={handleSeatClick}
                booked={booked}
              />
              <Seat
                seatNumber="55"
                className="seat"
                isSelected={selectedSeats.includes("55")}
                onClick={handleSeatClick}
                booked={booked}
              />
              <Seat
                seatNumber="56"
                className="seat"
                isSelected={selectedSeats.includes("56")}
                onClick={handleSeatClick}
                booked={booked}
              />
              <Seat
                seatNumber="57"
                className="seat"
                isSelected={selectedSeats.includes("57")}
                onClick={handleSeatClick}
                booked={booked}
              />
              <Seat
                seatNumber="58"
                className="seat"
                isSelected={selectedSeats.includes("58")}
                onClick={handleSeatClick}
                booked={booked}
              />
              <Seat
                seatNumber="59"
                className="seat"
                isSelected={selectedSeats.includes("59")}
                onClick={handleSeatClick}
                booked={booked}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2>
          Total Amount : 568 * {selectedSeats.length} :{" "}
          {568 * parseInt(selectedSeats.length)}
        </h2>
      </div>
    </div>
  );
};

const Seat = ({ seatNumber, isSelected, onClick, booked }) => {
  const isBooked = booked?.includes(parseInt(seatNumber));
  const seatClass = isSelected
    ? "seat selected"
    : isBooked
    ? "seat booked"
    : "seat";
  const seatStyle = isSelected
    ? { backgroundColor: "blue" }
    : isBooked
    ? { backgroundColor  : 'yellow'}
    : {};

  return (
    <button
      disabled={isBooked}
      className={seatClass}
      style={seatStyle}
      onClick={() => onClick(seatNumber)}
    >
      {seatNumber}
    </button>
  );
};

export default SeatLayout;
