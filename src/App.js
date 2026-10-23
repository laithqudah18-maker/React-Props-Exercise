import logo from './logo.svg';
import './App.css';

import Post from './Post.js';
import Header from './Header.js';
import SideMenu from './SideMenu.js';


function App() {
  return (
    <div className="App">
        <Header />
              {/*POSTS $ SIDE MENU CONTAINER*/}
              <div style={{display:"flex",justifyContent:"center"}}>
<div style={{display:"flex",width:"60%"}}>
                    {/*POST CONTINER*/}

        <div style={{width:"70%"}}>
          <Post postName="props"  postBody="Java-script"/>
          <Post postName="react" postBody='React'/>
          <Post />
          
        </div>
                          {/*==POST CONTINER==*/}
                          {/* SIDE MENU */}

        <div style={{width:"30$"}}>
       
                          {/* ==SIDE MENU== */}
<SideMenu />
 </div>
</div>
              {/*==POSTS $ SIDE MENU CONTAINER==*/}

    </div>
    </div>
  );
}

export default App;
