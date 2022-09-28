import Footer from "../components/footer";
import Header from "../components/Header";
import BestMovies from "../components/BestMovies";
import BestSeries from "../components/BestSeries";

function Layout({children}) {
    return ( 
        <>
        <Header></Header>
        <BestMovies></BestMovies>
        <BestSeries></BestSeries>
        {children}
        <Footer></Footer>
        </>
     );

}

export default Layout;
