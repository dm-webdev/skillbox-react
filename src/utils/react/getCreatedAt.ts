export function getCreatedAt(createDate: Date) {
  const nowDate = Date.now();
  const diffDate = nowDate - Date.parse(createDate.toString());
  const hoursName = [
    "",
    "час",
    "часа",
    "часа",
    "часа",
    "часов",
    "часов",
    "часов",
    "часов",
    "часов",
    "часов",
    "часов",
    "часов",
    "часов",
    "часов",
    "часов",
    "часов",
    "часов",
    "часов",
    "часов",
    "часов",
    "час",
    "часа",
    "часа",
  ];

  const minName = [
    "",
    "минуту",
    "минуты",
    "минуты",
    "минуты",
    "минут",
    "минут",
    "минут",
    "минут",
    "минут",
    "минут", //10
    "минут",
    "минут",
    "минут",
    "минут",
    "минут",
    "минут",
    "минут",
    "минут",
    "минут",
    "минут", //20
    "минуту",
    "минуты",
    "минуты",
    "минуты",
    "минут",
    "минут",
    "минут",
    "минут",
    "минут",
    "минут", //30
    "минуту",
    "минуты",
    "минуты",
    "минуты",
    "минут",
    "минут",
    "минут",
    "минут",
    "минут",
    "минут", //40
    "минуту",
    "минуты",
    "минуты",
    "минуты",
    "минут",
    "минут",
    "минут",
    "минут",
    "минут",
    "минут", //50
    "минуту",
    "минуты",
    "минуты",
    "минуты",
    "минут",
    "минут",
    "минут",
    "минут",
    "минут",
  ];

  if (diffDate >= 8.64e7) {
    // return `${createDate.toString()}`;
    return `${new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour12: false,
    }).format(new Date(createDate))}`
  } else if (diffDate < 8.64e7 && diffDate >= 36e5) {
    return `${Math.floor(diffDate / 36e5)} ${
        hoursName[Math.floor(diffDate / 36e5)]
      } назад`;
  }
  return `${Math.floor(diffDate / 6e4)} ${
      minName[Math.floor(diffDate / 6e4)]
    } назад`;
}