import React, {
    Component
} from 'react';
import './App.css';
import Header from './components/Header';
import Lists from './components/Lists';
import AddList from './components/AddList';
import context from './context/context';

class App extends Component {

    constructor(props) {
        super(props);

        //State
        this.state = {
            lists: [{
                id: 1,
                title: 'Movies to watch',
                showTodos: false
            },
            {
                id: 2,
                title: 'Places to visit',
                showTodos: false
            }],

            todos: [{
                id: 1,
                listId: 1,
                title: 'Butter Fly Effect',
                completed: false,
                renderForm: false
            },
            {
                id: 2,
                listId: 1,
                title: 'Forest Gump',
                completed: false,
                renderForm: false
            },
            {
                id: 3,
                listId: 2,
                title: 'Bangalore',
                completed: false,
                renderForm: false
            },
            {
                id: 4,
                listId: 2,
                title: 'Mumbai',
                completed: false,
                renderForm: false
            }],
            addNewList: false,
            addNewTodo: false,
            input: ''
        }

        //Binding this
        this.toggleOnClick = this.toggleOnClick.bind(this);
    }

    toggleOnClick(id) {
        const lists = [...this.state.lists];
        const newLists = lists.map((list) => {
            if (list.id === id)
                list.showTodos = !list.showTodos;
            else
                list.showTodos = false;
            return list;
        });
        this.setState({ lists: newLists, addNewList: false, addNewTodo: false, input: '' });
    }

    toggleRenderForm = (todoId) => {
        const todos = [...this.state.todos];
        const newTodos = todos.map((todo) => {
            if (todo.id === todoId) {
                todo.renderForm = true;
            }
            return todo;
        });
        this.setState({ todos: newTodos });
    }

    editTodoItem = (e, todoId, title) => {
        e.preventDefault();
        const todos = [...this.state.todos];
        const newTodos = todos.map(todo => {
            if (todo.id === todoId) {
                todo.title = title;
                todo.renderForm = false;
            }
            return todo;
        });
        this.setState({ todos: newTodos });
    }

    deleteTodoItem = (todoId) => {
        const todos = [...this.state.todos];
        const newTodos = todos.filter(todo => todo.id !== todoId);
        this.setState({ todos: newTodos });
    }

    // Add new Item
    addListItem = (e, title) => {
        e.preventDefault();
        const lists = [...this.state.lists];
        const newList = {
            id: lists.length + 1,
            title: title,
            showTodos: false
        }
        lists.push(newList);
        this.setState({ lists: lists, addNewList: false, input: '' });
    }

    addTodoItem = (e, listId, title) => {
        e.preventDefault();
        const todos = [...this.state.todos];
        const newTodo = {
            id: todos.length + 1,
            listId: listId,
            title: title,
            completed: false,
            renderForm: false
        }
        todos.push(newTodo);
        this.setState({ todos: todos, addNewTodo: false, input: '' });
    }

    handleChange = e => {
        this.setState({ input: e.target.value });
    }

    addListClickHandler = () => {
        this.setState({ addNewList: true });
    }

    addTodoClickHandler = () => {
        this.setState({ addNewTodo: true });
    }

    render() {
        return (
            <div className="App" >
                <Header />
                <div className="container">
                    <context.Provider value={{
                        state: this.state,
                        toggleOnClick: this.toggleOnClick,
                        toggleRenderForm: this.toggleRenderForm,
                        editTodoItem: this.editTodoItem,
                        deleteTodoItem: this.deleteTodoItem,
                        addTodoItem: this.addTodoItem,
                        addListItem: this.addListItem,
                        handleChange: this.handleChange,
                        addListClickHandler: this.addListClickHandler,
                        addTodoClickHandler: this.addTodoClickHandler
                    }}>
                        <Lists />
                        <AddList />
                    </context.Provider>
                </div>
            </div>
        );
    }
}

export default App;