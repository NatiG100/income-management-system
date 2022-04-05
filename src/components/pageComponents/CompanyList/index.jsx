import React, { useState } from 'react'
import Modal from "../../UIComponents/Modal";
import Company from "./Company";
import PaymentForm from './PaymentForm';
import { StyledCompanyList } from './style'
import companies from '../../../data/companies';
import Feedback from '../../UIComponents/Feedback';
import Input from '../../UIComponents/Input';
const CompanyList = () => {
    const [open, setOpen] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [query, setQuery] = useState("");
    const openModal = (open, companyIndex) => () => {
        setSelectedCompany(companies[companyIndex]);
        setOpen(open);
    }
    const [openSuccess, setOpensuccess] = useState(false);
    const [openError, setOpenError] = useState(false);
    const filterByName = (companies) => {
        const c = "";

        return companies.filter((company) =>
            (company.name.toLowerCase().includes(query.toLowerCase().toString()))
        );
    }
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
            <Input
                value={query}
                setValue={(value) => { setQuery(value) }}
                placeholder="Search by name"
                type="text"
            />
            {filterByName(companies).map((company, companyIndex) => (
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