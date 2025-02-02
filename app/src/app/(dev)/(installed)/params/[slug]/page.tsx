export default async function Params({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return <div>Переданый параметр: {slug}</div>;
}
