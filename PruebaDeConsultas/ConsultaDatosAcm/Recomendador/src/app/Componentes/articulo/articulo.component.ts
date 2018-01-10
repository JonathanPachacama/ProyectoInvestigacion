import {Component, Input, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {ArticuloInterface} from "../../Interfaces/articulo-interface";

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {


  @Input() articulos:ArticuloInterface;


  constructor() { }

  ngOnInit() {
  }

}
