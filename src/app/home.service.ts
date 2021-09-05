import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HOMEService {

  constructor(private http: HttpClient) { }
  private _header = new HttpHeaders().set('Content-Type', 'application/json');
  consultarPedidos(){
    const _body = new HttpParams();
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:8080/api/Pedido')
                .subscribe(res=>{
                  resolve(res);
                },(err)=>{
                  reject(err);
                });
    });
  }
  consultarClientes(){
    const _body = new HttpParams();
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:8080/api/Cliente')
                .subscribe(res=>{
                  resolve(res);
                },(err)=>{
                  reject(err);
                });
    });
  }
  ingresarPedido(codigo:any,fecha:any,idCliente:any){
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:8080/api/Pedido', {
        "codigo": "sad",
        "fecha": "2021-09-05T00:35:06.592Z",
        "idCliente": "1"
    })
                .subscribe(res=>{
                  resolve(res);
                },(err)=>{
                  reject(err);
                });
    });
  }

  eliminarPedidos(){
    this.http.delete('https://localhost:44362/api/Pedido?idPedido=2').subscribe(data => {
      console.log(data);
    });
  }
}
