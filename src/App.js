import img from './Image/img.png'
import avt from './Image/avt.png'
import './App.css';
import Card from './components/index'

function App() {
  return (
    <Card 
      img={img}
      title="Supercharged !"
      desc="The new supercar is here, 543 cv and 140 000$. This is best racing GT about 7 years on..."
      avt={avt}
      name="Jean Jacques"
      timePost="20 mars 2029 - 6 min read"
    />
  );
}

export default App;
