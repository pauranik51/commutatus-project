import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-opportunity-profile',
  templateUrl: './opportunity-profile.component.html',
})
export class OpportunityProfileComponent implements OnInit, OnChanges {

  @Input()
  opportunity: any;

  isEnabled = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
    }
  }

  getFormatedDate(date: any) {
    return moment(date).format('Do MMM Y');
  }

  convertToString(arr: any[]) {
    return arr.map((i) => i.name).join(', ');
  }

}