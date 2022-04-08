import React, { useState, useEffect } from 'react';
import {
    StyledAddEditPaymentMethod,
    StyledAddEditActions
} from './style';
import Input from './../UIComponents/Input';
import Textarea from '../UIComponents/TextArea';
import Modal from '../UIComponents/Modal';
import RoundButton from '../UIComponents/RoundButton';
import { useLazyAxios } from '../../utils/lazyHTTP';
import { PAY } from '../../constants/end-points/transaction';
import { CREATE_PAYMENT_METHOD, UPDATE_PAYMENT_METHOD } from '../../constants/end-points/paymentMethods';

const AddEditPaymentMethod = ({
    onClose,
    isEdit,
    formValueForEdit,
    setOpenSuccess,
    setOpenError,
    refetchPaymentMethods = () => { }
}) => {

    const [formValue, setFormValue] = useState({
        title: "",
        accountNumber: "",
        description: "",
    })
    //////api calls/////////////////////////////
    const [addPayment, {
        loading: addLoading,
        error: addError,
        data: addData
    }] = useLazyAxios({ ...CREATE_PAYMENT_METHOD, inputData: formValue });

    const [editPayment, {
        loading: editLoading,
        error: editError,
        data: editData,
    }] = useLazyAxios({ ...UPDATE_PAYMENT_METHOD(formValueForEdit._id), inputData: formValue });

    const setFormItemValue = (itemName, value) => {
        setFormValue((form) => ({ ...form, [itemName]: value }));
    }
    useEffect(() => {
        if (isEdit) {
            setFormValue(formValueForEdit)
        }
    }, [isEdit, formValueForEdit])

    const handleFormSubmit = async () => {
        if (formValue.accountNumber !== "" && formValue.title !== "" && formValue.description !== "") {
            if (!isEdit) {
                const d = await addPayment();
                refetchPaymentMethods();
            } else {
                const d = await editPayment();
                refetchPaymentMethods();
            }
            setOpenSuccess(true);
            onClose();
        } else {
            setOpenError(true)
        }
    }
    return (
        <Modal onClose={onClose}>
            <StyledAddEditPaymentMethod>
                <Input
                    type="text"
                    placeholder="Enter the title"
                    label="Title"
                    setValue={(value) => { setFormItemValue("title", value) }}
                    value={formValue.title}
                />
                <Input
                    type="text"
                    placeholder="Enter Account Number"
                    label="TAccount Number"
                    setValue={(value) => { setFormItemValue("accountNumber", value) }}
                    value={formValue.accountNumber}
                />
                <Textarea
                    label="Description"
                    placeholder="Enter a description"
                    rows={4}
                    setValue={(value) => { setFormItemValue("description", value) }}
                    value={formValue.description}
                />
                <StyledAddEditActions>
                    <RoundButton
                        color='secondary'
                        text={"Cancel"}
                        onClick={onClose}
                    />
                    <RoundButton
                        color='primary'
                        text={isEdit ? "Save Changes" : "Add Method"}
                        onClick={handleFormSubmit}
                    />
                </StyledAddEditActions>
            </StyledAddEditPaymentMethod>
        </Modal>

    );
}

export default AddEditPaymentMethod;
