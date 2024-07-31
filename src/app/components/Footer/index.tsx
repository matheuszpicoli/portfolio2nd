//- React
import React from "react"

export default function Footer(): React.JSX.Element {
	return (
		<footer>
			<p>Copyright &copy; {new Date().getFullYear()}. Todos os direitos reservados.</p>
			<p>Desenvolvido em <span>Next JS</span> com <span>TypeScript</span> e <span>SCSS</span>.</p>
		</footer>
	)
}
