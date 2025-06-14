const form = document.getElementById("tradeForm");
const journalBody = document.getElementById("journalBody");

let trades = JSON.parse(localStorage.getItem("trades")) || [];

function renderTrades() {
  journalBody.innerHTML = "";
  trades.forEach((trade) => {
    const row = document.createElement("tr");
    const pl = ((trade.exit - trade.entry) * trade.qty).toFixed(2);
    row.innerHTML = `
      <td>${trade.date}</td>
      <td>${trade.symbol}</td>
      <td>${trade.entry}</td>
      <td>${trade.exit}</td>
      <td>${trade.qty}</td>
      <td>${pl}</td>
      <td>${trade.note}</td>
    `;
    journalBody.appendChild(row);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const trade = {
    date: document.getElementById("date").value,
    symbol: document.getElementById("symbol").value.toUpperCase(),
    entry: parseFloat(document.getElementById("entry").value),
    exit: parseFloat(document.getElementById("exit").value),
    qty: parseInt(document.getElementById("qty").value),
    note: document.getElementById("note").value,
  };

  trades.push(trade);
  localStorage.setItem("trades", JSON.stringify(trades));
  renderTrades();
  form.reset();
});

renderTrades();
