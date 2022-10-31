const GRIDS = [
    [
        [{isOn : true},{isOn : false},{isOn : false},{isOn: false},{isOn: true}],
    
        [{isOn : false},{isOn : true},{isOn : false },{isOn : true},{isOn:false}],
    
        [{isOn : false },{isOn : false },{isOn : true},{isOn : false},{isOn : false}],
       
        [{isOn : false},{isOn : true},{isOn : false },{isOn : true},{isOn:false}],
       
        [{isOn : true},{isOn : false},{isOn : false},{isOn: false},{isOn: true}],
    ] , 

    [
        [{isOn : false},{isOn : false},{isOn : true},{isOn: false},{isOn: false}],
    
        [{isOn : false},{isOn : true},{isOn : false },{isOn : true},{isOn:false}],
    
        [{isOn : true },{isOn : false },{isOn : true},{isOn : false},{isOn : true}],
       
        [{isOn : false},{isOn : true},{isOn : false },{isOn : true},{isOn:false}],
       
        [{isOn : false},{isOn : false},{isOn : true},{isOn: false},{isOn: false}],
    ] ,

    [
        [{isOn : false},{isOn : false},{isOn : false},{isOn: false},{isOn: false}],
    
        [{isOn : false},{isOn : true},{isOn : true },{isOn : true},{isOn:false}],
    
        [{isOn : false },{isOn : true },{isOn : false},{isOn : true},{isOn : false}],
       
        [{isOn : false},{isOn : true},{isOn : true },{isOn : true},{isOn:false}],
       
        [{isOn : false},{isOn : false},{isOn : false},{isOn: false},{isOn: false}],
    ]

] 



const idGrid = (grid:[]) : [] => {
    return grid.reduce((acc, row , rowIndex) => {
        const newRow = row.reduce( (rowAcc, element , elementIndex) => {
            return [...rowAcc , {...element , id:+`${rowIndex}${elementIndex}`}]
    },[])
    return [...acc, newRow]
} , [])
}

export const getInitialGrid = ():[]=>{
    const random  = Math.floor(Math.random()*3)
    return idGrid(GRIDS[0])
} 
