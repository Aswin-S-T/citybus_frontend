import React, { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "./constats/Api";

const InvoiceForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the API endpoint to send the invoice
    axios.get(`${BACKEND_URL}/api/v1/user/send-invoice`).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button type="submit">Send Invoice</button>
    </form>
  );
};

export default InvoiceForm;
