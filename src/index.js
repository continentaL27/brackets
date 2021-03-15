module.exports = function check(str, bracketsConfig) {
  // your solution

    const stack = [],
          array = str.split("");
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {

            if (array[i] === bracketsConfig[j][0]) {

                if (bracketsConfig[j][0] === bracketsConfig[j][1]
                    && stack[stack.length - 1] === bracketsConfig[j][0]) {
                    stack.pop();
                } else {
                    stack.push(array[i]);
                }
            } else if (array[i] === bracketsConfig[j][1]) {

                if (stack[stack.length - 1] !== bracketsConfig[j][0]) {
                    return false;
                } else {
                    stack.pop();
                }
            } else {
                // do nothing
            }
        }
    }
    return (stack.length === 0);
}
