import { useState } from 'react';
<<<<<<< Updated upstream

//list of offices to be pulled from the databse.
const offices = [{"officeName":"Dublin"}, {"officeName":"Prague"},{"officeName":"Munich"}] //CHANGE ME!!!
=======
>>>>>>> Stashed changes
export const Slider = function(offices){
    //constants used by the slider
    const width = 100;
    const [offset, setOffset] = useState(0);
    const [currentOffice, setOffice] = useState("Dublin")
    const maxLength = width*offices.length - 250;

    return (
        //root division containing the entire slider component
        <div className="slider-div" style={{display:"flex", justifyContent:'center', marginTop:40}}>

            {/*div containig the left arrow*/}
            <div className="triangle-container" style={{width:30, marginRight:20}} onClick= {function(){if (offset < 0){setOffset(offset+80)}}}>
                <svg id="triangle" style={{transform:"rotate(-90deg)"}} viewBox="0 0 100 100">
                        <polygon points="50 15, 100 100, 0 100"/>
                </svg>
            </div>

            {/*static container for all the offices*/}
            <div className="slides-container" style={{overflow:"hidden"}}>
                {/*moving container for the offices*/}
              <div className="slides" style={{width: 3*width, display:"flex", marginLeft:20, marginRight:20, transition:"transform .35s ease-in-out", transform: "translateX("+offset+"px)"}}>   
                  {offices.map(office => (
<<<<<<< Updated upstream
                      //template div filled in by the offices array
                      <div className="office" key={office.officeName} style={{marginLeft:20, marginRight:20, width:width, height:30}} onClick={function(){
                          setOffice(office.officeName)
                          console.log(office.officeName)


                        //Function to select an office. The calendar must update to the chosen office (obtained with office.officeName)



                        }}> {office.officeName}
                      </div>
=======
                      <div className="office" key={office._id} style={{marginLeft:20, marginRight:20, width:width}}> {office.officeName}</div>
>>>>>>> Stashed changes
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