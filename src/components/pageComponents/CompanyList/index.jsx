import React, { useState } from 'react'
import Modal from "../../UIComponents/Modal";
import Company from "./Company";
import PaymentForm from './PaymentForm';
import { StyledCompanyList } from './style'
import Feedback from '../../UIComponents/Feedback';
import Input from '../../UIComponents/Input';
import { useAxios } from '../../../utils/HTTP';
import { GET_ALL_COMPANIES } from '../../../constants/end-points/company';
const CompanyList = () => {
    //calling API
    const { loading, data, error } = useAxios({ ...GET_ALL_COMPANIES, inputData: null });


    //used to send which company was to be paid
    const [selectedCompany, setSelectedCompany] = useState(null);

    //holds the query string for the search
    const [query, setQuery] = useState("");

    //function handles the openning and closing of the payment modal
    const [open, setOpen] = useState(false);
    const openModal = (open, companyIndex) => () => {
        setSelectedCompany(data[companyIndex]);
        setOpen(open);
    }

    //states for feedback displays
    const [openSuccess, setOpensuccess] = useState(false);
    const [openError, setOpenError] = useState(false);

    //filtering function
    const filterByName = (companies) => {
        const c = "";
        return companies.filter((company) =>
            (company.name.toLowerCase().includes(query.toLowerCase().toString()))
        );
    }
    if (loading) return (<h1>Loading</h1>);
    if (error) return (<h1>Error</h1>);
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
            {filterByName(data).map((company, companyIndex) => (
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