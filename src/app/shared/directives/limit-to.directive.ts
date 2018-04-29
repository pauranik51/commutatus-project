import {Directive, Input, OnDestroy, OnInit} from '@angular/core';
import {NgControl} from '@angular/forms';
import {map} from 'rxjs/operators';
import {ISubscription} from 'rxjs/Subscription';

@Directive({
  selector: '[appLimitTo]',
})
export class LimitToDirective implements OnInit, OnDestroy {
  @Input() limit: number;
  private subscriptions: { [name: string]: ISubscription } = {};

  constructor(private ngControl: NgControl) {
  }

  ngOnInit() {
    const ctrl = this.ngControl.control;

    this.subscriptions.limit = ctrl.valueChanges
      .pipe(map(v => (v || '').toString().slice(0, this.limit)))
      .subscribe(v => ctrl.setValue(v, {emitEvent: false}));
  }

  ngOnDestroy() {
    // this._ref.detach();
    if (this.subscriptions) {
      for (const [key, value] of Object.entries(this.subscriptions)) {
        if (value) {
          (value as ISubscription).unsubscribe();
        }
      }
    }
  }
}
