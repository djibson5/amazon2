import React from 'react';
import Image from 'next/image';
import {MenuIcon, SearchIcon, ShoppingCartIcon} from "@heroicons/react/outline" ;
import {signIn, signOut, useSession} from 'next-auth/react';
import {useRouter } from 'next/router';//******1 */
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';
// import logo from '../assets/logo.png'



function Header() {
    // const[session]=useSession();
    const { data: session } = useSession()
    const router =useRouter(); //********2 */
    const items=useSelector(selectItems);
    
  return (

    <header>
        {/* Top Nav */}
       <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
            <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 ">
                <Image 
                onClick={()=>router.push('/')}//******3 */
                //  src='https://links.papareact.com/f90' //logo amazon
                 
                //  src={logo}
                src={'/assets/logo.png'}
                width={150}
                height={40}
                // objectFit="contain"
                style={{objectFit:"contain"}}
                className='cursor-pointer'
                />
            </div>

            {/* Search */}
            <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yello-500 ">
                <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
                <SearchIcon  className="h-12 p-4 "/>
            </div>

             {/* Right Header */}
             <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                <div onClick={!session ? signIn : signOut} className="cursor-pointer link">
                    <p className="hover:underline">
                        {session ? `Salut, ${session.user.name}` : 'Bonjour, Identifiez-vous'}
                    </p>
                    <p className="font-extrabold md:text-sm">Compte & Listes</p>
                </div>

                <div className="link" onClick={()=>router.push('/orders')}>
                <p>Retours</p>
                <p className="font-extrabold md:text-sm">& Commandes</p>
                </div>

                <div onClick={()=>router.push('/checkout')} className="relative link flex items-center">
                    <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold ">
                    {items.length}
                    </span>
                    <ShoppingCartIcon className="h-10"/>
                    <p  className="hidden md:inline font-extrabold md:text-sm mt-2">Panier</p>
                </div>
             </div>
      
       </div>

        {/* Bottom Nav */}
       <div className="flex items-center space-x-3 p-2 pl-6  bg-amazon_blue-light text-white text-sm">
            <p className="link flex items-center">
                <MenuIcon className="h-6 mr-1 "  />
                Toutes
            </p>

            <p className="link ">Meilleures ventes </p>
            <p className="link ">Amazon Basics </p>
            <p className="link ">Musique </p>
            <p className="link hidden lg:inline-flex">Dernières Nouveautés </p>
            <p className="link hidden lg:inline-flex">Prime </p>
            <p className="link hidden lg:inline-flex">Ventes Flash </p>
            <p className="link hidden lg:inline-flex">Ebooks Kindle </p>
            <p className="link hidden lg:inline-flex">Livres </p>
            <p className="link hidden lg:inline-flex">Audible </p>

       </div>
    </header>
  )
}

export default Header