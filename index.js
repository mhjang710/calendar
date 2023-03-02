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

// Get the current time
const hr = date.getHours();
const min = date.getMinutes();

if (hr >= 12) {
  document.getElementById('hr').innerHTML = (hr - 12);
  document.getElementById('am').style.color = "gray"; // 색깔 바꾸기
} else {
  document.getElementById('hr').innerHTML = hr;
  document.getElementById('pm').style.color = "gray";
}

