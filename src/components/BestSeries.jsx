
import "../assets/style/bestmovies.css";
import Card from "./Card";
import imagenes from "../assets/img/imagenes";
function BestSeries() {
    const movies = [
        {
            name:"Gambito de Dama",
            duration:"1 temp",
            foto : <img src={imagenes.img6}/>
        } ,
        {
            name:"Peaky Blinders",
            duration:"5 temps",
            foto: <img src={imagenes.img7} />
        } ,
        {
            name:"Emma",
            duration:"1 temp",
            foto: <img src={imagenes.img8}/>
        },
        {
            name:"Minimalista",
            duration:"1 temp",
            foto: <img src={imagenes.img9}/>
        },
        {
            name:"Atlantis",
            duration:"2",
            foto: <img src={imagenes.img10}/>
        }
    
        ]

    return ( 
        <>
        <>
    <div>
        <h1>Mejores Peliculas</h1>
    </div>
    <flex-container>
    <div className="container">
            {movies.map(movie  => {
                 return (
                    <Card 
                      foto={movie.foto} 
                    />
                )})}
            
            
            </div>
    
    </flex-container>
      
    </>
        </>
     );
}

export default BestSeries;
