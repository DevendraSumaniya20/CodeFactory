// server.js

const express = require('express');
const Razorpay = require('razorpay');

const app = express();
const razorpay = new Razorpay({
  key_id: 'rzp_test_USrXC26qZBaPrZ',
  key_secret: 'j9ZChEBUo6p9AnCnmfcs0E42',
});

const conversionRate = 75;

app.use(express.json());

app.post('/create-order', async (req, res) => {
  const {amountInDollars, currency} = req.body;

  const amountInINR = amountInDollars * conversionRate;

  const options = {
    amount: amountInINR * 100,
    currency: currency,
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

app.post('/verify-payment', async (req, res) => {
  const {payment_id, order_id} = req.body;

  try {
    const payment = await razorpay.payments.fetch(payment_id);
    if (payment.order_id === order_id && payment.status === 'captured') {
      res.json({success: true, message: 'Payment successful'});
    } else {
      res
        .status(400)
        .json({success: false, message: 'Payment verification failed'});
    }
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
