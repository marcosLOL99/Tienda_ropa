import { usoDeFiltros } from "../Funciones/usoDeFiltros";
import "../estilos/Filtros.css";

export function Filtros() {
    const { filtro, setFiltro } = usoDeFiltros()

    const handleChangePrecio = (event) => {
        setFiltro((prevFiltro) => ({
            ...prevFiltro,
            precio: event.target.value,
        }))
    }

    const handleChangeCategoria = (event) => {
        setFiltro((prevFiltro) => ({
            ...prevFiltro,
            categoria: event.target.value
        }))
    }
    
    return (
        <div className="filtros">
            <div>
                <label htmlFor="precio">Precio:</label>
                <input type="range" id="precio" name="precio" min="0" max="100" value={filtro.precio} onChange={handleChangePrecio}/>
                <span>{filtro.precio}€</span>
            </div>
            <div>
                <label htmlFor="categoria">Categoria:</label>
                <select id="categoria" name="categoria" onChange={handleChangeCategoria}>
                    <option value="all">Todas</option>
                    <option value="camisetas">Camisetas</option>
                    <option value="pantalones">Pantalones</option>
                    <option value="sudaderas">Sudaderas</option>
                </select>
            </div>
        </div>
    );
}
