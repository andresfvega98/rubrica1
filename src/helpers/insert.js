import { getDatos } from "./getDatos.js"

export const Insert = ( item = {} ) => {
  const data = getDatos();

  item.id = data[data.length - 1].id + 1;
  item.liked = false;

  data.push(item);

  localStorage.setItem( 'datos', JSON.stringify(data) );

  alert('Usted ha agregado un nuevo deporte');
}


