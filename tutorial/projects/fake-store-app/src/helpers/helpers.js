export const shortenTitle = (title) => {
  return title.split(" ").splice(0, 3).join(" ")
}