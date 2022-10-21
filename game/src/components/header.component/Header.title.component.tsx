type HeaderTitleProps = {
    title : string
}

export function HeaderTitle ({title} : HeaderTitleProps) {
    return (
        <span className="header-title">
                {title}
        </span>
    )
}