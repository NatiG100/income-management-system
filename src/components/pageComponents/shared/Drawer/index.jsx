import React from 'react';
import {
    StyledMenuItem,
    StyledDrawer,
} from './style';
import { useRouter } from 'next/dist/client/router';

const Drawer = () => {
    const router = useRouter();
    const path = router.pathname;
    const page = path.includes('transactions') ? "transactions" :
        path.includes('payment-methods') ? "payment" :
            "dashboard";
    return (
        <StyledDrawer>
            <h2>Menu</h2>
            <StyledMenuItem
                selected={page === "dashboard"}
                onClick={() => { if (page !== "dashboard") router.push('/admin') }}
            >
                <p>Dashboard</p>
            </StyledMenuItem>
            <StyledMenuItem
                selected={page === 'transactions'}
                onClick={() => { if (page !== "transactions") router.push('/admin/transactions') }}
            >
                <p>Transactions</p>
            </StyledMenuItem>
            <StyledMenuItem
                selected={page === "payment"}
                onClick={() => { if (page !== "payment") router.push('/admin/payment-methods') }}
            >
                <p>Payment Methods</p>
            </StyledMenuItem>
        </StyledDrawer>
    )
}

export default Drawer;