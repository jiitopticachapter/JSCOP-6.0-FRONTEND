import { useNavigate } from 'react-router-dom';
import './Event.css';
import Detail from './EventDetail.jsx';

const Event = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        {
          Detail.map((item,index)=>(
            <div key={index} onClick={()=>{navigate(`/${item.id}`)}}>
              <h1>{item.name}</h1>
              <p>{item.description}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Event
