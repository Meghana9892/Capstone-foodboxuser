import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordercomplete',
  templateUrl: './ordercomplete.component.html',
  styleUrls: ['./ordercomplete.component.css']
})
export class OrdercompleteComponent implements OnInit{

  constructor(private route:Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public back()
  {
    this.route.navigate(['/home'])
  }
}
