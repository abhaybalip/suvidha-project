
const Fallback = () => {
    return (
        <div className="fb" style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
        }}>
            <img src={require('../Asset/Image/Loading.gif')} alt='Loading' style={{
                height: '10vw',
                width: '10vw',
            }}></img>
        </div>
    )
}
export default Fallback

