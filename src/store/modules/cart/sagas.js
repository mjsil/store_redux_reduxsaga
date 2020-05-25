import { call, select, put, all, takeLatest } from 'redux-saga/effects'; //metodos assícronos que retornam promisses
import { toast } from 'react-toastify';

import { addToCartSuccess, updateAmountSuccess } from './actions';

import api from '../../../services/api';
import history from '../../../services/history';
import { formatPrice } from '../../../util/format';

//acessar a API buscar informações detalhadas do produto e adicionar no carrinho
function* addToCart({ id }) {
    const productExists = yield select(state =>
        state.cart.find(p => p.id === id)
    )

    const stock = yield call(api.get, `/stock/${id}`);

    const stockAmount = stock.data.amount;
    const currenceAmount = productExists ? productExists.amount : 0;

    const amount = currenceAmount + 1;

    if (amount > stockAmount) {
        toast.error('Quantidade solicitada fora de estoque');

        return;
    }

    if (productExists) {
        yield put(updateAmountSuccess(id, amount));
    } else {
        const response = yield call(api.get, `/products/${id}`);

        const data = {
            ...response.data,
            amount,
            priceFormatted: formatPrice(response.data.price)
        }

        yield put(addToCartSuccess(data));

        history.push('/cart');
    }
}

function* updateAmount({ id, amount }) {
    if (amount <= 0) {
        toast.error('O pedido mínimo é de 01 unidade(s)');

        return;
    }

    const stock = yield call(api.get, `/stock/${id}`);
    const stockAmount = stock.data.amount;

    if (amount > stockAmount) {
        toast.error('Quantidade solicitada fora de estoque');

        return;
    }

    yield put(updateAmountSuccess(id, amount));
}

export default all([
    takeLatest('@cart/ADD_REQUEST', addToCart),
    takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount)
]);
