import nail from '../Images/nail.jpeg';
import food from '../Images/4food.jpeg';
import drawing from '../Images/drawing.jpeg';
import firework from '../Images/fireworks.jpeg';
import tool from '../Images/tools.jpeg';
import carpentary from '../Images/bg1.jpeg';
import {Link}  from 'react-router-dom'
import '../styles/profilePage.css'
import Navbar from '../Components/Navbar';
import { FaUserAlt } from 'react-icons/fa';

const Profile =()=>{
    return(
        <>
        {/* <div>

</div> */}
            <section className='profile-page'>
                <Navbar/>
                <div>

                    <h3>HandyFix</h3>
                </div>
                <div >

                </div>
                <div className='img-sec'>
                    <div className='title-div'>

                        <p>
                            Choose a service category 
                        </p>
                    </div>

                    <div className='img-div'>

                        <Link>
                        
                            <div >
                                <img src={nail} height={153} 
                                alt=""/>
                                <figcaption><Link>MANICURIST</Link></figcaption>
                            </div>
                        </Link>

                        <Link>
                        
                            <div>
                                <img src={tool} height={153} 
                                alt=""/>
                                <figcaption><Link>ELECTRICALS</Link></figcaption>
                            </div>
                        </Link>

                        <Link>
                        
                            <div>
                                <img src={carpentary} height={153} 
                                alt=""/>
                                <figcaption><Link>PLUMBING</Link></figcaption>
                            </div>
                        </Link>

                        <Link>
                        
                            <div>
                                <img src={firework} height={153} 
                                alt=""/>
                                <figcaption><Link>GENERATOR REPAIRS</Link></figcaption>
                            </div>
                        </Link>

                        <Link>
                        
                            <div>
                                <img src={drawing} height={153} 
                                alt=""/>
                                <figcaption><Link>AIR CONDITIONER REPAIRS</Link></figcaption>
                            </div>
                        </Link>

                        <Link>
                        
                            <div>
                                <img src={food} height={153} 
                                alt=""/>
                                <figcaption><Link>ELECTRICALS</Link></figcaption>
                            </div>
                        </Link>



                        <Link>
                        
                            <div>
                                <img src={drawing} height={153} 
                                alt=""/>
                                <figcaption><Link>AIR CONDITIONER REPAIRS</Link></figcaption>
                            </div>
                        </Link>

                        <Link>
                        
                            <div>
                                <img src={food} width= {193} height={153} 
                                alt=""/>
                                <figcaption><Link>ELECTRICALS</Link></figcaption>
                            </div>
                        </Link>

                    </div>


                </div>

                <div className='sec-div'>

                    <div className='ongoing' >
                        <p>Ongoing Task </p>

                    </div>



                    <div className='progress'>
                        <div className='user'>
                            <FaUserAlt/>
                        </div>
                        <div>

                            <p>Artisan: Smith John</p>
                            <p> Task Category : Carpentary</p>
                            <p>Progress</p>

                            <div className='second'>

                                <Link ><p >Make a complaint</p></Link>
                                <Link><p>View full details</p></Link>
                            </div>
                            
                        </div>


                    </div>
                </div>

            </section>

     
        </>
    )
}

export default Profile;