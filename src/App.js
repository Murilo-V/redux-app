
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeUsersName } from './redux/actions/changeUsersName';
import { changeUsersAge } from './redux/actions/changeUsersAge';

function App() {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.name);

  return (
    <div className="App">
      <h1>Nome: {user.name}</h1>
      <h1>Idade: {user.age}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(changeUsersName(name));
          dispatch(changeUsersAge(age));
        }}
      >
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Mudar nome"
        ></input>
        <input
          onChange={(e) => setAge(e.target.value)}
          placeholder="Mudar idade"
        ></input>
        <input type="submit" value="Alterar detalhes" />
      </form>
    </div>
  );
}

export default App;
