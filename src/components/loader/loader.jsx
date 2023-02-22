import React from "react";
import {useState} from "react";
import { css } from "@emotion/react";
import 'loaders.css'
import {PacmanLoader} from 'react-spinners'



const override  =css` {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  }`;


function Loader(){
    const [loading, setLoading] = useState(false);


return(
    <div className="sweet-loading">
        
       
<PacmanLoader color="#de7755"  Loading={loading} css={override} size={25} margin={2} />

    </div>
)

}

export default Loader