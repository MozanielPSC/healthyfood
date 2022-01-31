import styles from "./register.module.scss";
import { FormEvent, useContext, useState, useEffect } from "react";
import { parseCookies, setCookie } from 'nookies';
import { InputMask } from 'react-masked'
import Link from "next/link";
import { FinalModal } from "../components/FinalModal";

interface User {
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
export default function Register() {
    const [user, setUser] = useState<User>({
        name: "",
        birthday: "",
        cpf: "",
        cep: "",
        uf: "",
        ddd: "",
        bairro: "",
        localidade: "",
        logradouro: "",
    });
    const [registerModal, setRegisterModal] = useState(false);
    const [message, setMessage] = useState("");
    const [awaits,setAwaits] = useState(false);
    function handleOpenRegisterModal() {
        setRegisterModal(true)
    }
    function handleCloseRegisterModal() {
        setRegisterModal(false)
    }
    function verifyClient() {
        if (typeof window !== 'undefined') {
            localStorage.setItem('username', user.name)
            localStorage.setItem('usercpf', user.cpf);
            localStorage.setItem('userbirthday', user.birthday);
            localStorage.setItem('usercep', user.cep)
            localStorage.setItem('userddd', user.ddd)
            localStorage.setItem('userlogradouro', user.logradouro)
            localStorage.setItem('userbairro', user.bairro)
            localStorage.setItem('userlocalidade', user.localidade)
        }
    }
    function verifyFields() {
        if (user.name === "") {
            return false
        } else if (user.birthday === "" || user.birthday.length != 10) {
            return false
        } else if (user.cpf === "" || user.cpf.length != 14) {
            return false
        } else if (user.cep === "" || user.cep.length != 8) {
            return false
        }
        else if (user.uf === "") {
            return false
        }
        else if (user.ddd === "") {
            return false
        }
        else if (user.bairro === "") {
            return false
        }
        else if (user.localidade === "") {
            return false
        }
        else if (user.logradouro === "") {
            return false
        } else {
            return true;
        }
    }
    useEffect(() => {
        if (user.cep) {
            if (user.cep.length === 8) {
                fetch(`https://viacep.com.br/ws/${user.cep}/json/`)
                    .then((response) => response.json())
                    .then((response) => {
                        setUser({
                            ...user,
                            uf: response.uf,
                            ddd: response.ddd,
                            bairro: response.bairro,
                            localidade: response.localidade,
                            logradouro: response.logradouro
                        })
                    })
            }
        }


    }, [user.cep]);
    useEffect(()=>{
        verifyClient();
    },[awaits]);

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        if (!verifyFields()) {
            setMessage("Verify all fields before continue")
            setTimeout(() => {
                setMessage("")
            }, 2000)
        } else {
            if(awaits){
                setAwaits(false)
            }else{
                setAwaits(true)
            }
            setCookie(null, 'user.name', user.name, {
                maxAge: 30,
                path: '/',
            })
            setCookie(null, 'user.cpf', user.cpf, {
                maxAge: 30,
                path: '/',
            })
            setCookie(null, 'user.birthday', user.birthday, {
                maxAge: 30,
                path: '/',
            })
            setCookie(null, 'user.cep', user.cep, {
                maxAge: 30,
                path: '/',
            })
            setCookie(null, 'user.ddd', user.ddd, {
                maxAge: 30,
                path: '/',
            })
            setCookie(null, 'user.uf', user.uf, {
                maxAge: 30,
                path: '/',
            })
            setCookie(null, 'user.logradouro', user.logradouro, {
                maxAge: 30,
                path: '/',
            })
            setCookie(null, 'user.bairro', user.bairro, {
                maxAge: 30,
                path: '/',
            })
            setCookie(null, 'user.localidade', user.localidade, {
                maxAge: 30,
                path: '/',
            })
            handleOpenRegisterModal();
        }



    }
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <h1>Register on Healthy Food</h1>
                <form>
                    <input type="text" placeholder="Name" onChange={(e) => setUser({ ...user, name: e.target.value })} />
                    <InputMask mask="99/99/9999" placeholder="Birthday" onChange={(e: any) => setUser({ ...user, birthday: e.target.value })}></InputMask>
                    <InputMask mask="999.999.999-99" placeholder="CPF" onChange={(e: any) => setUser({ ...user, cpf: e.target.value })}></InputMask>
                    <InputMask mask="999999-99" onChange={(e: any) => setUser({ ...user, cep: e.target.value.split("-").join("") })} type="text" placeholder="CEP" />
                    <input type="text" value={user.localidade ? user.localidade : ""} placeholder="City" disabled />
                    <input type="text" value={user.bairro ? user.bairro : ""} placeholder="Neighborhood" disabled />
                    <input type="text" value={user.uf ? user.uf : ""} placeholder="UF" disabled />
                    <input type="text" value={user.logradouro ? user.logradouro : ""} placeholder="Street" disabled />
                    <input type="text" value={user.ddd ? user.ddd : ""} placeholder="DDD" disabled />
                    <input onClick={handleSubmit} className={styles.submit} type="submit" value="REGISTER" />
                </form>
                <h2>{message}</h2>
            </div>
            <FinalModal isOpen={registerModal} onRequestClose={handleCloseRegisterModal}/>
                
        </div>
    )
}