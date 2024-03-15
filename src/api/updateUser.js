export const updateUser = async (id, dataUser) => {
  try {
    const response = await fetch(
      `https://task-api-woad.vercel.app/user/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataUser),
      }
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e.message);
  }
};
