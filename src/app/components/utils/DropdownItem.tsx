import React from "react"

interface DropdownItemProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string
}

export default function DropdownItem(props: DropdownItemProps): React.JSX.Element {
    return (
        <div {...props}>
            <span>{props.name}</span>
            <small>{props.children}</small>
        </div>
    )
}
