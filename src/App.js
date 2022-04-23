import { useEffect,useState } from "react";
import Player from "./comoponents/Player";



 
function App() {

  const [songs] = useState([
    {
      title :"Kya mausam aaya h",
      artist:"Alka Yagnik",
      img_src:"./media/Kya-Mausum-Aaya-Hai-Anari-500-500.jpg",
      src:"./media/Kya Mausum Aaya Hai Anari 128 Kbps.mp3"
    },
    {
     title :"Ashqui Aa Gayi",
     artist:"Arijit Singh",
     img_src:"./media/aashiqui-aa-gayi-radhe-shyam-hindi-500-500.jpg",
     src:"./media/Aashiqui Aa Gayi Radhe Shyam Hindi 320 Kbps.mp3"
   },
   {
     title :"Aaye Ho mere Jindgi me ",
     artist:"Alka Yagnik",
     img_src:"./media/raja-hindustani-1996-500-500.jpg",
     src:"./media/Aaye Ho Meri Zindagi Mein Female Raja Hindustani 128 Kbps.mp3"
   },
   {
     title :"Pucho Zara Pucho",
     artist:"Alka Yagnik",
     img_src:"./media/raja-hindustani-1996-500-500.jpg",
     src:"./media/Pucho Zara Pucho Raja Hindustani 128 Kbps.mp3"
   },
   {
     title :"Tip Tip",
     artist:"Alka Yagnik",
     img_src:"./media/tip-tip-sooryavanshi-500-500.jpg",
     src:"./media/Tip Tip Sooryavanshi 128 Kbps.mp3"
   },
   {
     title :"Tu Mera Hogaya",
     artist:"Jubin Nautiyaal",
     img_src:"./media/Tu-Mera-Hogaya-Hai-Encore-Tadap-500-500.jpg",
     src:"./media/Tu Mera Hogaya Hai Encore Tadap 320 Kbps.mp3"
   },
   {
     title :"Titliyaan",
     artist:"Afsana Khan",
     img_src:"./media/Titliaan-Afsana-Khan-500-500.jpg",
     src:"./media/Titliaan Afsana Khan 128 Kbps.mp3"
   },
   {
     title :"Tere-Laare",
     artist:"Afsana Khan",
     img_src:"./media/Tere-Laare-Afsana-Khan-500-500.jpg",
     src:"./media/Tere Laare Afsana Khan 128 Kbps.mp3"
   },
   {
     title :"Dil Sada",
     artist:"Afsana Khan",
     img_src:"./media/Dil-Sada-Afsana-Khan-500-500.jpg",
     src:"./media/Dil Sada Afsana Khan 128 Kbps.mp3"
   },
   {
     title :"Kamaal Karte Ho",
     artist:"Afsana Khan",
     img_src:"./media/Kamaal-Karte-Ho-Afsana-Khan-500-500.jpg",
     src:"./media/Kamaal Karte Ho Afsana Khan 128 Kbps.mp3"
   },
   {
     title :"Aashiq Surrender Hua",
     artist:"Amaan Malik",
     img_src:"./media/Badri-Ki-Dulhania-(Title-Track)-Badrinath-Ki-Dulhania-500-500.jpg",
     src:"./media/Aashiq Surrender Hua Badrinath Ki Dulhania 128 Kbps.mp3"
   },
   {
     title :"Chaka Chak",
     artist:"Shrya Ghoshal",
     img_src:"./media/chaka-chak-atrangi-re-500-500.jpg",
     src:"./media/Chaka Chak Atrangi Re 128 Kbps.mp3"
   },
   {
     title :"Nashe Si Chadh Gayi",
     artist:"Shrya Ghoshal",
     img_src:"./media/Ude-Dil-Befikre-Benny-Dayal-500-500.jpg",
     src:"./media/Nashe Si Chadh Gayi Befikre 128 Kbps.mp3"
   },
   {
     title :"Banno Ki Aayegi Baraat",
     artist:"Aasha Bhosle",
     img_src:"./media/Banno-Ki-Aayegi-Baraat-Sad-Aaina-500-500.jpg",
     src:"./media/Banno Ki Aayegi Baraat Sad Aaina 128 Kbps.mp3"
   },
   {
     title :"Ude Dil Befikre",
     artist:"Benny Dayal",
     img_src:"./media/Ude-Dil-Befikre-Benny-Dayal-500-500.jpg",
     src:"./media/Ude Dil Befikre Benny Dayal 128 Kbps.mp3"
   },
   
   {
     title :"Pardei Pardesi",
     artist:"Alka Yagnik",
     img_src:"./media/raja-hindustani-1996-500-500.jpg",
     src:"./media/Pardesi Pardesi Kumar Sanu Alka Yagnik Raja Hindustani 128 Kbps.mp3"
   },
   {
     title :"Badri Ki Dulhania",
     artist:"Unkown",
     img_src:"./media/Badri-Ki-Dulhania-(Title-Track)-Badrinath-Ki-Dulhania-500-500.jpg",
     src:"./media/Badri Ki Dulhania (title Track) Badrinath Ki Dulhania 128 Kbps.mp3"
   }
   
  ])
 
 
 const [currentSongIndex, setcurrentSongIndex] = useState(0);
 const [nextSong, setnextSong] = useState(0);
 
 useEffect(() =>{
   setnextSong(()=>{
     if(currentSongIndex +1 > songs.length -1){
       return 0;
     }else{
       return currentSongIndex+1;
     }
   })

 },[currentSongIndex,songs.length])
 
 
  return (
    <div className="App">
     <Player
     currentSongIndex ={currentSongIndex}
     setcurrentSongIndex ={setcurrentSongIndex}
     nextSong ={nextSong}
     songs ={songs}


     />
    </div>
  );
}

export default App;
