
import museum from "../assets/Images/museum-batam.png"

const data = [
  { img: museum, title: "Museum Batam Raja Ali Haji", category: "Heritage Tourism" },
]

export default function Recommended() {
  return (
    <section className="recommended">
      <h2>Recommended Location to Explore!</h2>
      <div className="cards">
        {data.map((loc, i) => (
          <div className="card" key={i}>
            <img src={loc.img} alt={loc.title} />
            {loc.soon && <span className="badge">Coming Soon</span>}
            <h3>{loc.title}</h3>
            <p>{loc.category}</p>
          </div>
        ))}
      </div>
    </section>
  )
}