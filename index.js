// Get today's date
const date = new Date();

function getTodayDate (date) {
  const map = {
    m: date.getMonth() + 1,
    d: date.getDate(),
  }
  return (`${map.m}월 ${map.d}일`);
}

function getDayToday(date) {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  return (days[date.getDay()]);
}

document.getElementById('mmdd').innerHTML = getTodayDate(date);
document.getElementById('day').innerHTML = getDayToday(date);

