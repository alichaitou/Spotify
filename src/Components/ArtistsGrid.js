import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import '../Styles.css';
import ArtistCard from './ArtistCard'
export default function ArtistsGrid({artists, setArtistId}) {
    return (
    <div className="flex-grow-1 my-2" style={{  width: "100%" }}>
        <section className="CardsDisplay">
            {artists.map((artist) => {
                return <ArtistCard key={artist.id} artist={artist} setArtistId={setArtistId} />;
            })}
        </section>
    </div>
    )
        }