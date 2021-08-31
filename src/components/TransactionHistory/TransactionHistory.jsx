import { TransactionHistoryElement } from './TransactionHistoryElement';
import s from './TransactionHistory.module.css';

export const TransactionHistory = ({ transactions }) => {
    return (
        <table className={s.table}>

  <thead>
        <tr>
            <th className={s.thead}>Type</th>
            <th className={s.thead}>Amount</th>
            <th className={s.thead}>Currency</th>
        </tr>
  </thead>
            
    <tbody>
                {transactions.map(transaction => (
                    <TransactionHistoryElement
                        key={transaction.id}
                        type={transaction.type}
                        amount={transaction.amount}
                        currency={transaction.currency}
                   />
        ))}        

    </tbody>


</table>
    );
};
