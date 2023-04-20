import axios from 'axios';
const url="http://localhost:1337/api/todos";
export const readTodos=()=>axios.get(url);
export const createTodo=(newtodo)=>axios.post(url,newtodo);
export const updatetodo=(id,updatetodos)=>axios.put(url,id,updatetodos);
export const deletetodo=(id)=>axios.delete(url,id);
