// Ce composant est utilisé pour afficher la liste des tâches.
import styles from "./TaskList.module.css";
import { TaskItem } from "../taskItem/taskItem";

export const TaskList = ({
  tasksList,
  incompletedTasks,
  editTask,
  deleteTask,
}) => {

  const taskList = tasksList.map((task) => (
    <TaskItem 
      key={task.id} 
      task={task} 
      editTask={editTask} 
      deleteTask={deleteTask} 
    /> 
    )
  );

  if (taskList && taskList.length > 0){
    return (
      <div className="box">
        <h2 className={styles.title}>
          {incompletedTasks > 0 && (
          <>Il te reste encore <span className="important">{incompletedTasks}</span> taches à accomplir !</>
          )}

          {incompletedTasks ===0 &&(
            <>Tu as accompli toutes tes taches !</>
          )}
        </h2>

        {tasksList && tasksList.length > 0 && (
          <ul className={styles.container}>{taskList}</ul>  
        )}
      </div>
    );
  }
  return (
    <div className="box">
      <h2 className={styles.emptyState}>
        Tu n'as pas de tache.
      </h2>
    </div>
  );
};
