import React, { useEffect, useState } from "react";
import { BUS_IMAGE, NO_IMAGE } from "../constats/images";
import data from "../data/data";
import axios from "axios";
import { BACKEND_URL } from "../constats/Api";
import LoadingBox from "./LoadingBox";
import ErrorBox from "./ErrorBox";

function Table() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${BACKEND_URL}/api/v1/user/bus`);
        if (res && res.status == 200) {
          setLoading(false);
          setBuses(res.data.data);
        }
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">SI</th>
            <th scope="col">Bus Name</th>
            <th scope="col">Route</th>
            <th scope="col">Time</th>
            <th scope="col">Book</th>
            {/* <th scope="col">Time</th> */}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <LoadingBox />
          ) : error ? (
            <ErrorBox />
          ) : (
            buses.map((bus, index) => (
              <>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>
                    {bus.bus_name}
                    <img
                      src={bus.imageUrl ? bus.imageUrl : NO_IMAGE}
                      className="thumb"
                      style={{ marginLeft: "10px" }}
                    />
                  </td>
                  <td>
                    {bus.from} - {bus.to}
                  </td>
                  <td>{bus.time}</td>
                  <td>
                    <a href={`/details/${bus._id}`}>
                      <button className="bookBtn">Book Now</button>
                    </a>
                  </td>
                </tr>
              </>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
