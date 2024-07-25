export default function getCurrentDate() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const fullDate = `${day}.${month + 1}`;

  return fullDate;
}
