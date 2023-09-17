import axios from "axios";

export async function getTotal() {
  const response = await axios.get(`http://localhost:8080/monthly-total`);
  return response.data;
}

export async function listData() {
  const response = await axios.get(`http://localhost:8080/activity-list`);
  return response;
}
