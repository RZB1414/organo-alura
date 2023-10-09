import './Rodape.css'

const Rodape = () => {
    return (
        <section className='rodape'>
            <ul className='lista-rodape'>

                <li>
                    <a href='facebook.com' target='_blank'>
                        <img src="../img/fb.png" alt='link facebook' />
                    </a>
                </li>

                <li>
                    <a href='instagram.com' target='_blank'>
                        <img src="../img/ig.png" alt='link X' />
                    </a>
                </li>

                <li>
                    <a href='twitter.com' target='_blank'>
                        <img src="../img/tw.png" alt='link instagram' />
                    </a>
                </li>

            </ul>

            <section>
                <img src='../img/logo.png' alt='logo' />
            </section>

            <section>
                <p className='texto-rodape'>Developed by Buiatti Tecnology</p>
            </section>
        </section>
    )
}

export default Rodape