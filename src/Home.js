import { useState } from 'react';
import { data } from './data';
import Shop from './Shop';
import Buttons from './Buttons';

function Home () {

    const [jew, setJew] = useState(data);

    const choiсedJewelry = (searchTerm) => {
        const newJewelry = data.filter (element => element.searchTerm === searchTerm);
          setJew (newJewelry);
        }
     
    return(<div>
        <div className='header'>
            <h1>jewelry shop</h1>
        </div>
        <Buttons battonChoiсe  = {choiсedJewelry}/>
        <Shop jewelry = {jew}/>
       </div>
    )
}
export default Home;