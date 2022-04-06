import React, { useState } from 'react';
import Feedback from '../../../UIComponents/Feedback';
import Input from '../../../UIComponents/Input';
import RoundButton from '../../../UIComponents/RoundButton';
import PaymentMethodList from './PaymentMethod';

import { StyledPaymentForm, StyledBottomSection } from './style';

const PaymentForm = ({
    company,
    closeModal,
    setOpensuccess,
    setOpenError,
}) => {

    const [data, setData] = useState(null);
    const [value, setValue] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleForm = () => {
        if (selectedIndex > -1 && selectedIndex < data?.length && value !== "") {
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
                    value={value}
                    setValue={setValue}
                    type="number"
                />
                <RoundButton
                    color='primary'
                    text='Complete Payment'
                    onClick={handleForm}
                />
            </StyledBottomSection>
        </StyledPaymentForm>
    );
}
export default PaymentForm;