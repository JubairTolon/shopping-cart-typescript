import React from 'react';
import { CartItemType } from '../App';

type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;

}

const CartItems: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
    return (
        <div className='flex justify-between items-center bg-slate-300 mb-2 px-2 rounded-md gap-2 py-2'>
            <div className='w-full'>
                <h3 className='font-bold mb-4'>{item.title}</h3>
                <div className='flex justify-between font-semibold mb-4'>
                    <p>Price: ${item.price}</p>
                    <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
                </div>
                <div className='flex justify-between items-center text-center'>
                    <button className='btn btn-circle' onClick={() => removeFromCart(item.id)}>-</button>
                    <p className='text-xl'>{item.amount}</p>
                    <button className='btn btn-circle' onClick={() => addToCart(item)}>+</button>
                </div>
            </div >
            <img className='w-2/6 max-h-24 rounded-md' src={item.image} alt={item.title} />
        </div>
    );
};

export default CartItems;