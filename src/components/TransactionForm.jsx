import React, { useContext, useReducer, useState } from 'react';
import './transactionForm.css';
import { AccountContext } from '../context/accountContext';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Define action types
const SET_ACCOUNT_ID = 'SET_ACCOUNT_ID';
const SET_AMOUNT = 'SET_AMOUNT';

// Define reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case SET_ACCOUNT_ID:
            return { ...state, accountId: action.payload };
        case SET_AMOUNT:
            return { ...state, amount: action.payload };
        default:
            return state;
    }
};

const TransactionForm = () => {
    const [loading, setLoading] = useState(false);
    const [state, dispatch] = useReducer(reducer, {
        accountId: '',
        amount: ''
    });

    const { accounts, setAccounts, transactions, setTransactions } = useContext(AccountContext);

    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();

        // perform api call to craeate a transaction
        if (state.accountId.length === 0) {
            toast.error('Account is required');
            setLoading(false);
            return;
        }

        // Check if the entered amount is a valid number
        if (isNaN(state.amount) || state.amount === '0' || state.amount === '') {
            toast.error('Amount is not valid');
            setLoading(false);
            return;
        }

        // Find the account in the accounts array based on the entered account ID
        const account = accounts.find(a => a.account_id === state.accountId);

        // Check if the account exists
        if (!account) {
            toast.error('Account not found');
            setLoading(false);
            return;
        }

        const amount = parseFloat(state.amount);

        if (amount < 0 && account.amount + amount < 0) {
            toast.error('Account does not have sufficient amount');
            setLoading(false);
            return;
        }

        // Update the account balance
        const newAccounts = accounts.map(acc => {
            if (acc.account_id === account.account_id) {
                acc.amount += amount;
            }

            return acc;
        })
        setAccounts(newAccounts);

        // Create a transaction
        const newTransaction = {
            transaction_id: uuidv4(),
            account_id: account.account_id,
            amount: amount,
            balance: account.amount,
            type: amount >= 0 ? "deposit" : "withdrawal",
            created_at: new Date().toISOString() // Current timestamp
        };

        // console.log(newTransaction);

        // Add the new transaction to the transactions array
        setTransactions([newTransaction, ...transactions]);
        setLoading(false);
        dispatch({ type: SET_ACCOUNT_ID, payload: '' });
        dispatch({ type: SET_AMOUNT, payload: '' });
        toast.success("Transaction added successfully");

    };

    const handleAccountIdChange = (e) => {
        dispatch({ type: SET_ACCOUNT_ID, payload: e.target.value });
    };

    const handleAmountChange = (e) => {
        dispatch({ type: SET_AMOUNT, payload: e.target.value });
    };


    return (
        <div className='form_container'>
            <form onSubmit={handleSubmit}>
                <div className='form_input_container'>
                    <label htmlFor="account_id">Account ID:</label>
                    <input id="account_id" type="text" value={state.accountId} onChange={handleAccountIdChange} />
                </div>
                <div className='form_input_container'>
                    <label htmlFor="amount">Amount:</label>
                    <input id="amount" type="text" value={state.amount} onChange={handleAmountChange} />
                </div>
                <div className='form_btn_container'>
                    <button disabled={loading} type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default TransactionForm;