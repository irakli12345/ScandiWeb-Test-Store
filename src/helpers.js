export const capitalize = function (string) {
  const lower = string.toLowerCase();
  const capitalized = string[0].toUpperCase() + lower.slice(1);
  return capitalized;
};
export const identifyUniqueProduct = (product, attributes, productList) => {
  return productList.every(
    (item) =>
      !(
        item.id === product.id &&
        objectsEqual(item.selectedAttributes.swatch, attributes.swatch) &&
        objectsEqual(item.selectedAttributes.text, attributes.text)
      )
  );
};
export const findExistingProduct = (product, attributes, productList) => {
  return productList.find(
    (item) =>
      item.id === product.id &&
      objectsEqual(item.selectedAttributes.swatch, attributes.swatch) &&
      objectsEqual(item.selectedAttributes.text, attributes.text)
  );
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
export const filteredPrice = (pricesInCurrencies, selectedCurrency) => {
  return pricesInCurrencies.filter(
    (priceObj) =>
      priceObj.currency.toLowerCase() === selectedCurrency.toLowerCase()
  );
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
export function findIndex(currency) {
  if (currency.toLowerCase() === "usd") {
    return 0;
  } else if (currency.toLowerCase() === "gbp") {
    return 1;
  } else if (currency.toLowerCase() === "gbp") {
    return 2;
  } else if (currency.toLowerCase() === "jpy") {
    return 3;
  } else if (currency.toLowerCase() === "rub") {
    return 4;
  } else {
    return null;
  }
}
