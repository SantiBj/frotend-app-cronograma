export function headerDelete(){
    const user = JSON.parse(localStorage.getItem("user"));
    return {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "token " + user.token,
        },
      };
}