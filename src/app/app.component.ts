import { Component, OnInit } from '@angular/core';
import { Web3Service } from './services/web3.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  
  constructor(
    public web3Service: Web3Service
  ) {}

  ngOnInit() {
    this.web3Service.connectToWeb3Account();
  }
}
