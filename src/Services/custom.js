import axios from "axios";
import { TokenAuthentication } from "../auth/user.auth";

const apiUrl = "https://almost-a-budgeting-app-6b804606f213.herokuapp.com";

async function getTotal() {
  const userToken = TokenAuthentication();
  if (!userToken) return;
  const response = await axios.get(`${apiUrl}/monthly-total`, {
    headers: {
      "x-access-token": userToken
    }
  });
  return response.data;
}

async function getRecentActivity() {
  const userToken = TokenAuthentication();
  if (!userToken) return;
  const response = await axios.get(`${apiUrl}/activity-list`, {
    headers: {
      "x-access-token": userToken
    }
  });
  return response;
}

async function getAllActivity() {
  const userToken = TokenAuthentication();
  if (!userToken) return;
  const response = await axios.get(`${apiUrl}/all-activity`, {
    headers: {
      "x-access-token": userToken
    }
  });
  return response;
}

async function getMoneyInActivity() {
  const userToken = TokenAuthentication();
  if (!userToken) return;
  const response = await axios.get(`${apiUrl}/money-in`, {
    headers: {
      "x-access-token": userToken
    }
  });
  return response;
}

async function getMoneyOutActivity() {
  const userToken = TokenAuthentication();
  if (!userToken) return;
  const response = await axios.get(`${apiUrl}/money-out`, {
    headers: {
      "x-access-token": userToken
    }
  });
  return response;
}

async function removeItem(id) {
  const userToken = TokenAuthentication();
  if (!userToken) return;
  const response = await axios.post(`${apiUrl}/remove-list/${id}`, {}, {
    headers: {
      "x-access-token": userToken
    }
  });
  return response;
}

async function addItem(name, amount) {
  const userToken = TokenAuthentication();
  if (!userToken) return;
  const response = await axios.post(`${apiUrl}/add-item`, {
    name: name,
    amount: amount,
  }, {
    headers: {
      "x-access-token": userToken
    }
  });
  return response;
}

async function updateLineItem(updateObj, id) {
  const userToken = TokenAuthentication();
  if (!userToken) return;
  const response = await axios.post(`${apiUrl}/item-update/${id}`, updateObj, {
    headers: {
      "x-access-token": userToken
    }
  });
  return response;
}

export {
  addItem,
  removeItem,
  getAllActivity,
  getRecentActivity,
  getMoneyOutActivity,
  getMoneyInActivity,
  getTotal,
  updateLineItem,
};
