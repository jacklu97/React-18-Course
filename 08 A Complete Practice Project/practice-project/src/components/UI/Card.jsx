import styles from './Card.module.css'

const Card = ({ children, className }) => {
  const cardClass = [styles.card, className].join(' ')

  return (
    <div className={cardClass}>
      {children}
    </div>
  )
}

export default Card
