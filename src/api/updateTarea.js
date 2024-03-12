export const updateTarea = async (id, dataTarea) => {
  try {
    const response = await fetch(`https://task-api-woad.vercel.app/${id}`, {
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
