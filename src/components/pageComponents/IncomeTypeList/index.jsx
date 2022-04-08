import React, { useEffect, useState } from 'react';
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
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
const IncomeTypeList = () => {
    const router = useRouter();
    const [selected, setSelected] = useState(-1);
    const [open, setOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openError, setOpenError] = useState(false);
    const user = useSelector((state) => state.user);
    const [paymentMethods, setPaymentMethods] = useState([]);
    const [openNotSelectedError, setOpenNotSelectedError] = useState(false);

    ///////////refetch logic
    const [triggerRefetch, setTriggerRefetch] = useState(false);
    const refetchPaymentMethods = () => {
        setTriggerRefetch(true);
    }
    useEffect(() => {
        if (!user?.company) {
            router.replace('/super-admin/login');
        }
    }, [user])
    const onEditClick = () => {
        if (selected === -1) {
            setOpenNotSelectedError(true);
        } else {
            setIsEdit(true);
            setOpen(true);
        }
    }
    return (
        <StyledIncomeTypeList>
            {openSuccess &&
                <Feedback
                    type='success'
                    onClose={() => setOpenSuccess(false)}
                    text={isEdit ? "Payment Method Edited Successfully" : "Payment Method Added Successfully"}
                />
            }
            {openNotSelectedError &&
                <Feedback
                    type='error'
                    onClose={() => setOpenNotSelectedError(false)}
                    text={"Please select a payment method."}
                />
            }
            {openError &&
                <Feedback
                    type='error'
                    onClose={() => setOpenError(false)}
                    text={"Please eneter a valid input."}
                />
            }
            {open && paymentMethods?.length !== 0 &&
                <AddEditPaymentMethod
                    isEdit={isEdit}
                    formValueForEdit={paymentMethods[selected]}
                    onClose={() => { setOpen(false) }}
                    setOpenSuccess={setOpenSuccess}
                    setOpenError={setOpenError}
                    refetchPaymentMethods={() => { setTriggerRefetch(true) }}
                />
            }
            <StyledAddWrapper>
                <RoundButton
                    text='Add Payment Method'
                    onClick={() => { setIsEdit(false); setOpen(true) }}
                />
            </StyledAddWrapper>
            <PaymentMethodList
                isAdmin={true}
                setSelectedIndex={(index) => setSelected(index)}
                selectedIndex={selected}
                setData={setPaymentMethods}
                triggerRefetch={triggerRefetch}
                setTriggerRefetch={setTriggerRefetch}
                company={user?.company}
            />
            <StyledActions>
                <RoundButton
                    text='Edit'
                    onClick={onEditClick}
                />
                <RoundButton
                    text='Delete'
                    color='error'
                    onClick={() => { }}
                />
            </StyledActions>
        </StyledIncomeTypeList>
    );
}

export default IncomeTypeList;