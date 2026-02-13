type Props = {
    title: string
    value: number
    color?: string
}

export function SummaryCard({ title, value, color = '#333' }: Props) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-5">
            <p className="text-sm text-gray-500">
                {title}
            </p>
            <h2 className={`text-2xl font-bold ${color ?? 'text-gray-800'}`}>
                R$ {value.toFixed(2)}
            </h2>
        </div>
    )
}