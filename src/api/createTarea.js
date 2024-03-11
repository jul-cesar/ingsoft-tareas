export const createTarea = async (data  ) => {
    fetch("http://localhost:3001/" , {method: "POST", body: data})
}