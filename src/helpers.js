export const capitalize = function (string) {
  const lower = string.toLowerCase();
  const capitalized = string[0].toUpperCase() + lower.slice(1);
  return capitalized;
};
