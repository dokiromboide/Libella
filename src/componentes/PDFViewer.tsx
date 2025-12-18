import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
    pdfUrl: string;
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    qrButtons?: {
        page: number;
        x: string; // Posición horizontal en porcentaje (ej: "20%")
        y: string; // Posición vertical en porcentaje (ej: "50%")
        width: string; // Ancho del botón (ej: "80px")
        height: string; // Alto del botón (ej: "80px")
        url: string; // URL de redirección
        label?: string; // Texto del botón (opcional)
    }[];
}

export function PDFViewer({ pdfUrl, isOpen, onClose, title, qrButtons = [] }: PDFViewerProps) {
    const [numPages, setNumPages] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true);

    // Block body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
        setLoading(false);
    }

    function onDocumentLoadError(error: Error) {
        console.error('Error loading PDF:', error);
        setLoading(false);
    }

    const goToPrevPage = () => {
        setPageNumber((prev) => Math.max(prev - 1, 1));
    };

    const goToNextPage = () => {
        setPageNumber((prev) => Math.min(prev + 1, numPages));
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-6xl h-[90vh] bg-gradient-to-b from-[#1e1717] to-[rgba(135,21,21,0.97)] rounded-xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 bg-[#af2c28] border-b border-white/10">
                    <h2 className="text-white text-xl font-semibold">
                        {title || 'Portafolio del Proyecto'}
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                        aria-label="Cerrar"
                    >
                        <X className="w-6 h-6 text-white" />
                    </button>
                </div>

                {/* PDF Content */}
                <div
                    className="flex-1 overflow-y-auto p-6 flex flex-col items-center relative"
                    style={{ maxHeight: 'calc(90vh - 120px)' }}
                >
                    {loading && (
                        <div className="flex items-center justify-center h-full">
                            <div className="text-white text-lg">Cargando PDF...</div>
                        </div>
                    )}

                    <div className="relative">
                        <Document
                            file={pdfUrl}
                            onLoadSuccess={onDocumentLoadSuccess}
                            onLoadError={onDocumentLoadError}
                            loading={
                                <div className="flex items-center justify-center h-full">
                                    <div className="text-white text-lg">Cargando documento...</div>
                                </div>
                            }
                            error={
                                <div className="flex items-center justify-center h-full">
                                    <div className="text-white text-lg">Error al cargar el PDF</div>
                                </div>
                            }
                        >
                            <Page
                                pageNumber={pageNumber}
                                renderTextLayer={false}
                                renderAnnotationLayer={false}
                                className="shadow-lg"
                                width={Math.min(window.innerWidth * 0.8, 900)}
                            />
                        </Document>

                        {/* Botones de QR superpuestos */}
                        {qrButtons
                            .filter(btn => btn.page === pageNumber)
                            .map((btn, idx) => (
                                <a
                                    key={idx}
                                    href={btn.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute bg-blue-500/20 hover:bg-blue-500/40 border-2 border-blue-400 rounded-lg transition-all duration-300 hover:scale-110 flex items-center justify-center cursor-pointer"
                                    style={{
                                        left: btn.x,
                                        top: btn.y,
                                        width: btn.width,
                                        height: btn.height,
                                    }}
                                    title={btn.label || 'Ir al enlace'}
                                >
                                    {btn.label && (
                                        <span className="text-white text-xs font-semibold text-center px-2">
                                            {btn.label}
                                        </span>
                                    )}
                                </a>
                            ))}
                    </div>
                </div>

                {/* Navigation Controls */}
                {!loading && numPages > 0 && (
                    <div className="flex items-center justify-center gap-4 px-6 py-4 bg-[#af2c28] border-t border-white/10">
                        <button
                            onClick={goToPrevPage}
                            disabled={pageNumber <= 1}
                            className="p-2 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
                            aria-label="Página anterior"
                        >
                            <ChevronLeft className="w-5 h-5 text-white" />
                        </button>

                        <span className="text-white font-medium">
                            Página {pageNumber} de {numPages}
                        </span>

                        <button
                            onClick={goToNextPage}
                            disabled={pageNumber >= numPages}
                            className="p-2 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
                            aria-label="Página siguiente"
                        >
                            <ChevronRight className="w-5 h-5 text-white" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
