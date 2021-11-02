import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import '../Styles.css';
function AlbumCard({album}) {

    return (
    <div className="Card" style={{align: 'left',height: '28rem'}} >
        <div>
        <div  className="Card-image">
          {album.images[0] ? <img src={album.images[0].url} alt={album.name} /> : <img src="https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255634-stock-illustration-avatar-icon-male-profile-gray.jpg" alt="unknown" />}
        </div>
        <div >
           <div className="CardInfo" >
              <h3>{album.name}</h3>
              <h4>{album.artists[0].name} </h4>
              <h6>{album.release_date} </h6>
              <h6>{album.total_tracks} Tracks </h6>
           </div>
          </div>
          </div>
          <button className="btn btn-success " style={{width:"100%",height:'50%'}} >Spotify</button>
      </div>
      
    );
}

export default AlbumCard