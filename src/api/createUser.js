export const createUserFn = (data) => {
  console.log(data, "Data enviada a backend");

  fetch("http://localhost:3001/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response
          .json()
          .then((user) => console.log(user, "Usuario creado con éxito"));
      } else {
        console.error("Error en la respuesta del servidor", response.status);
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
    })
    .catch((error) => {
      console.error("Error al hacer la solicitud", error);
    });
};
