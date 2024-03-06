import React from 'react'
import './transactionListItem.css'

const TransactionListItem = ({ account_id, amount, balance, type }) => {
    return (
        <div className='item_container'>
            <div className={`${type === "deposit" ? "deposit" : "withdrawal"} transaction_type`}>{type}</div>
            <div className='transaction_details'>
                {type === "deposit" ? <p>Transferred ${amount} to accound {account_id}</p> : <p>Transferred ${amount} from accound {account_id}</p>}
                <p>Current Balance is ${balance}</p>
            </div>
        </div>
    )
}

export default TransactionListItem
