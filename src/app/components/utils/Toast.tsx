import React from "react"

import * as Icon from "@/app/assets/icons"

type Variant = "success" | "error"

export interface ToastProps {
    variant: Variant
    message: string
}

export default function Toast(props: ToastProps): React.JSX.Element {
    return (
        <div className="toast" role="alert" aria-live="assertive" aria-valuetext={props.variant}>
            <div className="toast-body">
                {props.variant === "error" && (
                    <React.Fragment>
                        <div className="icon">
                            <Icon.MessageError aria-label={props.variant} />
                        </div>
                        <div className="message">
                            {props.message}
                        </div>
                    </React.Fragment>
                )}
                {props.variant === "success" && (
                    <React.Fragment>
                        <div className="icon">
                            <Icon.MessageSuccess aria-label={props.variant} />
                        </div>
                        <div className="message">
                            {props.message}
                        </div>
                    </React.Fragment>
                )}
            </div>
        </div>
    )
}
