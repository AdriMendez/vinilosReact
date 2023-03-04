import React from 'react';

function ProductRow(props) {
  let stock;
  if (props.stock == 0) {
     stock = <td className='text-danger'>¡Sin Stock!</td>;
  } else {
     stock = <td>{props.stock}</td>
  }

  const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  let finalPrice = props.price - (props.price * props.sale) / 100;
  let montoVendido = props.price * props.order;
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>${toThousand(props.price)}</td>
      <td>{props.sale}%</td>
      <td>${toThousand(finalPrice)}</td>
      <td>
        <ul>
          {props.talle.map((talle, i) => (
            <li key={`talle ${i}`}>{talle.talles}</li>
          ))}
        </ul>
      </td>
            {stock}
      <td>
        {props.newCollection === 1 ? (
          <i className="fas fa-check"></i>
        ) : (
          <i className="fas fa-times"></i>
        )}
      </td>
      <td>{props.categoria}</td>
      <td>{props.order}</td>
      <td>${toThousand(montoVendido)}</td>
      <td>
        <a
          className="btn btn-success"
          target="_blank"
          rel="noopener noreferrer nofollow"
          href={`http://localhost:3001/productos/detalle/${props.id}`}
        >
          <i className="fas fa-eye"></i>
        </a>
        <a
          className="btn btn-warning mt-1"
          target="_blank"
          rel="noopener noreferrer nofollow"
          href={`http://localhost:3001/productos/editar/${props.id}`}
        >
          <i className="fas fa-edit"></i>
        </a>
        <a
          className="btn btn-danger mt-1"
          target="_blank"
          rel="noopener noreferrer nofollow"
          href={`http://localhost:3001/api/productos/delete/${props.id}`}
        >
          <i className="fas fa-trash"></i>
        </a>
      </td>
    </tr>
  );
}

export default ProductRow;
