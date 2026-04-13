import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllTranslations, getTranslationById } from "@/data/translations";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Params {
  id: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  const translations = getAllTranslations();
  return translations.map((translation) => ({
    id: translation.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const translation = getTranslationById(id);

  if (!translation) {
    return {
      title: "Translation Not Found",
      description: "The requested Bible translation could not be found.",
    };
  }

  return {
    title: `${translation.fullName} | Learn of Christ`,
    description: translation.description,
    openGraph: {
      title: `${translation.fullName} | Learn of Christ`,
      description: translation.description,
      type: "article",
      authors: [translation.tradition],
    },
  };
}

export default async function TranslationPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const translation = getTranslationById(id);

  if (!translation) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Bible", href: "/bible" },
    { label: "Translations", href: "/bible/translations" },
    { label: translation.name },
  ];

  return (
    <main className="min-h-screen bg-[#F5F5F7]">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#E5E5EA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <BreadcrumbNav items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white border-b border-[#E5E5EA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-[#007AFF] text-white text-base px-3 py-1">
                  {translation.abbreviation}
                </Badge>
                <span className="text-sm font-medium text-[#86868B]">
                  {translation.year}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-[#1D1D1F]">
                {translation.fullName}
              </h1>
            </div>
          </div>

          {/* Metadata Badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge
              variant="secondary"
              className="bg-[#F5F5F7] text-[#1D1D1F] text-sm"
            >
              {translation.tradition}
            </Badge>
            <Badge
              variant="secondary"
              className="bg-[#F5F5F7] text-[#1D1D1F] text-sm"
            >
              {translation.type}
            </Badge>
            <Badge
              variant="secondary"
              className="bg-[#F5F5F7] text-[#1D1D1F] text-sm"
            >
              {translation.language}
            </Badge>
          </div>

          {/* CTA Button */}
          <Link href={translation.readLink}>
            <Button className="bg-[#007AFF] text-white hover:bg-[#0051D5] rounded-lg px-6 py-3 text-base">
              Start Reading in {translation.abbreviation}
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Description */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <p className="text-lg text-[#424245] leading-relaxed">
            {translation.description}
          </p>
        </div>

        {/* Sample Verse Section */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#1D1D1F] mb-6">
            Sample Verse
          </h2>
          <div className="bg-[#F5F5F7] rounded-xl p-8 border-l-4 border-[#007AFF]">
            <p className="text-sm font-medium text-[#007AFF] mb-3">
              {translation.sampleVerse.reference}
            </p>
            <p className="text-lg text-[#1D1D1F] leading-relaxed italic">
              {translation.sampleVerse.text}
            </p>
          </div>
        </div>

        {/* History Section */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#1D1D1F] mb-6">History</h2>
          <div className="space-y-4">
            {translation.history.map((paragraph, index) => (
              <p key={index} className="text-[#424245] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Key Features Section */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#1D1D1F] mb-6">
            Key Features
          </h2>
          <ul className="space-y-3">
            {translation.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-[#007AFF] font-bold text-lg mt-0.5">
                  •
                </span>
                <span className="text-[#424245]">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Best For Section */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#1D1D1F] mb-6">Best For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {translation.bestFor.map((use, index) => (
              <div
                key={index}
                className="bg-[#F5F5F7] rounded-lg p-4 border border-[#E5E5EA]"
              >
                <p className="text-[#1D1D1F] font-medium">{use}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#F5F5F7] rounded-2xl shadow-sm p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1D1D1F] mb-4">
            Ready to explore Scripture?
          </h2>
          <p className="text-[#86868B] mb-6 max-w-2xl mx-auto">
            Start reading the {translation.fullName} and discover how this
            translation can deepen your biblical study and spiritual growth.
          </p>
          <Link href={translation.readLink}>
            <Button className="bg-[#007AFF] text-white hover:bg-[#0051D5] rounded-lg px-6 py-3 text-base">
              Start Reading in {translation.abbreviation}
            </Button>
          </Link>
        </div>
      </div>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: translation.fullName,
            description: translation.description,
            datePublished: new Date(translation.year, 0, 1).toISOString(),
            author: {
              "@type": "Organization",
              name: translation.tradition,
            },
            mainEntity: {
              "@type": "Book",
              name: translation.fullName,
              alternateName: translation.abbreviation,
              author: {
                "@type": "Organization",
                name: translation.tradition,
              },
              datePublished: translation.year.toString(),
              inLanguage: translation.language,
              description: translation.description,
            },
          }),
        }}
      />
    </main>
  );
}
