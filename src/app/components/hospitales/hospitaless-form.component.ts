import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, of, tap } from 'rxjs';
import { Hospitales } from 'src/app/models/hospitales';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-hospitaless-form',
  templateUrl: './hospitaless-form.component.html',
  styleUrls: ['./hospitaless-form.component.css']
})
export class HospitalessFormComponent implements OnInit {
  @Input() hospital: Hospitales = new Hospitales();
  @Input() titulo: string = "Bienvenido a Registrar";
  @Input() tituloAccion: string = "Crear";

  constructor(private service: HospitalService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public realizarAccion(): void {
    if (this.tituloAccion === "Crear") {
      this.crearHospital();
    } else if (this.tituloAccion === "Actualizar") {
      this.actualizarHospital();
    }
  }

  private crearHospital(): void {
    this.service.crear(this.hospital).subscribe((response: any) => {
      console.log(response);
      const mensaje = response.mensaje;
      alert(mensaje);
      this.router.navigate(['/hospitales']);
    });
  } 

  private actualizarHospital(): void {
    this.service.actualizar(this.hospital.idHospital, this.hospital).subscribe(
      (response: any) => {
        console.log(response);
        const mensaje = response.mensaje;
        alert(mensaje);
        this.router.navigate(['/hospitales']);
      },
      (error) => {
        console.error('Error al actualizar el hospital:', error);
      }
    );
  }
  
}
