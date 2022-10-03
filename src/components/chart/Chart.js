import React from "react";
import ChartBar from "./CharBar";
import "./Chart.css";
function Chart(props){

    const dataPointValues=props.dataPoints.map((element)=>element.value);
    const totalMaximum = Math.max(...dataPointValues);
        
 return(
    <div className="chart">
     {props.dataPoints.map((element)=>
     <ChartBar 
     key={element.label}
     value={element.value}
     maxValue={totalMaximum}
     label={element.label}
     />)}
    </div>
 );
}
export default Chart;