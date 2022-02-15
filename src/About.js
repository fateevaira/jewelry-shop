import { useState } from "react";
import { person } from "./person";

function About () {

    const [worker, setWorker] = useState (0);
    const {id, image, name, about} = person[worker];
    const [showMore, setShowMore] = useState (false);

    const previousItem = () => {
        setWorker (worker => {
            worker--;
            if (worker < 0) {
                return person.length-1;
            }
            return worker;
        })
    } 

    const nextItem = () => {
        setWorker(worker =>{
            worker++;
            if (worker > person.length-1) {
                worker = 0;
            }
            return worker;
        })
    } 

    // const setShowMore = (id) => {
    //     const newPerson = [];
    //     worker.forEach(element => {
    //         if (element.id === id) {
    //             const changePerson = {...element, showMore: !element.showMore};
    //             newPerson.push(changePerson);
    //         } else {
    //             newPerson.push(element);
    //         }
    //     });
    //     setShowMore(newPerson);
    // }

    return(<div className="aboutContainer">
        <div className="header">
            <h1>This is our team</h1>  
        </div>
        <div className="aboutText">
            <p className="text">Our jewelry company is only 1 year old. We are located in Ukraine. All decorations are produced in limited quantity. And we can make decoration according to your design. We have a small but very friendly team. Then you can get to know everyone who works with us.</p>
        </div>
        <div className="aboutMain">
            <div>
                <img src={image} width='300px' alt="Persone"/>
            </div>

            <div>
                <h2 className="textName">{name}</h2>
            </div>

            <div>
                <p className="aboutPerson">{showMore ? about : about.substring(0,20) + '...'}
                <button className="showBtn" onClick={() => setShowMore(!showMore)}>{showMore ? 'Show less' : 'Show more'}</button></p>
            </div>
            <div>
                <button className="btnPhoto" onClick={previousItem}>Previous</button>
                <button className="btnPhoto" onClick={nextItem}>Next</button>
            </div>
        </div>
    </div>
    )
}
export default About;