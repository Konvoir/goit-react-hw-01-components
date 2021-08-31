import { TransactionHistoryElement } from './TransactionHistoryElement';
import s from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
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
                 { items.map(item => (
                    <TransactionHistoryElement
                        key={item.id}
                        type={item.type}
                        amount={item.amount}
                        currency={item.currency}
                   />
                 ))}        

    </tbody>


</table>
    );
};
