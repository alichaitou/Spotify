import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactStars from "react-rating-stars-component";
import '../Styles.css';
function AlbumCard({album}) {

    return (
      <div className="Card">
        <div  className="Card-image">
        {album.images[0] ? <img src={album.images[0].url} alt={album.name} /> : <img src="https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255634-stock-illustration-avatar-icon-male-profile-gray.jpg" alt="unknown" />}
        </div>
        <div >
          <div className="CardInfo" >
            <h5 style={{textalign: "left"}}>{album.name}</h5>
            <h6>{album.artists[0].name} </h6>
            <h6>{album.release_date} </h6>
            <h6>{album.total_tracks} Tracks </h6>
          </div>
          </div>
          <button className="btn btn-success " style={{width:"100%"}} >Spotify</button>
        
      </div>
      
    );
}

export default AlbumCard