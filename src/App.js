import { Routes, Route } from 'react-router-dom'
import ZeusThings from './pages/ZeusThings/ZeusThings'
import StyledThings from './pages/StyledThings/StyledThings'
import SillyThings from './pages/SillyThings/SIllyThings'
import Landing from './pages/Landing/Landing'

const App = () => {
  const zeusThings = [
    {
      name: 'cain',
      image:
        'https://files.slack.com/files-pri/T0351JZQ0-F046ZKAENBH/20221017_130111.jpg',
      attributes: [
        'rotund',
        'mad',
        'loud',
        'vocal'
      ],
    },
    {
      name: 'Rolls Royce Phantom',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.5bgg9ybGt7dEa1T6J2Om0AHaE7%26pid%3DApi&f=1&ipt=566c4748e713b1d8be72970255119c4b5c31540beded984a15728271e73a9181&ipo=images',
      attributes: [
        'has a neat ceiling',
        'fast',
        '0-60 in 5.1 secs',
        'can zoom',
      ],
    },
    {
      name: 'GTA',
      image: 'https://download.softwsp.com/sites/13/2019/05/gta-5-12.jpg',
      attributes: [
        'crime', 
        'car', 
        'video game',
      ],
    },
  ]

  const davidsThings = [
    {
      name: 'waffle',
      image:
        'https://images.unsplash.com/photo-1568051243851-f9b136146e97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
      attributes: ['tasty', 'fluffy', 'breakfast', 'yummy'],
    },
    {
      name: 'Liam',
      image: 'https://i.imgur.com/l2qX34X.jpg',
      attributes: ['fluffy', 'happy', 'sleepy', 'dumb'],
    },
    {
      name: 'Poptart®',
      image: 'https://i.imgur.com/q9zgcaP.jpg',
      attributes: ['pastry?', 'food?', 'edible?', 'Horrible when toasted!'],
    },
  ]

  const huntersThings = [
    {
      name: "energy drinks",
      image: "https://imgs.xkcd.com/comics/health_drink_2x.png",  
      attributes: ["efficient", "reusability", "not a taco", "beautiful"],
    },
  ]

  return (
    <Routes>
      {/* All the <Route> components should live here */}
      <Route path="/" element={<Landing />} />
      <Route
        path="/the-zeus-things"
        element={<ZeusThings things={zeusThings} />}
      />
      <Route
        path="/the-well-styled-things"
        element={<StyledThings things={davidsThings} />}
      />
      <Route
        path="/the-silly-things"
        element={<SillyThings things={huntersThings} />}
      />
    </Routes>
  )
}

export default App
