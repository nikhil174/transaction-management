import React, { createContext, useEffect, useState } from "react";
import { getAccounts, getTransactions } from "../utils/data";

export const AccountContext = createContext();

const AccountProvider = ({ children }) => {
    const [accounts, setAccounts] = useState([]);
    const [transactions, setTransactions] = useState([]);


    useEffect(() => {
        const accounts = getAccounts();
        setAccounts(accounts);

        // const fetchTransactions = async () => {
        //     const response = await axios.get('https://infra.devskills.app/api/accounting/transactions');
        //     console.log(response.data);
        // }
        // fetchTransactions();

        const transactions = getTransactions();
        setTransactions(transactions);
    }, []);

    return (
        <AccountContext.Provider value={{
            accounts,
            setAccounts,
            transactions,
            setTransactions
        }}>
            {children}
        </AccountContext.Provider>
    );
}

export default AccountProvider;