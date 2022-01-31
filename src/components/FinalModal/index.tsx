import Link from "next/link";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import styles from "./styles.module.scss";
import { parseCookies } from "nookies";
interface CommentsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function FinalModal({ isOpen, onRequestClose }: CommentsModalProps) {
    const [user, setUser] = useState<any>({});
    function getLocalStorage() {
        const cookies = parseCookies();
        console.log(cookies)
        setUser({
            bairro: cookies.bairro,
            birthday: cookies.birthday,
            cep: cookies.cep,
            cpf: cookies.cpf,
            ddd: cookies.ddd,
            localidade: cookies.localidade,
            logradouro: cookies.logradouro,
            name: cookies.name,
            uf: cookies.uf
        })

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