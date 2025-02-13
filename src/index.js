import React from "react"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"))

function Greeting() {
    const married = false

    if (married){
        return <h1>estoy casado</h1>
    } else{
        return <h1>no estoy casado</h1>
    }

    
}
//self closing tags 
root.render(<div>
    <Greeting />
</div>)