const form = document.getElementById("tradeForm");
const input = document.getElementById("tradeInput");
const list = document.getElementById("tradeList");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = input.value.trim();
  if (value !== "") {
    addTrade(value);
    input.value = "";
  }
});

function addTrade(text) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = function () {
    const newText = prompt("Edit your trade:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText.trim();
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  list.appendChild(li);
}
