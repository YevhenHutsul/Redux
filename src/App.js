import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

const App = () => {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash);
    const customers = useSelector(state => state.customer.customers);

    const addCash = (cash) => {
        dispatch({ type: 'ADD_CASH', payload: cash })
    }

    const getCash = (cash) => {
        dispatch({ type: 'GET_CASH', payload: cash })
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

    return (
        <>
            <div className='app'>
                <div className='count'>{cash}</div>
                <button onClick={() => addCash(Number(prompt()))}>Положить деньги</button>
                <button onClick={() => getCash(Number(prompt()))}>Снять деньги</button>
                <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
                <button onClick={() => getCash(prompt())}>Удалить клиента</button>
            </div>
            {customers.length > 0 ?
                <div className='customers'>
                    {customers.map(customer => 
                        <div onClick={() => removeCustomer(customer)} key={customer.id}>{customer.name}</div>)}
                </div>
                :
                <div className='ZeroClient'>
                    Клиентов нет
                </div>}
        </>
    );
}

export default App;
