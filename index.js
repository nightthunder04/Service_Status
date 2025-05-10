const tbody = document.getElementById("table-body");

for (let i = 1; i <= 10; i++) {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${i}</td>
    <td><input type="number" class="amount" min="0" /></td>
    <td><input type="number" class="revenue" min="0" /></td>
    <td class="remaining">0</td>
  `;

  tbody.appendChild(row);
}

// Add event listeners for all inputs
document.querySelectorAll("tr").forEach(row => {
  const amountInput = row.querySelector(".amount");
  const revenueInput = row.querySelector(".revenue");
  const remainingCell = row.querySelector(".remaining");

  function updateRemaining() {
    const amount = parseFloat(amountInput.value) || 0;
    const revenue = parseFloat(revenueInput.value) || 0;

    if (amount < 0) {
      alert("Amount cannot be negative!");
      amountInput.value = '';
      remainingCell.textContent = '0';
      return;
    }
    if(revenue<0){
        alert("Value cannot be negative")
        revenueInput.value = '';
        return;
    }
    
    if(revenue > amount){
        alert("Receiving value should be smaller than amount value ");
        revenueInput.value = ''
        remainingCell.textContent = '0'
        return;
    }





    remainingCell.textContent = amount - revenue;
  }

  if (amountInput && revenueInput) {
    amountInput.addEventListener("input", updateRemaining);
    revenueInput.addEventListener("input", updateRemaining);
  }
});
