import { API_URL } from "../config";

export async function addAndDeleteCompt(initDta, selected, idInst) {

  const user = JSON.parse(localStorage.getItem("user"));

  for (const key in selected) {
    const isPresentLast = initDta.find((id) => id === parseInt(key));

    if (isPresentLast && !selected[key]) {
      const response = await fetch(
        `${API_URL}api/DELInsCom/${idInst}/${key}/`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: "token " + user.token,
          },
        }
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
    } else if (!isPresentLast && selected[key]) {
      const response = await fetch(API_URL + "api/anadirinstructor/", {
        method: "POST",
        body: JSON.stringify({
          pkCompetencia: parseInt(key),
          docInstructor: parseInt(idInst),
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "token " + user.token,
        },
      });
      if (!response.ok) {
        throw new Error(response.status);
      }
    }
  }
}
