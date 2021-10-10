export const reactJoin = (elements, joiner) => (elements.length ? elements.reduce((prev, curr) => [prev, joiner, curr]) : []);
export const SHORT_MONTH_NAMES = [
  'Jan', 'Feb', 'March', 'April', 'May', 'Jun',
  'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec',
];
export const DAYS_OF_WEEK = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
