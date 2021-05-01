export default function PostHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-center">
        {title}
      </h1>
      <h3 className="text-center">
        {description}
      </h3>
    </div>
  );
}
