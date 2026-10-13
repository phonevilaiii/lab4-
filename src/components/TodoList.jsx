import { useState } from "react";
        // {id: 1, text: 'ໜໍ່ໄມ້', done: true},
        // {id: 2, text: 'ປາແດກ', done: false},
        // {id: 3, text: 'ເຫັດຫູໜູ', done: false},
        // {id: 4, text: 'ຊີ້ນໝູ', done: false},
    //
    function Todolist({searchText,filter}) {
    const [todo, setTodo] = useState([]);
    const [text, setText] = useState("");

    function addTodo(text) {
      if (! text.trim() ||  text.length <5) return;
        setTodo([...todo, {id: Date.now(), text: text, done: false}]);
    }

    function deleteTodo(id) {
        console.log("ID>>>", id)
        console.log("LIST>>>", todo)

        setTodo(todo.filter(item => item.id !== id));
    }

    function toggleTodo(id) { 
    setTodo(todo.map(item => item.id === id ? {...item, done: !item.done} : item));
    }

    function handleOnInputChange(textInput) {
        console.log("INPUT>>>", textInput)
        setText(textInput);
    }

    const doneCount = todo.filter(item => item.done).length;

    const filteredTodo = todo
    .filter(item => item.text.toLowerCase().includes(searchText.toLowerCase()))
    .filter(item => {
        if (filter === "active") return !item.done;
        if (filter === "done") return item.done;
        return true;
    });

    return (
        <div className="panel">
            <div className="panel-label">ຈຸດກວດ 2</div>
            <p>{searchText}</p>
            <p>{filter}</p>

            <div className="add-row">
                <input 
                    type="text"
                    value={text}
                    onChange={e => handleOnInputChange(e.target.value)}
                    placeholder="ເພີ່ມວຽກ..." 
                />

                <button className="btn add" onClick={() => addTodo(text)}>ເພີ່ມ</button>
            </div>

            <div style={{ height: "1rem"}}></div>

            <div className="todo-count">
                <b>{doneCount}</b> of {filteredTodo.length} done
            </div>

            
            {/* <div className="todo-count">
                <p>0 of 9 done</p>
            </div> */}

            {filteredTodo.length === 0 ? (
                <div className="empty">ຍັງບໍ່ມີວຽກ</div>
            ) : (
                <ul className="todos">
                    {filteredTodo.map(item => (
                        <li className={item.done ? "done" : ""}>
                            <span className="text" onClick={() => toggleTodo(item.id)}>
                                {item.text}
                            </span>
                            <button className="del" onClick={() => deleteTodo(item.id)}>
                                ລຶບ
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            

        </div>
    );
}
export default Todolist;