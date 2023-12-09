const data = [20, 50, 90, 30, 100, 170, 190, 10];

const btn = document.getElementById("btn");
console.log(data);

btn.addEventListener("click", (e) => {
  let element = document.getElementById("element").value;
  let position = document.getElementById("position").value;
  e.preventDefault();

  if (!isNaN(element) && !isNaN(position)) {
    for (let i = data.length - 1; i >= position; i--) {
      data[i + 1] = data[i];

      if (i == position) {
        data[i] = parseInt(element);
      }
    }
  } else {
    alert("enter valid value");
  }

  console.log(data);
});
