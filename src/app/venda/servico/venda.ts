import { Cliente } from 'src/app/clientes/servico/cliente';
import { VendaProduto } from './vendaproduto';

export class Venda {
    codigo: string;
    data: Date;
    cliente: Cliente;
    listaVentaItem: [];
    listaVendaProduto: VendaProduto[]=[];
}
