type PdfRendererProps = {
  url: string;
};

const PdfRenderer = ({ url }: PdfRendererProps) => {
  return <div>{url}</div>;
};

export default PdfRenderer;
