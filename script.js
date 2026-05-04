function loadData() {
  const data = {
    study: 3,
    sleep: 7,
    entertainment: 2
  };

  let output = "";

  for (let key in data) {
    output += key + ": " + data[key] + " hours<br>";
  }

  document.getElementById("output").innerHTML = output;
}