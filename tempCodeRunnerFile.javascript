function taxPayment(tax, amount, sum = 0, count = 1) {
  if (amount <= 1) return sum;

  const taxAmount = tax * amount;
  console.log(count, 
    'withdrawn amount', amount.toFixed(2), 
    ': tax payable', taxAmount.toFixed(2), 
    'total Tax', (sum + parseFloat(taxAmount)).toFixed(2)
  );

  // taxPayment(tax, taxAmount);
  

  return taxPayment(tax, taxAmount, sum + parseFloat(taxAmount.toFixed(2), 10), count + 1);
}


const calculateTax = (taxRate, amount) => {
  const totalWithdrawalToPayTax = taxPayment(taxRate, amount)
  const total = (totalWithdrawalToPayTax + amount).toFixed(2);
  const taxRatePayed = (totalWithdrawalToPayTax / total * 100).toFixed(2);

  console.log('tax rate payed', taxRatePayed + '%');
  
  console.log('total', total.toString().padEnd(2, 0));
  
  console.log('spendable amount', 0.7 * total);
  console.log('spendable amount', 2142.72 / amount );

  // taxPayment(0.3375, 17756.54)
}

// calculateTax(0.3375, 17756.54);
calculateTax(0.3, 5000);

