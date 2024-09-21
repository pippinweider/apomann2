
const getWeekday = (date) => {
    const day = date.getDay();
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return weekdays[day];
}

const getMonth = (date) => {
    const month = date.getMonth();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[month];
}

const getDayMonth = (date) => {
    return `${date.getDate()} ${getMonth(date)}`;
}

const addDays = (date, days) => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
}

const addMinutes = (date, minutes) => {
    const newDate = new Date(date);
    newDate.setMinutes(date.getMinutes() + minutes);
    return newDate;
}

const getTime = (date) => {
    let minutes = date.getMinutes(); 
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    return `${date.getHours()}:${minutes}`;
}


const datesEqual = (date1, date2) => {
    if (!date1 || !date2) {
        return false;
    }
    if (!date1.getHours) {
        debugger;
    }
    let date1Hours = date1.getHours();
    let date2Hours = date2.getHours();
    let date1Minutes = date1.getMinutes();
    let date2Minutes = date2.getMinutes();
    return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear() && date1Hours === date2Hours && date1Minutes === date2Minutes;
}

const getShortDate = (date) => {
    return `${date.getDate()} ${getMonth(date)}, ${getTime(date)}`;
}

export { getWeekday, getMonth, getDayMonth, addDays, addMinutes, getTime, datesEqual, getShortDate };