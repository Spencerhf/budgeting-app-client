import axios from "axios";

const apiUrl = "https://almost-a-budgeting-app-6b804606f213.herokuapp.com";

async function getTotal() {
  const response = await axios.get(`${apiUrl}/monthly-total`);
  return response.data;
}

async function getRecentActivity() {
  const response = await axios.get(`${apiUrl}/activity-list`);
  return response;
}

async function getMoneyInActivity() {
  const response = await axios.get(`${apiUrl}/money-in`);
  return response;
}

async function getMoneyOutActivity() {
  const response = await axios.get(`${apiUrl}/money-out`);
  return response;
}

async function removeItem(id) {
  const response = await axios.post(`${apiUrl}/remove-list/${id}`);
  return response;
}

async function addItem(name, amount) {
  const response = await axios.post(`${apiUrl}/add-item`, {
    name: name,
    amount: amount
  });
  return response;
}

export {
  addItem,
  removeItem,
  getRecentActivity,
  getMoneyOutActivity,
  getMoneyInActivity,
  getTotal
}