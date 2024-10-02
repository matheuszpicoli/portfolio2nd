import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaGit, FaTools, FaCloud } from "react-icons/fa";
import { SiTypescript, SiBootstrap, SiTailwindcss, SiExpress, SiFlask, SiFirebase, SiMysql, SiMongodb, SiGithub, SiWebpack, SiVite, SiNodemon, SiPandas, SiPostman, SiGrafana, SiVisualstudio, SiVercel } from "react-icons/si";

type Technology = {
    category: string;
    techs: Array<{ name: string; icon: React.JSX.Element; }>
}

export default function Technologies(): React.JSX.Element {
    const technologies: Array<Technology> = [
        {
            category: "Front-end",
            techs: [
                { name: "HTML", icon: <FaHtml5 /> },
                { name: "CSS", icon: <FaCss3Alt /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss /> },
                { name: "SCSS", icon: <SiBootstrap /> },
                { name: "JavaScript", icon: <FaJs /> },
                { name: "TypeScript", icon: <SiTypescript /> },
                { name: "React", icon: <FaReact /> },
                { name: "Next", icon: <FaReact /> },
                { name: "jQuery", icon: <FaJs /> },
                { name: "Bootstrap", icon: <SiBootstrap /> },
                { name: "Babel", icon: <FaTools /> },
                { name: "Gulp", icon: <FaTools /> }
            ]
        },
        {
            category: "Back-end",
            techs: [
                { name: "Node", icon: <FaNodeJs /> },
                { name: "Express", icon: <SiExpress /> },
                { name: "Flask", icon: <SiFlask /> },
                { name: "Firebase", icon: <SiFirebase /> },
                { name: "Python", icon: <FaPython /> },
                { name: "Delphi", icon: <FaTools /> },
                { name: "SQL Alchemy", icon: <FaDatabase /> },
                { name: "Axios", icon: <FaTools /> },
                { name: "Shell", icon: <FaTools /> }
            ]
        },
        {
            category: "Banco de dados",
            techs: [
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "MySQL", icon: <SiMysql /> },
                { name: "MariaDB", icon: <SiMysql /> },
                { name: "Oracle", icon: <FaDatabase /> }
            ]
        },
        {
            category: "Outras tecnologias",
            techs: [
                { name: "Git", icon: <FaGit /> },
                { name: "GitHub", icon: <SiGithub /> },
                { name: "ESLint", icon: <FaTools /> },
                { name: "Webpack", icon: <SiWebpack /> },
                { name: "Vite", icon: <SiVite /> },
                { name: "Nodemon", icon: <SiNodemon /> },
                { name: "Plotly", icon: <FaTools /> },
                { name: "Pandas", icon: <SiPandas /> },
                { name: "Markdown", icon: <FaTools /> }
            ]
        },
        {
            category: "Ferramentas",
            techs: [
                { name: "Postman", icon: <SiPostman /> },
                { name: "Grafana", icon: <SiGrafana /> },
                { name: "VS Code", icon: <SiVisualstudio /> },
                { name: "SQL Server Management Studio", icon: <FaTools /> },
                { name: "DBeaver", icon: <FaTools /> },
                { name: "MySQL Workbench", icon: <SiMysql /> },
                { name: "Bash", icon: <FaTools /> },
                { name: "Vercel", icon: <SiVercel /> }
            ]
        },
        {
            category: "DevOps",
            techs: [
                { name: "Azure", icon: <FaCloud /> },
                { name: "Amazon Web Services (AWS)", icon: <FaCloud /> }
            ]
        }
    ]

    return (
        <section className="technologies-section">
            <h2>Tecnologias</h2>
            <p>Todas as tecnologias que tenho experiência, categorizadas.</p>
            <div className="technologies-table">
                <table>
                    <thead>
                        <tr>
                            <th>Categoria</th>
                            <th colSpan={2}>Tecnologia</th>
                        </tr>
                    </thead>
                    <tbody>
                        {technologies.map((category: Technology): React.JSX.Element => (
                            <React.Fragment>
                                {category.techs.map(({ name, icon }, index: number): React.JSX.Element => (
                                    <tr key={`${category.category}-${index}`}>
                                        {index === 0 && <td className="category" rowSpan={category.techs.length}>{category.category}</td>}
                                        <td>{name}</td>
                                        <td>{icon}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan={2} className="total">Total</td>
                                    <td>{category.techs.length}</td>
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={2} className="total global">Total Geral</td>
                            <td>{technologies.reduce((sum: number, category: Technology): number => sum + category.techs.length, 0)}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </section>
    )
}
