// Write your code here.
import './index.css'

const CardItem = props => {
  const {cards} = props
  const {title, description, imgUrl, className} = cards
  return (
    <li className={`${className} card`}>
      <h1 className="heading">{title}</h1>
      <p className="description">{description}</p>
      <div className="img-container">
        <img src={imgUrl} className="logo-img" alt={title} />
      </div>
    </li>
  )
}

export default CardItem
