import {createReducer, on} from "@ngrx/store";
import {addNumber, addOperation, onClear} from "./calc.actions";

export const initialState = {
  calValue: 0,
  funcT: 'NoFunction',
  calNumber: 'noValue',
  firstNumber: 0,
  secondNumber: 0,
  onFunctionClick(val) {
    if (this.funcT == 'NoFunction') {
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'noValue';
      this.funcT = val;
    } else {
      this.secondNumber = this.calValue;
      this.valueCalculate(val)
    }
  },
  valueCalculate(val: string) {
    if (this.funcT == '+') {
      const total = this.firstNumber + this.secondNumber;
      this.totalAssignValues(total, val);
    } else if (this.funcT == '-') {
      const total = this.firstNumber - this.secondNumber;
      this.totalAssignValues(total, val);
    } else if (this.funcT == '*') {
      const total = this.firstNumber * this.secondNumber;
      this.totalAssignValues(total, val);
    } else if (this.funcT == '/') {
      const total = this.firstNumber / this.secondNumber;
      this.totalAssignValues(total, val);
    } else if (this.funcT == '=') {
      this.funcT = val
    }
  },
  totalAssignValues(total: number, val: string) {
    this.calValue = total;
    this.firstNumber = total;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funcT = val;
  }
}

export const calcReducer = createReducer(
  initialState,
  on(addNumber, (state, {val}) => {
    const copyState = {...state}
    return {
      ...copyState,
      calNumber: copyState.calNumber == 'noValue' ? copyState.calNumber = val : copyState.calNumber += val,
      calValue: parseFloat(copyState.calNumber)
    }
  }),
  on(onClear, (state) => {
    return {
      ...state,
      firstNumber: 0,
      secondNumber: 0,
      calValue: 0,
      funcT: 'NoFunction',
      calNumber: 'noValue',
    }
  }),
  on(addOperation, (state, {val}) => {
    const copyState = {...state}
    copyState.onFunctionClick(val)
    return {
      ...copyState
    }
  })
);

