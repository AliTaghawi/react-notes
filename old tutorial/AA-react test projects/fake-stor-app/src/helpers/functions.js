export const shortedTitle = (title) => {
  const splited = title.split(" ");
  return `${splited[0]} ${splited[1]} ...`;
};

export const isExist = (items, id) => {
  return !!items.find((item) => item.id === id);
};

export const findCountity = (items, id) => {
  if (items.find((item) => item.id === id)) {
    return items.find((item) => item.id === id).countity;
  } else {
    return false;
  }
};

export const priceFee = (items, id) => {
  const item = items.find((item) => item.id === id);
  if (item) {
    return (item.countity * item.price).toFixed(2);
  }
};
