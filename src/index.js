import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const testCard = {
  bank: "Big Bank, Inc.",
  name: "CARDHOLDER NAME",
  expDate: "19-08",
  cardNum: "1234 5678 8765 4321"
}

const CreditCard = ({ cardInfo }) => {
  return (
    <div className="card">
      <Bank bankName={cardInfo.bank}/>
      <AccountNum number={cardInfo.cardNum}/>
      <div className="nums">1234</div>
      <div className ="valid-thru">
        <div>VALID</div>
        <div>THRU</div>
      </div>
      <Expiration date={cardInfo.expDate}/>
      <Name name={cardInfo.name}/>
    </div>
  )
};

const Name = ({ name }) => <div className="cardholder">{name}</div>;

const Bank = ({ bankName }) => <div className="bank-name">{bankName}</div>; 

const AccountNum = ({ number }) => <div className="account-num">{number}</div>; 

const Expiration = ({ date }) => <div className="exp-date">{date}</div>;

ReactDOM.render(<CreditCard cardInfo={testCard}/>, document.getElementById('root'));
