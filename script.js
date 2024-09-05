function UpdateClock(){
    const now  = new Date();
    let hours = now.getHours();
    const mid = hours >= 12 ? "PM" :"AM" ;
    hours = hours % 12 || 12 ;
    hours = hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds} ${mid} ` ;
    document.getElementById("Clock").textContent = timeString ;
}
function setDate() {
    const now = new Date();
    let year = now.getFullYear();
    let month = String(now.getMonth() + 1).padStart(2, '0'); // Add 1 since getMonth() is 0-indexed
    let day = String(now.getDate()).padStart(2, '0'); // Use getDate() to get the day of the month

    let dateString = `${year}/${month}/${day}`;
    document.getElementById("DATE").textContent = dateString;
}

UpdateClock();
setInterval(UpdateClock , 1000 ) ;
setDate();
