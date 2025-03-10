import { useCart } from "@/context/cartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, getTotalQuantity } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          cart.map((item) => (
            <li key={item.id}>
              <div>
                <h4>{item.title}</h4>
                <p>
                  ${item.price} x{" "}
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value, 10))
                    }
                    min="1"
                    style={{ width: "50px", marginRight: "10px" }}
                  />
                  = ${item.price * (item.quantity ?? 1)}
                </p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </li>
          ))
        )}
      </ul>
      <h3>Total: ${getTotalPrice()}</h3>
      <h3>Total Quantity: {getTotalQuantity()}</h3>
    </div>
  );
};

export default Cart;
