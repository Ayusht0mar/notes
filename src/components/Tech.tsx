import Image from "next/image";

const Tech = [
    {
        title:"JavaScript",
        imgsrc:"/logos/js.svg",
        href:"/javascript"
    },
    {
        title:"hello",
        imgsrc:"/logos/js.svg",
        href:"/javascript"
    },
    {
        title:"JavaScript",
        imgsrc:"/logos/js.svg",
        href:"/javascript"
    },
    {
        title:"JavaScript",
        imgsrc:"/logos/js.svg",
        href:"/javascript"
    },
    {
        title:"JavaScript",
        imgsrc:"/logos/js.svg",
        href:"/javascript"
    },
    {
        title:"JavaScript",
        imgsrc:"/logos/js.svg",
        href:"/javascript"
    },

]


const TechGrid = () => {
    return ( 
        <div className="flex flex-col gap-6 w-fit mx-auto">
                <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
                    {Tech.map((Tech) => (
                        <TechCard key={Tech.title} {...Tech}/>
                    ))}
                </div>
        </div>
     );
}
 
export default TechGrid;

const TechCard = ({title, imgsrc, href}: {
    title: string;
    imgsrc: string;
    href: string;
}) => (
    <a href={href} className="w-36 h-36 p-5 flex flex-col gap-2 bg-white rounded-lg items-center justify-center">
        <Image src={imgsrc} alt={title} height={80} width={80}/>
        <h1>{title}</h1>
    </a>
)