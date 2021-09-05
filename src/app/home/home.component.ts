import {ElementRef,  OnInit } from '@angular/core';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HOMEService } from 'src/app/home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('testSelect', { static: false }) testSelect: ElementRef = { 'nativeElement': { 'value': '0' } };
  @ViewChild('fecha', { static: false }) fecha: ElementRef = { 'nativeElement': { 'value': '0' } };
  @ViewChild('codigo', { static: false }) codigo: ElementRef = { 'nativeElement': { 'value': '0' } };
  _pedidos:any;
  _clientes:any;
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }
  constructor(private homeservice:HOMEService) {

  }
  async ingresarPedido(){
    var respuesta = await this.homeservice.ingresarPedido(this.codigo.nativeElement.value,this.fecha.nativeElement.value,this.testSelect.nativeElement.value);
    console.log(respuesta);
  }
  async consultarCliente()
  {
    this._clientes = [];
    var respuesta = await this.homeservice.consultarClientes();
    this._clientes = respuesta;
  }
  onChange(value:any){
    console.log(this.testSelect.nativeElement.value);
    console.log(this.fecha.nativeElement.value);
  }
  async consultarPedidos()
  {
    this._pedidos = [];
    var respuesta = await this.homeservice.consultarPedidos();
    this._pedidos = respuesta;
  }
  async eliminarPedidos()
  {
    var respuesta = await this.homeservice.eliminarPedidos();
    console.log(respuesta);
  }
   ngOnInit() {
        this.consultarPedidos();
        this.consultarCliente();
   }


}
