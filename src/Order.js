import './order.css'
import React, { useEffect, useState } from 'react';
import { OrderService } from './services/service.order';
import Table from 'react-bootstrap/Table';
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useHistory } from "react-router-dom"


function Order() {

  const [orders, setOrders] = useState();
  const [id, setId] = useState('');
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  async function handleShow() {
    setShow(true);

  }
  async function getOrders() {
    const result = await OrderService.getOrders();
    console.log(result);
    setOrders(result);
  }
  useEffect(() => {
    getOrders();
  }, []);

  async function deleteOrder() {
    const response = await axios.delete("http://localhost:3003/order/" + id);
    window.location.reload()
  }

  async function editOrder() {
    const response = await axios.delete("http://localhost:3003/order/" + id);
    window.location.reload()
  }


  console.log(orders)
  return (

    <div className='admin'>
      <h1>Hello Admin !</h1>

      <div className='container'>
        <h2>Order</h2>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>N° commande</th>
              <th>Total Product</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (

              <tr>
                <td>{order._id}</td>
                <td>{order.menu} {order.products}</td>
                <td>{order.price}</td>
                <td><button className='pen' variant="primary" onClick={() => setShow2(true) || setId(order._id)} ><FontAwesomeIcon icon={faPen} /></button><button className='trash' variant="primary" onClick={() => setShow(true) || setId(order._id)}><FontAwesomeIcon icon={faTrash} /></button></td>

              </tr>

            ))}
          </tbody>
        </Table>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>BURGER SHOP</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this order?</Modal.Body>
          <Modal.Footer>

            <Button variant="primary" onClick={deleteOrder} >
              Yes
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>BURGER SHOP</Modal.Title>
          </Modal.Header>
          <Modal.Body>    <Form>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Menu</Form.Label>
              <Form.Control type="text" placeholder="New menu" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Product</Form.Label>
              <Form.Control type="text" placeholder="New product" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" placeholder="New price" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Select aria-label="Default select example">
                <option>STATUS ORDER</option>
                <option value="PENNDING">PENNDING</option>
                <option value="FINISH">FINISH</option>
                <option value="DELIVERY">DELIVERY</option>
              </Form.Select>
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form></Modal.Body>
          <Modal.Footer>

            <Button variant="primary" onClick={editOrder} >
              OK
            </Button>
            <Button variant="primary" onClick={handleClose2} >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}


export default Order