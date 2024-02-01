
const Card = ({ rasm, ism, familya }) => {
  return (
    <div className="card">
      <img src={rasm} alt="" />
      <h1>{ism}</h1>
      <h2>{familya}</h2>
    </div>
  )
}

export default Card