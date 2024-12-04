import CidadesInfo from "../cidadesInfo";
import LpContato from "./lp-contato";

interface Data {
    aro: string;
    images: string[];
};

export default function LpContentAros(data: Data) {

    return (
        <div className="bg-white text-black h-fit justiify-center place-items-center w-screen">
            <div className="w-10/12 sm:w-7/12 pt-8 pb-8">
                <p className="text-2xl sm:text-4xl text-center">Com o maior estoque do interior paulista, oferecemos as melhores marcas e modelos, sempre à pronta entrega.</p>
                <br />
                <p className="text-2xl sm:text-4xl text-center font-sariaBlack">CONFIRMA ALGUMAS DAS OPÇÕES NO ARO {data.aro}:</p>
            </div>
            <div className="flex flex-wrap gap-5 w-10/12 pt-10 pb-10">
                {(() => {
                const imageElements: JSX.Element[] = [];
                data.images.forEach((image, index) => {
                    imageElements.push(
                    <div key={index} className="image-item text-black">
                        <img src={image} alt={`Image ${index + 1}`} />
                        <div>
                            <LpContato info={CidadesInfo.CAMPINAS} brand=""></LpContato>
                        </div>
                    </div>
                    );
                });
                return imageElements;
                })()}
            </div>
        </div>

    )
}