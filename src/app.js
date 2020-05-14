import Header from "./components/Header"
import User from "./components/User"

import "./scss/app.scss"

const app = async () => {
  document.getElementById('header').innerHTML = Header();
  document.getElementById('user').innerHTML = await User();
}

// init app
app()