import DashedTitle from "./title-decorated";

interface UniqueAreaProps {
  title: string;
  paragraph: string;
}
export default function UniqueArea({ title, paragraph }: UniqueAreaProps) {
  return (
    <>
      <DashedTitle>{title}</DashedTitle>
      <p>{paragraph}</p>
    </>
  );
}
