import { useParams } from 'react-router-dom';
import Detail from './EventDetail';

const EvetDetailPage = ()=>{

    const { id } = useParams();

    return(
        <div>
            <h1>{Detail[id-1].name}</h1>
            <p>{Detail[id-1].description}</p>
        </div>
    )
}

export default EvetDetailPage;