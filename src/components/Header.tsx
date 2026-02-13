type Props = {
    onNewTransaction?: () => void
}

export function Header({ onNewTransaction }: Props) {
    return (
        <header className="bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600">
            <div className="max-w-5xl mx-auto px-6 pt-6 pb-16 flex items-center justify-between">

                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-green-500 flex items-center justify-center text-white font-bold">
                        $
                    </div>
                    <h1 className="text-lg font-semibold text-white tracking-tight">
                        Finanças
                    </h1>
                </div>

                <button
                    onClick={onNewTransaction}
                    className="bg-white text-green-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-medium transition cursor-pointer transition hover:scale-[1.02] active:scale-[0.98]"
                >
                    + Nova Movimentação
                </button>

            </div>
        </header>
    )
}
