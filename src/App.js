import React,{useEffect,useState} from 'react'
import{ Route,Routes,Navigate} from 'react-router-dom'
import Main from './components/Main'
import Signup from './components/Signup'
import Login from './components/Login'

// function App() {
//   const [backendData,setBackendData]=useState([{}])
//   useEffect(()=>{
//     fetch("/api").then(response=>response.json()).then(
      
//       data=> {setBackendData(data)}
//     )
//   },[])
//   return (
//     <div>
//      {(typeof backendData.users === 'undefined') ? (
//        <p>Loading...</p>
//      ) : (
//       //  backendData.users.map((user,i)=>{
//       //    (<p key={i}> {user}</p>)
//       backendData.users.map((user,i)=>(
//         <p key={i}>{user}</p>
//       ))
       
//      ) }
//     </div>
//   )
// }

function App(){
  const user =localStorage.getItem("token")
  return(
    <Routes>
     { user && <Route path='/' exact element={<Main/>}/>}
     <Route path='/signup'exact element={<Signup/>}/>
     <Route path='/login'exact element={<Login/>}/>
     <Route path='/' exact element={<Navigate replace to='/login'/>}/>
    </Routes>
  )
}
export default App