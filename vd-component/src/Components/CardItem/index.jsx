
import data from "../../data.js";
function CardItem ()  {
    return (
        data.map((item)=>(
            <div className="card__item" key={item.id}>
                    <div className="card__img">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className="card__body">
                        <div className="card__title">{item.title}</div>
                        <div className="card__desc">{item.desc}</div>
                        <div className="card__price">
                        <div className="card__price--new">{item.priceNew.toLocaleString()}<sup>VND</sup></div>
                        <div className="card__price--old">{item.priceOld.toLocaleString()}<sup>VND</sup></div>
                        </div>
                        <div className="card__btn">
                        <button>Buy Now</button>
                        </div>
                    </div>
                    </div>
        ))

    );
};

export default CardItem;