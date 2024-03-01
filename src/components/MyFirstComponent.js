import React from 'react';
import { Card } from 'antd';
import "./MyFirstComponent.scss"
import {useState, useEffect} from 'react'; 

export const MyFirstComponent = () => {
  const [peliculas, setPeliculas] = useState([]);
  //const [peliculaData, setPeliculaData] = useState([]);

  useEffect(() => {
      fetch('https://gateway.marvel.com/v1/public/comics?ts=1&apikey=b8f53df1ac21108e8a127bb5377acbd8&hash=cc58371ae3823cc95baed7a833d5d4eb')
          .then((response) => response.json())
          .then((data) => {
              setPeliculas(data.data.results); 
          })
  }, []); 

  console.log(peliculas);

  return (
      <>
          <div className="cards-content">
              {peliculas.map(pelicula => {
              
                  return (
                      <Card
                          className="card-style"
                          hoverable
                          title = {pelicula.title}
                          cover={<img alt={pelicula.title} src={`${pelicula.thumbnail.path}.${pelicula.thumbnail.extension}`} />}
                      >
                      </Card>
                  );
              })};
          </div>
      </>
  );
};
