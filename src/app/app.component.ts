import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-proyecto';

  edaduno : number = 0;
  edaddos : number = 0;
  resultadoSuma : number = 0;
  resultadoPromedio : number = 0;

  sumar()
  {
    this.resultadoSuma = this.edaddos + this.edaduno;
  }

  promedio()
  {
    this.resultadoPromedio = (this.edaduno + this.edaddos) / 2;
  }
  
  limpiar()
  {
    this.edaddos = 0;
    this.edaduno = 0;
    this.resultadoPromedio = 0;
    this.resultadoSuma = 0;
  }



}
