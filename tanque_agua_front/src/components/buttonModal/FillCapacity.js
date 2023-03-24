import React, { Fragment, useState} from "react";
import './FillCapacity.css';
import {
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, Router } from "react-router-dom";

export function FillCapacity() {

    const [showModal, setShowModal] = useState(false);
    const [capability, setCapability] = useState({});

    const capabilityTank = async (event) => {
        const dataTank={
            "capability": capability,
            "unidad_medida": "cm³"
        }
        const data = await fetch(`${process.env.REACT_APP_API_URL}/createCapabilities`,{
            method:"POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataTank)
        });
    }
    const handleInputChange = (event) => {
        setCapability(event.target.value);
    };    
 

    const modal = () => {
        return(
            <Modal className="modal-dialog modal-dialog-centered" isOpen={showModal}>
            <ModalHeader>Digite capacidad en cm<sup>3</sup> del tanque</ModalHeader>
            <ModalBody>
                <input className="inputCantTank" id="inputCantTank" placeholder=" ej: 300" onChange={handleInputChange} />
            </ModalBody>
            <ModalFooter>
                <Button className="btn btn-danger" onClick={() => setShowModal(false)}>Cancelar</Button>
                
                <Link className="btn btn-primary">Guardar</Link>
                <Link to={"/tank"} onClick={capabilityTank} className="btn btn-primary">Guardar</Link>
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