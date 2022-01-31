import Link from "next/link";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import styles from "./styles.module.scss";
import { Component } from 'react';
interface CommentsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function FinalModal({ isOpen, onRequestClose }: CommentsModalProps) {
    const [user, setUser] = useState<any>({});
    function getLocalStorage() {
        if (typeof window !== 'undefined') {
            let username = localStorage.getItem('username');
            let cpf = localStorage.getItem('usercpf');
            let birthday = localStorage.getItem('userbirthday');
            let cep = localStorage.getItem('usercep');
            let ddd = localStorage.getItem('userddd');
            let logradouro = localStorage.getItem('userlogradouro');
            let bairro = localStorage.getItem('userbairro');
            let localidade = localStorage.getItem('userlocalidade');
            if (username && cpf && birthday && cep && ddd && logradouro && bairro && localidade)
                setUser({
                    username: username,
                    cpf: cpf,
                    birthday: birthday,
                    cep: cep,
                    ddd: ddd,
                    logradouro: logradouro,
                    bairro: bairro,
                    localidade: localidade
                })
        }
    }
    useEffect(() => {
        getLocalStorage()
    }, [])
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <div className={styles.modal}>
                <h1>Seja bem vindo ao HealthyFood</h1>
                <h2>{user.username}</h2>
                <h2>Aqui estão suas informações</h2>
                <div>
                    <ul>
                        <li> <span>Cpf: <span>{user.cpf}  </span></span></li>
                        <li> <span>Birthday: <span>{user.birthday}</span>  </span></li>

                    </ul>
                    <ul>
                        <li> <span>DDD: <span>{user.ddd} </span>  </span></li>
                        <li><span>Logradouro: <span>{user.logradouro} </span>  </span></li>
                    </ul>
                    <ul>
                        <li> <span>Neighborhood: <span>{user.bairro}</span>  </span></li>
                        <li> <span>City:  <span>{user.localidade}</span>  </span></li>

                    </ul>
                    <ul>
                        <li> <span>CEP: <span>{user.cep}</span>  </span></li>
                    </ul>
                </div>
                <Link href="/">
                    <a>Página inicial</a>
                </Link>
            </div>

        </Modal >
    )
}