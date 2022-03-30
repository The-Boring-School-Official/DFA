// deepcode ignore MissingCloseOnSomePath: <please specify a reason of ignoring this>
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

/** @dev function to check DFA **/
const DFA = (input) => {
  const states = [0, 1];
  const finalState = 0;

  var transitionState = states[0];

  for (var i = 0; i < input.length; i++) {
    switch (input[i]) {
      case "a":
        if (transitionState === states[0]) {
          transitionState = states[1];
        } else {
          transitionState = states[0];
        }
        break;
      case "b":
        if (transitionState === states[0]) {
          continue;
        } else {
          transitionState = states[1];
        }
        break;
    }
  }

  if (transitionState === finalState) {
    return console.log("Accepted");
  } else {
    return console.log("Rejected");
  }
};

/** @dev function to check DFA **/
readline.question(`Enter Input: `, (input) => {
  DFA(input);
  readline.close();
});
