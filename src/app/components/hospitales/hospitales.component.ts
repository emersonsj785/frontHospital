import { Component, OnInit } from '@angular/core';
import { Hospitales } from 'src/app/models/hospitales';
import { Sede } from 'src/app/models/sede';
import { HospitalService } from 'src/app/services/hospital.service';
import { SedeService } from 'src/app/services/sede.service';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.css']
})
export class HospitalesComponent implements OnInit {

  tipo: number;
  id: number;
  hospitales: Hospitales[] = [];
  sedes: Sede[] = [];
  numHospitalesEncontrados: number = 0;

  constructor(private hospitalService: HospitalService, private sedeService: SedeService) { }

  ngOnInit(): void {
    this.listarSedes();
  }

  buscarHospitales() {

    console.log(this.id)
    console.log(this.tipo);
    if (this.tipo && this.id) {
      this.hospitalService.listarHospitales(this.tipo, this.id).subscribe(
        (data: Hospitales[]) => {
          this.hospitales = data;
          this.numHospitalesEncontrados = this.hospitales.length;
        },
        error => {
          console.error('Error al obtener los hospitales: ', error);
        }
      );
    } else {
      console.log('Por favor ingrese tipo y id');
    }
  }

  listarSedes() {
    this.sedeService.listar().subscribe(
      (data: Sede[]) => {
        this.sedes = data;
      },
      error => {
        console.error('Error al obtener las sedes: ', error);
      }
    );
  }

  mostrarConfirmacionEliminar(idHospital: number) {
    const dialog = document.getElementById('confirmDialog');
    dialog.style.display = 'block';

    const btnSi = document.getElementById('btnSi');
    const btnNo = document.getElementById('btnNo');

    btnSi.onclick = () => {
      dialog.style.display = 'none';
      this.eliminarHospital(idHospital);
    };

    btnNo.onclick = () => {
      dialog.style.display = 'none';
    };
  }

  eliminarHospital(idHospital: number) {
    this.hospitalService.eliminar(idHospital).subscribe(
      (response: any) => {
        if (response.mensaje === 'El hospital ha sido eliminado exitosamente.') {
          this.hospitales = this.hospitales.filter(hospital => hospital.idHospital !== idHospital);
          this.numHospitalesEncontrados = this.hospitales.length;
        } else {
          console.error('Error: ', response.mensaje);
        }
      },
      error => {
        console.error('Error al eliminar el hospital: ', error);
      }
    );
  }
  
  

}
