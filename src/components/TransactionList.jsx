import React, { useContext } from 'react'
import './transactionList.css'
import TransactionListItem from './TransactionListItem'
import { AccountContext } from '../context/accountContext'

const TransactionList = () => {
    const { transactions } = useContext(AccountContext);

    return (
        <div className='list_container'>
            <div className='heading'>
                <p>Transaction History</p>
            </div>
            <div className="list_item_container">
                {
                    transactions.length > 0 ? (
                        transactions.map(t => (
                            <TransactionListItem account_id={t.account_id} key={t.transaction_id} amount={t.amount} balance={t.balance} type={t.type} />
                        ))
                    ) : (
                        <div> No Transactions found!</div>
                    )
                }
            </div>
        </div>
    )
}

export default TransactionList
