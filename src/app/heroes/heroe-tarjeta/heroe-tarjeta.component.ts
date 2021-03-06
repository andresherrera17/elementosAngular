import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IHeroe } from 'src/app/interfaces/heroe.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: IHeroe = {
    nombre: '',
    bio: '',
    img: '',
    aparicion: '',
    casa: ''
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verHeroe() {
    this.router.navigate(['/heroes/heroe', this.heroe.idx])
  }

}
