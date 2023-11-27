import './Splash.css';

const Splash = () => {

const testSplash = () => {
    console.log("test-splash");
}

testSplash();



    return (
        <div className='splash'>
            <div className='p-5'>
                <h1 className='display-3 mx-auto'>ClimateCoachGPT</h1>
                <p className='lead'>Climate Coach GPT is a tool designed to help you improve your climate awareness.</p>
                <img src="img1.png" alt="" className='spinner-grow splash-img' />
            </div>
        </div>
    );
}

export default Splash;