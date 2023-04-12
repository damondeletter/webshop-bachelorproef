import { PiletApi } from 'webshop-shell';
import AddButton from './AddButton.vue';
import RemoveButton from './RemoveButton.vue';
import Cart from './Cart.vue';

interface ButtonExtension {
  item: Object
}

interface CartItem {
  product_id: number,
  name: string,
  quantity: number,
  price: number,
  image: string,
  description: string,

}

export function setup(app: PiletApi) {

  app.setData('cart', []);
  

  const addToCart = (item) => {
    var cart = app.getData('cart');
    
    var itemInCart = cart.find((cartItem) => {
      return cartItem.name === item.name;
    });

    if (itemInCart) {
      itemInCart.quantity++;
      return;
    } else {
      item.quantity = 1;
      cart.push(item);
    }
    
    app.setData('cart', cart);
  }

  const removeFromCart = (cartItem : CartItem) => {
    const cart = app.getData("cart");

    const index = cart.findIndex((item) => item.product_id === cartItem.product_id);

    if (index !== -1) {
      if (cart[index].quantity > 1) {
        cart[index].quantity--;
      } else {
        cart.splice(index, 1);
      }
      app.setData("cart", cart);
    }
  };

  app.registerExtension<ButtonExtension>(
    'add-button', 
    app.fromVue(AddButton, { addToCart: addToCart})
  )

  app.registerExtension<ButtonExtension>(
    "remove-button",
    app.fromVue(RemoveButton, {
      removeFromCart: removeFromCart,
      item: {} as CartItem,
    })
  );
  app.registerPage("/cart", app.fromVue(Cart, { cart: app.getData('cart') }) );

}