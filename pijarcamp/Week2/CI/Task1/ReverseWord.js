// readline declaration
const reverseWords = (word) => {
    let temp = word.split(" ");
    let newWord = "";
    for (let i = temp.length - 1; i >= 0; i--) {
      newWord += temp[i] + " ";
    }
    return console.log(newWord);
  };

reverseWords("I love programming");