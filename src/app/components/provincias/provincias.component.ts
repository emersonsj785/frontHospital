import { Component, OnInit } from '@angular/core';
import { Provincia } from 'src/app/models/provincia';
import { ProvinciaService } from 'src/app/services/provincia.service';

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css']
})
export class ProvinciasComponent implements OnInit {

  descProvincia: string = 'Listado de Provincias';
  provincias: Provincia[];

  constructor(private service: ProvinciaService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(provincias =>this.provincias = provincias);
  }

}
