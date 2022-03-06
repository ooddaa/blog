function reverseString(str /* : string */) /* :string */ {
  return str.split("").reverse().join("");
}

function resolveMonth(num /* : number */) /* :string */ {
  const mapping = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };
  return mapping[num];
}

export { reverseString, resolveMonth };
