import { Component, OnInit } from '@angular/core';
import { Livro } from './livro.model';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  livros: Livro[];

  constructor() {
    this.livros = [
      {
        titulo: 'JavaScript: O guia definitivo',
        autor: 'David Flanagan',
      },
      {
        titulo: 'O melhor do JavaScript',
        autor: 'Douglas Cockford'
      },
      {
        titulo: 'JavaScript Design Patterns',
        autor: 'Addy Osmani'
      }
    ];
  }

  ngOnInit(): void {
  }

}
