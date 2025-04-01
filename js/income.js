// Add income function
function addIncome() {
    const category = document.getElementById("incomeCategory").value;
    const amount = document.getElementById("incomeAmount").value;

    // Check if both fields are filled
    if (category && amount) {
        // Get the current income list from localStorage
        const incomeList = JSON.parse(localStorage.getItem("incomeList")) || [];

        // Add new income to the list
        incomeList.push({ category, amount });

        // Store the updated list back to localStorage
        localStorage.setItem("incomeList", JSON.stringify(incomeList));

        // Display updated income list
        displayIncomes();

        // Clear input fields
        document.getElementById("incomeCategory").value = "";
        document.getElementById("incomeAmount").value = "";

        // Alert user of success
        alert("Income added successfully!");
    } else {
        // Alert user if fields are empty
        alert("Please fill all fields!");
    }
}

// Display incomes from localStorage
function displayIncomes() {
    const incomeList = JSON.parse(localStorage.getItem("incomeList")) || [];
    const listElement = document.getElementById("incomeList");

    // Clear the current list
    listElement.innerHTML = "";

    // Loop through the income list and display each item
    incomeList.forEach((income) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${income.category} - $${income.amount}`;
        listElement.appendChild(listItem);
    });
}

// Display incomes when the page loads
window.onload = function() {
    displayIncomes();
};
