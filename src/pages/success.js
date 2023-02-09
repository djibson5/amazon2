import { CheckCircleIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../components/Header'

function success() {
    const router = useRouter();
  return (
    <div className="bg-gray-100 h-screen ">
        <Header />
        <main className="max-w-screen-lg mx-auto">
            <div className="flex flex-col p-10 bg-white ">
                <div className="flex items-center space-x-2 mb-5">
                    <CheckCircleIcon className="text-green-500 h-10"/>
                    <h1 className="text-3xl">Merci , votre commande a été confirmée! </h1>
                </div>
                <p>
                    Merci d'avoir acheté chez nous. Nous vous enverrons une confirmation une fois que votre
                    produit sera expédié, si vous souhaitez vérifier l'état de votre (vos) commande(s)
                    veuillez appuyer sur le lien ci-dessous.
                </p>
                <button onClick={()=>router.push('/orders')} className="button mt-8">Voir mes commandes</button>
            </div>

        </main>

    </div>
  )
}

export default success