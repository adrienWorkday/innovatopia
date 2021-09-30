import { useState } from 'react';
const offices = [{"location":"Dublin"}, {"location":"Prague"},{"location":"Munich"}]
export const Slider = function(offices){
    
    const width = 100;
    const [offset, setOffset] = useState(0);
    const maxLength = width*offices.length - 250;
    return (
        <div class="slider-div" style={{display:"flex"}}>
            <div className="triangle-container" style={{width:30, marginRight:20}} onClick= {function(){
              if (offset < 0){
                setOffset(offset+80);
              }
            }}>
                <svg id="triangle" style={{transform:"rotate(-90deg)"}}viewBox="0 0 100 100">
                        <polygon points="50 15, 100 100, 0 100"/>
                </svg>
            </div>
            <div className="slides-container" style={{overflow:"hidden"}}>
              <div className="slides" style={{width: 3*width, display:"flex", marginLeft:20, marginRight:20, transition:"transform .35s ease-in-out", transform: "translateX("+offset+"px)"}}>   
                  {offices.map(office => (
                      <div className="office" key={office.location} style={{marginLeft:20, marginRight:20, width:width}}> {office.location}</div>
                  ))}
              </div>    
            </div>
            <div className="triangle-container" style={{width:30, marginLeft:20}} onClick= {function(){
              if (offset > -(maxLength)){
                console.log(offset);
                setOffset(offset-80);
              }
            }}>
                <svg id="triangle" style={{transform:"rotate(90deg)"}} viewBox="0 0 100 100">
                        <polygon points="50 15, 100 100, 0 100"/>
                </svg>
            </div> 
        </div>
    )
}