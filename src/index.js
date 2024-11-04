import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Categories from './CoreConcepts/Categories';
import Form from './CoreConcepts/Formm';
import Womanface from './CoreConcepts/Womanface';
import Payment from './CoreConcepts/payment';
import Today from './CoreConcepts/today';
import Subscriptions from './CoreConcepts/Subscriptions';
import JobPositions from './CoreConcepts/JobPositions';
import AccountList from './CoreConcepts/AccountList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Form/>
    <Womanface/>
    <Categories/>
    <Payment/>
    <Today/>
    <Subscriptions/>
    <JobPositions/>
    <AccountList/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
