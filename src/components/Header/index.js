import "./styles.css"

const Header = () => {
    return (
        <header>
            <img src="/img/Logo-Vittude.svg"></img>
            <div className="linhaVazia"></div>
            <nav>
                <ul>
                    <li>Como funciona</li>
                    <li>Para você</li>
                    <li>Para psicólogos</li>
                    <li>Para empresas</li>
                    <li>Blog</li>
                </ul>
                <div className="visitante">
                    <a>Olá, visitantes!</a>
                </div>
            </nav>
        </header>
    )
}

export default Header;