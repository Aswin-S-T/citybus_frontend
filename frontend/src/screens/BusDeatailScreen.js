import React, { useEffect, useState } from "react";
import SeatLayout from "../components/SeatLayout";
import StripeCheckoutButton from "../components/StripeCheckoutButton";
import data from "../data/data";
import { useParams } from "react-router-dom";
import LoadingBox from "../components/LoadingBox";
import ErrorBox from "../components/ErrorBox";
import axios from "axios";
import { BACKEND_URL } from "../constats/Api";
import InvoiceForm from "../InvoiceForm";
import Swal from "sweetalert2";

function BusDeatailScreen() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [bus, setBuses] = useState({});
  const { id } = useParams();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [startingPoint, setStartingPoint] = useState("");
  const [destinationPoint, setDestinationPoint] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  const [selectedSeats, setSelectedSeats] = useState([]);

  const [bookedSeats,setBookedSeats] = useState([])

  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${BACKEND_URL}/api/v1/user/bus/${id}`);
        if (res && res.status == 200) {
          setLoading(false);
          setBuses(res.data.data);
          setBookedSeats(res.data.data.bookedSeats);
        }
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, []);

  const bookSeat = async (e) => {
    e.preventDefault();
    let selected_seats = localStorage.getItem("selectedSeats");
    if (!selected_seats || selected_seats.trim()=="") {
      Swal.fire({
        title: "Error!",
        text: "Please select atleast one seat",
        icon: "error",
        confirmButtonText: "Ok",
      }).then(() => {
        setLoading(false);
      });
    } else {
      let bookingData = {
        busId: id,
        fullName,
        email,
        startingPoint,
        destinationPoint,
        amount: 100,
        date,
        selectedSeats: selected_seats,
      };
      let res = await axios.post(
        `${BACKEND_URL}/api/v1/user/book-ticket`,
        bookingData
      );
      if (res && res.status == 200) {
        Swal.fire({
          title: "Successfully Booked Seats",
          text: "Please check your Email",
          icon: "success",
          confirmButtonText: "Ok",
        }).then(() => {
          localStorage.removeItem("selectedSeats");
          setFullName(null)
          setEmail(null)
          setDate(null)
        });
      }
    }
    
  };

  return (
    <div className="container">
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <ErrorBox />
      ) : (
        <div className="row">
          <div className="col-md-6 mt-5">
            <img src={bus?.imageUrl} className="w-100 mt-5" />
            <div className="card">
              <div className="container-fluid">
                <div className="row">
                  <h6>Bus Name</h6> : {bus.bus_name}
                </div>
                <div className="row">
                  <h6>Available Seats</h6> : {bus.totalSeats}
                </div>
                <div className="row">
                  <h6>Rate</h6> : 650
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 bg-light">
            <form onSubmit={bookSeat}>
              <>
                <div className="p-2">
                  <div className="row">
                    <div className="col-md-6">
                      <p style={{ color: "#111" }}>Full Name</p>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full name"
                        onChange={(e) => setFullName(e.target.value)}
                        required={true}
                      />
                    </div>
                    <div className="col-md-6">
                      <p style={{ color: "#111" }}>Mobile Number / Email</p>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        required={true}
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="col-md-6">
                      <p style={{ color: "#111" }}>Starting Point</p>
                      <select
                        className="form-control"
                        onChange={(e) => setStartingPoint(e.target.value)}
                      >
                        {bus && bus.routes && bus.routes.length > 0 ? (
                          bus.routes.map((route) => (
                            <option value={route}>{route}</option>
                          ))
                        ) : (
                          <h1>No starting point found</h1>
                        )}
                      </select>
                    </div>
                    <div className="col-md-6">
                      <p style={{ color: "#111" }}>Destination Point</p>
                      <select
                        className="form-control"
                        onChange={(e) => setDestinationPoint(e.target.value)}
                      >
                        {bus && bus.routes && bus.routes.length > 0 ? (
                          bus.routes.map((route) => (
                            <option value={route}>{route}</option>
                          ))
                        ) : (
                          <h1>No Destination point found</h1>
                        )}
                      </select>
                    </div>
                    <div className="col-md-12">
                      <p style={{ color: "#111" }}>Travelling Date</p>
                      <input
                        type="date"
                        className="form-control"
                        onChange={(e) => setDate(e.target.value)}
                        required={true}
                      />
                    </div>
                  </div>
                </div>
                <div className="container-fluid">
                  <SeatLayout booked={bus.bookedSeats} />
                </div>
                <div className="mt-3">
                  <input type="checkbox" required={true} /> Continue with
                  payment (Once you clicked this, you can't change the option)
                </div>
                <div>{/* <StripeCheckoutButton price={232} /> */}</div>
                {/* <InvoiceForm /> */}
                <button className="submitBtn mt-4" type="submit">
                  Book Now
                </button>
              </>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default BusDeatailScreen;
