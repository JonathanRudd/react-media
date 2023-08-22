import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");

  // Dev only - artificially slow down the API call to show loading state
  await pause(2000);

  return response.data;
});

// Dev only - artificially slow down the API call to show loading state
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

export { fetchUsers };
