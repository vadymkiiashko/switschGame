import  React   from 'react'


type CellProps = {
    id : number , 
    isOn : boolean,
    handler : (id:number)=>void
    
}

export function  Cell( {id , isOn , handler} : CellProps  )  {
    return (
        <div  className={`cell ${isOn ? 'on' : ''}`} onClick ={()=>handler(id)} >
         
        </div>
    )
}