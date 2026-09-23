import Card from "./components/Card";
import { someAction } from "./actions/something";

const Home = () => {



    return (
        <main className="w-full mt-5 mx-auto px-20">
            <div className="flex flex-wrap gap-4">
                <Card title="Product Card" description="lorem ipsum dolor sit amet" />
                <Card title="Product Card" description="lorem ipsum dolor sit amet" />
                <Card title="Product Card" description="lorem ipsum dolor sit amet" />
                <Card title="Product Card" description="lorem ipsum dolor sit amet" />
                <Card title="Product Card" description="lorem ipsum dolor sit amet" />
            </div>

            <div className="mt-10">
                <button
                    className="bg-blue-600 py-2 px-4 rounded-lg cursor-pointer 
                     hover:bg-blue-800 transition-colors duration-300"
                    onClick={someAction}
                >Click Me</button>
            </div>
            
        </main>
    )
}
export default Home
