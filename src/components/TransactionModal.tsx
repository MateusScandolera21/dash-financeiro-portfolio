import { useState } from 'react'
import { useTransactionStore } from '../stores/useTransactionStore'
import type { TransactionType } from '../types/Transaction'
import { v4 as uuid } from 'uuid'

type Props = {
    onClose: () => void
}

export function TransactionModal({ onClose }: Props) {
    const addTransaction = useTransactionStore((s) => s.addTransaction)

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [type, setType] = useState<TransactionType>('income')

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        if (!title || !amount) return

        addTransaction({
            id: uuid(),
            title,
            amount: Number(amount),
            type,
            category: 'Geral',
            date: new Date().toISOString(),
        })

        onClose()
    }

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white w-full max-w-md rounded-xl p-6 shadow-lg">

                <h2 className="text-lg font-semibold mb-4">
                    Nova Movimentação
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                        type="text"
                        placeholder="Descrição"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2"
                    />

                    <input
                        type="number"
                        placeholder="Valor"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2"
                    />

                    <div className="flex gap-4">
                        <button
                            type="button"
                            onClick={() => setType('income')}
                            className={`flex-1 py-2 rounded-lg cursor-pointer transition hover:scale-[1.02] active:scale-[0.98] ${type === 'income'
                                    ? 'bg-green-500 text-white'
                                    : 'bg-gray-200'
                                }`}
                        >
                            Receita
                        </button>

                        <button
                            type="button"
                            onClick={() => setType('expense')}
                            className={`flex-1 py-2 rounded-lg cursor-pointer transition hover:scale-[1.02] active:scale-[0.98] ${type === 'expense'
                                    ? 'bg-red-500 text-white'
                                    : 'bg-gray-200'
                                }`}
                        >
                            Despesa
                        </button>
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded-lg bg-gray-200 cursor-pointer transition hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Cancelar
                        </button>

                        <button
                            type="submit"
                            className="px-4 py-2 rounded-lg bg-green-500 text-white cursor-pointer transition hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Salvar
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}
