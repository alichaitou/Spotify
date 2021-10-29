import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import '../Styles.css';
import AlbumCard from './AlbumCard'
function AlbumsPage({albums,artistName}) {
    return (
     <div className="flex-grow-1 my-2" style={{width: "100%" }}>
         <h1> {artistName}</h1>
         <h4>Albums</h4>
        <section className="CardsDisplay">
            {albums.map((album) => { return <AlbumCard key={album.id} album={album} />;})}
        </section>
     </div>
    );
}

export default AlbumsPage