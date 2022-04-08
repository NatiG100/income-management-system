import React, { useEffect, useState } from 'react';
import Chip from '../../UIComponents/Chip';
import Input from '../../UIComponents/Input';
import {
    StyledTransactions,
    StyledTransactionFilter,
    StyledTransaction,
    StyledTransactionList,
    StyledFilter
} from './style';
// import transactions from '../../../data/transactions';
import ToggleSwitch from '../../UIComponents/ToggleSwitch';
import { useAxios } from '../../../utils/HTTP';
import { GET_ALL_TRANSACTIONS } from '../../../constants/end-points/transaction';
import { formatDate } from '../../../utils/mini-utils';
import { useDispatch, useSelector } from 'react-redux';
import { GET_ALL_PAYMENT_METHOD } from '../../../constants/end-points/paymentMethods';
const TransactionList = () => {
    const user = useSelector((state) => state.user);

    const { data: transactions, error, loading } = useAxios({ ...GET_ALL_TRANSACTIONS });
    const { data: methods, error: methodError, loading: methodLoading } = useAxios({ ...GET_ALL_PAYMENT_METHOD(user?.company?._id) })
    const [isOn, setIsOn] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState("All");
    const [date, setDate] = useState(formatDate(Date.now()));
    const [max, setMax] = useState(100000);
    const [min, setMin] = useState(0);

    const toggle = () => {
        setIsOn((isOn) => (!isOn));
    }
    const filterByMethod = (transactions = []) => {
        if (selectedMethod == "All") return (transactions);
        return transactions.filter((transaction) => (transaction.paymentMethod?.title === selectedMethod));
    }
    const filter = (transactions) => {
        if (!isOn) return transactions;
        console.log(formatDate(transactions[0].date));
        console.log(formatDate(new Date(date).toISOString()))
        return transactions.filter((transaction) => (
            formatDate(transaction.date) === formatDate(new Date(date).toISOString()) &&
            transaction.amount <= max &&
            transaction.amount >= min
        ))
    }
    return (
        <StyledTransactions>
            <StyledTransactionFilter>
                <Chip
                    selected={selectedMethod === "All"}
                    text={"All"}
                    onclick={() => { setSelectedMethod("All") }}
                />
                {methods?.map((method, index) => (
                    <Chip
                        key={method._id}
                        selected={selectedMethod === method.title}
                        text={method.title}
                        onclick={() => { setSelectedMethod(method.title) }}
                    />)
                )}

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
                {filterByMethod(filter(transactions || [], date)).map((transaction, transactionIndex) => (
                    <Transaction
                        key={transaction._id}
                        id={transaction._id}
                        amount={transaction.amount}
                        date={transaction.date}
                        method={transaction.paymentMethod.title}
                        paiedBy={transaction.creditor}
                        odd={transactionIndex % 2 == 0}
                        style={{ zIndex: `${transactions.length - transactionIndex}` }}
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
    style,
}) => {
    return (
        <StyledTransaction odd={odd} isHeader={false} style={style}>
            <p>{id}</p>
            <p>{formatDate(date)}</p>
            <p>{method}</p>
            <p>{amount}</p>
            <p>{paiedBy}</p>
        </StyledTransaction>
    );
}
const TransactionHeader = ({ odd }) => {
    return (
        <StyledTransaction odd={odd} isHeader={true}>
            <p><b>Transaction Id</b></p>
            <p><b>Date (mm/dd/yyy)</b></p>
            <p><b>Method</b></p>
            <p><b>Amount</b></p>
            <p><b>Paied by</b></p>
        </StyledTransaction>
    );
}