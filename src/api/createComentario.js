export const createComentario = async (dataComentario) => {
  try {
    const response = await fetch("http://localhost:3001/comentario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataComentario),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e.message);
  }
};
