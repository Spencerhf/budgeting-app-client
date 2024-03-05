import axios from "axios";
const apiUrl = "https://almost-a-budgeting-app-6b804606f213.herokuapp.com";

export default async function userSignIn(email, password) {
  try {
    const response = await axios.put(`${apiUrl}/users/sign-in`, {
      email: email,
      password: password
    });
    return response.data.token;
  } catch(err) {
    alert("Email or password didn't match.");
    return false;
  }
}
