import './Connect.css';
import React from 'react';
import axios from 'axios';

import { AppFormProperties, useState } from "react";



function Connect() {

    const [log, setLog]= useState('');
    const [pwd, setPwd]= useState('');


    async function signUp() {
        const l= toString(log);
        const p= toString(pwd);
        const response = await axios.post("http://localhost:3003/auth/login", {
            login: l,
            password: p
            });
        if (response.data && Array.isArray(response.data)) {
            console.log(response.data);
          } else {
            console.log("error");
          }
          }


    

    const [newLogin, setNewLogin] = useState('');
    const [newPasswd, setNewPasswd] = useState('');

    


    const handleConnect = (event) => {
        alert("incorrect login or password");
        event.preventDefault(); // evite de reload la page
        if (AppFormProperties.onSubmit !== undefined) {
            AppFormProperties.onSubmit({
                log,
                pwd
            });
        }
    }

    const handleCreate = (event) => {
        alert("cannot create account");
        event.preventDefault(); // evite de reload la page
        if (AppFormProperties.onSubmit !== undefined) {
            AppFormProperties.onSubmit({
                newLogin,
                newPasswd
            });
        }
    }

    const handleLoginChange = (event) => {
        setLog(event.currentTarget.value);
    }

    const handlePasswdChange = (event) => {
        setPwd(event.currentTarget.value);
    }

    const handleNewLoginChange = (event) => {
        setNewLogin(event.currentTarget.value);
    }

    const handleNewPasswdChange = (event) => {
        setNewPasswd(event.currentTarget.value);
    }

    return (
        <div className='box'>
            

            <div className='connexionForm'>
                <form onSubmit={signUp}>
                    <h2>Connexion</h2>
                    <div>
                        <input type="text" placeholder="login" value={log} onChange={handleLoginChange} />
                    </div>
                    <div>
                        <input type="text" placeholder="password" value={pwd} onChange={handlePasswdChange} />
                    </div>

                    <input className='connectButton' type="submit" defaultValue="Send" value="Connect" />
                </form>

                <form onSubmit={handleCreate}>
                    <h2 className=''>Create an account</h2>
                    <div>
                        <input type="text" placeholder="login" value={newLogin} onChange={handleNewLoginChange} />
                    </div>
                    <div>
                        <input type="text" placeholder="password" value={newPasswd} onChange={handleNewPasswdChange} />
                    </div>
                    <input className='connectButton' type="submit" defaultValue="Send" value="Create" />
                    </form>
            </div>
        </div>
    )
}

export default Connect;