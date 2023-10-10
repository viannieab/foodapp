import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import './App.css';
import Header from './components/Header';
import MenuContainer from './components/MenuContainer';
import { useEffect, useState } from 'react';
import BannerName from './components/BannerName';
import SubMenuContainer from './components/SubMenuContainer';
import MenuCard from './components/MenuCard';
import {MenuItems, Items} from './components/Data';
import ItemCard from './components/ItemCard';
import DebitCard from './components/DebitCard';
import CartItem from './components/CartItem';
import { useStateValue } from './components/StateProvider';

function App() {
//main dish state
  const [isMainData, setMainData] = useState(
    Items.filter(element => element.itemId === 'buger01')
  )
  const [{cart}, dispatch] = useStateValue()
  useEffect(()=>{
    const menuLi = document.querySelectorAll('#menu li')
      function setMenuActive(){
        menuLi.forEach(n=> n.classList.remove('active'))
        this.classList.add('active')
      }
      menuLi.forEach(n => n.addEventListener('click', setMenuActive))
    
      // MenuCard Active toggle
  const MenuCards = document.querySelector(".rowContainer").querySelectorAll(".rowMenuCard")
  function setMenuCardActive(){
    MenuCards.forEach(n=> n.classList.remove('active'))
        this.classList.add('active')
  }
  MenuCards.forEach((n) => n.addEventListener('click', setMenuCardActive));
  },[isMainData, cart])
  //set main dish items on filter
  const setData = (itemId) =>{
    setMainData(Items.filter(element => element.itemId === itemId))
  }
  return (
    <div className="App">
      {/* header Section */}
        <Header/> 
      {/* Main Section */}
        <main>
          <div className='mainContainer'>
            {/* Banner */}
            <div className='banner'>
              <BannerName name={"Viannie"} discount={"60"} link={"#"}/>
              <img src='/delivery.png' alt='' className='deliveryPic'/>
            </div>
            {/* dish container */}
              <div className='dishContainer'>
                <div className='menuCard'>
                  <SubMenuContainer name={"Menu Category"}/>
                </div>
                  <div className='rowContainer'>
                       {
                        MenuItems && MenuItems.map(data => (
                          <div key={data.id}
                            onClick={() => setData(data.itemId)}
                          >
                          <MenuCard imgSrc={data.imgSrc} name={data.name}
                          isActive = {data.id === 1 ? true : false}
                          />
                        </div>
                        ))
                       }                    
                  </div>
                    <div className='dishItemContainer'>
                      {
                        isMainData && isMainData.map(data =>(
                          <ItemCard key={data.id} itemId={data.id }
                          imgSrc={data.imgSrc} name={data.name} rating={data.ratings} price={data.price}/>
                        ))
                      }
                    </div>
              </div>
          </div>
          {/* right menu section */}
            <div className='rightMenu'>
              <div className='debitCardContainer'>
                <div className='debitCard'>
                  <DebitCard/>
                </div>
              </div>
              {
                !cart ? <div></div> :
                <div className='cartCheckOutContainer'>
                <SubMenuContainer name={'Cartitems'}/>
                    <div className='cartContainer'>
                        <div className='cartItems'>
                          {
                            cart && cart.map((data) =>{
                              <CartItem key={data.id}
                            itemId = {data.id}  
                            name = {data.name}
                            imgSrc = {data.imgSrc}
                            price = {data.price}
                          />  
                            })
                          }
                        </div>
                    </div>
                  <div className='totalSection'>
                    <h3>Total:</h3>
                    <p><span>$ </span>45.0</p>
                  </div>  
                  <button className='checkOut'>Check Out</button>
              </div>
              }
            </div>
        </main>
      {/* Bottom Menu */}
      <div className='bottomMenu'>
          <ul id='menu'>
            {/* prettier ignore */}
            <MenuContainer link={'#'} icon = {<HomeRounded/>} isHome/>
            {/* prettier ignore */}
            <MenuContainer link={'#'} icon = {<Chat/>}/>
            {/* prettier ignore */}
            <MenuContainer link={'#'} icon = {<AccountBalanceWalletRounded/>}/>
            {/* prettier ignore */}
            <MenuContainer link={'#'} icon = {<Favorite/>}/>
            {/* prettier ignore */}
            <MenuContainer link={'#'} icon = {<SummarizeRounded/>}/>
            {/* prettier ignore */}
            <MenuContainer link={'#'} icon = {<Settings/>}/>
              <div className='indicator'></div>
          </ul>
      </div>
    </div>
  );
}

export default App;
