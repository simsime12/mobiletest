import React, { useEffect,useState } from 'react'

const Pro = () => {
    const [totalSum,setTotalSum] = useState(0)
    const [total,setTotal] = useState("")
    const arr = [
        {
        productName:"a",
        price:100
        },{
            productName:"b",
            price:200
        },{
            productName:"c",
            price:300
        }
    ] 
    const btnSend= ()=>{

        console.log(total)
    }

    useEffect(()=>{
        var sum = 0
        {arr.map((item)=>{
            sum += item.price;
        })}
        setTotal({arr:arr,sum:sum})
        setTotalSum(sum)
    },[])
  return (
    <div>
        {arr.map((item)=>(
            <>
                <div>{item.productName}</div>
                <div>{item.price}</div>
            </>
        ))}
        <div>{totalSum}</div>
        <button onClick={()=>btnSend() }>전송</button>
    </div>
  )
}

export default Pro