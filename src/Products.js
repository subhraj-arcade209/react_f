import Product from"./Product.js"

function Products(){

    let products=[{name:"Redmi 13",price :"16,000/-",url:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202401/redmi-note-13-140345693-16x9_0.jpg?VersionId=OklRljQiW2GXLnxxoiV6sq6v8PMJpnll?size=1200:675"},
    {name:"Redmi 12",price:"15,500/-",url:"https://akm-img-a-in.tosshub.com/businesstoday/images/story/202307/untitled_1-sixteen_nine.jpg?size=948:533"},
    {name:"Redmi 11",price:"15,000/-",url:"https://i.gadgets360cdn.com/products/large/redmi-11-5g-db-709x800-1662528384.jpg"}]
    
    
    return (

        <div className="productab">
        {
        products.map((prd,index) => {
          return (
            <Product name={prd.name} price={prd.price} url={prd.url}></Product>

          )
        })
        }
        
        <div className="productab">
            <Product name="Redmi 13" price="16,000/-" url="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202401/redmi-note-13-140345693-16x9_0.jpg?VersionId=OklRljQiW2GXLnxxoiV6sq6v8PMJpnll?size=1200:675"></Product>
            <Product name="Redmi 12" price="15,500/-" url="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202307/untitled_1-sixteen_nine.jpg?size=948:533"></Product>
            <Product name="Redmi 11" price="15,000/-" url="https://i.gadgets360cdn.com/products/large/redmi-11-5g-db-709x800-1662528384.jpg"></Product>

        </div>

        </div>

       


    )
}
export default Products;