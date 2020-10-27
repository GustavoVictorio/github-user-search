
import ButtonIcon from 'core/components/Buttonicon';
import { makeRequest } from 'core/utils/request';
import React, { useState } from 'react';
import './styles.scss';
import { User } from 'core/types/User';
import InfoLoader from 'pages/components/SeachLoader/InfoLoader';
import ImageLoader from 'pages/components/SeachLoader/ImageLoader';


const Search = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [user, setUser] = useState<User>();
    const [userName, setUserName] = useState(user?.login || "");


    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    }

    const handleOnClick = () => {
        setIsClicked(true);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        //iniciar o Loader
        setIsLoading(true);
        makeRequest({ url: `/${userName}` })
            .then((response) => setUser(response.data))
            .finally(() => {
                //finalizar o loader
                setIsLoading(false);

            });
        event.preventDefault();
    }

    return (
        <>
            <div className="search-cotainer">
                <div className="search-content card-base">

                    <form onSubmit={handleSubmit} className="padd">
                        <h3 className="search-title">
                            Encontre um perfil Github
                        </h3>
                        <input
                            type="text"
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
                    {isClicked && (
                        <div className="user-container">
                            {isLoading ? (
                                <div className="loader-container">
                                    <div className="left-loader">
                                        <ImageLoader />
                                    </div>
                                    <div className="right-loader">
                                        <InfoLoader />
                                    </div>
                                </div>
                            ) : (
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
                                                    Empresa: <span className="f-z">{user?.company}</span>
                                                </div>
                                                <div className="info-user">
                                                    Website/Blog: <span className="f-z">{user?.blog}</span>
                                                </div>
                                                <div className="info-user">
                                                    Localidade:  <span className="f-z">{user?.location}</span>
                                                </div>
                                                <div className="info-user">
                                                    Membro desde: <span className="f-z">{user?.created_at}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <a href={`https://github.com/${userName}`} target="blank">
                                            <ButtonIcon text="Ver perfil" />
                                        </a>

                                    </div>
                                )}
                        </div>
                    )}

                </>
            </div>
        </>
    );
}

export default Search;

