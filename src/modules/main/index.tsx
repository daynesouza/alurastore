import style from './Main.module.scss';
import { useState } from 'react';
import Produtos from 'modules/produtos';


export default function Main(){
    return(
        <main className={ `${style.main} container` }>
            <section className={style.main__banner}>
                <div className={style.main__banner__imagem}/>
            </section>
            <section className={style.main__novaColecao}>
                <div className={style.main__novaColecao__container}>
                    <h2 className={style.main__novaColecao__titulo}>Nova Coleção</h2>
                    <select className={style.main__novaColecao__select}>                        
                        <option value="" disabled selected>Ordernar Por</option>
                        <option value="1"></option>
                        <option value="2">Masculino</option>
                        <option value="3">Feminino</option>
                        <option value="4">Infantil</option>
                    </select>
                </div>
                <div className={style.main__nocaColecao__produtos}>
                    <Produtos/>
                </div>
            </section>
       </main>
    )
}
