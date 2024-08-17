import Countdown, { CountdownRendererFn } from 'react-countdown';
import { Typewriter } from 'react-simple-typewriter'
import './App.css';

const words = [
  "tenho saudades",
  "volta rapido",
  "cheiras mal",
  "és linda",
  "tens uns olhos estupidamente bonitos",
  "ficava o dia todo a olhar para ti",
  "quando chegares quero beijinhos",
  "já n gostas de mim",
  "não me ligas nenhuma",
  "não me respondes",
  "não me ligas",
  "Olá...",
  "HEHEHE estas aqui!!",
  "gosto mais de ti do que de nestum"
]

  const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

function App() {
  const targetDate = new Date('2024-08-22T18:30:00');

  const renderer: CountdownRendererFn = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <div style={{ fontSize: '2em' }}>Done</div>;
    } else {
      return (
        <div style={{ fontSize: '2em' }}>
          <span style={{fontWeight:'bold', color: 'lightgreen'}}>{days}</span> <span>dias</span> {' '} 
          <span style={{fontWeight:'bold'}}>{hours}</span> <span>horas</span> {' '} 
          <span style={{fontWeight:'bold'}}>{minutes}</span> <span>minutos</span> {' '} 
          <span style={{fontWeight:'bold', color: 'lightCoral'}}>{seconds}</span> <span>segundos</span> 
        </div>
      );
    }
  };

  return (
    <div style={{marginBottom:'100px'}}>
      <h1 style={{marginBottom:'100px', marginTop: 0}}>
        O <span style={{color:'pink'}}>Flamingo🦩</span> volta para a <span style={{color:'lightBlue'}}>Dory🐠</span> em:
      </h1>
      <Countdown date={targetDate} renderer={renderer} />
      <p style={{
        position: 'absolute',
        bottom: 10,
        left: 20,
        color: 'lightgray',
        fontSize: '0.8em',
        marginTop: '500px',
      }}>
        <Typewriter words={shuffleArray(words)} 
            cursor
            loop 
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
      </p>
    </div>
  );
}

export default App;
