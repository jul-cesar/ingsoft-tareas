export function formatCustomDate(datex) {
    const date = new Date(datex);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses van de 0 a 11, así que se suma 1
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

 
    return `${year} ${month} ${day} - ${hour}:${minutes}`;
}