import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { GET_ALL_PAYMENT_METHOD } from '../../../../../constants/end-points/paymentMethods';
import { useAxios } from '../../../../../utils/HTTP';
import { useLazyAxios } from '../../../../../utils/lazyHTTP';

import {
    StylePaymentMethodList,
    StyledPaymentMethod,
    StyledContainer,

} from './style'
const PaymentMethodList = ({
    setData = () => { },
    selectedIndex,
    setSelectedIndex,
    isAdmin = false,
    setTriggerRefetch,
    triggerRefetch,
    company
}) => {
    const [fetch, { data, loading, error }] = useLazyAxios({ ...GET_ALL_PAYMENT_METHOD(company?._id) });
    const fetchData = async () => {
        try {
            const data = await fetch();
            setData(data);
        } catch (err) {

        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    useEffect(() => {
        if (triggerRefetch) {
            fetchData();
            setTriggerRefetch(false);
        }
    }, [triggerRefetch])
    return (
        <StyledContainer>
            {!isAdmin && <h2 style={{ height: "max-content" }}>Pay Now</h2>}
            {!isAdmin && <h3>Choose payment</h3>}
            {isAdmin && <h2>Payment Methods</h2>}
            <StylePaymentMethodList>
                {loading ? <p>Loading</p> : error ? <p>Error</p> : data?.map((method, methodIndex) => (
                    <PaymentMethod
                        key={methodIndex}
                        title={method.title}
                        description={method.description}
                        accountNumber={method.accountNumber}
                        selected={selectedIndex === methodIndex}
                        onClick={() => { setSelectedIndex(methodIndex) }}
                    />
                ))}
            </StylePaymentMethodList>
        </StyledContainer>
    );
}
export default PaymentMethodList;

const PaymentMethod = ({ title, accountNumber, description, selected, onClick }) => {
    return (
        <StyledPaymentMethod selected={selected} onClick={onClick}>
            <h3>{title}</h3>
            <p>{description}</p>
        </StyledPaymentMethod>
    );
}