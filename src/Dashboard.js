import {useState,useEffect} from 'react'
import React from 'react';
import Auth from './Auth';
import {Container} from 'react-bootstrap'
import ArtistsGrid from "./Components/ArtistsGrid";
import SearchBar from "./Components/SearchBar";
import AlbumsPage from "./Components/AlbumsPage";
import './Styles.css';
const request = require('request');


export default function Dashboard ({code}){
    const accessToken = Auth(code);
    const [search,setSearch]=useState("");
    const [artistId, setArtistId]=useState("");
    const [artistName,setArtistName]=useState("");
    const [albums, setAlbums] = useState([]);
    const [artists, setArtists] = useState([]);



//get artists
    useEffect(()=>{
        if(!search) return setArtists([])//empty the Artists' array
        if(!accessToken) return
        var header = {
            url: `https://api.spotify.com/v1/search?q=${search}&type=artist&limit=20`,
            headers: {
              Authorization: "Bearer " + accessToken,
            },
            json: true,
          };
          request.get(header, function (error, response, body) {
            setArtists(body.artists.items);
          });
    },[search, accessToken]); //change whenever  search or access token changes

    //get albums of that artist
     useEffect(() => {
    if (!accessToken) return;
    var header = {
      url: `https://api.spotify.com/v1/artists/${artistId}/albums?limit=20`,
      headers: {
        Authorization: "Bearer " + accessToken,
      },
      json: true,
    };
    request.get(header, function (error, response, body) {
      setAlbums(body.items);
      setArtistName(body.items[0].artists[0].name);
    });
     
  }, [artistId]);


    return(
           <Container  style={{height: "100vh" , width:"100%"}}> 
           {!artistId &&  <SearchBar search={search} setSearch={setSearch} />/*if artist id not set show searchbar*/} 
           {artistId &&  <AlbumsPage albums={albums} artistName={artistName} />/*if artist is set show albums page*/}
           {!artistId && <ArtistsGrid artists={artists} setArtistId={setArtistId}  />/*if artist not set show artist page*/}
          </Container>

    );
}

 