// code your solution here

const saturdayFun = function (activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
};

let mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

let wrapAdjective = function (thing = "$") {
  return function (adjective = "special") {
    return `You are ${thing}${adjective}${thing}!`;
  };
};
