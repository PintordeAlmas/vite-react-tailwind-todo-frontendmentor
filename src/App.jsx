
import { useState } from "react";
import Header from "./componentes/Header";
import TodoComputed from "./componentes/TodoComputed";
import TodoCreate from "./componentes/TodoCreate";
import TodoFilter from "./componentes/TodoFilter";
import TodoList from "./componentes/TodoList";

const initialStateTodos = [
    { id: 1, title: "Complete online Javascript blueeweb Curse", completed: true },
    { id: 2, title: "Go to the Gym", completed: false },
    { id: 3, title: "10 minutes meditation", completed: false },
    { id: 4, title: "Pick up groceries", completed: false },
    { id: 5, title: "Complete todo app on Frontend Mentor", completed: false },
];

const App = () => {

    const [todos, setTodos] = useState(initialStateTodos);

    const createTodo = (title) =>{
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };

        setTodos([...todos, newTodo]);
    };

    const updateTodo = (id) => { 
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, completed : !todo.completed} : todo))
    };


    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

    const clearCompleted = () => { 
        setTodos(todos.filter((todo) => !todo.completed));
     };

     const  [filter, setFilter] = useState("all");

     const changeFilter = (filter) => setFilter(filter);

     const filterTodos = () => {
        switch(filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed" :
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
     };

    return (
            <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] 
                            bg-contain bg-no-repeat dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] transition-all duration-1000">
      
                <Header />

                <main className="container mx-auto mt-8 px-4">

                <TodoCreate createTodo={createTodo}/>                

                <TodoList 
                     todos={filterTodos()} 
                     updateTodo={updateTodo} 
                     removeTodo={removeTodo} />    
                    
                    <TodoComputed 
                       computedItemsLeft={computedItemsLeft} 
                       clearCompleted={clearCompleted}/>
                    
                      <TodoFilter 
                          changeFilter={changeFilter} 
                          filter={filter} />
                            
                </main>


                <footer className="mt-8 text-center dark:text-gray-400">
                        Drag and drop reorder list
                </footer>
            </div>
    );
};
export default App;
