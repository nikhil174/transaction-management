export const accounts = [
    {
        "account_id": "90ef07f9-9157-4e64-9f73-4d5daee4d8d4",
        "amount": 100,
    },
    {
        "account_id": "ee5eb73d-1874-452f-bf4c-e687371917cd",
        "amount": 100,
    },
    {
        "account_id": "95aaee2b-e136-4818-81ef-07bb282fe775",
        "amount": 100,
    },
    {
        "account_id": "3f580b41-3aee-4259-976e-0702d4e646d3",
        "amount": 100,
    },
]

export const transactions = [
    { transaction_id: '4ca045d1-673e-4a20-af41-55e31aafa938', account_id: '90ef07f9-9157-4e64-9f73-4d5daee4d8d4', amount: 30, balance: 100, type: "deposit", created_at: '2024-03-06T07:08:55.141172+00:00' }
    ,
    { transaction_id: 'f7d4accd-03ee-4611-9ccd-e9dc9f43d896', account_id: 'ee5eb73d-1874-452f-bf4c-e687371917cd', amount: 65, balance: 100, type: "withdrawal", created_at: '2024-03-06T07:08:30.651286+00:00' }
    ,
    { transaction_id: '23d783fd-72dd-4f2d-9dec-3565277ef65c', account_id: '95aaee2b-e136-4818-81ef-07bb282fe775', amount: 30, balance: 100, type: "deposit", created_at: '2024-03-06T07:06:14.405364+00:00' }
    ,
    { transaction_id: '0aff9726-d46c-417c-aaba-3deea4dfab94', account_id: '3f580b41-3aee-4259-976e-0702d4e646d3', amount: 45, balance: 100, type: "deposit", created_at: '2024-03-06T07:05:23.799879+00:00' }

];

export const getAccounts = () => {
    return accounts;
}

export const getTransactions = () => {
    return transactions;
}

