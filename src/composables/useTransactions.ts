import { useMemo } from 'react'
import { useTransactionStore } from '../stores/useTransactionStore'

export function useTransactions() {
    const transactions = useTransactionStore((s) => s.transactions)

    const totalIncome = useMemo(
        () => 
            transactions
                .filter((t) => t.type === 'income')
                .reduce((acc, t) => acc + t.amount, 0),
        [transactions]
    )

    const totalExpense = useMemo(
        () =>
            transactions
                .filter((t) => t.type === 'expense')
                .reduce((acc, t) => acc + t.amount, 0),
        [transactions]
    )

    const balance = totalIncome - totalExpense

    return { transactions, totalIncome, totalExpense, balance }
}