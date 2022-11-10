

type CellProps = {
    id: number , 
    isOn: boolean,
    purpose: string
    onClick: () => void
}

export function Cell({ id, isOn, purpose, onClick }: CellProps) {

    let purposeClass
    switch (purpose) {
        case '':
            purposeClass = ''
            break
        case 'victory':
            purposeClass = 'victory'
            break
        default:
            purposeClass = 'initial'
    }

    const className = `cell ${isOn ? 'on' : ''} ${purposeClass}`
    
    return (
        <div
            data-tag={id}
            className={className}
            onClick={onClick}
        />
    )
}