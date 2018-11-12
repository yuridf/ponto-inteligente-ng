import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  nome: string;
  email: string;
  telefone: string;
  lotacao: string;

  constructor() { }

  ngOnInit() {
  }

  salvar () {
    console.log(`nome: ${this.nome}, email: ${this.email}, tel: ${this.telefone}, lotação: ${this.lotacao}`);
  }

}
