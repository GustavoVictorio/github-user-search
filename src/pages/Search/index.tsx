
import ButtonIcon from 'core/components/Buttonicon';
import { makeRequest } from 'core/utils/request';
import React, { useState } from 'react';
import './styles.scss';
import { User } from 'core/types/User';


const Search = () => {
    // const [isLoading, setIsLoading] = useState(false);
    // const [isClicked, setIsClicked] = useState(false);
    const [user, setUser] = useState<User>();
    const [userName, setUserName] = useState(user?.login);

    function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }

    function handleOnClick() {
        //setIsClicked(true);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    //setIsLoading(true);
    makeRequest({ url: `/${userName}` })
        .then((response) => setUser(response.data))
        .finally(() => {
            //setIsLoading(true);
        });

    return (
        <>
            <div className="search-cotainer">
                <div className="search-content card-base">

                    <form onSubmit={handleSubmit} className="padd">
                        <h3 className="search-title">
                            Encontre um perfil Github
                        </h3>
                        <input
                            value={userName}
                            onChange={handleOnChange}
                            className="input-search"
                            placeholder="Usuário Github"
                        />
                        <div className="search-btn">
                            <button className="btn" onClick={handleOnClick} >
                                Encontrar
                            </button>
                        </div>
                    </form>
                </div>

                <>
                    <div className="user-container">
                        <div className="user-content">
                            <div className="user-img">
                                <img src={user?.avatar_url} alt={user?.login} />
                            </div>
                            <div className="user-info-top">
                                <span className="sp">Repositórios públicos: {user?.public_repos}</span>
                                <span className="sp">Seguidores: {user?.followers}</span>
                                <span className="sp">Seguindo: {user?.following}</span>
                                <div className="user-info">
                                    <span className="info">Informações</span>
                                    <div className="info-user">
                                        Empresa: {user?.company}
                                    </div>
                                    <div className="info-user">
                                        Website/Blog: {user?.blog}
                                    </div>
                                    <div className="info-user">
                                        Localidade: {user?.location}
                                    </div>
                                    <div className="info-user">
                                        Membro desde: {user?.created_at}
                                    </div>
                                </div>
                            </div>
                            <ButtonIcon text="Ver perfil" />
                        </div>

                    </div>
                </>

            </div>
        </>
    );
}

export default Search;

