import './App.css';
import Confeti from './components/Confeti';


function App() {
  return (
    <div className='confeti-wrap' >
      <Confeti/>
         <div className='text-container'>
             <div className='weshee'>Happy Birthday, Yolaine!</div>
             <div className='message'>I wish you the best </div>
             <div className='whisher'>- Paul</div>
         </div>
    </div>
  );
}

export default App;
