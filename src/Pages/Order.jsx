import { useContext, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { GET_ORDERS } from '../queries/orders';
import { createGraphQLClient } from '../apis/graphql-client';
import { AuthContext } from '../context/auth';
import OrderItem from '../Components/OrderItem';

const fetchOrders = async (client, limit, start) => {
  try {
    const data = await client.request(GET_ORDERS, { limit, start });
    return data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

const Orders = () => {
  const { token } = useContext(AuthContext);
  const client = useMemo(() => createGraphQLClient(token), [token]);

  const [page, setPage] = useState(1);
  const pageSize = 10;
  const start = (page - 1) * pageSize;

  const { data, error, isLoading } = useQuery(
    ['orders', token, page],
    () => fetchOrders(client, pageSize, start),
    {
      enabled: !!token,
      staleTime: 5000, // Increase staleTime to avoid frequent re-fetching
      cacheTime: 10000, // Increase cacheTime to keep data in cache longer
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading orders: {error.message}</div>;

  // Handle case when data or data.orders is not available
  if (!data || !data.orders || !data.orders.data) {
    return <div>No orders available</div>;
  }

  return (
    <div className="orders-container">
      <ul role="list" className="divide-y divide-gray-200">
        {data.orders.data.map((order, index) => (
          <OrderItem key={index} order={order} />
        ))}
      </ul>
      <div className="pagination-controls">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Orders;
