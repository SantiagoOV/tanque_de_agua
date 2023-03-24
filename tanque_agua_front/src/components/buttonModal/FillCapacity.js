import React, { Fragment, useState} from "react";
import './FillCapacity.css';
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import axios from "axios";

export function FillCapacity() {

    const [showModal, setShowModal] = useState(false);
    const [capability, setCapability] = useState({});

    //consumo de servicio POST
        const dataTank={
            "capability": capability,
            "unidad_medida": "cm³"
        }
        function enviarDatos() {
        axios.post(`${process.env.REACT_APP_API_URL}/createCapabilities`, dataTank)
            .then((response => {
                response.status("success")
            }))
            .catch((error) => {
              console.log(error)      
            })
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
                <Link to={"/tank"} onClick={enviarDatos} className="btn btn-primary">Guardar</Link>
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