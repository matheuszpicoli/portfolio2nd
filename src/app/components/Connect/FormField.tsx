//- React
import React from "react"

type FormFieldPropsBase<T> = {
	id: string
	name: string
	formType: T
}

type Input = FormFieldPropsBase<"input"> & React.InputHTMLAttributes<HTMLInputElement>
type Textarea = FormFieldPropsBase<"textarea"> & React.TextareaHTMLAttributes<HTMLTextAreaElement>

type FormFieldProps = Input | Textarea

export default function FormField(props: FormFieldProps): React.JSX.Element {
	const { id, name, formType, ...rest } = props

	return (
		<div className="form-field">
			{formType === "input" && (
				<input id={id} {...(rest as React.InputHTMLAttributes<HTMLInputElement>)} />
			)}
			{formType === "textarea" && (
				<textarea id={id} {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}></textarea>
			)}
			<label htmlFor={id}>{name}</label>
		</div>
	)
}
