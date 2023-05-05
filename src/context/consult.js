export function header(dataPost) {
  const user = JSON.parse(localStorage.getItem("user"));
  const header = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: "token " + user.token,
    },
    body: JSON.stringify(dataPost),
  };
  return header;
}
