import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactStars from "react-rating-stars-component";
import '../Styles.css';

function ArtistCard({artist , setArtistId}) {

    return (
      <div className="Card"  onClick={ ()=>
        setArtistId(artist.id)
        }>
        <div  className="Card-image">
        {artist.images[0] ? <img src={artist.images[0].url} alt={artist.name} /> : <img src="https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255634-stock-illustration-avatar-icon-male-profile-gray.jpg" alt="unknown" />}
        </div>
        <div >
          <div className="CardInfo" >
            <h3>{artist.name}</h3>
            <h6>{artist.followers.total} followers</h6>
            <ReactStars count={5} value={parseInt((artist.popularity / 20) | 0)} edit={false} size={24} activeColor="#ffd700"/>,
          </div>
        </div>
      </div>
      
    );
}

export default ArtistCard