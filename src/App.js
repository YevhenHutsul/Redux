import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchCustomers } from './asyncAction/customers';
import { addCashAction, getCashAction } from './store/cashReducer';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

const App = () => {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash);
    const customers = useSelector(state => state.customer.customers);

    const addCash = (cash) => {
        const a = addCashAction(cash);
        console.log(a)
        dispatch(addCashAction(cash))
    }

    const getCash = (cash) => {
        dispatch(getCashAction(cash))
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
                <button onClick={() => dispatch(fetchCustomers())}>Добавить клиентов с Базы</button>
                <button onClick={() => getCash(prompt())}>Удалить клиента</button>
            </div>
            {customers.length > 0 ?
                <div className='customers'>
                    {customers.map(customer => 
                        <div style={{display:'inline-block'}}onClick={() => removeCustomer(customer)} key={customer.id}>{customer.name}</div>)}
                </div>
                :
                <div className='ZeroClient'>
                    Клиентов нет
                </div>}
        </>
    );
}

export default App;
