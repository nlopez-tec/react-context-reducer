import { useState } from 'react';
import { useAppContext } from '../../context/AppProvider';

const FormContent = () => {

  const { dispatch } = useAppContext();

  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { name, quantity, price };
    setName('');
    setQuantity(0);
    setPrice(0);
    dispatch({
      type: 'ADD_PRODUCT',
      payload: product
    });
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onQuantityChange = (e) => {
    setQuantity(e.target.valueAsNumber);
  };
  const onPriceChange = (e) => {
    setPrice(e.target.valueAsNumber);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={onNameChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Quantity</label>
        <input
          type="number"
          className="form-control"
          value={quantity}
          onChange={onQuantityChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input
          type="number"
          className="form-control"
          value={price}
          onChange={onPriceChange}
        />
      </div>
      <input type="submit" className="btn btn-primary" value="Add" />
    </form>
  );
}

export default function Form() {
  return (
    <FormContent/>
  );
}