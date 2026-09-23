import Button from "./Button"

type CardProps = {
    title: string,
    description: string,
}

const Card = ({ title, description } : CardProps) => {
  return (
    <>
        <div className="card flex-2/6 bg-blue-900 p-4 border border-blue-400 rounded-xl mt-2">
            <h3 className="title font-bold text-2xl">{title}</h3>
            <p className="title font-light mb-3">{description}</p>
            <Button />
        </div>
    </>
  )
}

export default Card