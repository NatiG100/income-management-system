import React, { useState } from 'react'
import Modal from "../../UIComponents/Modal";
import Company from "./Company";
import PaymentForm from './PaymentForm';
import { StyledCompanyList } from './style'
import companies from '../../../data/companies';
import Feedback from '../../UIComponents/Feedback';
const CompanyList = () => {
    const [open, setOpen] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const openModal = (open, companyIndex) => () => {
        setSelectedCompany(companies[companyIndex]);
        setOpen(open);
    }
    const [openSuccess, setOpensuccess] = useState(false);
    const [openError, setOpenError] = useState(false);
    return (
        <StyledCompanyList>
            {openSuccess &&
                <Feedback
                    type='success'
                    onClose={() => setOpensuccess(false)}
                    text={"Payment Successfull"}
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
                <Modal onClose={() => { setOpen(false) }} >
                    <PaymentForm
                        closeModal={() => setOpen(false)}
                        company={selectedCompany}
                        setOpenError={setOpenError}
                        setOpensuccess={setOpensuccess}
                    />
                </Modal>}
            {companies.map((company, companyIndex) => (
                <Company
                    key={company.code}
                    code={company.code}
                    name={company.name}
                    description={company.description}
                    onAction={openModal(true, companyIndex)}
                />
            ))}
        </StyledCompanyList>
    );
}

export default CompanyList;