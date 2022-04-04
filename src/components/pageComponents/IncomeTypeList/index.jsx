import React, { useState } from 'react';
import PaymentMethodList from '../CompanyList/PaymentForm/PaymentMethod';
import {
    StyledIncomeTypeList,
    StyledActions,
    StyledAddWrapper,
} from './style';
import companies from '../../../data/companies';
import RoundButton from '../../UIComponents/RoundButton';
import AddEditPaymentMethod from '../../AddEditPaymentMethod';
import Feedback from '../../UIComponents/Feedback';

const IncomeTypeList = () => {
    const [selected, setSelected] = useState(0);
    const [open, setOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openError, setOpenError] = useState(false);
    return (
        <StyledIncomeTypeList>
            {openSuccess &&
                <Feedback
                    type='success'
                    onClose={() => setOpenSuccess(false)}
                    text={isEdit ? "Payment Method Edited Successfully" : "Payment Method Added Successfully"}
                />
            }
            {openError &&
                <Feedback
                    type='error'
                    onClose={() => setOpenError(false)}
                    text={"Please eneter a valid input."}
                />
            }
            {open &&
                <AddEditPaymentMethod
                    isEdit={isEdit}
                    formValueForEdit={companies[0].paymentMethods[selected]}
                    onClose={() => { setOpen(false) }}
                    setOpenSuccess={setOpenSuccess}
                    setOpenError={setOpenError}
                />
            }
            <StyledAddWrapper>
                <RoundButton
                    text='Add Payment Method'
                    onClick={() => { setIsEdit(false); setOpen(true) }}
                />
            </StyledAddWrapper>
            <PaymentMethodList
                company={companies[0]}
                isAdmin={true}
                setSelectedIndex={(index) => setSelected(index)}
                selectedIndex={selected}
            />
            <StyledActions>
                <RoundButton
                    text='Edit'
                    onClick={() => { setIsEdit(true); setOpen(true) }}
                />
                <RoundButton
                    text='Delete'
                    color='secondary'
                    onClick={() => { }}
                />
            </StyledActions>
        </StyledIncomeTypeList>
    );
}

export default IncomeTypeList;