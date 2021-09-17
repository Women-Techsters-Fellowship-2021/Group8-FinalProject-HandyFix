import nail from '../Images/nail.jpeg';
import food from '../Images/4food.jpeg';
import drawing from '../Images/drawing.jpeg';
import firework from '../Images/fireworks.jpeg';
import tool from '../Images/tools.jpeg';
import carpentary from '../Images/bg1.jpeg';
import {Link}  from 'react-router-dom'
import '../styles/profilePage.css'
import Navbar from '../Components/Navbar';

const Profile =()=>{
    return(
        <>
        {/* <div>

            <Navbar/>
        </div> */}
            <section className='profile-page'>
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
                        <p>Artisan: Smith John</p>
                        <p> Task Category : Carpentary</p>
                        <p>Progress</p>
                        <Link className='second'><p id='log'>View full details</p></Link>
                        <Link className='second'><p id='log'>Make a complaint</p></Link>
                        


                    </div>
                </div>

            </section>

     
        </>
    )
}

export default Profile;