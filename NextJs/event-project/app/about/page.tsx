import FiilterUsers from "../components/FiilterUsers";




const AboutPage = async () => {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

  return (
    <>
        <div className="flex flex-wrap gap-4 mt-5 p-5">
                <FiilterUsers users = {users} />
            </div>
    </>
  )
}

export default AboutPage