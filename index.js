function updateclock(){
    const now =new Date();
    let hour=now.getHours();
    const meridian=hour>=12 ? "PM" : "AM";
    hour=hour%12||12;
    hour=hour.toString().padStart(2,0);
    const minutes=now.getMinutes().toString().padStart(2,0);
    const seconds=now.getSeconds().toString().padStart(2,0);
    const timeString=`${hour}:${minutes}:${seconds} ${meridian}`;
    document.getElementById("clock").textContent=timeString;

}

updateclock();
setInterval(updateclock,1000)