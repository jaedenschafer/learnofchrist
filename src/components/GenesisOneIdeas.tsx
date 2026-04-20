/**
 * Idea-focused Genesis 1 study guide.
 *
 * Unlike GenesisOneStudy (which anchors commentary to specific KJV phrases via
 * <mark> tags and inline JSX), this component talks about what the chapter
 * *does* and *means* rather than which exact English words carry it. That lets
 * the verse block above render in whatever translation the reader has chosen
 * without the commentary going out of sync.
 *
 * Server component — no interactive highlights, no client hooks.
 */

import type { ReactNode } from 'react';

function Section({
  ref: verseRef,
  title,
  children,
}: {
  ref: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-[color:var(--color-surface)] rounded-2xl p-5 sm:p-7">
      <div className="flex items-baseline gap-3 mb-3 flex-wrap">
        <span className="pill bg-[#5856D6]/[0.08] text-[#5856D6]">{verseRef}</span>
        <h2 className="text-[1.25rem] sm:text-[1.375rem] font-semibold text-[color:var(--color-label)] leading-tight">
          {title}
        </h2>
      </div>
      <div className="text-[1rem] leading-[1.7] text-[color:var(--color-label)] space-y-3">
        {children}
      </div>
    </section>
  );
}

function LanguageCallout({
  term,
  transliteration,
  children,
}: {
  term: string;
  transliteration: string;
  children: ReactNode;
}) {
  return (
    <aside className="rounded-2xl p-5 sm:p-6 border border-[color:var(--color-separator)] bg-[color:var(--color-surface-secondary,var(--color-surface))]">
      <div className="flex items-center gap-2 mb-2">
        <span className="pill bg-[#FF9500]/[0.1] text-[#C77700]">Hebrew</span>
        <span className="text-[0.75rem] uppercase tracking-wider font-semibold text-[color:var(--color-tertiary-label)]">
          Word study
        </span>
      </div>
      <div className="flex items-baseline gap-3 mb-3 flex-wrap">
        <span className="text-2xl font-serif text-[color:var(--color-label)]" dir="rtl" lang="he">
          {term}
        </span>
        <em className="text-[0.9375rem] text-[color:var(--color-secondary-label)]">
          {transliteration}
        </em>
      </div>
      <div className="text-[0.9375rem] leading-[1.65] text-[color:var(--color-secondary-label)] space-y-2">
        {children}
      </div>
    </aside>
  );
}

function ChristBlock({ children }: { children: ReactNode }) {
  return (
    <section className="rounded-2xl p-5 sm:p-7 border border-[#AF52DE]/30 bg-[#AF52DE]/[0.04]">
      <div className="flex items-center gap-2 mb-3">
        <span className="pill bg-[#AF52DE]/[0.12] text-[#8E44C8]">Christ Connection</span>
      </div>
      <div className="text-[1rem] leading-[1.7] text-[color:var(--color-label)] space-y-3">
        {children}
      </div>
    </section>
  );
}

function ReflectionBlock({ children }: { children: ReactNode }) {
  return (
    <section className="rounded-2xl p-5 sm:p-7 border border-[#34C759]/25 bg-[#34C759]/[0.04]">
      <div className="flex items-center gap-2 mb-3">
        <span className="pill bg-[#34C759]/[0.12] text-[#1E8A3A]">
          Reflection &amp; application
        </span>
      </div>
      <div className="text-[1rem] leading-[1.7] text-[color:var(--color-label)] space-y-4">
        {children}
      </div>
    </section>
  );
}

export default function GenesisOneIdeas() {
  return (
    <div className="space-y-4">
      {/* ─── Intro ─── */}
      <section className="bg-[color:var(--color-surface)] rounded-2xl p-5 sm:p-7">
        <p className="text-[1.0625rem] leading-[1.7] text-[color:var(--color-label)] mb-3">
          Genesis 1 opens the Bible by answering four questions at once:
          <em> Who is God? What is the world? Who are humans? What is our calling?</em>
          {' '}It does all of this in thirty-one verses, with almost no argument and no
          apology — just a chapter-long declaration.
        </p>
        <p className="text-[0.9375rem] leading-[1.7] text-[color:var(--color-secondary-label)]">
          The commentary below talks about the <em>ideas</em> of the chapter, not the
          specific English wording. Change translations at the top of the page any time —
          every verse will re-render in your preferred version, and the commentary still
          fits.
        </p>
      </section>

      {/* ─── The architecture of the chapter ─── */}
      <Section ref="Genesis 1" title="The chapter is theological architecture">
        <p>
          Genesis 1 is not a science textbook and it is not trying to be. It is a
          declaration of who made the world and why. Everything else in the Bible is
          downstream of what gets established here.
        </p>
        <p>
          The structure is deliberate. The six days of creation split evenly in half.
          Days one through three form the <em>spaces</em> of the world — light and
          darkness, sky and sea, dry land. Days four through six <em>fill</em> those
          spaces — the sun, moon, and stars for the light; fish and birds for sea and
          sky; animals and humans for the land. God doesn&apos;t make the world in a
          random order. He builds rooms, then furnishes them.
        </p>
        <p>
          The seventh day is not an afterthought. It is the destination the whole
          chapter has been climbing toward — and the only day God calls holy.
        </p>
      </Section>

      {/* ─── How God creates ─── */}
      <Section ref="Genesis 1:1–2" title="God creates by speaking, in peace">
        <p>
          The chapter opens with no argument for God&apos;s existence — only His action.
          Before anything else is in view, God is already there, already creating.
        </p>
        <p>
          Some kind of phrase like &ldquo;let there be&rdquo; followed by &ldquo;and it
          was so&rdquo; repeats ten times in this chapter. Creation happens by word. God
          speaks and reality obeys. Notice what&apos;s missing: struggle. There is no
          battle with a rival god, no corpse to build the world out of, no cosmic
          chaos to defeat. The ancient cultures surrounding Israel all told creation
          stories full of divine violence. Genesis tells one full of divine speech.
        </p>
        <p>
          The earth starts out described as unformed and empty, with darkness over
          the deep and God&apos;s Spirit hovering over the waters. That is the canvas.
          From it, ordered creation follows.
        </p>
      </Section>

      <LanguageCallout term="בָּרָא" transliteration="bara&apos;">
        <p>
          The Hebrew verb used for &ldquo;created&rdquo; in verse 1 is <em>bara&apos;</em>.
          In the Old Testament it only ever takes God as its subject. Humans make,
          shape, and fashion things from materials already at hand. Only God <em>bara&apos;</em>s
          — brings into being what was not there.
        </p>
        <p>
          The very first sentence of Scripture quietly insists on a distinction the
          whole Bible runs on: there is one Creator, and everything else is creation.
          This is true in every translation, because the distinction lives in the
          underlying Hebrew, not in the English word choice.
        </p>
      </LanguageCallout>

      {/* ─── Days 1–3: forming ─── */}
      <Section ref="Genesis 1:3–13" title="Days 1–3: God forms the spaces">
        <p>
          On day one, God speaks light into existence — and then separates it from
          darkness. Notice that light shows up on day one, but the sun and moon
          don&apos;t arrive until day four. The chapter is making a theological point,
          not a physics one: light is God&apos;s, not the sun&apos;s.
        </p>
        <p>
          On day two, God separates water above from water below, making sky. On day
          three, He gathers the waters under the sky so dry land can appear. Dry
          ground emerging out of water becomes a pattern the rest of Scripture
          returns to constantly — Noah&apos;s ark coming to rest, Israel crossing the
          Red Sea, Jordan parting for Joshua. In the Bible, salvation often looks
          like dry land showing up where there used to be only water.
        </p>
        <p>
          Each day ends with the same declaration: God sees what He has made and
          calls it good. The world is not a mistake, not evil, not a prison. Its
          goodness is established before humans are even on the scene.
        </p>
      </Section>

      {/* ─── Days 4–6: filling ─── */}
      <Section ref="Genesis 1:14–25" title="Days 4–6: God fills the spaces">
        <p>
          Day four fills day one: sun, moon, stars — the lights God has made to rule
          day and night. Day five fills day two: fish in the sea, birds in the sky.
          Day six fills day three: land animals, and finally humans. The symmetry is
          not accidental. The chapter is inviting you to see a Creator who
          <em> orders</em> the world, not just makes it.
        </p>
        <p>
          There&apos;s something quietly polemical going on too. Genesis never names
          the sun or the moon — it just calls them &ldquo;the greater light&rdquo;
          and &ldquo;the lesser light.&rdquo; For the first readers, this was the
          Bible taking a swing at the sun-worshipping and moon-worshipping cultures
          around them. Those things you were taught to fear as gods? Lamps. On the
          payroll. Serving, not ruling.
        </p>
      </Section>

      {/* ─── Humans as image-bearers ─── */}
      <Section ref="Genesis 1:26–27" title="Humans bear God&apos;s image">
        <p>
          On the sixth day, right before God rests, He does something different. For
          everything else in the chapter, the pattern is &ldquo;let there be.&rdquo;
          For humans, it shifts: &ldquo;let us make.&rdquo; That plural is the first
          self-reference of its kind in Scripture — a hint, read in light of the whole
          Bible, of the Trinity acting in concert even here.
        </p>
        <p>
          Humans are made in God&apos;s image. That means to represent Him. It&apos;s
          royal language in its ancient context: kings would set up statues of
          themselves in territory they ruled, so that everyone entering that land
          would know whose land it was. Humans, Genesis says, are God&apos;s statues in
          the world. The sign of whose world this is.
        </p>
        <p>
          The text goes out of its way to be explicit: &ldquo;male and female He
          created them.&rdquo; Both sexes equally bear the image. Any theology that
          treats one as more fundamentally God-like than the other has to argue
          against verse 27, and verse 27 is hard to argue against.
        </p>
      </Section>

      <LanguageCallout term="צֶלֶם" transliteration="tselem">
        <p>
          The word translated &ldquo;image&rdquo; in verse 27 is <em>tselem</em>. It&apos;s
          the same word used elsewhere for a statue or representation — exactly the
          kind a king would set up in conquered territory to mark his rule.
        </p>
        <p>
          To be made in God&apos;s <em>tselem</em> is to be a walking sign of who
          rules here. Not as owners. As stewards.
        </p>
      </LanguageCallout>

      {/* ─── Rest as the goal ─── */}
      <Section ref="Genesis 2:1–3" title="Rest is the crown of creation">
        <p>
          God does not rest on the seventh day because He is tired. The chapter is
          careful about that. He rests to mark that creation is <em>finished</em> —
          complete, sufficient, whole.
        </p>
        <p>
          The seventh day is the only day in the whole creation account God calls
          holy. Not the day He made humans. Not the day He separated light from
          darkness. The day He rested. Rest, in Scripture, is not the absence of work
          — it is the <em>goal</em> of work. The whole chapter has been climbing
          toward it.
        </p>
      </Section>

      {/* ─── Christ Connection ─── */}
      <ChristBlock>
        <p>
          John&apos;s Gospel deliberately opens with Genesis&apos;s first three words.
          &ldquo;In the beginning was the Word, and the Word was with God, and the
          Word was God. All things were made through Him.&rdquo; John is telling the
          reader that every time Genesis 1 says &ldquo;and God said,&rdquo; the one
          doing the speaking is Jesus. Creation is a Trinitarian act from verse one:
          the Father wills, the Son speaks, the Spirit hovers.
        </p>
        <p>
          The pattern of the chapter — Spirit over unformed waters, then ordered
          creation, then rest — shows up again at the start of the gospel. The Spirit
          descends on Jesus at His baptism in the Jordan (Mark 1). A new creation is
          beginning. When the risen Jesus breathes on His disciples in John 20, He is
          doing on a smaller scale what the Spirit did over the waters at the start:
          bringing life out of chaos.
        </p>
        <p>
          And the seventh day that Genesis 1 reaches for? Hebrews 4 picks it up and
          says it was pointing forward all along — to the rest believers enter
          through Christ. The day God sanctified at the end of creation week was
          never just about ancient Israel&apos;s calendar. It was always a signpost.
        </p>
      </ChristBlock>

      {/* ─── Reflection & application ─── */}
      <ReflectionBlock>
        <p>
          <strong className="text-[color:var(--color-label)]">Your words shape the
          world around you.</strong> God creates by speaking. You don&apos;t create
          galaxies with your words, but you do create the emotional world of the
          people nearest you. Use that power like someone who knows what it&apos;s
          for.
        </p>
        <p>
          <strong className="text-[color:var(--color-label)]">Every human bears
          God&apos;s image.</strong> Every person — regardless of age, ability,
          productivity, beliefs, or status — carries dignity that isn&apos;t yours to
          rank. This cuts against almost every way the world tries to measure
          people.
        </p>
        <p>
          <strong className="text-[color:var(--color-label)]">The created world is
          good.</strong> You are allowed to enjoy what God made — food, rest, beauty,
          the warmth of the sun on your face, a good conversation, work done well.
          Genesis 1 establishes the posture, and it&apos;s not suspicion.
        </p>
        <p>
          <strong className="text-[color:var(--color-label)]">Take a day of
          rest.</strong> Not because it&apos;s a rule, but because it&apos;s the goal
          the whole chapter has been climbing toward. Pick a day. Tell the people you
          live with. Put the laptop away. Leave the email unanswered. Eat slowly.
          Read Scripture. Nap without guilt. Go to church. A sabbath is an act of
          faith that the world is not yours to finish, and that the God who finished
          creation in six days is inviting you into His seventh.
        </p>
      </ReflectionBlock>

      {/* ─── Footer note ─── */}
      <section className="text-center py-6">
        <p className="text-[0.8125rem] text-[color:var(--color-tertiary-label)] max-w-md mx-auto">
          This is a preview of the idea-focused study format. Translation-aware verse
          text renders above; commentary below works with any version.
        </p>
      </section>
    </div>
  );
}
