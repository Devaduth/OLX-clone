import React,{useContext} from 'react';
import { useHistory } from 'react-router-dom'
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';
function Header() {
  const history = useHistory()
  const {user} =useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
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
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
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
          <hr />
        </div>  
          {user && <span className='user-btn' onClick={()=>{
            firebase.auth().signOut().then(()=>{
              history.push('/login')
              alert('logout successfull')
            })
          }}>Logout</span>}

        <div className="sellMenu">
          {user && <SellButton></SellButton>}
          <div className="sellMenuContent">
            {user && <SellButtonPlus></SellButtonPlus>}
         {user &&  <span className='user-btn' onClick={ChangePathSell} >SELL</span>  }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
