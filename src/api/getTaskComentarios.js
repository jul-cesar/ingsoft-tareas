export const getTaskComentarios = async (id) => {
  try {
    const response = await fetch(`http://localhost:3001/comentario/${id}`);
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
