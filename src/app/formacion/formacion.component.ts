import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { Experiencia } from '../model/experiencia';
import { ExperienciaService } from '../services/experiencia.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css'],
})
export class FormacionComponent implements OnInit {
  informaciones: any = [];
  trabajos: any = [];
  educacion: any = [];
  id: string = '';
  inicio: string = '';
  fin: string = '';
  titulo: string = '';
  empresa: string = '';
  organismo: string = '';
  imagen: string = '';

  experiencias: Experiencia[] = [];
  //Video Express 18
  constructor(private portfolioService: PortfolioService) {}

  //Video Express 18
  //constructor(private sExperiencia: ExperienciaService) {}
  ngOnInit(): void {
    this.portfolioService.getDatos().subscribe((portfolio) => {
      console.log(portfolio);
      /* Almaceno en la variable de la linea 10 con todo lo que pongo aca abajo */
      /* Definir la info a mostrar */
      this.educacion = portfolio.educacion;
      this.trabajos = portfolio.trabajos;
      this.informaciones = portfolio.informaciones;
    });
  }
}
//Llamamos el metodo
//Video Express 18
/* public cargarExperiencia(): void {
    this.sExperiencia.list().subscribe((data) => {
      this.experiencias = data;
    });
  }
}       */
