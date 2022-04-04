import React, { useState } from 'react';
import Chip from '../../UIComponents/Chip';
import Input from '../../UIComponents/Input';
import {
    StyledTransactions,
    StyledTransactionFilter,
    StyledTransaction,
    StyledTransactionList,
    StyledFilter
} from './style';
import transactions from '../../../data/transactions';
import ToggleSwitch from '../../UIComponents/ToggleSwitch';
const TransactionList = () => {
    const [isOn, setIsOn] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState("All");
    const [date, setDate] = useState(Date.now());
    const [max, setMax] = useState(100000);
    const [min, setMin] = useState(0);

    const toggle = () => {
        setIsOn((isOn) => (!isOn));
    }
    const filterByMethod = (transactions = []) => {
        if (selectedMethod == "All") return (transactions);
        return transactions.filter((transaction) => (transaction.method === selectedMethod));
    }
    const filter = (transactions) => {
        if (!isOn) return transactions;
        return transactions.filter((transaction) => (
            // transaction.date === date &&
            transaction.amoutn < max &&
            transaction.amoutn > min
        ))
    }
    return (
        <StyledTransactions>
            <StyledTransactionFilter>
                <Chip
                    selected={selectedMethod === "All"}
                    text="All"
                    onclick={() => { setSelectedMethod("All") }}
                />
                <Chip
                    selected={selectedMethod === "Method1"}
                    text="Method1"
                    onclick={() => { setSelectedMethod("Method1") }}
                />
                <Chip
                    selected={selectedMethod === "Method2"}
                    text="Method2"
                    onclick={() => { setSelectedMethod("Method2") }}
                />
                <Chip
                    selected={selectedMethod === "Method3"}
                    text="Method3"
                    onclick={() => { setSelectedMethod("Method3") }}
                />
            </StyledTransactionFilter>
            <StyledFilter>
                <ToggleSwitch
                    isOn={isOn}
                    toggle={toggle}
                />
                <Input
                    type={"date"}
                    label="Select Date"
                    disabled={!isOn}
                    value={date}
                    setValue={setDate}
                />
                <Input
                    type={"text"}
                    label="Max-Amount"
                    placeholder="Enter Max-Amount"
                    disabled={!isOn}
                    value={max}
                    setValue={setMax}
                />
                <Input
                    type={"text"}
                    label="Min-Amount"
                    placeholder="Enter Min-Amount"
                    disabled={!isOn}
                    value={min}
                    setValue={setMin}
                />
            </StyledFilter>

            <StyledTransactionList>
                <TransactionHeader
                    odd={false}
                />
                {filterByMethod(filter(transactions)).map((transaction, transactionIndex) => (
                    <Transaction
                        key={transaction.id}
                        id={transaction.id}
                        amount={transaction.amoutn}
                        date={transaction.date}
                        method={transaction.method}
                        paiedBy={transaction.client}
                        odd={transactionIndex % 2 == 0}
                    />
                ))}

            </StyledTransactionList>
        </StyledTransactions>
    );
}

export default TransactionList;

const Transaction = ({
    odd,
    id,
    date,
    method,
    amount,
    paiedBy,
}) => {
    return (
        <StyledTransaction odd={odd}>
            <p>{id}</p>
            <p>{date}</p>
            <p>{method}</p>
            <p>{amount}</p>
            <p>{paiedBy}</p>
        </StyledTransaction>
    );
}
const TransactionHeader = ({ odd }) => {
    return (
        <StyledTransaction odd={odd}>
            <p><b>Transaction Id</b></p>
            <p><b>Date</b></p>
            <p><b>Method</b></p>
            <p><b>Amount</b></p>
            <p><b>Paied by</b></p>
        </StyledTransaction>
    );
}