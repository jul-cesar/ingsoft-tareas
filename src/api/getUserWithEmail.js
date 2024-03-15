export const getUserWithEmail = async (email) => {
  try {
    const response = await fetch(
      `https://task-api-woad.vercel.app/user/${email}`
    );
    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e.message);
  }
};
