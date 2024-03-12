export const deleteTarea = async (id) => {
  try {
    const response = await fetch(`https://task-api-tau.vercel.app/${id}/`, {
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
