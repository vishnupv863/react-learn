import profilePic from './assets/card-logo.jpg'

function Card(){
    return (
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture" width={150} height={150}/>
            <h2 className='card-title'>Knovex</h2>
            <p className='card-text'>Hand made materials</p>
        </div>
    );
}

export default Card;