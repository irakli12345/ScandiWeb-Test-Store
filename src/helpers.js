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
  } else if (currency.toLowerCase() === "gbp") {
    return `£${amount}`;
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
export const formatCurrency = function (currency) {
  if (currency.toLowerCase() === "usd") {
    return `$ ${currency}`;
  } else if (currency.toLowerCase() === "eur") {
    return `€ ${currency}`;
  } else if (currency.toLowerCase() === "aud") {
    return `$ ${currency}`;
  } else if (currency.toLowerCase() === "gbp") {
    return `£ ${currency}`;
  } else if (currency.toLowerCase() === "jpy") {
    return `¥ ${currency}`;
  } else if (currency.toLowerCase() === "rub") {
    return `₽ ${currency}`;
  } else {
    return currency;
  }
};
export function objectsEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}
