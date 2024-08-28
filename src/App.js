import { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./compnants/MovieList";
import Header from "./compnants/Header";
import SearchBox from "./compnants/SearchBox";

function App() {
  const [mov, setMov] = useState([]);
  const [favourits, setFav] = useState([]);
  const [isSearch, setIsOn] = useState(false);
  const [searchV, setSearchV] = useState("Fast and");

console.log(favourits);


  const getMovies = async () => {
    const url = `http://www.omdbapi.com/?s=${searchV}&apikey=1406ffa`;
    const res = await fetch(url);
    const resJson = await res.json();

    if (resJson.Response != "False") {
      setMov(resJson.Search);
    }
  };
  useEffect(() => {
    getMovies();
  }, [searchV]);

  const saveToLocalStorge = (items) =>{
    localStorage.setItem('react-movieFavourites', JSON.stringify(items));
}
  useEffect(() => {
    const localFav = JSON.parse(localStorage.getItem("react-movieFavourites"));
   console.log(localFav);
   
    if (localFav) {
      setFav(localFav);

    }
    
  }, []);

  const addFavourites = (movies) => {
    const isAlreadyFavourite = favourits.some((ele) => ele.imdbID === movies.imdbID);

    if (!isAlreadyFavourite) {
      const newFav = [...favourits, movies];
      setFav(newFav);
      saveToLocalStorge(newFav);
    }
    
  };
if (favourits[0]==favourits[1]) {
  console.log("yes");
  
}
  const removeFavourites = (movies) => {
    
const newFav= favourits.filter((ele) =>ele.imdbID !== movies.imdbID
)
    setFav(newFav );
    saveToLocalStorge(newFav);
  };
 
  
  return (
    <div className="container-fluid  mov-app ">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Header title={"Movies"} />
        <SearchBox
          searchV={searchV}
          isSearch={isSearch}
          setIsOn={setIsOn}
          setSearchV={setSearchV}
        />
      </div>
      <div className="my-4">
        <MovieList
          mov={mov}
          handleFavouirtesClick={addFavourites}
          listHeading={"On Search"}
          text={"Add to favourits"}
          color={"red"}
        />
      </div>
      <div className="my-4">
        <MovieList
          mov={favourits}
          handleFavouirtesClick={removeFavourites}
          listHeading={"Favourites"}
          text={"Remove from favourits"}
          color={"white"}
        />
      </div>
    </div>
  );
}

export default App;
