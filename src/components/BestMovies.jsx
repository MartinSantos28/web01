
import "../assets/style/bestmovies.css";
import Card from "./Card";
import imagenes  from "../assets/img/imagenes";

function BestMovies() {
    const movies = [
    {
        name:"The witch",
        duration:"1.53",
        foto : <img src={imagenes.img1}/>
    } ,
    {
        name:"Split",
        duration:"2 hrs",
        foto: <img src={imagenes.img2} />
    } ,
    {
        name:"New Mutans",
        duration:"1.30",
        foto: <img src={imagenes.img3}/>
    },
    {
        name:"The North Man",
        duration:"1.50",
        foto: <img src={imagenes.img4}/>
    },
    {
        name:"Last Night In Saden",
        duration:"2",
        foto: <img src={imagenes.img5}/>
    }

    ]
    return ( 
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
        
        
     );
}

export default BestMovies;