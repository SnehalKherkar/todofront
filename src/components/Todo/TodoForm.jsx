// import React, { useState } from 'react';
// import "./todo.css"
// import { useDispatch } from 'react-redux';
// import { addTodo } from '../../actions/todoActions';
// import { useNavigate } from 'react-router-dom';

// const TodoForm = () => {
//     const [task,setTask] = useState("");
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     // const handleSubmit = (e)=>{
//     //     e.preventDefault();
//     //     dispatch(addTodo({task}))
//     //     // navigate("/todos")
//     //     setTask("")
//     //     console.log(task)
//     // }

//     // TodoForm.jsx

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   const newTodo = {
//       title: todoTitle,
//       description: todoDescription,
//   };

//   try {
//       const token = localStorage.getItem("token"); // Assuming you store the token in localStorage

//       // Make sure to include the token in the headers
//       const response = await axios.post(
//           "http://localhost:9999/todos/addtodo",
//           newTodo,
//           {
//               headers: {
//                   Authorization: `Bearer ${token}`,
//                   "Content-Type": "application/json",
//               },
//           }
//       );

//       // Handle the response as needed
//       console.log("Add Todo Response:", response.data);

//       // Reset form fields after successful submission
//       setTodoTitle("");
//       setTodoDescription("");
//   } catch (error) {
//       console.error("Add Todo Error:", error);
//   }
// };


//   return (
//     <div>
//         <form onSubmit={handleSubmit}>
//             <h3>Add-Todo</h3>
//             <input type="text" placeholder='Add your task' value={task} onChange={(e)=>setTask(e.target.value)} />
//             <button type='submit'>Submit</button>
//         </form>
      
//     </div>
//   )
// }

// export default TodoForm







import React, { useState } from 'react';
import axios from 'axios';  // Import axios
import "./todo.css"
import { useDispatch } from 'react-redux';
import { addTodo } from '../../actions/todoActions';
import { useNavigate } from 'react-router-dom';

const TodoForm = () => {
    const [todoTitle, setTodoTitle] = useState("");  // Add state for todoTitle
    const [todoDescription, setTodoDescription] = useState("");  // Add state for todoDescription
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Updated handleSubmit function
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newTodo = {
            title: todoTitle,
            description: todoDescription,
        };

        try {
            const token = localStorage.getItem("token"); // Assuming you store the token in localStorage

            // Make sure to include the token in the headers
            const response = await axios.post(
                "http://localhost:9999/todos/addtodo",
                newTodo,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            // Handle the response as needed
            console.log("Add Todo Response:", response.data);

            // Reset form fields after successful submission
            setTodoTitle("");
            setTodoDescription("");
        } catch (error) {
            console.error("Add Todo Error:", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Add-Todo</h3>
                <input type="text" placeholder='Add your task' value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} />
                {/* Add input field for description */}
                <input type="text" placeholder='Add description' value={todoDescription} onChange={(e) => setTodoDescription(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default TodoForm;
