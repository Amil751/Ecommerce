import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { myDecAction, myIncAction } from "../../actions/addToCart.action";
export const CartItems = ({ name, img, price, item ,total}) => {
  const add = useSelector((state) => state.addtocart);
  const global=useSelector(state=>state.global)
  const [value, setValue] = useState(3);
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    const a = e.target.value;
    setValue(a);
    dispatch(myIncActionh());
    
  };
  // useEffect(()=>{
  //   totalHandler(total+item.count*item.price);
  // },[])
 const totalHandler=(data)=>{
   if(data>=1){
     return {type:'total',payload:-price}
   }
 }
  const myIncActionh = () => {
    const b = add.filter((element) => element.id !== item.id);
    const a = { ...item, count: parseInt(value) };
    b.push(a);
    return { type: "increase", payload: b };
  };
  return (
    <table className="table table-hover table-light">
      <tbody className="mb-5" >
        <tr className="mb-5">
          <td>Name:{name}</td>
          <td>price :{price}</td>
          <td>
            <img src={img} alt="product" width="100px" />
          </td>
          <th scope="row">
            {/* <input
              type=""
              min="1"
              max="10"
              value={item.count}
              onChange={changeHandler}
            /> */}
            <p>{item.count}</p>
          </th>
          <td>
            <button
              className="btn btn-outline-success"
              onClick={() => {
                dispatch(totalHandler(item.count))
                dispatch(myDecAction(add, item))}}
            >
              -
            </button>
            <button
              className="btn btn-outline-success"
              onClick={() => {
                dispatch({type:'total',payload:price})
                dispatch(myIncAction(add, item))}}
            >
              +
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
