import axios from "axios";

const apiUrl = "https://almost-a-budgeting-app-6b804606f213.herokuapp.com";

export async function getTotal() {
  const response = await axios.get(`${apiUrl}/monthly-total`);
  return response.data;
}

export async function listData() {
  const response = await axios.get(`${apiUrl}/activity-list`);
  return response;
}

export async function removeItem(id) {
  const response = await axios.post(`${apiUrl}/remove-list/${id}`);
  return response;
}

export async function addItem(name, amount) {
  const response = await axios.post(`${apiUrl}/add-item`, {
    name: name,
    amount: amount
  });
  return response;
}