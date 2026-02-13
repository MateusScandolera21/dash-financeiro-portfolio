import { useState } from 'react'
import { Header } from '../components/Header'
import { SummaryCard } from '../components/SummaryCard'
import { useTransactions } from '../composables/useTransactions'
import { TransactionModal } from '../components/TransactionModal'
import { TransactionList } from '../components/TransactionList'

export function DashboardView() {
  const { totalIncome, totalExpense, balance } = useTransactions()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">

      <Header onNewTransaction={() => setIsOpen(true)} />

      <div className="max-w-5xl mx-auto px-6">

        <div className="-mt-10 mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <SummaryCard title="Saldo" value={balance} />
          <SummaryCard title="Receitas" value={totalIncome} color="text-green-600" />
          <SummaryCard title="Despesas" value={totalExpense} color="text-red-600" />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">
            Movimentações
          </h2>
          <TransactionList />
        </div>

      </div>

      {isOpen && <TransactionModal onClose={() => setIsOpen(false)} />}
    </div>
  )
}

