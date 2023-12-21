import PropTypes from "prop-types"

export const TransactionItem = ({type, amount, currency}) => {
    return (
        <>
            <td type={type}>{type}</td>
            <td amount={amount}>{amount}</td>
            <td currency={currency}>{currency}</td>
        </>
    );
};

TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}