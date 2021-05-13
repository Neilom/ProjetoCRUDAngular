import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AndressService } from '../../../services/andress.service';
import { RegisterService } from '../../../services/register.service';
import { Andress } from '../../modal/andress.model';
import { Pessoa } from '../../register.model';
import { AndressTableComponent } from '../andress-table/andress-table.component';
import { AddAndressComponent } from './add-andress/add-andress.component';

@Component({
  selector: 'app-andress',
  templateUrl: './andress.component.html',
  styleUrls: ['./andress.component.css']
})
export class AndressComponent implements OnInit {

  pessoa: Pessoa = {
    birth_date: '',
    civil_state: '',
    name: '',
    sex: ''
  }

  andress!: Andress[]

  constructor(
    private registerService: RegisterService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private andressService: AndressService) { }


  @ViewChild(AndressTableComponent, { static: false })
  table!: AndressTableComponent

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!
    await this.registerService.readById(id).then(register => {
      this.pessoa = register.data
    })
  }

  cancel(): void {
    this.router.navigate(['/register'])
  }




   openDialog() {
    const dialogRef = this.dialog.open(AddAndressComponent, {
      data: <Andress>
        {
          cep: '',
          city: '',
          complement: '',
          street: '',
          num: null,
          pessoa: Number(this.route.snapshot.paramMap.get('id')),
          state: '',
          id: 0
        }
    })

    dialogRef.afterClosed().subscribe(async result => {
      if (result != null) {
        await this.andressService.create(result)
        this.table.recall()
      }

    })
  }


}
