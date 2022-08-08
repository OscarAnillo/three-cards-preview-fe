export default function CardComponent({ img, title, paragraph, className }){
    return (
        <div className="card">
            <div  className="container">
                <img src={img} alt="" />
                <h1>{title}</h1>
                <p>{paragraph}</p>
                <button>Learn More</button>
            </div>
        </div>
    )
}