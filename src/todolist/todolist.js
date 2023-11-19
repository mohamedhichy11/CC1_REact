import { useState,useEffect } from "react";
import "./todolist.css";
import { useDarkMode } from '../contextDark/contextDark';
export default function Add_to_list() {
  const { isDark } = useDarkMode(); 

  useEffect(() => {
  
    document.body.style.backgroundColor = isDark ? "#000" : "#fff";
    document.body.style.color = isDark ? "#fff" : "#000";

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, [isDark]);

  const [mytask, setmytask] = useState("");
  const [myid, Setid] = useState(0);
  const [mylist, Setmylist] = useState([]);
  const [editingTask, setEditingTask] = useState(null); 
  const [newTaskText, setNewTaskText] = useState(""); 

  const onChangelist = () => {
    let task = document.getElementById("inputTask").value;
    setmytask(task);
  }

  const addTask = () => {
    Setid((prv) => prv + 1);
    let datatask = {
      nametask: mytask,
      id: myid,
    };
    Setmylist([...mylist, datatask]);
  }

  const editTask = (taskId) => {
    setEditingTask(taskId);
    setNewTaskText("");
  }

  const saveEditedTask = () => {
    const updatedList = mylist.map((task) => {
      if (task.id === editingTask) {
        return { ...task, nametask: newTaskText };
      }
      return task;
    });
    Setmylist(updatedList);
    setEditingTask(null);
    setNewTaskText("");
  }

  const remplir_list = () => {
    return mylist.map((tas) => {
      return (
        <div className="todolist_cadre" key={tas.id}>
          {editingTask === tas.id ? (
            <div>
              <input maxLength="20"
                type="text"
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
                className="new_taskk_todolist"
              />
              <button onClick={saveEditedTask} className="btn_save_todolist"><i class="fa-solid fa-floppy-disk"></i></button>
            </div>
          ) : (
            <div className="cadre_task_todolist" onClick={finish_task} title="click if you have completed this task">
              <i class="fa-solid fa-check" id="checkbtn_todolist"></i> {tas.nametask}
            </div>
          )}
          <button className="btn_Remove_todolist" onClick={() => remove_task(tas.id)}>
            <i id="delete" class="fa-solid fa-trash-can"></i>
          </button>
          <button onClick={() => editTask(tas.id)} className="btn_modify_todolist" ><i class="fa-solid fa-pen-to-square"></i></button>
        </div>
      );
    });
  }

  const remove_task = (idd) => {
    const new_list = mylist.filter((element) => element.id !== idd);
    Setmylist(new_list);
  }

  const finish_task = (e) => {
    const cadreTask = e.target;
    const checkk = cadreTask.querySelector("#checkbtn_todolist");
  
  
  
    const isBlack =   cadreTask.style.backgroundColor === "rgb(52, 52, 52)"; 
    const isGray = cadreTask.style.color === "grey"; 
    
  
    cadreTask.style.backgroundColor = isBlack ? "#4d4d4d" : "rgb(52, 52, 52)";
    cadreTask.style.color = isGray ? "rgb(28, 187, 134)" : "grey";
  
  
    checkk.style.display = isBlack ? "none" : "block";
  };
  return (
    <div className="containertodolist">
      <div className="todolist_titre">
        <i id="logo_list_todolist" className="fa-solid fa-list-ul"></i>TODO LIST
      </div>
      <div className="input_and_add">
        <input className="inputtodolist" type="text" onChange={onChangelist} id="inputTask" placeholder="Add your Task ..." maxLength="20" />
        <button className="btnAddtodolist" onClick={addTask}>
          ADD
        </button>
      </div>
      <div>{remplir_list()}</div>
    </div>
  );
}
