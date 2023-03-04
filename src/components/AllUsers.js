import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserRow from './UserRow';


import {useEffect,useState} from "react"
//import CardUser from "./CardUser";


function AllUsers(){
    const[users,setUsers] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3003/api/users")
        .then(res =>{ return res.json()})
		    .then(data =>{
          console.log(data.data.list)
          setUsers(data.data.list)
		    })
		    .catch(error => console.log(error))
        },[users])

    return(
        <React.Fragment>


            <div className="container mt-3">
              <div className="row">
                {
                  users.length > 0 && users.map((user,i)=>{
                    return<UserRow {...user} key ={i}/>
                })
                }
              </div>
            </div>
            
        </React.Fragment>
    )
    
}

export default AllUsers;


















  {/*
  constructor() {
    super();

    this.state = {
      userList: []
    }
  }

  componentDidMount() {

    fetch('http://localhost:3003/api/users')
      .then(respuesta => {
        return respuesta.json()
      })
      .then(user => {
        this.setState({ userList: user.data })
      })
      .catch(error => console.log(error))
  }


  render() {
    return (
      <React.Fragment>
        <div className="col-lg-6 mb-4" >
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h5 className="m-0 font-weight-bold text-gray-800 titulo-sidebar">
                Categorías de la Base de Datos
              </h5>
            </div>
            <div className="card-body">
              <div className="row">

                { this.state.userList.map( cat => 
                <UserRow key={cat.id} name={cat.name}/>
                  
                  )}


              </div>
            </div>
          </div>
        </div>

      


      </React.Fragment >
    )}}
export default AllUsers;





  constructor(props) {
    super(props);
    this.state = {
      stringUsers: [],
      cantidad: 0,
    };
  }

  apiCall(url, consecuencia) {
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(data => consecuencia(data))
      .catch(error => console.log(error));
  }

  componentDidMount() {
    console.log('Mounted');
    this.apiCall('http://localhost:3003/api/users/', this.mostrarUsuarios);
  }

  mostrarUsuarios = data => {
    this.setState({
      stringUsers: data.data,
      cantidad: data.count,
    });
  };

  componentDidUpdate() {
    console.log('Updated');
  }
  render() {
    console.log('Rendered');

    /*     let contenido;
    if (this.state.stringUsers === []) {
      contenido = <p>Cargando____...</p>;
    } else {
      contenido = (
        <tbody>
        <tr>

            {this.state.stringUsers.map((unUser, i) => (
              <td key={unUser + i}>
                {unUser.fullName} - {unUser.email} {' '}
              </td>
            ))}


        </tr>
        </tbody>
      );
    } */
{/*}
    return (
      <div className="col-lg-10 mt-5 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Todos los usuarios registrados | Total: {this.state.cantidad}
            </h5>
          </div>
          <div className="card-body">
            <div className="text-center"></div>
            <div>
              <div className="table-responsive">
                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellSpacing="0"
                >
                  <thead>
                    <th>id</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Contraseña</th>
                    <th>Confirmacion de Contraseña</th>
                    <th>Domicilio</th>
                    <th>Genero</th>
                    <th>Imagen</th>
                  </thead>
                  <tbody>
                    {this.state.stringUsers.map((unUser, i) => {
                      return <UserRow {...unUser} key={i} />;
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <Link to="#" className="btn btn-warning">
              Cantidad total de usuarios: {this.state.stringUsers.length}
            </Link>
            {/* <a target="_blank" rel="nofollow" href="/">Cantidad total de usuarios: {this.state.stringUsers.length}</a> */}
       //   </div>
        // </div>
      // </div>
    // ); 

                  


                  }
