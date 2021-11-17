import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterinario } from '../veterinario';
import { VeterinarioService } from '../veterinario.service';
import { VeterinarioDetail } from '../veterinarioDetail';

@Component({
  selector: 'app-veterinario-detail',
  templateUrl: './veterinario-detail.component.html',
  styleUrls: ['./veterinario-detail.component.scss']
})
export class VeterinarioDetailComponent implements OnInit {

  @Input() veterinarioDetail: VeterinarioDetail;
  vetId;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vetService: VeterinarioService) { }

  getVeterinarioDetail():void{
    this.vetService.getVeterinarioDetail(this.vetId)
      .subscribe(veterinarioDetail => {
        this.veterinarioDetail = veterinarioDetail;
      });
  }
  ngOnInit() {
    if (this.veterinarioDetail === undefined){
      console.log('routerLink');
      this.vetId = +this.route.snapshot.paramMap.get('id');
      this.getVeterinarioDetail();
    } else {console.log(this.veterinarioDetail.id)}
  }

}
