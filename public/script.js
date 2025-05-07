function displayResult(data) {
  const output = document.getElementById("output");

  if (data.error) {
    output.innerHTML = `<p style="color:red">${data.error}</p>`;
  } else {
    output.innerHTML = `
        <p><strong>Unix:</strong> ${data.unix}</p>
        <p><strong>UTC:</strong> ${data.utc}</p>`;
  }
}

async function fetchTimeStamp() {
  const dateInput = document.getElementById("date").value.trim();
  const res = await fetch(`/api/${dateInput}`);
  const data = await res.json();

  displayResult(data);
}

async function fetchCurrentTime() {
  const res = await fetch(`/api`);

  const data = await res.json();

  displayResult(data);
}
