

export const Footer = () => {

    return (
        <footer>
            <ul className="flex flex-wrap justify-content-center">
                <li><a href="#">ENGLISH</a></li>
                <li><a href="#">SOBRE</a></li>
                <li><a href="#">AJUDA</a></li>
                <li><a href="#">IMPRENSA</a></li>
                <li><a href="#">API</a></li>
                <li><a href="#">CARREIRAS</a></li>
                <li><a href="#">PRIVACIDADE</a></li>
                <li><a href="#">TERMOS</a></li>
                <li><a href="#">LOCALIZAÇÃO</a></li>
                <li><a href="#">CONTAS MAIS RELEVANTES</a></li>
                <li><a href="#">HASHTAGS</a></li>
                <li><a href="#">IDIOMA</a></li>
            </ul>
            <p className="copyright">© {new Date().getFullYear()} Instagram</p>
        </footer>
    )
}