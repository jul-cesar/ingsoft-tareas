export const deleteTarea = async (id) => {
  try {
    const response = await fetch(`http://localhost:3001/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e.message);
  }
};
