import './LandingPage.scss';
import CountdownTimer from './CountdownTimer';
import ParticlesBackground from './ParticlesBackground';

const LandingPage = () => {


    return (
        <div className="container">
           <ParticlesBackground />

            <img src="../images/hillfair-logo-light.png" alt="hill'ffair logo" id='logo'/>
            <h1 className='coming-soon'>COMING SOON</h1>

            < CountdownTimer />
        </div>
    );
}

export default LandingPage;