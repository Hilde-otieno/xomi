import './index.css';
import cre from "../images/cre.jpg";
import english from "../images/englishh.jpg";
import maths from "../images/mathematics.jpg";
import socialstudies from "../images/social studies.jpeg";
import science from "../images/science two.jpeg";
import kiswahili from "../images/kiswahili.gif";
import rightArrow from "../images/right-arrow-backup-2-svgrepo-com.svg";
import leftArrow from "../images/left-arrow-backup-2-svgrepo-com (1).svg";
import React, {useRef} from 'react';


const Courses = () => {

    const coursesList = useRef(null)

    const scrollLeft  = ()=> {
        if (coursesList.current){
            coursesList.current.scrollBy({
                left:-40,
                behavior:'smooth',
            });
            console.log(scrollLeft);
        }
    };
    const scrollRight  = ()=> {
        if (coursesList.current){
            coursesList.current.scrollBy({
                left:40,
                behavior:'smooth',
            });
            console.log(scrollRight);
        }
    };


    return (
        
        <div className="courses-container">
            <div className='courses'>Popular Courses</div>
            <div className='details'>
            <div className='leftArrow' onClick={scrollLeft}>
        <img src= {leftArrow} alt ="leftArrow" className="arrows"/>
    </div>
           <div className="courses-list-wrapper">
                <div className='list'>
                <div className="courses-list" ref={coursesList}>
                    <li id="english">
                        <img src={english} alt="english" className="image" />
                        <h2 className="englishh">English</h2>
                    </li>
                    <li id="kiswahili">
                        <img src={kiswahili} alt="kiswahili" className="image" />
                        <h2 className="kiswahilii">Kiswahili</h2>
                    </li>
                    <li id="science">
                        <img src={science} alt="science" className="image" />
                        <h2 className="sciencee">Science</h2>
                    </li>
                    <li id="maths">
                        <img src={maths} alt="maths" className="image" />
                        <h2 className="mathss">Maths</h2>
                    </li>
                    <li id="social">
                        <img src={socialstudies} alt="social studies" className="image" />
                        <h2 className="socials">Social Studies</h2>
                    </li>
                    <li id="cre">
                        <img src={cre} alt="cre" className="image" />
                        <h2 className="cree">C.R.E</h2>
                    </li>
                </div>
                </div>
            </div>
            <div className='rightArrow' onClick={scrollRight}>
        <img src= {rightArrow} alt ="rightArrow" className="arrows"/>
    </div>
    </div>
        </div>
       
    );
   
};



export default Courses;
