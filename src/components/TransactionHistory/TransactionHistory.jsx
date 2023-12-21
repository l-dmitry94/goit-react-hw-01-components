import PropTypes from 'prop-types';
import { TransactionItem } from 'components/TransactionItem/TransactionItem';
import { Head, HeadItem, TableRow } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
    return (
        <table className="transaction-history">
            <Head>
                <TableRow>
                    <HeadItem>Type</HeadItem>
                    <HeadItem>Amount</HeadItem>
                    <HeadItem>Currency</HeadItem>
                </TableRow>
            </Head>

            <tbody>
                {transactions.map(({ id, type, amount, currency }) => (
                    <TableRow key={id}>
                        <TransactionItem
                            type={type}
                            amount={amount}
                            currency={currency}
                        />
                    </TableRow>
                ))}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ),
};
