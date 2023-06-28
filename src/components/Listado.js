import React from 'react';
import batmanImage from '../img/batman.png'
import ironmanImage from '../img/ironman.png'
import supermanImage from '../img/superman.png'
import electroImage from '../img/electro.png'
import wonderwomanImage from '../img/wonderwoman.png'
import hombreloboImage from '../img/hombrelobo.png'

const Listado = () => {
  const listados = [
    {
      id: 1,
      title: 'TOP 1',
      items: [
        { id: 1, title: 'Batman', description: 'Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower', image: batmanImage },
        { id: 2, title: 'Iron man', description: 'Tony Stark,Long Island, New York, Marvel Comics, Inventor, Industrialist; former United States Secretary of Defense', image: ironmanImage } ,
        { id: 3, title: 'Superman', description: 'Clark Kent, Krypton, ACTION COMICS #1, Superman Prime One-Million, "Justice League of America, The Legion of Super-Heroes (pre-Crisis as Superboy); Justice Society', image: supermanImage },
      ]
    },
    {
      id: 2,
      title: 'TOP 2',
      items: [
        { id: 4, title: 'Electro', description: 'Sinister Six formerly Emissaries of Evil, Frightful Four and Sinister Twelve', image: electroImage },
        { id: 5, title: 'Wonder Woman', description: 'Diana Prince, Themyscira, All-Star Comics #8 (December, 1941), DC Comics, good, Adventurer, Emissary to the world of Man, Protector of Paradise Island; former Goddess of Truth, Justice League of America, Justice Society of America (pre-Crisis Earth-2 version); All-Star Squadron', image: wonderwomanImage },
        { id: 6, title: 'Man-Wolf, Hombre lobo', description: 'John Jameson, New York, New York, AMAZING SPIDER-MAN #1, (as Man-Wolf) AMAZING SPIDER-MAN #124, Marvel Comics, Employed by Dept. of Social Services, Queens; former astronaut, test pilot, security chief for Ravenscroft Institute, Ravencroft Insitute Staff, Avengers Support Crew, NASA, USAF', image: hombreloboImage },
      ]
    },
  ];

  return (
    <div>
      {listados.map(listado => (
        <div key={listado.id}>
          <h2>{listado.title}</h2>
          <div className="listado-items">
            {listado.items.map(item => (
              <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <img src={item.image} alt={item.title} />
                <button onclick="miFunc()">Mis Heroes</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Listado;