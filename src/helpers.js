export const capitalize = function (string) {
  const lower = string.toLowerCase();
  const capitalized = string[0].toUpperCase() + lower.slice(1);
  return capitalized;
};
export const formatPrice = function (currency, amount) {
  if (currency.toLowerCase() === "usd") {
    return `$${amount}`;
  } else if (currency.toLowerCase() === "eur") {
    return `€${amount}`;
  } else if (currency.toLowerCase() === "aud") {
    return `AU$${amount}`;
  } else if (currency.toLowerCase() === "jpy") {
    return `¥${amount}`;
  } else if (currency.toLowerCase() === "rub") {
    return `₽${amount}`;
  } else {
    return amount;
  }
};
