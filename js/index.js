console.log("js is loaded");

let firstArray = ["this", "is", "first", "array"];
let x = firstArray[0];
let y = firstArray[1];

function arrPrint() {
  console.log(x);
  console.log(y);
}
arrPrint();

let sentence = " ";
let i = 0;
for (i = 0; i < firstArray.length; i++) {
  sentence += " " + firstArray[i];
}

document.getElementById("test").innerHTML = sentence;

var proto = {
  greeting: "Hi!",
  func: function() {
    return this.greeting;
  }
};

// console.log(proto.func());

// console.log(proto);
console.log(proto.greeting);
