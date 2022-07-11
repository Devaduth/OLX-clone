import React,{useContext,useState,useRef} from 'react';
import { useHistory } from 'react-router-dom'
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';
function Header(props) {


  //console.log(props.value.term);
  const history = useHistory()
  const {user} =useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  const [btn, setBtn] = useState('Sell')

  function changePathLogin(){
    history.push('/login')
  }

  function ChangePathSell(){
    history.push('/create')
  }



  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo ></OlxLogo>
        </div>

        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
              
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"  ></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
  </div>


        <div className="loginPage">
          {
          user ? <span className='user-btn'>{user.displayName}</span> : <span className='user-btn' onClick={changePathLogin}> Login </span> 
          }
          &nbsp; &nbsp; &nbsp; &nbsp;
          {user && <span 
          className='user-btn' 
          onClick={()=>{
            firebase.auth().signOut().then(()=>{
              history.push('/login')
              alert('logout successfull')
            })
          }}>Logout</span>}
        </div>  
          

        <div className="sellMenu">
          {user && <SellButton></SellButton>}
          <div className="sellMenuContent">
            {user && <SellButtonPlus></SellButtonPlus>}
         {user &&  <span  onClick={ChangePathSell} >{btn}</span>  }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
