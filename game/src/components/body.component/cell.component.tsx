

type CellProps = {
    id : number , 
    isOn : boolean,
    purpose : string   
}

export function  Cell( {id , isOn  , purpose } : CellProps  )  {
    
    return (
        <div data-tag={id} className={
                `cell ${isOn ? 'on' : ''} 
                ${purpose==='' ? '' : 
                    purpose ==='victory' ? 'victory' : 'initial'  }`}
              >
         
        </div>
    )
}