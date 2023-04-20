import { useEffect, useState } from 'react';
import * as api from './api/api';

const Todos=()=>
{
     const[todo,settodo]=useState([]);
    const[todos,setTodos]=useState([]);
   
    useEffect(()=>{   
        const fetchdata=async()=>
        {
            const result=await api.readTodos();
            console.log(result.data.data);
            setTodos(result.data.data);
        } 
    fetchdata()
    },[]);

    const createTodo=async()=>
    {
        try{
        const data=await api.createTodo(todo);
        console.log(data.data);
        settodo([...todos,data]);

        }catch (error)
        {
            console.log(error);
        }
    }
    return(
        <div>

            <label>Title</label><input type="text" value={todo.title} onChange={e=>settodo({...todo,title:e.target.value})} /><br></br><br></br>
            <label>Details</label> <input type="text" value={todo.detail} onChange={e=>settodo({...todo,detail:e.target.value})}/><br></br><br></br>
            <label>Date</label><input type="date" value={todo.date} onChange={e=>settodo({...todo,date:e.target.value})}></input><br></br><br></br>
            <button onClick={createTodo}>submit</button>
            <div>
                {todos.map((todolist)=>
                    {
                     return( 
                        <div key={todolist.id}>
                             <h1> {todolist.attributes.Title}</h1> 
                               <h2>{todolist.attributes.date}</h2> 
                               <p>{todolist.attributes.Detail}</p> 

                               </div>

                     )
                    }
                )
                }
            </div>
           <div>
                <pre>{JSON.stringify(todo,null,"\t")}</pre>
           </div>
        </div>


    )
}


export default Todos;