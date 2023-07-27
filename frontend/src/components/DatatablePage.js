import React, { useEffect, useState } from "react";
import { MDBDataTable } from "mdbreact";
import axios from "axios";
import { BACKEND_URL } from "../constats/Api";
import { useNavigate } from "react-router-dom";

const DatatablePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${BACKEND_URL}/api/v1/user/bus`);
        if (res && res.status === 200) {
          setLoading(false);
          setBuses(res.data.data);
        }
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, []);

  const handleButtonClick = (_id) => {
    navigate(`/details/${_id}`);
  };

  const data = {
    columns: [
      //   {
      //     label: "No",
      //     field: "_id",
      //     sort: "asc",
      //     width: 150,
      //   },
      {
        label: "Bus Name",
        field: "bus_name",
        sort: "asc",
        width: 270,
      },
      {
        label: "Routes",
        field: "routes",
        sort: "asc",
        width: 200,
      },
      {
        label: "Time",
        field: "time",
        sort: "asc",
        width: 100,
      },
      {
        label: "Book",
        field: "book",
        sort: "asc",
        width: 150,
      },
    ],
    rows: buses.map((bus) => ({
      ...bus,
      book: (
        <button onClick={() => handleButtonClick(bus._id)} className="bookBtn">
          Book Now
        </button>
      ),
    })),
  };

  return <MDBDataTable striped bordered small data={data} />;
};

export default DatatablePage;
