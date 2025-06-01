import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
    return(
        <div>
            <h1 className="text-xl font-extralight">
                Landing Page
                <Card />
                <Button title="small" styles="rounded-sm"/>
                <Button title="medium" styles="rounded-lg"/>
                <Button title="Large" styles="rounded-full"/>
            </h1>
        </div>
    )
}

export default Landing;