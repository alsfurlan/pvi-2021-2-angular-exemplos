import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  nome = 'João';

  constructor() { }

  ngOnInit(): void {
  }

  atualizaNome(event: any) {
    this.nome = event.target.value;
  }

}
