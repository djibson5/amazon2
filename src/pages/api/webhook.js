import { buffer } from "micro" ;
import * as admin from "firebase-admin"

//Secure a connection to FIREBASE from the backend
const serviceAccount  = require('../../../permissions.json');
const app = !admin.apps.length 
? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
}) 
: admin.app();

//Establish a connection to STRIPE
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;
const fulfillOrder = async (session)=>{
    //console.log('fulfilling order', session)
    return app
    .firestore()
    .collection('users')
    .doc(session.metadata.email)
    .collection('orders')
    .doc(session.id)
    .set({
      //  montant: session.total_details ,
        amount: session.amount_total,
        amount_shipping: session.total_details.amount_shipping  ,//frais livraison
       
        images: JSON.parse(session.metadata.images),
        
        timestamp: admin.firestore.FieldValue.serverTimestamp()
    })
    .then(()=> {
        console.log(`SUCCES: Commande ${session.id} ajoute a la base de donnees`)
    })
}


export default async (req, res) => {
    if (req.method === 'POST') {
        const requestBuffer = await buffer(req);
        const payload =requestBuffer.toString() ;
        const sig = req.headers["stripe-signature"];

        let event ;

  //Verify that the EVENT posted came from STRIPE 
        try {
            event= stripe.webhooks.constructEvent(payload, sig, endpointSecret );
        }catch (err){
            console.log('Erreur', err.message)
            return res.status(400).send(`webhook error: ${err.message}`)
        }

        //Handle the checkout..session..completed event

        if (event.type === 'checkout.session.completed') {
            const session = event.data.object ;

            //Fulfill the orders
            return fulfillOrder(session)
            .then(()=>res.status(200))
            .catch (err => res.status(400).send(`webhook Error: ${err.message}`))
            
        }
        
    }

   
}

export const config = {
    api: {
        bodyParser: false ,
        externalResolver: true ,
    }
}