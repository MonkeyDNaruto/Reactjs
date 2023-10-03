import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Node from "./Node";
import notes from "../notes";

function App() {
    return (<div>
        <Header/>
        {notes.map((note) => {
       return (
        <Node
            key={note.id} 
            title={note.title}
            content={note.content}
        />
        )
        })}
 
        <Footer/>
    </div>);
};

export default App;