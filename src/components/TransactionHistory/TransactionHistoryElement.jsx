import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export const TransactionHistoryElement = ({ type, amount, currency }) => {
    return (
        <tr className={s.line}>
            <td className={s.value}>{ type }</td>
            <td className={s.value}>{ amount }</td>
            <td className={s.value}>{ currency }</td>
        </tr>
        
    );
};



TransactionHistoryElement.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
};