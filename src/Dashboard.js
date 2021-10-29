import {useState,useEffect} from 'react'
import React from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import useAuth from './useAuth';
import {Container, Form} from 'react-bootstrap'
import ArtistsGrid from "./Components/ArtistsGrid";
import SearchBar from "./Components/SearchBar";
import AlbumsPage from "./Components/AlbumsPage";
import './Styles.css';

const spotifyApi = new SpotifyWebApi({
    clientId:"344e2726b64c4af1a80cf9657157f6d4"
})

export default function Dashboard ({code}){
    const accessToken = useAuth(code);
    const [search,setSearch]=useState("");
    const [artistId, setArtistId]=useState("");
    const [artistName,setArtistName]=useState("");
    const [albums, setAlbums] = useState([]);
    const [artists, setArtists] = useState([]);

    useEffect(()=>{
        if(!accessToken) return;
        spotifyApi.setAccessToken(accessToken)
    },[accessToken]) ;   //change whenever accessToken changes

//get artists
    useEffect(()=>{
        if(!search) return setArtists([])//empty the Artists' array
        if(!accessToken) return
        spotifyApi.searchArtists(search).then(res=>{
            setArtists(res.body.artists.items);
        {/*console.log(artists);*/}
        });
    },[search, accessToken]); //change whenever  search or access token changes

    //get albums of that artist
    useEffect(()=>{console.log(artistId);
        if(!accessToken) return
        spotifyApi.getArtistAlbums(artistId).then(res=>{
            console.log(res.body.items);
            setArtistName(res.body.items[0].artists[0].name);
            setAlbums(res.body.items);
        
        });
    },[artistId]); //change whenever  search or access token changes


    return(
           <Container  style={{height: "100vh" , width:"100%"}}> 
           {!artistId &&  <SearchBar search={search} setSearch={setSearch} />/*if artist id not set show searchbar*/} 
           {artistId &&  <AlbumsPage albums={albums} artistName={artistName} />/*if artist is set show albums page*/}
           {!artistId && <ArtistsGrid artists={artists} setArtistId={setArtistId}  />/*if artist not set show artist page*/}
          </Container>

    );
}

 