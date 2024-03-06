import React from 'react'
import { useRecoilState, useRecoilValue} from 'recoil';
import { counter } from '../atoms/counter';
import { computeCounter } from '../selectors/computeCounter';
export default function CounterDisplay() {
    const [data,setData]=useRecoilState(counter);
    const result= useRecoilValue(computeCounter);
  return (
    <div>
     <h1>you have clicked {data} times</h1>
     <button onClick={()=>setData(data+1)} >increament</button>
     <h1>two times of click {result}</h1>
    </div>
  )
}
