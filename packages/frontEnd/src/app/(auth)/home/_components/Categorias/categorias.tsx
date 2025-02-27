export function Categorias() {
    
    const categorias = [
        { id: 1, nome: "Usuários", descricao: "Gerenciar usuários do sistema" },
        { id: 2, nome: "Produtos", descricao: "Gerenciar produtos do catálogo" },
        { id: 3, nome: "Pedidos", descricao: "Visualizar e gerenciar pedidos" },
        { id: 4, nome: "Configurações", descricao: "Configurações gerais do sistema" },
    ];

    return (
        <div className="max-h-[600px] p-6 rounded-lg ring-2 ring-stone-300/50">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Categorias para Admin</h2>
            <ul className="space-y-4">
                {categorias.map((categoria) => (
                    <li key={categoria.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <h3 className="text-lg font-semibold text-gray-700">{categoria.nome}</h3>
                        <p className="text-sm text-gray-500">{categoria.descricao}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}