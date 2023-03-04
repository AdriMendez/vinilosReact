import React, { Component } from 'react';
import ProductRow from './ProductRow';

class AllProducts extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cantidad: 0,
    };
  }
  componentDidMount() {
    fetch('http://localhost:3003/api/products')
      .then(res => res.json())
      .then(respuesta => {
        this.setState({
          products: respuesta.data,
          cantidad: respuesta.meta.cuantity,
        });
      });
  }
  render() {
    return (
      <div className="col-lg-10 mt-5 ">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Todos los productos | Total: {this.state.cantidad}
            </h5>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Nombre</th>
                    <th>Genero</th>
                    <th>Sello</th>
                    <th>Año</th>
                    <th>Precio</th>
                    <th>Artista</th>
                    <th>Imagen</th>
                    
                    
                  </tr>
                </thead>

                <tbody>
                  {this.state.products.map((product, i) => (
                    <ProductRow key={i} {...product} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AllProducts;
