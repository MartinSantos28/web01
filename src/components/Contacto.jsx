import '../assets/style/contacto.css'
import Card from './Card'

function Contacto() {
 
    const users = [
      {
        name: "Martin",
        lastName: "Santos",
      },
      {
        name: "Juan",
        lastName: "Diosito",
      },
      {
        name: "Mia",
        lastName: "Guzman",
      }
    ];
  
    return (
        <div className="container">
            <h2>Lista de contactos</h2>
            {users.map((user)=> {
                return (
                    <Card 
                        name={user.name}
                        lastName={user.lastName}
                    />
                )
            })}
        </div>
    );
  }
  

  export default Contacto;
