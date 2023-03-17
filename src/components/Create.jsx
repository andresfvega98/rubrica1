import React, { useState } from 'react'
import { Insert } from '../helpers/insert';
import { getCategorias } from '../helpers/getDatos';

export const Create = () => {
  const cat = getCategorias();
  //STATE INPUTS
  const [linkImagen, setLinkImagen] = useState('');
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [equipo, setEquipo] = useState('');
  const [url, setUrl] = useState('');
  const [categoria, setCategoria] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(categoria);
      if (categoria === "") {
        alert("Por favor selecciona una categoria :)");
      }else{
        Insert( { linkImagen, titulo, descripcion, equipo, url, categoria } );
        setLinkImagen('');
        setTitulo('');
        setDescripcion('');
        setEquipo('');
        setUrl('');
        setCategoria('');
      }
  };


  return (
    <div className="container mt-4 text-white bg-dark">
      <form onSubmit={ handleSubmit }>
      <div className="mb-3">
        <label htmlFor="linkImagen" className="form-label">URL de la imagen: </label>
        <input type="text" className="form-control text-white bg-dark" id="linkImagen" value={linkImagen} onChange={ (e) => { setLinkImagen( e.target.value ) } } required />
      </div>

      <div className="mb-3">
        <label htmlFor="titulo" className="form-label text-white bg-dark">Titulo: </label>
        <input type="text" minLength={3} maxLength={20} className="form-control text-white bg-dark" id="titulo" value={titulo} onChange={ (e) => { setTitulo( e.target.value ) } } required/>
      </div>
      
      <div className="form-floating">
        <textarea minLength={50} maxLength={200} className="form-control mb-3 text-white bg-dark" placeholder="Escribe aquí la descripción del deporte" id="descripcion" style={ { height: "100px" } } value={descripcion} onChange={ (e) => { setDescripcion( e.target.value ) } } required></textarea>
        <label htmlFor="descripcion">Descripcion</label>
      </div>

      <div className="mb-3">
        <label htmlFor="equipo" className="form-label">Equipo: </label>
        <input type="text" minLength={3} maxLength={15} className="form-control text-white bg-dark" id="equipo" value={equipo} onChange={ (e) => { setEquipo( e.target.value ) } } required/>
      </div>

      <div className="mb-3">
        <label htmlFor="url" className="form-label">URL: </label>
        <input type="text" minLength={10} maxLength={50} className="form-control text-white bg-dark" id="url" value={url} onChange={ (e) => { setUrl( e.target.value ) } } required/>
      </div>

      <select className="form-select text-white bg-dark" value={categoria} onChange={ (e) => { setCategoria( e.target.value ) } } >
        <option value="">Seleccionar categoria</option>
        {
          cat.map( (e, id) => <option key={id} value={e}>{e}</option>)
        }
      </select>

        <div className="container w-100 d-flex justify-content-end">
          <button type="submit" className="btn btn-secondary mt-4 mb-3">Registrar</button>
        </div>
      
  </form>
    </div>
  )
}
