import React, { useState, useEffect } from 'react';
import {
    StyledAddEditPaymentMethod,
    StyledAddEditActions
} from './style';
import Input from './../UIComponents/Input';
import Textarea from '../UIComponents/TextArea';
import Modal from '../UIComponents/Modal';
import RoundButton from '../UIComponents/RoundButton';

const AddEditPaymentMethod = ({
    onClose,
    isEdit,
    formValueForEdit,
    setOpenSuccess,
    setOpenError,

}) => {
    const [formValue, setFormValue] = useState({
        title: "",
        accountNumber: "",
        description: "",
    })
    const setFormItemValue = (itemName, value) => {
        setFormValue((form) => ({ ...form, [itemName]: value }));
    }
    useEffect(() => {
        if (isEdit) {
            setFormValue(formValueForEdit)
        }
    }, [isEdit, formValueForEdit])

    const handleFormSubmit = () => {
        if (formValue.accountNumber !== "" && formValue.title !== "" && formValue.description !== "") {
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
                        color='primary'
                        text={isEdit ? "Save Changes" : "Add Method"}
                        onClick={handleFormSubmit}
                    />
                    <RoundButton
                        color='secondary'
                        text={"Cancel"}
                        onClick={onClose}
                    />
                </StyledAddEditActions>
            </StyledAddEditPaymentMethod>
        </Modal>

    );
}

export default AddEditPaymentMethod;
