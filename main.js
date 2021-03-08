import LeftSide from './components/LeftSide.js'
import RightSide from './components/RightSide.js'

const app = document.getElementById('app')

app.innerHTML += `

    ${LeftSide()}
    ${RightSide()}

`