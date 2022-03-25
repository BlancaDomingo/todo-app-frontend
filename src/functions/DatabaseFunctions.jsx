const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const TODOS_PATH = BACKEND_URL + "/todos";

// const recordsApi = "http://localhost:4000/records";
// const recordsApi = "https://record-shop-back-end.herokuapp.com/records";

export async function getAllTodos(token, userId) {
  const res = await fetch(`${TODOS_PATH}/${userId}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const body = await res.json();

  return body;
}

export async function addTodoToDataBase(payload, token, userId) {
  const todo = {
    text: payload.text,
    remember: payload.remember,
    repeat: payload.repeat,
    date: payload.date,
    done: false,
  };
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(todo),
  };

  const result = await fetch(`${TODOS_PATH}/${userId}`, options);
  const body = await result.json();
  console.log("body", body);
  return body;
}

export async function toggleDoneToDataBase(todoId, token, userId) {
  const options = {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    //body: JSON.stringify(todo),
  };

  const result = await fetch(`${TODOS_PATH}/${userId}/${todoId}`, options);
  const body = await result.json();
  console.log("bodyToggle", body);
  return body;
}

export async function deleteTodoFromDataBase(todoId, token, userId) {
  const options = {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    //body: JSON.stringify(todo),
  };

  const result = await fetch(`${TODOS_PATH}/${userId}/${todoId}`, options);
  const body = await result.json();
  console.log("deleteTodo", body);
  return body;
}
