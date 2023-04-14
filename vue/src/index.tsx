import { PiletApi } from 'webshop-shell';
import AddButton from './AddButton.vue';
import RemoveButton from './RemoveButton.vue';
import Cart from './Cart.vue';
import {Link} from 'react-router-dom';
import * as React from 'react';
import OverviewProduts from './OverviewProducts.vue';

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
    app.emit('update-cart',cart);
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
      app.emit('update-cart',cart);
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

  const MenuComponent = () => {
    const [cartAmount, setCartAmount] = React.useState(0);

    React.useEffect(() => {
      const updateCartAmount = () => {
        let newCartAmount = app.getData('cart').length;
        setCartAmount(newCartAmount);
      };
      updateCartAmount();
      app.on('update-cart', updateCartAmount);
      return () => app.off('update-cart', updateCartAmount);
    }, []);
  
    return (
      <Link to="/cart">
        Cart ({cartAmount})
      </Link>
    );
  };
  app.registerMenu(MenuComponent);
  app.registerExtension('overview-products', app.fromVue(OverviewProduts, { cart : app.getData('cart') }));

  app.registerPage("/cart", app.fromVue(Cart, { cart: app.getData('cart') }) );

}