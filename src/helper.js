export const maskValue = number => {
  let newArr = [];
  number = number.split("");
  const firtsArr = number.slice(0, 2).join("");
  const lastArr = number.slice(-2).join("");
  const newNumber = number.slice(2, 34);
  const changedWords = newNumber.map((item, i) => {
    return item !== "-" ? item.replace(item, "*") : item;
  });
  newArr.push(firtsArr, changedWords.join(""), lastArr);
  newArr = newArr.join("");
  return newArr;
};
