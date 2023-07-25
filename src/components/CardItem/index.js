// Write your code here.
import './index.css'

const Card = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} card`}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <img src={imgUrl} className="logo" alt={title} />
    </li>
  )
}

export default Card
