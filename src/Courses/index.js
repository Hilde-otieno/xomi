import './index.css';
import cre from "../images/cre.jpg";
import english from "../images/englishh.jpg";
import maths from "../images/mathematics.jpg";
import socialstudies from "../images/social studies.jpeg";
import science from "../images/science two.jpeg";
import kiswahili from "../images/kiswahili.gif";
import rightArrow from "../images/right-arrow-backup-2-svgrepo-com.svg";
import leftArrow from "../images/left-arrow-backup-2-svgrepo-com (1).svg";
import React, {useEffect, useRef} from 'react';


const Courses = () => {

    const coursesListRef = useRef(null);
    const leftArrowRef = useRef(null);
    const rightArrowRef = useRef(null);
    
   useEffect(()=>{
    const scrollLeft = (event) => {
    coursesListRef.current.scrollLeft -=1000
    };
    const scrollRight = (event) => {
        coursesListRef.current.scrollRight +=1000
        };
    const leftButton = leftArrowRef.current;
    const rightButton = rightArrowRef.current;
    leftButton.addEventListener("click",scrollLeft);
    rightButton.addEventListener("click",scrollRight);
   },[]);

    return (
        
        <div className="courses-container">
            <div className='courses'>Popular Courses</div>
            <div className='details'>
            <div className='leftArrow' ref={leftArrowRef}>
        <img src= {leftArrow} alt ="leftArrow" className="arrows"/>
    </div>
           <div className="courses-list-wrapper" ref={coursesListRef}>
                <div className="courses-list">
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
            <div className='rightArrow' ref={rightArrowRef}>
        <img src= {rightArrow} alt ="rightArrow" className="arrows"/>
    </div>
    </div>
        </div>
       
    );
   
};



export default Courses;
