import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tank from '../../assets/imagenes/Tank.png';
import './WaterTank.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";

export default function WaterTank() {

    const [data, setData] = useState();
 
    //consumo de servicio GET
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/capabilities`)
        .then(response => {
            setData(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <Fragment>
            <Link to={"/"} className="btn btn-danger">Volver</Link>
            {data ? (<div className="divTank">
                {/*unidades de llenado*/}
                <div className="capabilityTank">
                    <div>
                        50
                    </div>
                    <div>
                        25
                    </div>
                    <div>
                        0
                    </div>
                </div>
                <div className="divWater">
                    <div className="divWater2">
                        <div className="divWater3">
                            <div />
                        </div>
                    </div>
                    <img src={Tank}></img>
                </div>
                {/*tabla para manejo de cantidades*/}
                <table className="table align-middle tableWater">
                    <tr>
                        <th>
                            Capacidad total CM³:
                        </th>
                        <td>
                            <input className="form-control inputWater" type="number" placeholder={data.capability!= null ? (data.capability):"CM³"}></input>
                            <label>CM<sup>3</sup></label>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Agregar LTS:
                        </th>
                        <td>
                            <input placeholder="LTS" className="form-control inputWater" type="number"></input>
                            <label>LTS</label>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Agregar MM³:
                        </th>
                        <td>
                            <input placeholder="MM³" className="form-control inputWater" type="number"></input>
                            <label>MM<sup>3</sup></label>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Agregar CM³:
                        </th>
                        <td>
                            <input placeholder="CM³" className="form-control inputWater" type="number"></input>
                            <label>CM³</label>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Disponibilidad :
                        </th>
                        <td>
                            <input disabled placeholder="CM³" className="form-control inputWater" type="number"></input>
                            <label>CM³</label>
                        </td>
                    </tr>
                </table>
                <div>
                    <button></button>
                </div>
            </div>) : null}
        </Fragment>
    )
}