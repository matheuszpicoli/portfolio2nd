import React from "react";

import * as Icon from "@/app/assets/icons";

type Technologies = {
    category: "Front-end" | "Back-end" | "Banco de dados" | "Outras tecnologias" | "Ferramentas" | "DevOps"
    items: Array<{ name: string; icon: React.JSX.Element }>
}

const technologies: Array<Technologies> = [
    {
        category: "Front-end",
        items: [
            { name: "Babel", icon: <Icon.Babel aria-label="babel" /> },
            { name: "Bootstrap", icon: <Icon.Bootstrap aria-label="bootstrap" /> },
            { name: "CSS", icon: <Icon.Css aria-label="css" /> },
            { name: "Gulp", icon: <Icon.Gulp aria-label="gulp" /> },
            { name: "HTML", icon: <Icon.Html aria-label="html" /> },
            { name: "JavaScript", icon: <Icon.JavaScript aria-label="javascript" /> },
            { name: "jQuery", icon: <Icon.Jquery aria-label="jquery" /> },
            { name: "Next", icon: <Icon.Next aria-label="next" /> },
            { name: "React", icon: <Icon.React aria-label="react" /> },
            { name: "SCSS", icon: <Icon.Scss aria-label="scss" /> },
            { name: "Tailwind", icon: <Icon.Tailwind aria-label="tailwind" /> },
            { name: "TypeScript", icon: <Icon.TypeScript aria-label="typescript" /> }
        ]
    },
    {
        category: "Back-end",
        items: [
            { name: "Axios", icon: <Icon.Axios aria-label="axios" /> },
            { name: "Delphi", icon: <Icon.Delphi aria-label="delphi" /> },
            { name: "Express", icon: <Icon.Express aria-label="express" /> },
            { name: "Firebase", icon: <Icon.Firebase aria-label="firebase" /> },
            { name: "Flask", icon: <Icon.Flask aria-label="flask" /> },
            { name: "Node", icon: <Icon.Node aria-label="node" /> },
            { name: "Python", icon: <Icon.Python aria-label="python" /> },
            { name: "Shell", icon: <Icon.Shell aria-label="shell" /> },
            { name: "SQLAlchemy", icon: <Icon.SQLAlchemy aria-label="sqlalchemy" /> }
        ]
    },
    {
        category: "Banco de dados",
        items: [
            { name: "MariaDB", icon: <Icon.MariaDB aria-label="mariadb" /> },
            { name: "MongoDB", icon: <Icon.MongoDB aria-label="mongodb" /> },
            { name: "MySQL", icon: <Icon.MySQL aria-label="mysql" /> },
            { name: "Oracle", icon: <Icon.Oracle aria-label="oracle" /> },
            { name: "SQL Server", icon: <Icon.SQLServer aria-label="sql-server" /> }
        ]
    },
    {
        category: "Outras tecnologias",
        items: [
            { name: "ESLint", icon: <Icon.ESLint aria-label="eslint" /> },
            { name: "Git", icon: <Icon.Git aria-label="git" /> },
            { name: "GitHub", icon: <Icon.Github aria-label="github" /> },
            { name: "Markdown", icon: <Icon.Markdown aria-label="markdown" /> },
            { name: "Nodemon", icon: <Icon.Nodemon aria-label="nodemon" /> },
            { name: "Pandas", icon: <Icon.Pandas aria-label="pandas" /> },
            { name: "Plotly Express", icon: <Icon.Plotly aria-label="plotly" /> },
            { name: "Vite", icon: <Icon.Vite aria-label="vite" /> },
            { name: "Webpack", icon: <Icon.Webpack aria-label="webpack" /> }
        ]
    },
    {
        category: "Ferramentas",
        items: [
            { name: "Bash", icon: <Icon.Bash aria-label="bash" /> },
            { name: "DBeaver", icon: <Icon.Dbeaver aria-label="dbeaver" /> },
            { name: "Grafana", icon: <Icon.Grafana aria-label="grafana" /> },
            { name: "Postman", icon: <Icon.Postman aria-label="postman" /> },
            { name: "Vercel", icon: <Icon.Vercel aria-label="vercel" /> },
            { name: "VSCode", icon: <Icon.VSCode aria-label="vscode" /> }
        ]
    },
    {
        category: "DevOps",
        items: [
            { name: "AWS", icon: <Icon.Aws aria-label="aws" /> },
            { name: "Azure", icon: <Icon.Azure aria-label="azure" /> }
        ]
    }
]

export default function Technologies(): React.JSX.Element {
    return (
        <section className="technologies-section" id="technologies">
            <h2>Tecnologias</h2>
            <p>Todas as tecnologias e ferramentas que tenho experiência e já trabalhei &#40;por categoria&#41;.</p>
            <div>
                <table className="technologies-table">
                    <thead>
                        <tr>
                            <th>Categoria</th>
                            <th>Tecnologia</th>
                        </tr>
                    </thead>
                    <tbody>
                        {technologies.map((technologies: Technologies, index: number): React.JSX.Element => (
                            <React.Fragment key={index}>
                                <tr>
                                    <td className="category" rowSpan={2}>
                                        {technologies.category}
                                    </td>
                                    <td className="items">
                                        <div>
                                            {technologies.items.map(({ name, icon }, index: number): React.JSX.Element => (
                                                <figure key={index}>
                                                    {icon}
                                                    <figcaption>{name}</figcaption>
                                                </figure>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className="total">
                                        {technologies.items.length}
                                    </td>
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
