export const getTaskComentarios = async (id) => {
  try {
    const response = await fetch(`https://task-api-tau.vercel.app/${id}/`);
    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }
    const data = await response.json();
    if (data) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.error(e.message);
  }
};
