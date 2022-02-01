import Link from "next/link";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import styles from "./styles.module.scss";
import { parseCookies } from "nookies";
interface CommentsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    cookies: {
        name: string,
        birthday: string,
        cpf: string,
        cep: string,
        uf: string,
        ddd: string,
        bairro: string,
        localidade: string,
        logradouro: string,
    }
}
export function FinalModal({ cookies,isOpen, onRequestClose }: CommentsModalProps) {
    const [user, setUser] = useState<any>({});
    useEffect(()=>{
        console.log(cookies)
    },[cookies])
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
           

        </Modal >
    )
}