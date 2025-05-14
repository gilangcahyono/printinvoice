const username = "admin";
const password = "1";

const credentials = btoa(`${username}:${password}`);

console.log(credentials);

fetch("http://192.168.1.12/rest/user", {
  method: "GET",
  headers: {
    Authorization: `Basic ${credentials}`,
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
