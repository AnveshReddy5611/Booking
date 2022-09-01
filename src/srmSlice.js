import { createSlice } from "@reduxjs/toolkit";

export const srmSlice=createSlice({
        
    name:'srm',
    initialState:{
        count:0,
        Data:JSON.parse(localStorage.getItem("Data1"))? JSON.parse(localStorage.getItem("Data1")):[],
        name:'',
        temporary:[],
        AdminData: {firstname:"AnveshReddy",phone:"9912846805"},
        CreatedTime: JSON.parse(localStorage.getItem("CreatedTime"))? JSON.parse(localStorage.getItem("CreatedTime")):[{time:"9:15"},{time:"10:15"},{time:"11:15"},{time:"12:15"}],
        Booked:JSON.parse(localStorage.getItem("booked"))? JSON.parse(localStorage.getItem("booked")):[{time:"8:15",name:""}]
    },
    
    reducers:{
        
        getdata:(state,action)=>{           
            state.Data.push(action.payload)
            localStorage.setItem("Data1",JSON.stringify(state.Data))
          
        },
        sendtime:(state,action)=>{
            state.CreatedTime.push(action.payload)
            localStorage.setItem("CreatedTime",JSON.stringify(state.CreatedTime));
        },
        addandremove:(state,action)=>{
           console.log(action.payload,"I am action.payload")
           var dupe={time:action.payload[0].time,name:action.payload[1]}
           var timer=action.payload[0].time
            state.Booked.push(dupe)
           
            
          
            localStorage.setItem("booked",JSON.stringify(state.Booked));          
            state.CreatedTime= state.CreatedTime.filter((data)=>data.time!==timer)
            
            
            localStorage.setItem("CreatedTime",JSON.stringify(state.CreatedTime));
        },

        empty:(state)=>{
            const xyz=[]
            state.Booked=xyz
            localStorage.setItem("booked",JSON.stringify(state.Booked)); 

        },
        Remove:(state,action)=>{
            var removetime=action.payload.time
            state.Booked=state.Booked.filter((data)=>data.time!==removetime)
            localStorage.setItem("booked",JSON.stringify(state.Booked)); 
        },
        values:(state,action)=>{
            const currentuser=action.payload.firstname
            state.name=currentuser
        },
        Delete:(state,action)=>{
            state.CreatedTime= state.CreatedTime.filter((data)=>data.time!==action.payload.time)


                }
    }
})
export const {getdata,sendtime,addandremove,empty,Remove,values,Delete}=srmSlice.actions
export default srmSlice.reducer