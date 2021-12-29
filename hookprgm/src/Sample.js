import {useContext} from 'react'
import MyContext from './MyContext'
function Sample(props)
{
  const ctx = useContext(MyContext)  
  return <div>
    <h2>Sample Component</h2>
    <b>{ctx.title} , {ctx.num}</b>
  </div>
}
 
export default Sample