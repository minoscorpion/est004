// controle-livros.service.ts
import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    { codigo: 1, titulo: 'Livro 1', resumo: 'Resumo 1', autores: ['Autor 1'], codEditora: 1 },
    { codigo: 2, titulo: 'Livro 2', resumo: 'Resumo 2', autores: ['Autor 2'], codEditora: 2 },
    { codigo: 3, titulo: 'Livro 3', resumo: 'Resumo 3', autores: ['Autor 3'], codEditora: 3 }
    
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = this.livros.reduce((max, livro) => (livro.codigo > max ? livro.codigo : max), 0) + 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex(livro => livro.codigo === codigo);

    if (indice !== -1) {
      this.livros.splice(indice, 1);
    }
  }
}
