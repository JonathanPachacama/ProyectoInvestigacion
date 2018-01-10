import { Component, OnInit } from '@angular/core';
import {ArticuloInterface} from "../../Interfaces/articulo-interface";

import {Http} from '@angular/http';
import {ArticuloClass} from "../../Clases/articulo-class";



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  articulos: ArticuloInterface[] = [];

  articulos2:  ArticuloClass[] = [];

  constructor(private _http: Http) { }

  ngOnInit() {


    this._http.get("http://acm.rkbexplorer.com/sparql/?format=json&query=PREFIX+id%3A+++%3Chttp%3A%2F%2Facm.rkbexplorer.com%2Fid%2F%3E%0D%0APREFIX+rdf%3A++%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0APREFIX+rdfs%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23%3E%0D%0APREFIX+akt%3A++%3Chttp%3A%2F%2Fwww.aktors.org%2Fontology%2Fportal%23%3E%0D%0APREFIX+owl%3A++%3Chttp%3A%2F%2Fwww.w3.org%2F2002%2F07%2Fowl%23%3E%0D%0APREFIX+akt%3A++%3Chttp%3A%2F%2Fwww.aktors.org%2Fontology%2Fportal%23%3E%0D%0APREFIX+akts%3A+%3Chttp%3A%2F%2Fwww.aktors.org%2Fontology%2Fsupport%23%3E%0D%0A%0D%0A%0D%0A%0D%0ASELECT+*+WHERE+%7B+%3Fs+rdfs%3Alabel+%3Fo+%7D+LIMIT+10%0D%0A%0D%0A")

    //.map(response=>response.json()
      .subscribe(
        (response)=>{
          console.log("Response:",response);

          console.log(response.json());

          let respuesta = response.json();

          console.log(respuesta.next);

          this.articulos = respuesta.results.bindings;


        },
        (error)=>{
          console.log("Error:",error);
        },
        ()=>{
          console.log("Finally");
        }

      )


  }



}
