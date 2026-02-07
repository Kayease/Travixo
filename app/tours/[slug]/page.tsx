import { redirect } from "next/navigation";

interface TourSlugPageProps {
  params: Promise<{ slug: string }>;
}

export default async function TourSlugPage({ params }: TourSlugPageProps) {
  const { slug } = await params;
  redirect(`/products/${slug}`);
}
