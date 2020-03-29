import { Cliente } from 'src/app/clientes/servico/cliente';
import { Produto } from 'src/app/produtos/servico/produto';

export class VendaProduto {
    codigo: string;
    data: Date;
    cliente: Cliente;
    produto: Produto;
    listaVentaItem: [];
    quantidade: string | number;
    dataVendaProduto: Date;
}

