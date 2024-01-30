import Image from "next/image";

export default function About() {
    return (
        <>
            <article className="flex w-full flex-wrap">
                <picture className="w-full sm:w-1/2 flex items-center justify-center">
                    <Image src={"https://res.cloudinary.com/dsrdos5pb/image/upload/v1705370944/jwcxcstiggd1axi34y4d.jpg"} alt='Foto mia' width={901} height={1600} className=' w-80' />
                </picture>
                <section className="sm:w-1/2 w-full flex flex-col items-center h-auto sm:h-full py-10">
                    <h3>¿Quien soy?</h3>
                    <div className="flex flex-col w-4/5 py-10 gap-3">
                        <p>Mi nombre es Ricardo me dicen Riki, soy técnico electromecánico y cuento con 3 año de ingeniería Electrónica.</p>
                        <p>
                            Empece a los 16 años a interesarme en la programación cuando conocí los PLC (Programmer Logic Controller) en la escuela.
                        </p>
                        <p>Realice cursos de programación de PLC y CNC antes de terminar la secundaria.</p>
                        <p>Luego de terminar la secundaria decidí estudiar ingeniería Electrónica.</p>
                        <p>Curse varias materias en la cuales aprendí los lenguajes c y c++  para programar microcontroladores e interfases gráficas.</p>
                        <p>Uno de mis logros fue hacer un invernadero inteligente junto con otros 4 compañeros.Que mantenía luz, temperatura y humedad a una planta. Y registraba sus variaciones en una memoria.</p>
                        <p>Esto me llevo a decidir estudiar desarrollo web.</p>
                        <p>Mi meta es llegar a ser un senior en la empresa que me contrate y marcar la diferencia.</p>

                    </div>
                </section>
            </article>
        </>
    )
}