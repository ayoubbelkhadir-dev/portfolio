import { BrowserRouter } from "react-router-dom";
import { About,Contact,Experience,Formation,Hero,Navbar,Tech,Works,StarsCanvas} from './components';
import heroBg from "./assets/herobg.png";
const  App= () => {

  return (
    <BrowserRouter>
     <div className="relative z-0 bg-[#6dd1ff]">
      <div className="bg-cover bg-no-repeat bg-center bg-fixed bg-top bg-primary "
      style={{ backgroundImage: `url(${heroBg})`}}
      > 
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Tech/>
      <Experience/>
      <Formation/>
      <Works/>
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
     </div>
    </BrowserRouter>
  )
}

export default App
