import {Component} from 'react'
import  'bootstrap/dist/css/bootstrap.min.css'
import moment from "moment"



export default function Days() {


let value = moment()
let startDay = value.clone().startOf("month").startOf('week')
let endDay = value.clone().endOf("month").endOf('week')
let calendar =[]
let day = startDay.clone().subtract(1,"day")

while(day.isBefore(endDay,"day") ){

calendar.push(day.add(1,"day").clone().date()) 

}
return<div>
 <div className="row">
{calendar.map((a,indice)=>{
return (

indice % 7 !==0? <div className="col">{a}</div> : <div className="row"></div> 
          

 

)

}) }
</div> 


</div>
}

