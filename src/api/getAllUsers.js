export const getAllUsers = async () => {
  try {
    const response = await fetch(`https://task-api-tau.vercel.app/user`);
    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e.message);
  }
};
