import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html'
})
export class CockpitComponent implements OnInit {
  @ViewChild('tcktNoInput') tcktNoInputRef: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  srchTcketNumber(){
    console.log(this.tcktNoInputRef.nativeElement.value);
    //const ingName = this.tcktNoInputRef.nativeElement.value;

  }

}
