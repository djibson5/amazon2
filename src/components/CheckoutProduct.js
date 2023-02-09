import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import Currency from "react-currency-formatter"
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'

function CheckoutProduct({
    id, 
    title, 
    price, 
    rating,
    description, 
    category, 
    image,
    hasPrime
}) {
    const dispatch=useDispatch();
    const addItemToBasket=()=> {
        const product = {
        id, 
        title, 
        price, 
        rating,
        description, 
        category, 
        image,
        hasPrime
        }
        //PUT ITEM INTO REDUX 
        dispatch(addToBasket(product))

    }
       //REMOVE ITEM FROM REDUX
    const removeItemFromBasket=()=>{
        dispatch(removeFromBasket({id}))
    }
  return (
    <div className="grid grid-cols-5">
        <Image src={image} height={200} width={200} style={{objectFit:"contain"}} />

        {/* MIDDLE */}
        <div className="col-span-3 mx-5">
            <p>{title}</p>
            <div className="flex ">
                {Array(rating)
                .fill()
                .map((_,i)=>(
                    <StarIcon key={i} className="h-5 text-yellow-500" />
                ))
                
                }
            </div>

            <p className="text-xs my-2 line-clamp-3">{description}</p>
            <Currency quantity={price} currency='XOF'/>
            {hasPrime && (
                <div className="flex items-center space-x-2">
                    <img 
                    loading='lazy'
                    className='w-12' 
                    src="https://links.papareact.com/fdw" 
                    alt="" />
                    <p className="text-xs text-gray-500">Livraison gratuite le lendemain</p>

                </div>

            )}

        </div>

        {/* Right add/remove basket */}
        <div className='flex flex-col space-y-2 my-auto justify-self-end'>
        <button onClick={addItemToBasket} className='button'>Ajouter au Panier</button>
        <button onClick={removeItemFromBasket} className='button'>Supprimer du Panier</button>
        </div>


        
    </div>
  )
}

export default CheckoutProduct