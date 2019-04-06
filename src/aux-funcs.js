exports.makeLowerCase = string => {
  return string.toLowerCase();
};

exports.capitaliseFirstLetter = string => {
  return string[0].toUpperCase() + string.slice(1);
};
