import Student from './Student/Student'

function App() {
  return (
    <>
      <Student name='vishnu' age={30} isStudent={true}/>
      <Student name='neena' age={30} isStudent={false}/>
      <Student name='gokul' age={30} isStudent={true}/>
      <Student name='shaji' age={30} isStudent={false}/>
    </>
  );
}

export default App;
