<script>
  let firstName = '';
  let lastName = '';
  let email = '';
  let address = '';
  let city = '';
  let phone = '';
  let zip = '';
  let country = '';
  
  function handleSubmit() {
    // handle form submission
  }
</script>

<style>
  .checkout-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.checkout-form h1 {
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
}

.checkout-form form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.checkout-form label {
  display: block;
  margin-bottom: 10px;
  width: 48%;
}

.checkout-form input[type="text"],
.checkout-form input[type="email"] {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.checkout-form input[type="text"]:focus,
.checkout-form input[type="email"]:focus {
  outline: none;
  border-color: #6c63ff;
}

.checkout-form button {
  background-color: #6c63ff;
  color: #fff;
  align-items: center;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  margin: 0 auto;
}

.checkout-form .centered {
  text-align: center;
  margin-top: 20px;
  margin: 0 auto;
}

.checkout-form .centered p {
  color: #6c63ff;
}
</style>

<div class="checkout-form">
  <h1>Checkout</h1>
  
  <form on:submit|preventDefault={handleSubmit}>
    <label>
      First Name:
      <input type="text" bind:value={firstName} required>
    </label>
    <label>
      Last Name:
      <input type="text" bind:value={lastName} required>
    </label>
    <label>
      Email:
      <input type="email" bind:value={email} required>
    </label>
    <label>
      Phone:
      <input type="text" bind:value={phone} required>
    </label>
    <label>
      Address (Street and Number):
      <input type="text" bind:value={address} required>
    </label>
    <label>
      City:
      <input type="text" bind:value={city} required>
    </label>
    <label>
      Zip Code:
      <input type="text" bind:value={zip} required>
    </label>
    <label>
      Country:
      <input type="text" bind:value={country} required>
    </label>
    
    <h2>Payment Information</h2>
    
    <label>
      Cardholder Name:
      <input type="text" required>
    </label> 
    <label>
      Card Number:
      <input type="text" required>
    </label>
    <label>
      Expiration Date:
      <input type="text" required>
    </label>
    <label>
      CVV:
      <input type="text" required>
    </label>

    <div class="centered">
      <p>Make sure that the information above is correct!!</p>
      <button type="submit">Place Order</button>
    </div>
   
  </form>
</div>