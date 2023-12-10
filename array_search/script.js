let data = [12, 16, 29, 57, 48, 14, 33];
let index = undefined;

let btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let item = document.getElementById("item").value;

  if (!isNaN(item)) {
    for (let i = 0; i < data.length; i++) {
      if (data[i] === parseInt(item)) {
        index = i;
        break;
      }
    }
  } else {
    alert("enter valid number");
  }

  console.log(index);
});
