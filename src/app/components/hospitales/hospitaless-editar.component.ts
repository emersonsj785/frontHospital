import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Hospitales } from 'src/app/models/hospitales';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-hospitaless-editar',
  templateUrl: './hospitaless-editar.component.html',
  styleUrls: ['./hospitaless-editar.component.css']
})
export class HospitalessEditarComponent implements OnInit {

  id: number;
  hospital: Hospitales = {} as Hospitales;

  constructor(private service: HospitalService,
    private router: Router) { }

  ngOnInit(): void {
  }

  verHospital(): void {
    if (this.id) {
      this.service.ver(this.id).subscribe(
        (hospitales: Hospitales[]) => {
          this.hospital = hospitales[0];
        },
        (error) => {
          console.error('Error al obtener el hospital:', error);
        }
      );
    } else {
      console.error('Por favor ingresa un ID de hospital válido.');
    }
  }

}
