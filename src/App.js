import { useState } from 'react';
import './App.css';
import {AiOutlineDelete} from 'react-icons/ai'
import {BsCheckLg} from 'react-icons/bs'



function App() {
  const [isCompleteScreen,setIsCompleteScreen] = useState(false);
  return (
    <div className="App">
      <h1>My Todos</h1>
      
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label htmlFor="">Title</label>
            <input type="text" name="" placeholder="What is the task title" id="" />
          </div>
          <div className="todo-input-item">
            <label htmlFor="">Description</label>
            <input type="text" name="" placeholder="What is the task description?" id="" />
            </div>
            <div className="todo-input-item">
            <button type="button" className='primaryBtn'>Add</button>
            </div>
            </div>

          <div className="btn-area">
            <button className={`secondaryBtn ${isCompleteScreen===false && 'active'}`}onClick={()=>setIsCompleteScreen(false)}>Todo</button>
            <button className={`secondaryBtn ${isCompleteScreen===true && 'active'}`}onClick={()=>setIsCompleteScreen(true)}>Completed</button>
          </div>

          <div className="todo-list">
            <div className='todo-list-item'>
              <div>
              <h3>Task 1</h3>
              <p>Description</p>
              </div>
              <div>
              <AiOutlineDelete className='icon'/>
              <BsCheckLg className='check-icon'/>
            </div>
            </div>  
            
          
        </div>
      </div>
    </div>
  );
}

export default App;
