import React from 'react';
import { CartItemType } from '../App';
import '../Items/Item.css'

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
    return (
        <div className='bg-blue-200 flex text-gray-700 flex-col relative rounded-lg item-container-main'>
            <div className='max-h-60 p-2'>
                <img className='h-60 w-full rounded-lg object-cover' src={item.image} alt={item.title} />
            </div>
            <div>
                <h3 className='p-2 font-bold'>{item.title}</h3>
                <p className='px-2 py-2 text-xs'>{item.description}</p>
                <h3 className='font-bold px-2'>${item.price}</h3>
                <button className='btn btn-info absolute bottom-0 w-full text-white bg-blue-400' onClick={() => handleAddToCart(item)}>Add to cart</button>
            </div>
        </div>
    )
};

export default Item;