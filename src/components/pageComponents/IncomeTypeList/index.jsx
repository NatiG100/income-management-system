import React, { useState } from 'react';
import PaymentMethodList from '../CompanyList/PaymentForm/PaymentMethod';
import {
    StyledIncomeTypeList,
    StyledActions,
    StyledAddWrapper,
} from './style';
import companies from '../../../data/companies';
import RoundButton from '../../UIComponents/RoundButton';

const IncomeTypeList = () => {
    const [selected, setSelected] = useState(0);
    return (
        <StyledIncomeTypeList>
            <StyledAddWrapper>
                <RoundButton
                    text='Add Payment Method'
                    onClick={() => { }}
                />
            </StyledAddWrapper>
            <PaymentMethodList
                company={companies[0]}
                isAdmin={true}
                setSelectedIndex={(index) => setSelected(index)}
                selectedIndex={selected}
            />
            <PaymentMethodList
                company={companies[0]}
                isAdmin={true}
                setSelectedIndex={(index) => setSelected(index)}
                selectedIndex={selected}
            />
            <PaymentMethodList
                company={companies[0]}
                isAdmin={true}
                setSelectedIndex={(index) => setSelected(index)}
                selectedIndex={selected}
            />
            <PaymentMethodList
                company={companies[0]}
                isAdmin={true}
                setSelectedIndex={(index) => setSelected(index)}
                selectedIndex={selected}
            />
            <StyledActions>
                <RoundButton
                    text='Edit'
                    onClick={() => { }}
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