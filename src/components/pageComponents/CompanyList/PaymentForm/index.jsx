import React, { useEffect, useState } from 'react';
import { PAY } from '../../../../constants/end-points/transaction';
import { useLazyAxios } from '../../../../utils/lazyHTTP';
import Feedback from '../../../UIComponents/Feedback';
import Input from '../../../UIComponents/Input';
import RoundButton from '../../../UIComponents/RoundButton';
import PaymentMethodList from './PaymentMethod';

import { StyledActions, StyledPaymentForm, StyledBottomSection } from './style';

const PaymentForm = ({
    company,
    closeModal,
    setOpensuccess,
    setOpenError,
}) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const [data, setData] = useState([]);
    const [transactionForm, setTransactionForm] = useState({
        creditor: "",
        amount: "",
    });
    const setValueField = (value, fieldName) => {
        setTransactionForm((transaction) => ({ ...transaction, [fieldName]: value }))
    }

    const [transactionRequest, {
        loading,
        error,
        data: transactionData,
    }] = useLazyAxios({
        ...PAY,
        inputData: {
            ...transactionForm,
            company: company?._id,
            paymentMethod: data[selectedIndex]?._id
        }
    });
    useEffect(() => {
        console.log(data);
        console.log(selectedIndex);
    }, [data, selectedIndex])
    const handleForm = async () => {
        if (selectedIndex > -1 && selectedIndex < data?.length &&
            transactionForm.amount !== "") {
            await transactionRequest();
            setOpensuccess(true);
            closeModal();
        } else {
            setOpenError(true);
        }
    }
    return (
        <StyledPaymentForm>

            <PaymentMethodList
                company={company}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
                setData={setData}
            />
            <StyledBottomSection>
                <Input
                    label={"Amount(ETB)"}
                    placeholder="Enter Amount(ETB)"
                    value={transactionForm.amount}
                    setValue={(value) => setValueField(value, 'amount')}
                    type="number"
                />
                <Input
                    label={"Creditor(ETB)"}
                    placeholder="Enter creditor information"
                    value={transactionForm.creditor}
                    setValue={(value) => setValueField(value, 'creditor')}
                    type="text"
                />
            </StyledBottomSection>
            <StyledActions>
                <RoundButton
                    color='secondary'
                    text='Cancel'
                    onClick={onclose}
                />
                <RoundButton
                    color='primary'
                    text='Complete Payment'
                    onClick={handleForm}
                />
            </StyledActions>
        </StyledPaymentForm>
    );
}
export default PaymentForm;