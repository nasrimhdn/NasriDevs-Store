//////////////checked twice all ok
const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
// const KEY = process.env.STRIPE_KEY;

//TODO: check the KEY WHY IS NOT WORKING FROM THE DOTENV
const KEY =
  "sk_test_51Q2x2yBrmoZwLdwozm0KbGkuKuQK4krV6R1gQCJE7heVXZy5I239lbmINm1RXVuOpjaVB1Nr5nMKgoTdSHakWFJ100NmEFU0SN";
const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
