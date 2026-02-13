import type { Transaction } from '../types/Transaction'
import { useTransactionStore } from '../stores/useTransactionStore'
import { Trash2 } from 'lucide-react'

type Props = {
    transaction: Transaction
}

export function TransactionItem({ transaction }: Props) {
    const isIncome = transaction.type === 'income'
    const removeTransaction = useTransactionStore((s) => s.removeTransaction)

    return (
        <div className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm">

            <div>
                <p className="font-medium text-gray-800">
                    {transaction.title}
                </p>
                <p className="text-sm text-gray-500">
                    {new Date(transaction.date).toLocaleDateString()}
                </p>
            </div>

            <div className="flex items-center gap-4">

                <span
                    className={`font-semibold ${isIncome ? 'text-green-600' : 'text-red-600'
                        }`}
                >
                    {isIncome ? '+' : '-'} R$ {transaction.amount.toFixed(2)}
                </span>

                <button
                    onClick={() => removeTransaction(transaction.id)}
                    className="text-gray-400 hover:text-red-500 transition cursor-pointer"
                    title="Remover"
                >
                    <Trash2 size={18} />
                </button>

            </div>
        </div>
    )
}