import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AndressService } from 'src/app/components/services/andress.service';
import { Andress } from '../../modal/andress.model';
import { AddAndressComponent } from '../andress/add-andress/add-andress.component';

@Component({
  selector: 'app-andress-table',
  templateUrl: './andress-table.component.html',
  styleUrls: ['./andress-table.component.css']
})
export class AndressTableComponent implements OnInit {

  andress!: Andress[]

  displayedColumns = ['action', 'street', 'num', 'cep', 'complement', 'state', 'city']

  constructor(
    private andressService: AndressService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.recall()
  }

  recall() {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.andressService.read(id).then(result => {
      this.andress = result.data
    })
  }

  async edit(id: number) {

    let enderecoObj = {}

    const result = await this.andressService.readById(id)
    enderecoObj = result.data

    const dialogRef = this.dialog.open(AddAndressComponent, {
      data: enderecoObj
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.andressService.update(result)
      }
      this.recall()

    })
  }


  async delet(id: number) {
    await this.andressService.delete(id)
    this.recall()
  }
}
