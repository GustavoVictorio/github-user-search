import ButtonIcon from 'core/components/Buttonicon';
import { makeRequest } from 'core/utils/request';
import React, { useEffect } from 'react';
import './styles.scss';



const Search = () => {

    useEffect(() => {
        makeRequest({ url: '/gustavovictorio' })
            .then(reposne => console.log(reposne));
    }, [])

    return (
        <>
            <div className="search-cotainer">
                <div className="search-content card-base">
                    <form action="" className="padd">
                        <h3 className="search-title">
                            Encontre um perfil Github
                        </h3>
                        <input
                            className="input-search"
                            placeholder="Usuário Github"
                        />
                        <ButtonIcon text="Encontrar" />
                    </form>
                </div>

                <div className="user-container">
                    <div className="user-content">
                        <img src="data:image/png;base64,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" alt="Sem Imagem" className="user-img" />
                        <div className="user-info-top">
                            <span className="sp">Repositórios públicos: 62</span>
                            <span className="sp">Seguidores: 127</span>
                            <span className="sp">Seguindo: 416</span>
                            <div className="user-info">
                                <span className="info">Informações</span>
                                <div className="info-user">
                                    Empresa: @ZupIT
                                </div>
                                <div className="info-user">
                                    Website/Blog: https://thewashington.dev
                                </div>
                                <div className="info-user">
                                    Localidade: Uberlândia
                                </div>
                                <div className="info-user">
                                    Membro desde: 19/10/2013
                                </div>
                            </div>
                        </div>
                        <ButtonIcon text="Ver perfil" />
                    </div>

                </div>
            </div>
        </>
    );
}

export default Search;