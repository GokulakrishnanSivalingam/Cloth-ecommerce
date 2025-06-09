const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.post('/create-checkout-session', async (req, res) => {
  const { email, amount, productName } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: productName || 'Product',
            },
            unit_amount: amount, // amount in paise (e.g., 5000 for ₹50)
          },
          quantity: 1,
        },
      ],
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
      customer_email: email,
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
