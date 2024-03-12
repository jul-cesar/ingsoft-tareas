export const updateTarea = async (id, dataTarea) => {
  try {
    const response = await fetch(`http://localhost:3001/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataTarea),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e.message);
  }
};
