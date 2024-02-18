const form = document.getElementById('productForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const productName = document.getElementById('productName').value;
  const productQuantity = document.getElementById('productQuantity').value;

  // Add data to Firestore
  await firestore.collection('products').add({
    name: productName,
    quantity: productQuantity
  });

  alert('Product added successfully!');
});