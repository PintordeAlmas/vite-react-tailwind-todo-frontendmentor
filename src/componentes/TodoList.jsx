import TodoItem from "./TodoItem";

const TodoList = ({todos, updateTodo, removeTodo }) => { 
   
   return(
    <div className="mt-8 rounded-t-md overflow-hidden transition-all duration-1000 bg-white [&>article]:p-4 
                    dark:bg-gray-800 ">
            {
               todos.map((todo) => (
                  <TodoItem
                      key={todo.id} 
                      todo={todo} 
                      updateTodo={updateTodo} 
                      removeTodo={removeTodo} 
                  />
               ))}           
    </div>
   );
};

export default TodoList;