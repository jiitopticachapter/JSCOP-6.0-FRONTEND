import { useParams } from 'react-router-dom';
import Detail from './EventDetail';
import './EventDetailPage.css'
import photo from './Code-of-duty.jpeg'
import { BsTrophyFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
const EvetDetailPage = () => {

    const { id } = useParams();

    return (
        <div className='event-section'>
            <div className='container'>
                <div className='container-part-first'>
                    <div className='container-img'>
                        <img src={photo} alt="" />
                    </div>
                    <div className='container-buttons'>
                        <button className='container-button1'>Register</button>
                        <button className='container-button1'>Rules</button>
                    </div>
                </div>
                <div className='container-part-second'>
                    <div className='container-part-text1'>
                        <div className='container-part-secondicons'>
                            <BsTrophyFill />  50000
                        </div>
                        <div className='container-part-secondicons'>
                            <SlCalender />
                        </div>
                        <div className='container-part-secondicons'>
                            <FaLocationDot /> CL-01
                        </div>

                    </div>
                    <hr />
                    <div className='container-part-text2'>
                        <h1>DESCRIPTION</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam dolorum quae tenetur dolores perspiciatis eos tempora repellat? Recusandae eaque impedit totam, natus laborum, eligendi illum iusto sapiente facere atque est.Lorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectet.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quis minus ex animi, error exercitationem nobis eius fugiat explicabo vero, eligendi fugit. Ullam adipisci nam accusamus eius sapiente fuga natus.
                        </p>
                        <h1>
                            Team
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EvetDetailPage;