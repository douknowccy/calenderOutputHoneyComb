let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

let date = [];
let monthsOfYear = [];
let daysOfMonth = [];
// 最大值今年 最小值看要差幾年
for (let y = currentYear; y > currentYear - 2; y--) {
  // 月份
  for (let m = 0; m < 12; m++) {
    // 日期
    for (let d = 1; d < 32; d++) {
      if (d > daysInMonth(m, y)) break;
      daysOfMonth.push(d);
    }
    monthsOfYear.push({ [m]: daysOfMonth });
    daysOfMonth = [];
  }
  date.push({ [y]: monthsOfYear });
  monthsOfYear = [];
}
console.log(date);
// 判斷當年當月有幾天
function daysInMonth(iMonth, iYear) {
  return 32 - new Date(iYear, iMonth, 32).getDate();
}
