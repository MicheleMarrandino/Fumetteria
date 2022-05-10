import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label-err',
  templateUrl: './label-err.component.html',
  styleUrls: ['./label-err.component.scss'],
})
export class LabelErrComponent {
  @Input() errorMessage: any;

  constructor() {}

}
