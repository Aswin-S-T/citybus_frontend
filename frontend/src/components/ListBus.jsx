import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BACKEND_URL } from "../Api";
import AddBus from "../companyPanel/screens/AddBus";
import DatatablePage from "./DatatablePage";
import LoadingBox from "./LoadingBox";

function ListBus() {
  const [myBus, setMyBus] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));

    const fetchBus = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `${BACKEND_URL}/api/v1/user/get-my-bus/${user._id}`
        );

        if (res && res.status === 200) {
          setLoading(false);
          setMyBus(res.data.data);
        }
      } catch (error) {
        setError(true);
      }
    };
    fetchBus();
  }, []);

  return (
    <div className="busList  ml-4 mr-2">
      <div className="modal-div">
        <div className="busListHead">
          <p className="DashboardHeading">Your Buses</p>
          {/* <i
          class="fa fa-plus"
          data-toggle="modal"
          data-target="#staticBackdrop"
        ></i> */}
          <div className="busListButton mt-3">
            <button
            className="addBusButton"
              data-toggle="modal"
              data-target="#staticBackdrop"
            >Add Bus</button>
          </div>
        </div>
        <div
          class="modal fade"
          id="staticBackdrop"
          data-backdrop="static"
          data-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Add new Bus
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <AddBus />
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <LoadingBox />
      ) : (
        <>
          <div className="card mt-3">
            {/* <DatatablePage /> */}
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Bus Name</th>
                  <th scope="col">Bus No.</th>
                  <th scope="col">Image</th>
                  <th scope="col">Bus Type</th>
                  <th scope="col">Starting</th>
                  <th scope="col">Destination</th>
                  <th scope="col">Routes</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {myBus.length > 0 ? (
                  myBus.map((bus, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{bus.bus_name}</td>
                      <td>{bus.bus_no}</td>
                      <td>
                        <img src={bus.imageUrl} className="thumb" />
                      </td>
                      <td>{bus.bus_type}</td>
                      <td>{bus.from}</td>
                      <td>{bus.to}</td>
                      <td>
                        {bus.routes.map((route) => (
                          <>{route},</>
                        ))}
                      </td>
                      <td>
                        <div class="dropdown">
                          <i
                            class="fa fa-ellipsis-v "
                            href="#"
                            role="button"
                            id="dropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          ></i>

                          <div
                            class="dropdown-menu"
                            aria-labelledby="dropdownMenuLink"
                          >
                            <a class="dropdown-item" href="#">
                              Action
                            </a>
                            <a class="dropdown-item" href="#">
                              Another action
                            </a>
                            <a class="dropdown-item" href="#">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <h1>No bus Found</h1>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default ListBus;
