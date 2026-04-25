import React from "react";

export const PaymentCard = ({
  cardNumber = "**** **** **** 1234",
  cardHolder = "John Doe",
  expiry = "12/25",
  cardType = "Visa"
}) => {
  const cardTypeStyles = cardType === "Visa" ? { background: "linear-gradient(135deg, #4B4B4B, #1F1F1F)" } : { background: "linear-gradient(135deg, #C69326, #7C7C7C)" };

  return (
    <div
      style={{ ...cardTypeStyles }}
      className="w-80 h-48 rounded-lg shadow-lg p-6 flex flex-col justify-between transition-transform transform hover:scale-105"
    >
      <div className="flex justify-between items-center">
        <div style={{ width: "40px", height: "25px", background: "#fff", borderRadius: "5px" }} />
        <img src={cardType === "Visa" ? "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.svg" : "https://upload.wikimedia.org/wikipedia/commons/5/55/MasterCard_Logo.svg"} alt={cardType} style={{ width: "40px" }} />
      </div>
      <div className="text-white mt-4">
        <div className="text-lg font-bold">{cardNumber}</div>
        <div className="mt-1 text-sm">{cardHolder}</div>
        <div className="mt-2 text-sm">Expires {expiry}</div>
      </div>
    </div>
  );
};

// Example usage
const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <PaymentCard 
        cardNumber="**** **** **** 1234"
        cardHolder="John Doe"
        expiry="12/25"
        cardType="Visa"
      />
    </div>
  );
};