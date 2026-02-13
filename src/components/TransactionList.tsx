import { useTransactions } from '../composables/useTransactions'
import { TransactionItem } from './TransactionItem'

export function TransactionList() {
  const { transactions } = useTransactions()

  if (transactions.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10">
        Nenhuma movimentação cadastrada.
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          transaction={transaction}
        />
      ))}
    </div>
  )
}
