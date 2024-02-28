document.addEventListener('DOMContentLoaded', function () {
  const serviceItems = document.querySelectorAll('.service-category li');
  const totalPriceElement = document.getElementById('totalPrice');
  let totalPrice = 0;

  serviceItems.forEach(item => {
    item.addEventListener('click', function () {
      item.classList.toggle('selected');
      const price = parseFloat(item.dataset.price);

      if (item.classList.contains('selected')) {
        totalPrice += price;
      } else {
        totalPrice -= price;
      }

      totalPriceElement.textContent = totalPrice.toFixed(2);
    });
  });
});
