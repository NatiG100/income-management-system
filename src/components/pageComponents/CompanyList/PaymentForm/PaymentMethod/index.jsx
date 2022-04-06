import React, { useState } from 'react';
import { GET_ALL_PAYMENT_METHOD } from '../../../../../constants/end-points/paymentMethods';
import { useAxios } from '../../../../../utils/HTTP';

import {
    StylePaymentMethodList,
    StyledPaymentMethod,
    StyledContainer,

} from './style'
const PaymentMethodList = ({ setData, company, selectedIndex, setSelectedIndex, isAdmin = false }) => {
    const { data, loading, error } = useAxios({ ...GET_ALL_PAYMENT_METHOD(company._id) });
    setData(data);
    return (
        <StyledContainer>
            {!isAdmin && <h2 style={{ height: "max-content" }}>Pay Now</h2>}
            {!isAdmin && <h3>Choose payment</h3>}
            {isAdmin && <h2>Payment Methods</h2>}
            <StylePaymentMethodList>
                {loading ? <p>Loading</p> : error ? <p>Error</p> : data.map((method, methodIndex) => (
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