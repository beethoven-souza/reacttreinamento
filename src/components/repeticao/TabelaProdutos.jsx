import React from "react";
import produtos from "../../data/produtos";

export default props => {
    const listaProdutos = produtos.map(produto => {
        return (
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.produto}</td>
                <td>R$ {produto.preco}</td>
            </tr>
        );
    });

    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Produto</th>
                        <th scope="col">Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {listaProdutos}
                </tbody>
            </table>
        </div>
    );
}
