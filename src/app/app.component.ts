import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {addNumber, addOperation, onClear} from "./state/calc.actions";
import {selectFunc, selectValue} from "./state/calc.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  calValue$ = this.store.select(selectValue);
  funcT$ = this.store.select(selectFunc);

  constructor(private store: Store) {
  }

  onClickNumber(val: string) {
    this.store.dispatch(addNumber({val}));
  }

  onClickClear() {
    this.store.dispatch(onClear());
  }

  onClickOperation(val) {
    this.store.dispatch(addOperation({val}));
  }

}
