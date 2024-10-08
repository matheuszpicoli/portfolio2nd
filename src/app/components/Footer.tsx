import React from "react"

export default function Footer(): React.JSX.Element {
    return (
        <footer className="footer">
            <div className="footer-info">
                <p><strong>Copyright &copy; {new Date().getFullYear()}</strong> | Desenvolvido por <strong>Matheus Picoli</strong>. Todos os direitos reservados.</p>
                <p>Construído com <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">NextJS</a>, <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">SCSS</a> e <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">Typescript</a>. Todo o texto é definido na fonte <a href="https://fonts.google.com/specimen/Rethink+Sans" target="_blank" rel="noopener noreferrer">Rethink Sans</a>.</p>
            </div>
        </footer>
    )
}
