import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { BACKEND_URL } from "../../Api";
import data from "../../data/data";
import MultiSelect from "../components/MultiSelect";
import MyComponent from "../components/MyComponent";
import SelectBox from "../components/SelectBox";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function AddBus() {
  const [loading, setLoading] = useState(false);
  const [busName, setBusName] = useState("");
  const [busNo, setBusNo] = useState("");
  const [busType, setBusType] = useState("normal");
  const [routes, setRoutes] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [destinationTime, setDestinationTime] = useState("");
  const [rate, setRate] = useState("");
  const [totalSeats, setTotalSeats] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);

  const [selectedRoutes, setSelectedRoutes] = useState([]);

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
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setCurrentUser(user);
    }

    const fetchRoutes = () => {
      const routesData = data.routes;
      let stopsArr = [];
      if (routesData.length > 0) {
        for (let i = 0; i < routesData.length; i++) {
          const elem = routesData[i];
          const stops = elem.stops;
          for (let i = 0; i < stops.length; i++) {
            stopsArr.push(stops[i]);
          }
        }
      }
      setRoutes(stopsArr);
    };
    fetchRoutes();
  }, []);
  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      handleAddBusDetails(reader.result);
    };
    reader.onerror = () => {
      console.log("Error");
    };
  };

  const handleAddBusDetails = async (base64EncodedImage) => {
    const user = JSON.parse(localStorage.getItem("user"));
    // e.preventDefault();
    let busData = {
      bus_name: busName,
      bus_no: busNo,
      bus_type: busType,
      start_time: startTime,
      end_time: destinationTime,
      routes: selectedOptions,
      from: selectedOptions[0],
      to: selectedOptions[selectedOptions.length - 1],
      imageUrl: base64EncodedImage ? base64EncodedImage : "",
      totalSeats: totalSeats,
      rate: rate,
      company_id: user?._id,
    };
    setLoading(true);
    let response = await axios.post(
      `${BACKEND_URL}/api/v1/user/add-bus-details`,
      busData
    );
    if (response && response.status == 200) {
      setLoading(false);
      Swal.fire({
        title: "Success!",
        text: "Successfully Added",
        icon: "success",
        confirmButtonText: "Ok",
      }).then(() => {
        navigate("/company");
        window.location.reload();
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong.",
        icon: "error",
        confirmButtonText: "Ok",
      }).then(() => {
        setLoading(false);
      });
    }
  };

  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [fileInputState, setFileInputState] = useState("");

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  return (
    <div className="p-1">
      <div className="dashboard p-4">
        <h4 className="text-center">Add your Bus Details</h4>
        {/* <form className="mt-4" onSubmit={handleAddBusDetails}> */}
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Name</label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => setBusName(e.target.value)}
              placeholder="Bus name"
            />
          </div>
          <div class="form-group col-md-6">
            <label>Bus No</label>
            <input
              type="text"
              class="form-control"
              onChange={(e) => setBusNo(e.target.value)}
              placeholder="Bus number"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Bus Type</label>
            <select
              className="form-control"
              onChange={(e) => setBusType(e.target.value)}
            >
              <option value="normal">Normal</option>
              <option value="volvo">Volvo</option>
            </select>
          </div>
          <div class="form-group col-md-6">
            <label>Select Routes</label>
            <select onChange={handleSelect} className="form-control">
              <option value="">Select routes</option>
              {routes &&
                routes.length > 0 &&
                routes.map((route) => <option value={route}>{route}</option>)}
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
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Start Time</label>
            <input
              onChange={(e) => setStartTime(e.target.value)}
              type="time"
              className="m-1"
            />
          </div>
          <div class="form-group col-md-6">
            <label>Destination Time</label>
            <input
              onChange={(e) => setDestinationTime(e.target.value)}
              type="time"
              className="m-1"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Rate/Km</label>
            <input
              onChange={(e) => setRate(e.target.value)}
              type="number"
              class="form-control"
              placeholder="Rate/kilometer"
            />
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">Total Seats</label>
            <input
              onChange={(e) => setTotalSeats(e.target.value)}
              type="number"
              className="form-control"
              placeholder="Total seats"
            />
          </div>
          <form onSubmit={handleSubmitFile} s>
            <input
              id="fileInput"
              type="file"
              name="image"
              onChange={handleFileInputChange}
              value={fileInputState}
              className="form-input"
            />
            {previewSource && (
              <img
                src={previewSource}
                alt="chosen"
                style={{ height: "300px" }}
              />
            )}
            <button className="btn authenticationBtn mt-2" type="submit">
              {loading ? (
                <>Loading....</>
              ) : (
                <span className="btn btn-success">Submit</span>
              )}
            </button>
          </form>
        </div>

        {/* <button type="submit" class="submitBtn">
            Save
          </button> */}
        {/* </form> */}
      </div>
    </div>
  );
}

export default AddBus;
