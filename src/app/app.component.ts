import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service.service';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(
    private dataService : DataService
  ){}

  blockChain : any = [];
  displayedColumns = ['title', 'price', 'bedrooms', 'availability','date','reference','offer'];
  dataSource = new MatTableDataSource();

  ngOnInit() {

    this.dataService.listStreams().subscribe(response => {
      this.blockChain = response;

      for(let key in this.blockChain){
        this.dataService.subscribeStream(response[key].name).subscribe(response => {
          this.blockChain[key].data = {};
          this.dataService.getStream(response[key].name).subscribe(data => {
            this.blockChain[key].data = data[0].data.json; 
          });
        });
      }
      this.dataSource = new MatTableDataSource(this.blockChain);
    });
  }

  createOffer(stream) {
      this.dataService.createOffer(stream).subscribe(data => {
    });
  }
}
