import css from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
        <thead className={css.head}>
            <tr>
                <th className={css.textHead}>Type</th>
                <th className={css.textHead}>Amount</th>
                <th className={css.textHead}>Currency</th>
            </tr>
        </thead>
        <tbody>
              {items.map(({ id, type, amount, currency }) => {
                  return (
                    <tr key={id} className={css.row}>
                        <td className={css.transType}>{type}</td>
                        <td className={css.data}>{amount}</td>
                        <td className={css.data}>{currency}</td>
                    </tr>
                )
            })} 
        </tbody>
    </table>
  )
}

export default TransactionHistory