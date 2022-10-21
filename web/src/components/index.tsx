import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add-task":
      return {
        tasks: [...state.tasks, { name: action.payload, isCompleted: false }],
      };
    default:
      return state;
  }
};

export const AddEvent = () => {
  const [state, dispatch] = useReducer(reducer, { tasks: [] });
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "add-task", payload: inputValue });
          setInputValue("");
        }}
      >
        Adicionar
      </button>

      {state.tasks.map((task) => (
        <p>{task.name}</p>
      ))}
    </div>
  );
};
