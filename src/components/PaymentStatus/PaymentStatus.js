// src/pages/PaymentStatus.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './PaymentStatus.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PaymentStatus = () => {
  const query = useQuery();

  const code = query.get('code');
  const transactionId = query.get('transactionId');
  const merchantId = query.get('merchantId');
  const amountCents = query.get('amount');
  const amount = amountCents ? (Number(amountCents) / 100).toFixed(2) : null;

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h1 className="payment-title">Payment Status</h1>
        <p className="payment-message">
          Your payment has been processed successfully.
        </p>
        <div className="payment-details">
          <div className="detail-row">
            <span className="label">Code:</span>
            <span className="value">{code || 'N/A'}</span>
          </div>
          <div className="detail-row">
            <span className="label">Transaction ID:</span>
            <span className="value">{transactionId || 'N/A'}</span>
          </div>
          <div className="detail-row">
            <span className="label">Merchant ID:</span>
            <span className="value">{merchantId || 'N/A'}</span>
          </div>
          <div className="detail-row">
            <span className="label">Amount:</span>
            <span className="value">{amount ? `$${amount}` : 'N/A'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentStatus;
