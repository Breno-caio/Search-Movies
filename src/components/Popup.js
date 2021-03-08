import React from 'react'

function Popup({ selected, closePopup }) {
	
	return (

		<section className="popup">
			<div className="content">
				<div className="resume">
					<h2>{ selected.Title }</h2>				
					<p className="rating"> Rating: {selected.imdbRating} <span>({selected.Year})</span> </p>	

					<button className="close" onClick={closePopup}>Back</button>

					<p>{selected.Plot}</p>
					<p><span> Genre: </span>{selected.Genre}</p>
					<p><span> Cast: </span>{selected.Actors}</p>
					<p><span>Director: </span> {selected.Director}</p>					
				</div>			
				<div className="plot">
					<img src={selected.Poster} alt="Poster" />					
				</div>
				 
			</div>
		</section>
	)
}

export default Popup