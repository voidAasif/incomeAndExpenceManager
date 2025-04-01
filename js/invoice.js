function generateInvoice() {
    // Retrieve sales data from localStorage (added after stock sale)
    const salesList = JSON.parse(localStorage.getItem("salesList")) || [];
    const incomeList = JSON.parse(localStorage.getItem("incomeList")) || [];
    const expenseList = JSON.parse(localStorage.getItem("expenseList")) || [];

    // Calculate total income and expense
    const totalIncome = incomeList.reduce((total, income) => total + parseFloat(income.amount), 0);
    const totalExpense = expenseList.reduce((total, expense) => total + parseFloat(expense.amount), 0);

    // Calculate net profit or loss
    const netProfitLoss = totalIncome - totalExpense;

    // Generate invoice content
    const content = `
        <img src="https://cdn-icons-png.flaticon.com/128/4661/4661361.png" alt="Logo">
        <h2>Invoice</h2>
        <p>Company: Example ORG</p>
        <p>Generated on: ${new Date().toLocaleString()}</p>

        <h3>Sales Details:</h3>
        <ul>
            ${salesList.map(sale => `
                <li>
                    Product: ${sale.productName} - 
                    Quantity Sold: ${sale.quantitySold} - 
                    Price: $${sale.price} - 
                    Total: $${(sale.quantitySold * sale.price).toFixed(2)}
                </li>`).join('')}
        </ul>

        <h3>Income Details:</h3>
        <ul>
            ${incomeList.map(income => `<li>${income.category}: $${income.amount}</li>`).join('')}
        </ul>

        <h3>Expense Details:</h3>
        <ul>
            ${expenseList.map(expense => `<li>${expense.category}: $${expense.amount}</li>`).join('')}
        </ul>

        <h3>Summary:</h3>
        <p>Total Income: $${totalIncome.toFixed(2)}</p>
        <p>Total Expense: $${totalExpense.toFixed(2)}</p>

        <!-- Conditional display of profit or loss -->
        <p><strong>${netProfitLoss >= 0 ? 'Net Profit' : 'Net Loss'}: $${Math.abs(netProfitLoss).toFixed(2)}</strong></p>

        <p>Thank you for your business!</p>
    `;

    // Insert the invoice content into the page
    document.getElementById("invoiceContent").innerHTML = content;
}
