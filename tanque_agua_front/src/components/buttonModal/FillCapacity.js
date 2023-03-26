import React, { Fragment, useState} from "react";
import './FillCapacity.css';
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import {createBrowserHistory } from "history";

export function FillCapacity() {

    const [showModal, setShowModal] = useState(false);
    const [capability, setCapability] = useState({});


    const history = createBrowserHistory();

    //consumo de servicio POST
        const dataTank={
            "capability": capability,
            "unidad_medida": "cm³"
        }
        const firstHistorical = {
            unidad_medida: "cm³",
            llenado: 0,
            vaciado: 0,
            disponibilidad: capability,
            total_capacity: 1
        }
        function enviarDatos() {
        const request1 =  axios.post(`${process.env.REACT_APP_API_URL}/createCapabilities`, dataTank)
        const request2 = axios.post(`${process.env.REACT_APP_API_URL}/createHistorical`, firstHistorical)

        axios.all([request1, request2])
            .then(axios.spread((response1, response2) => {
                history.push("/tank")
                window.location.reload()
                response1.status("success")
                response2.status("sucess")
            }))
        }
    
    const handleInputChange = (event) => {
        setCapability(event.target.value);
    };    
 
    //modal de colocacion cantidad tanque inicial
    const modal = () => {
        return(
            <Modal className="modal-dialog modal-dialog-centered" isOpen={showModal}>
            <ModalHeader>Digite capacidad en cm<sup>3</sup> del tanque</ModalHeader>
            <ModalBody>
                <input className="inputCantTank" id="inputCantTank" placeholder=" ej: 300" onChange={handleInputChange} />
            </ModalBody>
            <ModalFooter>
                <Button className="btn btn-danger" onClick={() => setShowModal(false)}>Cancelar</Button>
                <Button onClick={enviarDatos} className="btn btn-primary">Guardar</Button>
            </ModalFooter>
        </Modal>
        )
    }

    return(     
        <Fragment>
            <div className="ButtonDiv">
                <div className="ButtonDiv2">
                    <button className="buttonModal" onClick={() => setShowModal(true)}>
                        eliga capacidad tanque en cm<sup>3</sup>
                    </button>
                    {modal()}
                </div>
            </div>
        </Fragment>
    )
}