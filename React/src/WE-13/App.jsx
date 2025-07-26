import React from "react"
import { Button } from "./Button"
import Content from "./Content"
import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "../Sidebar"
import './main.css'

const App = () => {

  const styles = {
    color: 'pink',
    backgroundColor: 'orange'
  }

  console.debug("debug"); // Likely hidden by default
  console.info("info");
  console.error("erxmror");
  console.warn("warn");
  console.log("log");
  return (
    // <div>

    //   <Header />
    //   <Sidebar />
    //   <Content />
    //   <Footer />
    // </div>
    // <div>

    //   <>
    //     <Header />

    // //   <Sidebar />
    // //   <Content />
    // //   <Footer />
    //   </>
    //   <React.Fragment>


    //     <Header />

    // //   <Sidebar />
    // //   <Content />
    // //   <Footer />
    //   </React.Fragment>
    // </div>
    <div id="main">
      {/* <h1 style={{ color: 'red', backgroundColor: 'yellow' }}>inline Styling!!!</h1>
      <h2 style={styles}>Internal Styling</h2> */}
      <Header />
      <Footer />
      <Sidebar />
      <Content />
      {/* <h2 style={{color:styles.color}}>Internal Styling</h2> */}
    </div>
  )
}

export default App