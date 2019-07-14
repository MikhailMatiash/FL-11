function formatTime (a){
    let days = 0;
    let hours = 0;
    let minutes = 0;
    const minutesinday = 1440;
    const minutesinhour = 60;

    days = Math.floor(a / minutesinday);
    b = a - (days * minutesinday);
    hours = Math.floor(b / minutesinhour);
    minutes = b - (hours * minutesinhour);
    return `${days} day(s) ${hours} hour(s) ${minutes} minute(s).`
}
