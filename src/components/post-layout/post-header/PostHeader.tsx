export default function PostHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold">
        {title}
      </h1>
      <h2 className="text-xl font-normal text-gray-500 mt-6">
        {description}
      </h2>
    </div>
  );
}
