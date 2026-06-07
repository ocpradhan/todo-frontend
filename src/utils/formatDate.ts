export function formatDate(date: Date) {
  const dateToday = new Date().toString().slice(4, 10);
  const dateYesterday = new Date(new Date().setDate(new Date().getDate() - 1))
    .toString()
    .slice(4, 10);
  const dateTomorrow = new Date(new Date().setDate(new Date().getDate() + 1))
    .toString()
    .slice(4, 10);
  const dateCurrent = date.toString().slice(4, 10);

  if (dateCurrent === dateToday) {
    return "Today";
  } else if (dateCurrent === dateYesterday) {
    return "Yesterday";
  } else if (dateCurrent === dateTomorrow) {
    return "Tomorrow";
  } else {
    return dateCurrent;
  }
}
