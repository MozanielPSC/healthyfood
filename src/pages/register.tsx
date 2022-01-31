import styles from "./register.module.scss";
import { FormEvent, useContext, useState, useEffect } from "react";
import { parseCookies, setCookie } from 'nookies';
interface CEP {
    bairro: string,
    cep: string,
    complemento: string,
    ddd: string,
    gia: string,
    ibge: string,
    localidade: string,
    logradouro: string,
    siafi: string,
    uf: string
}
interface User {
    name: string,
    birthday:string,
    cpf:string,
    cep:string,
    uf: string,
    ddd: string,
    bairro: string,
    localidade: string,
    logradouro: string,
}
export default function Register() {
    const [data, setData] = useState<CEP | any>({});
    const [user, setUser] = useState<User>({
        name:"",
        birthday:"",
        cpf:"",
        cep:"",
        uf:"",
        ddd:"",
        bairro:"",
        localidade:"",
        logradouro:"",
    });
    useEffect(() => {
        if(user.cep){
            if (user.cep.length === 8) {
                fetch(`https://viacep.com.br/ws/${user.cep}/json/`)
                    .then((response) => response.json())
                    .then((response) => { setData(response); });
            }
        }
        

    }, [user.cep]);

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        setUser({...user,
            uf:data.uf,
            ddd:data.ddd,
            bairro:data.bairro,
            localidade:data.localidade,
            logradouro:data.logradouro
        })
        setCookie(null, 'user.name', user.name, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
          })
          setCookie(null, 'user.cpf', user.cpf, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
          })
          setCookie(null, 'user.birthday', user.birthday, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
          })
          setCookie(null, 'user.cep', user.cep, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
          })
          setCookie(null, 'user.ddd', user.ddd, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
          })
          setCookie(null, 'user.uf', user.uf, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
          })
          setCookie(null, 'user.logradouro', user.logradouro, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
          })
          setCookie(null, 'user.bairro', user.bairro, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
          })
          setCookie(null, 'user.localidade', user.localidade, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
          })
        
    }
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <h1>Register on Healthy Food</h1>
                <form>
                    <input type="text" placeholder="Name" onChange={(e) => setUser({...user,name:e.target.value})} />
                    <input  placeholder="Birthday" onChange={(e) => setUser({...user,birthday:e.target.value})}></input>
                    <input  placeholder="CPF" onChange={(e) => setUser({...user,cpf:e.target.value})}></input>
                    <input onChange={(e) => setUser({...user,cep:e.target.value})} type="text" placeholder="CEP" />
                    <div>
                        <input type="text" value={data.bairro ? data.bairro : ""}  placeholder="Neighborhood" disabled />
                        <input type="text" value={data.localidade ? data.localidade : ""}  placeholder="City" disabled />
                    </div>
                    <div>
                        <input type="text" value={data.uf ? data.uf : ""} placeholder="UF" disabled />
                        <input type="text" value={data.logradouro ? data.logradouro : ""} placeholder="Street" disabled />
                    </div>
                    <input onClick={handleSubmit} className={styles.submit} type="submit" value="REGISTER" />
                </form>
            </div>
        </div>
    )
}