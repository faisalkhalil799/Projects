import './NewsCard.css'

const NewsCard = (props) => {

    console.log("Newscard",props.searchInput);

    return (
        <div className="flex-div">
            {props.data.map((item,index) => (
                <div key={index} className="main-div">
                    <div><img src={item.imageUrl} alt={item.title}></img></div>
                    <div className="author-time my">
                        <h5>{item.author} , {item.date}</h5>
                    </div>
                    <h2 className="title my">{item.title}</h2>
                    <p className="content my">{item.content}</p>
                </div>
                
            ))}
        </div>
    );

};

export default NewsCard;