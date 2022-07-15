import React,{useContext} from 'react';
import { useHistory } from 'react-router-dom'
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';
import { AuthContext, FirebaseContext } from '../store/Context';
function Home(props) {
  const {user} =useContext(AuthContext)
  const history = useHistory()
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Posts  />
      <Footer />
    </div>
  );
}
export default Home;
 
