import { useState, useEffect } from "react";

function Container() {
  const [data, setData] = useState([]);

  const getTodos = async () => {
    try {
      let data = await fetch(
        `https://jsonplaceholder.typicode.com/todos?&_page=1&_limit=10`
      );
      data = await data.json();
      //   console.log(data);
      setData(data);
    } catch (err) {}
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div  
      style={{
        width: "70%",
        margin: "auto",
      }}
    >
      <h1>Todos</h1>
      <button onClick={getTodos}>Fetch</button>

      <div
        style={{
          border: "1px solid red",
          padding: "30px",
          marginTop: "10px",
          backgroundColor: "tomato",
          borderRadius: "30px",
        }}
      >
        {data.map((todo) => (
          <div
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>{todo.id}</div>
            <div> {todo.title}</div>
            <div>
              {" "}
              {todo.completed ? "done" : "not Done"} <hr />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Container;
