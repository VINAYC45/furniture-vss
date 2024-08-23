interface singledata {
  singlepData: [];
  image: string;
}
const Cart: React.FC<singledata> = ({ singlepData }) => {
  return <div>Cart{singlepData}</div>;
};

export default Cart;
