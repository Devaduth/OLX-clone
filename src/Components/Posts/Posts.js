import React, { useEffect, useContext, useState } from 'react';

import Heart from '../../assets/Heart';
import { FirebaseContext } from '../../store/Context';
import './Post.css';
import {useHistory} from 'react-router-dom'
import { PostContext } from '../../store/PostContext';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';

function Posts(props) {
  //console.log(props.term);
  const history = useHistory()
  const [products, setProducts] = useState([])
  const { firebase } = useContext(FirebaseContext)
  const { setPostDetails } = useContext(PostContext)

  useEffect(() => {
    firebase.firestore().collection('products').get().then((snapshot) => {
      const allPost = snapshot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id
        }
      })
      //console.log(allPost);
      setProducts(allPost)
    })
  },[])

  return (
    <div>
    
      <div className="postParentDiv">
      <div className="recommendations">
        <div className="heading">
          <span>All ads</span>
        </div>
        <div className="cards">
        </div>  
      </div>
      {
          products.map(product => {
            return (
              <div 
               className="card"
               onClick={()=>{
                setPostDetails(product); history.push('/view');
               }}   >
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={product.url} alt="" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; {product.price}</p>
                  <span className="kilometer">{product.category}</span>
                  <p className="name"> {product.name}</p>
                </div>
                <div className="date">
                  <span>{product.createdAt}</span>
                </div>
              </div>
              )
            })
      }
    </div>
    </div>
  );
}

export default Posts;
