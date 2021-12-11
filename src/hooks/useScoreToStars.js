import React, { useEffect, Fragment , useState} from "react";

export const Stars = (score) => {
    const scoretostars =  !(typeof score === 'number' && score <= 0)?  Math.round((5/100)*score) : 0;
    const star = <span class="material-icons">star</span>;
    const halfStar = <span class="material-icons">star_half</span>;
    const outLineStar = <span class="material-icons">star_outline</span>;
    const [stars, setStars] = useState(); 
    let r = [];

    const AssignStars =(()=>{
        for (let i = 0; i < 5; i++) {
            switch (i) {
                case i < scoretostars:
                    // setStars(star);
                    r[i]= <span class="material-icons" key ={i} >star</span>;
                    break;
                case i === scoretostars-1:
                    r[i]= ((5/100)*score % 1 > 0.49)? <span class="material-icons" key={i}>star_half</span>: <span class="material-icons" key={i}>star_outline</span>;
                    break;
                default:
                    r[i] = <span key={i} class="material-icons">star_outline</span>; 
                    break;
            }
        }
        
        setStars(r);
    })


    return AssignStars();
}
