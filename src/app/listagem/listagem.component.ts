import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  url: string = '../../assets/img/leao.jpg';
  lotacao: string = 'CrossFit';
  nome: string = 'João da Silva';

  listaFuncionario: object[] = [
                                  // {
                                  //   url: 'url1',
                                  //   lotacao: 'lotacao1',
                                  //   nome: 'nome1'
                                  // },
                                  // {
                                  //   url: 'url2',
                                  //   lotacao: 'lotacao2',
                                  //   nome: 'nome2'
                                  // }
                               ];

  constructor(http: HttpClient) {
    http.get<object[]>('http://localhost:8080/pontointeligenteapi/funcionario').subscribe(
      funcionarios => this.listaFuncionario = funcionarios,
      erro => console.log(erro));
  }

  ngOnInit() {
  }

}
