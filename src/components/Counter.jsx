import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  function handleClickCount() {
    setCount(count => count + 1)
  }

  function handleClickDecrease(){

    if(count === 0) return;
    // return;

    setCount(count => count - 1)
  }

  function handleClickReset () {
    setCount(0)
  }

    return (
       <div className='panel'>
        
            <div className='panel-label'>ຈຸດກວດ 1</div>

                <div className='counter-row'>
                <button className='btn' onClick={handleClickDecrease}>-</button>
                <span className='count'>{count}</span>
                <button className='btn' onClick={handleClickCount}>+</button>
                <button className='btn reset' onClick={handleClickReset}>reset</button>
                </div>

            </div>
    );
}
export default Counter;