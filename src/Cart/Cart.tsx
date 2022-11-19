import React from 'react';
import { CartItemType } from '../App';
import CartItems from '../CartItems/CartItems';

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;

}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {

    const calculateTotal = (items: CartItemType[]) =>
        items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

    return (
        <div>
            <h2 className='font-bold text-gray-600 text-center text-2xl mb-8'>Your shopping cart</h2>
            {
                cartItems.length === 0 ? <p>No items in cart.</p> : null
            }
            {
                cartItems.map(item => (<CartItems
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                ></CartItems>))
            }
            <h2 className='text-xl font-semibold'>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
        </div>
    );
};

export default Cart;