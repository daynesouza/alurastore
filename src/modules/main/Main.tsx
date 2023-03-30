import style from './Main.module.scss';
import {Iproduto} from '../../types/produto';
import { useState } from 'react';
import Produtos from 'modules/produtos';


export default function Main(){
    return(
        <main className={style.main}>
            <section className={style.main__banner}>
                <div className={style.main__banner__imagem}/>
            </section>
            <section className={style.main__novaColecao}>
                <h2 className={style.main__novaColecao__titulo}>Nova Coleção</h2>
                <select className={style.main__novaColecao__select} placeholder='Ordernar Por'></select>
                <div className={style.main__nocaColecao__produtos}>
                    <Produtos/>
                </div>
            </section>
       </main>
    )
}