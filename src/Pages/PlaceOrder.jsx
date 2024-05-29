import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Label } from '../Components/StyledComponents';
import { createOrder } from '../Services';

const PlaceOrder = () => {
  const [cafe, setCafe] = useState('');
  const [SKU, setSKU] = useState([]);
  const [deliveryInfo, setDeliveryInfo] = useState('');
  const [salesPerson, setSalesPerson] = useState('');
  const [status, setStatus] = useState('');

  const queryClient = useQueryClient();

  const mutation = useMutation(createOrder, {
    onSuccess: () => {
      queryClient.invalidateQueries('order');
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const createdOrder = await mutation.mutateAsync({
          cafe: 9,
          SKU: [
            { flavour: 'Cream_Chocolate', quantity: 1 },
            { flavour: 'Oil_Chocolate', quantity: 3 }
          ],
          delivery_info: '2024-06-01T12:00:00Z',
          sales_person: { name: 'John Doe', contact: '+1234567890' },
          status: 'Confirmed'
      });
      console.log('Order created successfully:', createdOrder);
      setCafe('');
      setSKU([]);
      setDeliveryInfo('');
      setSalesPerson('');
      setStatus('');
    } catch (error) {
      console.error('Error creating order:', error.message);
    }
  };

    // input: {
    //   cafe,
    //   SKU,
    //   delivery_info: deliveryInfo,
    //   sales_person: salesPerson,
    //   status,
    // }

  const handleAddSKU = () => {
    // Add empty SKU item to the list
    setSKU([...SKU, { flavour: '', quantity: 0 }]);
  };

  const handleDeleteSKU = (index) => {
    // Remove SKU item from the list
    const updatedSKU = [...SKU];
    updatedSKU.splice(index, 1);
    setSKU(updatedSKU);
  };

  const handleSKUChange = (index, field, value) => {
    // Update SKU item field
    const updatedSKU = [...SKU];
    updatedSKU[index][field] = value;
    setSKU(updatedSKU);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Label>Cafe:</Label>
        <input type="text" value={cafe} onChange={(e) => setCafe(e.target.value)} />
      </div>
      <div>
        <Label>Delivery Info:</Label>
        <input type="datetime-local" value={deliveryInfo} onChange={(e) => setDeliveryInfo(e.target.value)} />
      </div>
      <div>
        <Label>Sales Person:</Label>
        <input type="text" value={salesPerson} onChange={(e) => setSalesPerson(e.target.value)} />
      </div>
      <div>
        <Label>Status:</Label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Confirmed">Confirmed</option>
          <option value="Out For Delivery">Out For Delivery</option>
          <option value="Delivered">Delivered</option>
          <option value="Not Received/Available">Not Received/Available</option>
          <option value="Cancelled">Cancelled</option>
          <option value="Reschedule Delivery">Reschedule Delivery</option>
        </select>
      </div>
      <div>
        <h3>SKU:</h3>
        {SKU.map((item, index) => (
          <div key={index}>
            <input type="text" value={item.flavour} onChange={(e) => handleSKUChange(index, 'flavour', e.target.value)} />
            <input type="number" value={item.quantity} onChange={(e) => handleSKUChange(index, 'quantity', parseInt(e.target.value))} />
            <button type="button" onClick={() => handleDeleteSKU(index)}>Delete SKU</button>
          </div>
        ))}
        <button type="button" onClick={handleAddSKU}>Add SKU</button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PlaceOrder;
