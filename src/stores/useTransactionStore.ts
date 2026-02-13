import { create } from 'zustand'
import type { Transaction } from '../types/Transaction'
import { loadTransactions, saveTransactions } from '../services/TransactionStorage'

type State = {
    transactions: Transaction[]
    addTransaction: (t: Transaction) => void
    removeTransaction: (id: string) => void
}

export const useTransactionStore = create<State>((set) => ({
    transactions: loadTransactions(),
    addTransaction: (t) =>
        set((state) => {
            const updated = [...state.transactions, t]
            saveTransactions(updated)
            return { transactions: updated }
        }),

    removeTransaction: (id) =>
        set((state) => {
            const updated = state.transactions.filter(t => t.id !== id)
            saveTransactions(updated)
            return { transactions: updated }
        })
}))