import {selector} from 'recoil';
import { counter } from '../atoms/counter';
export const computeCounter= selector({
    key:'computeCounter',
    get:(({get})=>{
    let value= get(counter);
      return value*2
    })
})