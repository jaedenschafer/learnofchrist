import { Metadata } from "next";
import Link from "next/link";
import { getAllTranslations } from "@/data/translations";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Bible Translations | Learn of Christ",
  description:
    "Explore 8 major English Bible translations from different Christian traditions. Compare translations, learn their history, and choose the one that works best for your study.",
  openGraph: {
    title: "Bible Translations | Learn of Christ",
    description:
      "Explore 8 major English Bible translations from different Christian traditions.",
    type: "website",
  },
};

export default function TranslationsPage() {
  const translations = getAllTranslations();

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Bible", href: "/bible" },
    { label: "Translations" },
  ];

  return (
    <main className="min-h-screen bg-[#F5F5F7]">
      {/* Hero Section */}
      <div className="bg-white border-b border-[#E5E5EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <BreadcrumbNav items={breadcrumbItems} />

          <div className="mt-8">
            <h1 className="text-4xl font-bold text-[#1D1D1F]">
              Bible Translations
            </h1>
            <p className="mt-4 text-lg text-[#86868B] max-w-2xl">
              Explore 8 major English Bible translations representing different
              Christian traditions, translation philosophies, and scholarly
              approaches. Each translation offers unique strengths for study,
              devotion, and contemplation.
            </p>
          </div>
        </div>
      </div>

      {/* Translations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {translations.map((translation) => (
            <div
              key={translation.id}
              className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200"
            >
              {/* Header Row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="outline" className="text-[#007AFF]">
                      {translation.abbreviation}
                    </Badge>
                    <span className="text-sm font-medium text-[#86868B]">
                      {translation.year}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-[#1D1D1F]">
                    {translation.name}
                  </h2>
                  <p className="text-sm text-[#86868B] mt-1">
                    {translation.fullName}
                  </p>
                </div>
              </div>

              {/* Metadata Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge
                  variant="secondary"
                  className="bg-[#F5F5F7] text-[#1D1D1F]"
                >
                  {translation.tradition}
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-[#F5F5F7] text-[#1D1D1F]"
                >
                  {translation.type}
                </Badge>
              </div>

              {/* Description */}
              <p className="text-sm text-[#424245] mb-6 leading-relaxed">
                {translation.description}
              </p>

              {/* Actions */}
              <div className="flex gap-3">
                <Link href={translation.readLink} className="flex-1">
                  <Button
                    className="w-full bg-[#007AFF] text-white hover:bg-[#0051D5] rounded-lg"
                    size="sm"
                  >
                    Read Now
                  </Button>
                </Link>
                <Link
                  href={`/bible/translations/${translation.id}`}
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    className="w-full border-[#D5D5D9] text-[#007AFF] hover:bg-[#F5F5F7] rounded-lg"
                    size="sm"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Bible Translations",
            description:
              "A collection of 8 major English Bible translations from different Christian traditions.",
            url: "https://learnofchrist.com/bible/translations",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: translations.map((translation, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "Book",
                  name: translation.fullName,
                  alternateName: translation.abbreviation,
                  author: {
                    "@type": "Organization",
                    name: translation.tradition,
                  },
                  datePublished: translation.year.toString(),
                  description: translation.description,
                  url: `https://learnofchrist.com/bible/translations/${translation.id}`,
                },
              })),
            },
          }),
        }}
      />
    </main>
  );
}
