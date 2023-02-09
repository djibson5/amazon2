const stripe = require ('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
const {items, email} = req.body ;

 console.log(items);
 console.log(email);

const transformedItems = items.map(item => ({

   // description: item.description,
    quantity: 1,
    
    price_data: {
        currency: 'xof',
        unit_amount:(item.price), //item.price * 100,
       // unit_amount: 2000,

        product_data:{
          description: item.description,
          name: item.title,
          images: [item.image]
        },
    }


}));

const session = await stripe.checkout.sessions.create({
   // payment_method_types: ["card"],

   shipping_options: [
    {
        shipping_rate_data: {
            type: 'fixed_amount',
         //   fixed_amount: ['shr_1MYwHcFGXe0w6Q7UdmQHZKmK'],
              fixed_amount: {amount: 2000, currency: 'xof'},
              display_name: 'Delai de livraison :',
       // shipping_rates:['shr_1MYwHcFGXe0w6Q7UdmQHZKmK']
              delivery_estimate: {
                    minimum: {unit: 'business_day', value: 1},
                    maximum: {unit: 'business_day', value: 2},
                  },

        }
    },
     ],

    shipping_address_collection: {
       allowed_countries: ['SN'],
    },
    
    line_items: transformedItems,

    mode: 'payment',
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
        email,
        images: JSON.stringify(items.map(item => item.image))
    }
});

// const session = await stripe.checkout.sessions.create({

//     shipping_address_collection: {
//     allowed_countries: ['US', 'CA']
//                                  },

//     shipping_options: [
//       {
//         shipping_rate_data: {
//           type: 'fixed_amount',
//           fixed_amount: {amount: 0, currency: 'usd'},
//           display_name: 'Free shipping',
//           delivery_estimate: {
//             minimum: {unit: 'business_day', value: 5},
//             maximum: {unit: 'business_day', value: 7},
//           },
//         },
//       },
//     ],

//     line_items: [
//       {
//         price_data: {
//             currency: 'usd', 

//             product_data: {
//                 name: 'T-shirt'}, 
//                 unit_amount: 2000
//                     },
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: 'https://example.com/success',
//     cancel_url: 'https://example.com/cancel',
//   });

res.status(200).json({id: session.id})
}