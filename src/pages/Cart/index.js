import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import { Container, ProducTable, Total } from './styles';

export default function Cart() {
    const dispatch = useDispatch();

    const total = useSelector(state => formatPrice(state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
    }, 0)));

    const cart = useSelector(state => state.cart.map(product => ({
        ...product,
        subTotal: formatPrice(product.price * product.amount)
    })))

    function handleDeleteProduct(id) {
        dispatch(CartActions.removeFromCart(id));
    }

    function incrementAmount(product) {
        dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
    }

    function decrementAmount(product) {
        dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
    }

    return (
        <Container>
            <ProducTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {cart.map(product => (
                        <tr key={product.id}>
                            <td>
                                <img src={product.image} alt={product.title} />
                            </td>
                            <td>
                                <strong>{product.title}</strong>
                                <span>{product.priceFormatted}</span>
                            </td>
                            <td>
                                <div>
                                    <button onClick={() => decrementAmount(product)}>
                                        <MdRemoveCircleOutline size={20} color='#7159c1' />
                                    </button>
                                    <input type='number' readOnly value={product.amount} />
                                    <button onClick={() => incrementAmount(product)}>
                                        <MdAddCircleOutline size={20} color='#7159c1' />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>{product.subTotal}</strong>
                            </td>
                            <td>
                                <button type='button' onClick={() => handleDeleteProduct(product.id)}>
                                    <MdDelete size={20} color='#7159c1' />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </ProducTable>

            <footer>
                <button type='button'>Finalizar pedido</button>

                <Total>
                    <span>TOTAL: </span>
                    <strong>{total}</strong>
                </Total>
            </footer>
        </Container>
    );
}
