
import { useParams } from "react-router-dom";
import { PDFViewer } from "../componentes/PDFViewer";
import { proyectosData } from "../datos/proyectos";

export default function PortafolioPage() {
    const { id } = useParams<{ id: string }>();

    if (!id || !proyectosData[id]) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-black text-white">
                <h1 className="text-xl">Proyecto no encontrado</h1>
            </div>
        );
    }

    const project = proyectosData[id];

    if (!project.pdfPortfolio) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-black text-white">
                <h1 className="text-xl">Este proyecto no tiene portafolio PDF.</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black">
            <PDFViewer
                pdfUrl={project.pdfPortfolio}
                isOpen={true}
                onClose={() => window.close()}
                title={`Portafolio - ${project.nombreProyecto}`}
                qrButtons={project.qrButtons}
            />
        </div>
    );
}
