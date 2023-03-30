import s from 'Home.module.scss';
import Footer from 'modules/footer/Footer';
import Header from 'modules/header/Header';
import Main from 'modules/main/Main';

export default function Home(){
    return(
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}