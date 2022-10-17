import "./styles.css"

const Footer = () => {
    return (
        <footer>
            <div className="responsavel">
                <h3>Responsável Técnico</h3>
                <p>Fabio Camilo da Silva</p>
                <p>CRP (06/1433)</p>
            </div>

            <div className="descricaoResponsavel">
                <img src="/img/alerta-blank.svg"></img>
                <p className="textoResponsavel"> 
                Atenção: Este site não oferece tratamento ou aconselhamento imediato para pessoas em crise suicida. Em caso de crise, ligue para <b>188 (CVV)</b> ou acesse o site <b>www.cvv.org.br.</b> Em caso de emergência, procure atendimento em um hospital mais próximo.
                </p>
            </div>
        </footer>
    )
}

export default Footer;