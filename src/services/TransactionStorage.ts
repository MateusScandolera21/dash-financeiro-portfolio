import type { Transaction } from "../types/Transaction";

const STORAGE_KEY = 'finance-transactions'

export function loadTransactions(): Transaction[] {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
}

export function saveTransactions(transactions: Transaction[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions))
}