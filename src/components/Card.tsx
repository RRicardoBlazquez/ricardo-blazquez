import { Button } from "./ui/button";

export default function Card() {

    return (
        <article>
            <div className="h-auto w-96 flex flex-col items-center">
                <div className="flex font-serif flex-col w-72 items-center">
                    <div className="flex-none w-96 relative">
                        <img src="/webJardinVerde.png" loading="lazy" className="w-full" />
                    </div>
                    <div className="w-full flex justify-between">
                        <Button>Mas info</Button>
                        <Button>Ver</Button>
                    </div>
                </div>
            </div>

        </article>
    )
}