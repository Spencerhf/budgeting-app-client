import axios from "axios";

const apiUrl = "https://almost-a-budgeting-app-6b804606f213.herokuapp.com";
// const apiUrl = "http://localhost:3000";

async function getTotal() {
  const response = await axios.get(`${apiUrl}/monthly-total`, {
    headers: {
      "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzA5NjEyMjAzfQ.WvltXBU2Fu14q2ncGebkRID-VxXe68_YFFDnv7WGPU0"
    }
  });
  return response.data;
}

async function getRecentActivity() {
  const response = await axios.get(`${apiUrl}/activity-list`, {
    headers: {
      "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzA5NjEyMjAzfQ.WvltXBU2Fu14q2ncGebkRID-VxXe68_YFFDnv7WGPU0"
    }
  });
  return response;
}

async function getAllActivity() {
  const response = await axios.get(`${apiUrl}/all-activity`, {
    headers: {
      "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzA5NjEyMjAzfQ.WvltXBU2Fu14q2ncGebkRID-VxXe68_YFFDnv7WGPU0"
    }
  });
  return response;
}

async function getMoneyInActivity() {
  const response = await axios.get(`${apiUrl}/money-in`, {
    headers: {
      "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzA5NjEyMjAzfQ.WvltXBU2Fu14q2ncGebkRID-VxXe68_YFFDnv7WGPU0"
    }
  });
  return response;
}

async function getMoneyOutActivity() {
  const response = await axios.get(`${apiUrl}/money-out`, {
    headers: {
      "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzA5NjEyMjAzfQ.WvltXBU2Fu14q2ncGebkRID-VxXe68_YFFDnv7WGPU0"
    }
  });
  return response;
}

async function removeItem(id) {
  const response = await axios.post(`${apiUrl}/remove-list/${id}`, {
    headers: {
      "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzA5NjEyMjAzfQ.WvltXBU2Fu14q2ncGebkRID-VxXe68_YFFDnv7WGPU0"
    }
  });
  return response;
}

async function addItem(name, amount) {
  const response = await axios.post(`${apiUrl}/add-item`, {
    name: name,
    amount: amount,
  }, {
    headers: {
      "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzA5NjEyMjAzfQ.WvltXBU2Fu14q2ncGebkRID-VxXe68_YFFDnv7WGPU0"
    }
  });
  return response;
}

async function updateLineItem(updateObj, id) {
  const response = await axios.post(`${apiUrl}/item-update/${id}`, updateObj, {
    headers: {
      "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzA5NjEyMjAzfQ.WvltXBU2Fu14q2ncGebkRID-VxXe68_YFFDnv7WGPU0"
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
