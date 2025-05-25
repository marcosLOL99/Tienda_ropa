import { useEffect, useState } from 'react';
import '../estilos/PanelAdmin.css';

const API_URL = 'http://localhost:3001/productos';

const PanelAdmin = () => {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState({
    titulo: '',
    descripcion: '',
    precio: '',
    categoria: '',
    imagen: ''
  });
  const [editando, setEditando] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setProductos(data));
  }, []);

  const handleChange = e => {
    setNuevoProducto({ ...nuevoProducto, [e.target.name]: e.target.value });
  };

  const handleAdd = e => {
    e.preventDefault();
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...nuevoProducto, precio: parseFloat(nuevoProducto.precio) })
    })
      .then(res => res.json())
      .then(prod => setProductos([...productos, prod]));
    setNuevoProducto({ titulo: '', descripcion: '', precio: '', categoria: '', imagen: '' });
  };

  const handleEdit = producto => {
    setEditando(producto.id);
    setNuevoProducto(producto);
  };

  const handleUpdate = e => {
    e.preventDefault();
    fetch(`${API_URL}/${editando}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...nuevoProducto, precio: parseFloat(nuevoProducto.precio) })
    })
      .then(res => res.json())
      .then(prod => {
        setProductos(productos.map(p => (p.id === prod.id ? prod : p)));
        setEditando(null);
        setNuevoProducto({ titulo: '', descripcion: '', precio: '', categoria: '', imagen: '' });
      });
  };

  const handleDelete = id => {
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    })
      .then(() => setProductos(productos.filter(p => p.id !== id)));
  };

  return (
    <div className="panel-admin-container">
      <h1>Panel para el admin</h1>
      <form className='formulario-panel' onSubmit={editando ? handleUpdate : handleAdd}>
        <h2 className='titulo'>Añadir Producto</h2>
        <input name="titulo" placeholder="Título" value={nuevoProducto.titulo} onChange={handleChange} required />
        <input name="descripcion" placeholder="Descripción" value={nuevoProducto.descripcion} onChange={handleChange} required />
        <input name="precio" placeholder="Precio" type="number" value={nuevoProducto.precio} onChange={handleChange} required />
        <input name="categoria" placeholder="Categoría" value={nuevoProducto.categoria} onChange={handleChange} required />
        <input name="imagen" placeholder="URL Imagen" value={nuevoProducto.imagen} onChange={handleChange} required />
        <button type="submit">{editando ? 'Actualizar' : 'Añadir'}</button>
        {editando && <button type="button" onClick={() => { setEditando(null); setNuevoProducto({ titulo: '', descripcion: '', precio: '', categoria: '', imagen: '' }); }}>Cancelar</button>}
      </form>
      <h2 className='titulo'>Editar/Eliminar Producto</h2>
      <br />
      <ul className='lista-productos'>
        {productos.map(prod => (
          <li key={prod.id}>
            {prod.titulo} - {prod.precio}€
            <div>
              <button onClick={() => handleEdit(prod)}>Editar</button>
              <button onClick={() => handleDelete(prod.id)}>Eliminar</button>
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default PanelAdmin;