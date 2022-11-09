
function Movie(props){
    return(
        <div className="lol">
            {props.items &&
            
            props.items.map(function(movie,index){
                return(
                    <div className='solo' key={index}>
                        <img className="image-container " src={movie.Poster} alt="movie"></img>
                        <div className="title"><h2>  {movie.Title}</h2></div>
                    </div>
                )
            })
            
            }
        </div>
    )
}
export default Movie