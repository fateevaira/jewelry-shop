function Shop ({jewelry}) {
    return(
     <div className="mainContainer">
        {jewelry.map(elem => {
          const {id, image, name, price, description} = elem;

          return(<div key={id} className='cards'>
           
              <img src={image} width='300px' height='200px' alt='jewelry'/>

            <div className="cardsInfo">
              <h2>{name}</h2>
              <h4>Price: {price} $</h4>
              <p>Description: {description}</p>
              <button className="addBtn">Add to Shopping Cart</button>
            </div>
            </div>
          )
        })}
     </div>
    )
}
export default Shop;