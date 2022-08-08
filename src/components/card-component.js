export default function CardComponent({ img, title, paragraph }){
    return (
        <div className="card">
            <div  className="container">
                <img src={img} alt="" />
                <h1>{title}</h1>
                <p>{paragraph}</p>
            </div>
            <button>Learn More</button>
        </div>
    )
}