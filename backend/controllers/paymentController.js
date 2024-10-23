const axios = require("axios");
const asyncErrorHandler = require("../middlewares/asyncErrorHandler");
const Payment = require("../models/paymentModel"); // Assuming you have a Payment model defined
const website_url = "https://localhost:3000";
// const ErrorHandler = require("../utils/errorHandler");
const { v4: uuidv4 } = require("uuid");
//initate payment
const processPayment = asyncErrorHandler(async (req, res, next) => {
  try {
      
    const { return_url, itemId, totalPrice, name } = req.body; 
    const formData = {
      return_url: return_url,
      website_url: website_url,
      amount: totalPrice * 100, //paisa
      purchase_order_id: "oid" +uuidv4(),
      order_id: uuidv4(),
      purchase_order_name: name,
    };
      
    const khaltiApiKey =process.env.KHALTI_KEY ;
    // Configure request headers
    const config = {
      headers: {
        Authorization: `Key ${khaltiApiKey}`,
        "Content-Type": "application/json",
      },
    };

    // Send payment initiation request to Khalti
    const response = await axios.post(
      "https://a.khalti.com/api/v2/epayment/initiate/",
      formData,
      config
    );

    // Handle the response from the payment provider
    res.status(200).json({
      ...formData,
      paymentMethod: "Khalti",
      response: response.data,
    });
  } catch (error) {
    console.error("Error processing payment:", error);
    res.status(500).json({ error: "Failed to process payment" });
  }
});


//verify payment
const KhaltiResponse = async (req, res) => {
  const { txnId, pidx, amount, purchase_order_id, transaction_id, message } =
    req.query;

  try {
    const paymentInfo = await verifyKhaltiPayment(pidx);

    if (
      paymentInfo.status !== "Completed" ||
      paymentInfo.transaction_id !== transaction_id ||
      Number(paymentInfo.total_amount) !== Number(amount)
    ) {
      return res.status(400).json({
        success: false,
        message: "Payment verification failed",
        paymentInfo,
      });
    }

    const paymentData = {
      resultInfo: {
        resultStatus: paymentInfo.status,
        resultCode: "N/A",
        resultMsg: message || "N/A",
      },
      txnId: paymentInfo.transaction_id || uuidv4(),
      transactionId: transaction_id || uuidv4(),
      pidx: pidx || uuidv4(),
      bankTxnId: uuidv4(),
      orderId: purchase_order_id,
      txnAmount: (amount / 100).toString(),
      txnType: "Wallet_payment",
      gatewayName: "Khalti",
      mid: "N/A",
      paymentMode: "Online",
      refundAmt: (paymentInfo.refund_amount || 0).toString(),
      txnDate: new Date().toISOString(), // Correct date format
    };

    await addPayment(paymentData); // Save to database
    // res.json({
    //   success: true,
    //   paymentData: paymentInfo,
    //  })
    res.redirect(`http://localhost:3000/order/${purchase_order_id}`);
  } catch (error) {
    console.error("Error processing Khalti response:", error);
    res
      .status(500)
      .json({ success: false, message: "Error processing payment" });
  }
};


const verifyKhaltiPayment = async (pidx) => {
  try {
    const headersList = {
      Accept: "application/json",
      Authorization: `Key ${process.env.KHALTI_KEY }`,
      "Content-Type": "application/json",
    };

    const bodyContent = JSON.stringify({ pidx });
    const reqOptions = {
      url: "https://a.khalti.com/api/v2/epayment/lookup/",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };

    const response = await axios.request(reqOptions);
    return response.data;
    // console.log('response', response.data);
  } catch (error) {
    console.error("Error verifying Khalti payment:", error);
    throw error;
  }
};
const addPayment = async (data) => {
  console.log("data", data);
  try {
    await Payment.create(data);
    console.log("Payment added successfully");
  } catch (error) {
    console.log("Payment failed");
    // console.log(error.message)
  }
};

const getPaymentStatus = async (req, res) => {
  const orderId = req.params.id;

  const payment = await Payment.findOne({ orderId: orderId });

  if (!payment) {
    return res.status(404).json({ error: "Payment not found" });
  }

  const txn = {
    id: payment.txnId,
    status: payment.resultInfo.resultStatus,
  };

  res.status(200).json({
    success: true,
    txn,
  });
};

module.exports = {
  processPayment,
  KhaltiResponse,
  verifyKhaltiPayment,
  getPaymentStatus,
};
