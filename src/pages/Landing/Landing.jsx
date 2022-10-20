import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <>
      {/* All the <Link> components should live here */}
      <h1>All-The-Things</h1>
      <Link to="/the-zeus-things">Zeus's Epic Things</Link><br/>
      <Link to="/the-well-styled-things">David's Things</Link><br/>
      <Link to="/the-silly-things">Hunter's Things</Link><br/>
      <Link to="/the-dingus-things">Ryan's Things</Link>
      
      <Link to="/the-positive-things">Steph's Things</Link>
    </>
  )
}

export default Landing