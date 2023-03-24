import React from "react";
import './App.css';
import { useEffect } from 'react';
import ChatGpt from  "./ChatGpt"
import Detailview from "./Detailview"
import Detail from "./Detail";
import {Routes,Route,Link, BrowserRouter} from "react-router-dom";

// import Kakao from "./kakao/Kakao";


// import Home from "./pages/Home";
// import About from "./pages/About";
// import Counter from "./pages/Counter";
// import Input from "./pages/Input";
// import Input2 from "./pages/Input2";
// import List from "./pages/List";
//<Link> a 태그 같은것 사용하려면 임포트 두개 해야함
function App() {  
  const new_script = src => { 
    return new Promise((resolve, reject) => { 
      const script = document.createElement('script'); 
      script.src = src; 
      script.addEventListener('load', () => { 
        resolve(); 
      }); 
      script.addEventListener('error', e => { 
        reject(e); 
      }); 
      document.head.appendChild(script); 
    }); 
  };
  
  useEffect(() => { 
    //카카오맵 스크립트 읽어오기
    const my_script = new_script('https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=b6d8597b532512782b06bacbe71ad02f');
    
    //스크립트 읽기 완료 후 카카오맵 설정
    my_script.then(() => { 
      console.log('script loaded!!!');  
      const kakao = window['kakao']; 
      kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const options = { 
          center: new kakao.maps.LatLng(37.62452719218404  ,127.66474549315299), //좌표설정
          level: 13

        };
        
        
        const map = new kakao.maps.Map(mapContainer, options); //맵생성
        //마커설정
        // const markerPosition = new kakao.maps.LatLng(37.56000302825312, 126.97540593203321); 
        // const marker = new kakao.maps.Marker({ 
        //   position: markerPosition
        // }); 
        // marker.setMap(map); 
      });   
    }); 
  }, []);



  return (

    <div className="App">
      <div className="mom">   
           <button className="sbtn" >start</button>
           <div className="Start">
      </div>

      </div>
      <div id="map" className="map"/>
      
      <ChatGpt />
      
      <Link to="/detail"><Detailview/></Link>



    </div>


  );
}


export default App;
