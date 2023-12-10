let data = [10, 25, 46, 78, 12, 16, 55, 34];
let btn = document.getElementById("btn");
console.log(data);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let position = document.getElementById("position").value;

  if (!isNaN(position)) {
    for (let i = parseInt(position); i < data.length - 1; i++) {
      data[i] = data[i + 1];
    }
    data.length = data.length - 1;
    console.log(data);
  } else {
    alert("enter valid number");
  }
});
