import axios from "axios";
const apiUrl = "https://almost-a-budgeting-app-6b804606f213.herokuapp.com";

const UserSignIn = async (email, password) => {
  try {
    const response = await axios.put(`${apiUrl}/users/sign-in`, {
      email: email,
      password: password,
    });
    var today = new Date();
    var nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    document.cookie = `userToken=${response.data.token}; Expires=${nextWeek};`;
    return true;
  } catch (err) {
    alert("Email or password didn't match.");
    return false;
  }
};

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const TokenAuthentication = () => {
  const userToken = getCookie("userToken");

  if (!userToken) {
    window.location.href = "/sign-in";
    return false;
  } else {
    return userToken;
  }
};

export { UserSignIn, TokenAuthentication };
