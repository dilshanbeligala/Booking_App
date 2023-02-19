import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/685291.jpg?k=df198931295a3a24c278b32556c0779cd74e95a239489a7fe98d89eb2aed72ee&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Ella</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/685389.jpg?k=b2ee6ea5ea52888fac4782d1c7959f9aa2572f382ff25a06418b53e735c71e80&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>NuwaraEliya</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/685322.jpg?k=e29ccaeca3576b692e39f01d613b237ad0dd03a2a886b62db77c11b8dd3379ce&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Mirissa</h1>
                <h2>123 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured