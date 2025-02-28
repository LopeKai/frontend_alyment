export function ImportantInformation() {
    return (
        <div className="relative border rounded-lg ring-2 ring-stone-300/50 md:mt-4 h-40 pt-2 px-6">
            <h1 className="text-alyment-primary text-xl text-center">Informações importante:</h1>

            <ul className="list-disc mt-2">
                <li className="text-green-600">
                    total: R$10.000,00
                </li>
                <li className="text-green-600">
                    Desconto: R$9.000,00
                </li>
                <li className="text-green-600">
                    Lucro: R$1.000
                </li>
            </ul>

            <div className="absolute bottom-0 text-[10px] mt-auto">
                <span>
                    informaçoes apenas para: <strong>Admin e usuários</strong>.
                </span>
            </div>
        </div>
    )
}