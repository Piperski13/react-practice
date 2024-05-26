import profilePicture from './assets/react.svg';
function Card(){
  return(
    <div className="card">
      <img className='card-image' src={profilePicture} alt="profile picture" />
      <h2 className='card-title'>Pipe</h2>
      <p className='card-text'>React Practice</p>
    </div>
  );
}

export default Card

//"http://via.placeholder.com/150"