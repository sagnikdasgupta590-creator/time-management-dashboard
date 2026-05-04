function loadData() {

  const study = Number(document.getElementById("study").value);
  const sleep = Number(document.getElementById("sleep").value);
  const entertainment = Number(document.getElementById("entertainment").value);

  if (!study || !sleep || !entertainment) {
    alert("Please enter all values");
    return;
  }

  const data = {
    study: study,
    sleep: sleep,
    entertainment: entertainment
  };

  let output = "";

  let total = study + sleep + entertainment;

  for (let key in data) {
    let percentage = (data[key] / total) * 100;

    output += `
      <p><strong>${key}</strong> (${data[key]} hrs)</p>
      <div class="progress mb-3">
        <div class="progress-bar" style="width:${percentage}%">
          ${percentage.toFixed(1)}%
        </div>
      </div>
    `;
  }

  let feedback = "";

  if (entertainment > 4) {
    feedback = "<div class='alert alert-warning'>⚠️ High entertainment time detected</div>";
  } else if (study >= 4) {
    feedback = "<div class='alert alert-success'>✅ Good study balance</div>";
  } else {
    feedback = "<div class='alert alert-info'>ℹ️ Try improving study time</div>";
  }

  document.getElementById("output").innerHTML = output + feedback;
}