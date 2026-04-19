'use client';

import { useEffect } from 'react';
import StudyJournal from './StudyJournal';
import ReflectionBlock from './ReflectionBlock';
import ScriptureRefs from './ScriptureRefs';
import ShareableMarks from './ShareableMarks';
import ShareButton from './ShareButton';
import StudyAudioPlayer from './StudyAudioPlayer';
import HebrewAudio from './HebrewAudio';
import ReadingComfortEffects from './ReadingComfortEffects';
import ChapterProgress from './ChapterProgress';
import './GenesisOneStudy.css';

export default function GenesisOneStudy() {
  useEffect(() => {
    document.documentElement.classList.add('js');

    const scriptures = Array.from(
      document.querySelectorAll<HTMLElement>('.rich-study .scripture')
    );

    // Stagger highlight reveal inside each scripture block
    scriptures.forEach((scripture) => {
      scripture.querySelectorAll<HTMLElement>('mark').forEach((mark, i) => {
        mark.style.setProperty('--hl-delay', `${i * 160}ms`);
      });
    });

    // Reveal highlights when a verse-section takes the sticky slot at the top
    const isMobile = window.matchMedia('(max-width: 640px)').matches;
    // Sticky top is 72px desktop / 60px mobile — this is our reveal trigger line.
    const stickyTop = isMobile ? 60 : 72;
    const triggerLine = stickyTop + 24;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('.rich-study .verse-section')
    );

    const checkSections = () => {
      sections.forEach((section) => {
        const scripture = section.querySelector<HTMLElement>('.scripture');
        if (!scripture) return;
        const rect = section.getBoundingClientRect();
        if (!scripture.classList.contains('visible')) {
          if (rect.top <= triggerLine && rect.bottom > 0) {
            scripture.classList.add('visible');
          } else if (rect.bottom <= 0) {
            scripture.classList.add('visible');
          }
        }
        // Toggle is-pinned when the scripture is locked to the sticky slot.
        const scriptureRect = scripture.getBoundingClientRect();
        const pinned =
          scriptureRect.top <= stickyTop + 1 &&
          rect.bottom > stickyTop + scriptureRect.height;
        if (pinned) {
          scripture.classList.add('is-pinned');
        } else {
          scripture.classList.remove('is-pinned');
        }
      });
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkSections();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    checkSections();

    // Smooth-scroll + target flash for clickable highlights
    const handleMarkClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest?.(
        'a.mark-link[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!link) return;
      const targetId = link.getAttribute('href')?.slice(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      const sectionEl = link.closest('.verse-section');
      const sticky = sectionEl?.querySelector<HTMLElement>('.scripture');
      // Include the site nav height so the anchor clears the sticky header too.
      const navEl = document.querySelector<HTMLElement>('nav, header');
      const navH = navEl ? navEl.getBoundingClientRect().height : 0;
      const baseTop = Math.max(stickyTop, navH);
      const offset =
        baseTop + 16 + (sticky ? sticky.getBoundingClientRect().height : 120);
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      // Programmatic scroll can skip native scroll events — re-check after it settles.
      window.setTimeout(checkSections, 500);
      target.classList.remove('target-flash');
      // force reflow so the animation restarts
      void target.offsetWidth;
      target.classList.add('target-flash');
      window.setTimeout(() => target.classList.remove('target-flash'), 1700);
    };

    document.addEventListener('click', handleMarkClick);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      document.removeEventListener('click', handleMarkClick);
      document.documentElement.classList.remove('js');
    };
  }, []);

  return (
    <article className="rich-study">
      <StudyJournal studyId="genesis-1" bookSlug="genesis" chapter={1} bookName="Genesis" />
      <ScriptureRefs />
      <ShareableMarks
        studyId="genesis-1"
        chapterRef="Genesis 1"
        pageUrl="/study/genesis/1"
      />

      <HebrewAudio />
      <ReadingComfortEffects />
      <ChapterProgress
        chapterKey="genesis/1"
        chapterName="Genesis 1"
        bookSlug="genesis"
        chapter={1}
      />

      <div className="study-top-actions">
        <StudyAudioPlayer />
        <ShareButton
          variant="ghost"
          label="Share"
          content={{
            quote: 'How God spoke a world into being — and why every word of it still belongs to you.',
            snippet: 'A deep study guide to Genesis 1: themes, Christ connections, and commitments you can carry this week.',
            ref: 'Genesis 1 · Study Guide',
            variant: 'insight',
            sourceUrl: (typeof window !== 'undefined' ? window.location.origin : 'https://learnofchrist.com') + '/study/genesis/1',
          }}
        />
      </div>

      <p className="intro">
        Genesis 1 tells how God brought the world into being over seven days. Days one through three form the spaces of creation — light, sky, land. Days four through six fill those spaces — sun and moon, fish and birds, animals and humans. Day seven, God rests. Each day follows the same pattern: God speaks, what He speaks comes to be, He calls it good.
      </p>
      <p className="intro">
        The chapter was written into a world full of other creation stories — Babylonian, Egyptian, Canaanite — with violent gods, cosmic battles, and humans made as slaves. Genesis answers them all. One God. Creation by peaceful speech. Humans made in His image. And for the reader on this side of the cross, the fingerprints of Christ are already everywhere: the Word who speaks, the Light before the sun, the Image we are made after, the Rest we are invited into.
      </p>
      <p className="tap-hint">
        Tap any highlighted phrase to jump to the commentary that unpacks it.
      </p>

      <div className="divider">· · ·</div>

      {/* ================= Genesis 1:1–2 ================= */}
      <h2 className="section">
        <span className="ref">Genesis 1:1–2</span>
        The Beginning
      </h2>

      <section className="verse-section">
        <p className="scripture">
          <span className="v">1</span>
          <a className="mark-link" href="#christ-word"><mark className="hp">In the beginning</mark></a>{' '}
          God{' '}
          <a className="mark-link" href="#c-bara"><mark className="hy">created</mark></a>{' '}
          the heaven and the earth.
        </p>
        <p id="c-bara">
          God is not argued for — He is simply already there. The Hebrew verb for &ldquo;created&rdquo; is <em>bara&apos;</em>, used only with God as its subject. Humans can make, shape, fashion; only God <em>bara&apos;</em>s — brings into being something that was not.
        </p>
        <div className="christ" id="christ-word">
          <span className="title">Christ Connection — The Word at Creation</span>
          John opens his Gospel with the same three words Genesis opens with: <em>In the beginning</em>. &ldquo;In the beginning was the Word, and the Word was with God, and the Word was God… All things were made by him&rdquo; (John 1:1, 3). Every time you read &ldquo;And God said&rdquo; in this chapter, John is telling you the one doing the speaking is Jesus. The Father wills, the Son speaks, the Spirit hovers. Creation is a Trinitarian act from the first verse.
        </div>
      </section>

      <section className="verse-section">
        <p className="scripture">
          <span className="v">2</span>
          And the earth was{' '}
          <a className="mark-link" href="#c-tohu"><mark className="hy">without form, and void</mark></a>; and darkness was upon the face of{' '}
          <a className="mark-link" href="#hebrew-tehom"><mark className="hy">the deep</mark></a>. And{' '}
          <a className="mark-link" href="#c-spirit"><mark className="hp">the Spirit of God moved</mark></a>{' '}
          upon the face of the waters.
        </p>
        <p id="c-tohu">
          The earth is described as <em>tohu wa-bohu</em> — &ldquo;wild and waste.&rdquo; Not evil, just unlivable. A shapeless, lifeless place, with the potential for life still locked inside it. This is the canvas God starts with.
        </p>
        <div className="hebrew" id="hebrew-tehom">
          <span className="title">Tehom — &ldquo;the deep&rdquo;</span>
          <span className="script">תְּהוֹם</span>
          <span className="translit"><strong>tehom</strong> · the primeval chaos-waters</span>
          <p className="desc">
            Tehom is cognate with Tiamat, the chaos-sea goddess of Babylonian myth. In Genesis she is demoted to mere dark water. Nothing competes with God here.
          </p>
        </div>
        <p id="c-spirit">
          Into that unfinished place, the Spirit of God is already <em>moving</em>. The Hebrew verb is used elsewhere of an eagle fluttering over its young (Deut. 32:11). God is tender over the chaos before He ever speaks.
        </p>
        <div className="carry">
          The job that fell through, the relationship you don&apos;t know how to fix, the anxiety that won&apos;t settle, the version of yourself you can&apos;t seem to assemble — if something in your life looks like <em>tohu wa-bohu</em>, shapeless and dark and not yet livable, that is exactly where God&apos;s Spirit has always worked. He did not wait for the chaos to organize itself. He moved over it first.
        </div>
      </section>

      <ReflectionBlock
        studyId="genesis-1"
        id="beginning"
        prompt="Where in your life does something look like tohu wa-bohu — unformed, dark, not yet livable? What would change if you actually believed God's Spirit is already moving over it?"
      />

      {/* ================= Day 1 ================= */}
      <h2 className="section">
        <span className="ref">Day 1 · Genesis 1:3–5</span>
        Light
      </h2>

      <section className="verse-section">
        <p className="scripture">
          <span className="v">3</span>
          And God said,{' '}
          <a className="mark-link" href="#christ-light"><mark className="hp">Let there be light</mark></a>: and there was light.
        </p>
        <p id="c-light-before-sun">
          Light appears before the sun, which does not arrive until day four. This is not a scientific oversight — it is a theological statement. Light is not first the product of a burning star; light is first a gift given directly by God. The sun will later be demoted to a lamp God made.
        </p>
        <div className="christ" id="christ-light">
          <span className="title">Christ Connection — The True Light</span>
          &ldquo;God is light, and in him is no darkness at all&rdquo; (1 John 1:5). The One who said <em>let there be light</em> on day one stepped into His own world and said, &ldquo;I am the light of the world&rdquo; (John 8:12). Paul draws the line directly: &ldquo;God, who commanded the light to shine out of darkness, hath shined in our hearts, to give the light of the knowledge of the glory of God in the face of Jesus Christ&rdquo; (2 Cor. 4:6). The same voice, the same light — now with a face.
        </div>
      </section>

      <section className="verse-section">
        <p className="scripture">
          <span className="v">4</span>
          And God saw the light, that it was good: and God{' '}
          <a className="mark-link" href="#c-havdil"><mark className="hy">divided the light from the darkness</mark></a>.
          <span className="v">5</span>
          And God called the light Day, and the darkness he called Night. And the evening and the morning were the first day.
        </p>
        <p id="c-havdil">
          The Hebrew word for &ldquo;divided&rdquo; (<em>havdil</em>) is the priestly word for distinguishing the holy from the common. The first priestly act in the Bible is God&apos;s own — and every act of separation God makes through the rest of the chapter flows from this one.
        </p>
        <div className="carry">
          When God starts to work in a life, the first gift is rarely a flood of sun. It is a line: <em>this is not that.</em> Work hours from family hours. Scrolling from presence. Noise from silence. The voice of the Spirit from the voice of the crowd. Before God fills a life, He almost always starts by dividing one.
        </div>
      </section>

      <ReflectionBlock
        studyId="genesis-1"
        id="day-1"
        prompt="What is the first line God may be asking you to draw this week — work hours from family hours, scrolling from presence, noise from silence? Name it."
      />

      {/* ================= Day 2 ================= */}
      <h2 className="section">
        <span className="ref">Day 2 · Genesis 1:6–8</span>
        The Expanse
      </h2>

      <section className="verse-section">
        <p className="scripture">
          <span className="v">6</span>
          And God said, Let there be a{' '}
          <a className="mark-link" href="#hebrew-raqia"><mark className="hy">firmament</mark></a>{' '}
          in the midst of the waters, and let it divide the waters from the waters.
          <span className="v">7</span>
          And God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament: and it was so.
          <span className="v">8</span>
          And God called the firmament Heaven. And the evening and the morning were the{' '}
          <a className="mark-link" href="#c-day2"><mark className="hg">second day</mark></a>.
        </p>
        <p id="c-day2">
          Day 2 is the only day without &ldquo;God saw that it was good.&rdquo; The separation begun here isn&apos;t finished until day three, when the land appears. A boundary by itself is never the goal — only what it makes room for.
        </p>
        <div className="hebrew" id="hebrew-raqia">
          <span className="title">Raqia&apos; — &ldquo;firmament&rdquo;</span>
          <span className="script">רָקִיעַ</span>
          <span className="translit"><strong>raqia&apos;</strong> · something hammered thin, like beaten metal</span>
          <p className="desc">
            Ancient Israelites pictured the sky as a solid dome holding back heavenly waters. Genesis works inside that picture — it is not teaching us astronomy; it is teaching us who made the sky.
          </p>
        </div>
      </section>

      <ReflectionBlock
        studyId="genesis-1"
        id="day-2"
        prompt="Where is God making room in your life right now? What do you sense He is making room for?"
      />

      {/* ================= Day 3 ================= */}
      <h2 className="section">
        <span className="ref">Day 3 · Genesis 1:9–13</span>
        Dry Land and Green
      </h2>

      <section className="verse-section">
        <p className="scripture">
          <span className="v">9</span>
          And God said, Let the waters under the heaven be gathered together unto one place, and let{' '}
          <a className="mark-link" href="#c-dryland"><mark className="hg">the dry land appear</mark></a>: and it was so.
          <span className="v">10</span>
          And God called the dry land Earth; and the gathering together of the waters called he Seas: and God saw that it was good.
        </p>
        <p id="c-dryland">
          Dry land emerges out of the water. It becomes a pattern the Bible keeps returning to: Noah&apos;s ark coming to rest, Israel crossing the Red Sea, Israel crossing the Jordan. Salvation in Scripture almost always looks like dry ground appearing where there used to be only water.
        </p>
      </section>

      <section className="verse-section">
        <p className="scripture">
          <span className="v">11</span>
          And God said,{' '}
          <a className="mark-link" href="#c-bring-forth"><mark className="hg">Let the earth bring forth</mark></a>{' '}
          grass, the herb yielding{' '}
          <a className="mark-link" href="#christ-seed"><mark className="hp">seed</mark></a>, and the fruit tree yielding fruit after his kind, whose seed is in itself, upon the earth: and it was so.
          <span className="v">12</span>
          And the earth brought forth grass, and herb yielding seed after his kind, and the tree yielding fruit, whose seed was in itself, after his kind: and God saw that it was good.
          <span className="v">13</span>
          And the evening and the morning were the third day.
        </p>
        <p id="c-bring-forth">
          God does not place plants on the earth Himself. He says, &ldquo;Let the earth bring forth,&rdquo; and grants the ground its own capacity to produce. From day three on, creation has a partner in its own fruitfulness. Plants arrive before the sun — life is rooted in God&apos;s word, not in sunlight.
        </p>
        <div className="christ" id="christ-seed">
          <span className="title">Christ Connection — The Seed That Dies</span>
          Three times in the Hebrew: seed, seed, seed. Jesus takes that image and makes it His own: &ldquo;Except a corn of wheat fall into the ground and die, it abideth alone: but if it die, it bringeth forth much fruit&rdquo; (John 12:24). The whole logic of day three — a seed holding life inside itself, buried in the ground, producing more than itself — is the logic of the cross and the empty tomb.
        </div>
        <div className="carry">
          Your spreadsheet, your sermon, your painting, your business, your kids&apos; homework help, the meal you cooked tonight — none of these are competitions with God. They are echoes of day three: the ground bringing forth what God has placed inside it. You are not &ldquo;too busy doing ordinary things&rdquo; to be spiritual. Doing ordinary things well, with a seed He gave you, <em>is</em> spiritual.
        </div>
      </section>

      <div className="divider">· · ·</div>

      <ReflectionBlock
        studyId="genesis-1"
        id="day-3"
        prompt="What is actually bearing fruit in you right now? Where have you been too busy or too hard on yourself to notice it?"
      />

      {/* ================= Day 4 ================= */}
      <h2 className="section">
        <span className="ref">Day 4 · Genesis 1:14–19</span>
        Lights to Rule
      </h2>

      <section className="verse-section">
        <p className="scripture">
          <span className="v">14</span>
          And God said, Let there be lights in the firmament of the heaven to divide the day from the night; and let them be{' '}
          <a className="mark-link" href="#c-rhythms"><mark className="hg">for signs, and for seasons, and for days, and years</mark></a>:
          <span className="v">15</span>
          And let them be for lights in the firmament of the heaven to give light upon the earth: and it was so.
        </p>
        <p id="c-rhythms">
          God made a world of rhythms — morning and evening, summer and winter, planting and harvest. His creation moves in patterns, and His people are meant to live by them.
        </p>
      </section>

      <section className="verse-section">
        <p className="scripture">
          <span className="v">16</span>
          And God made two great lights;{' '}
          <a className="mark-link" href="#c-lamps"><mark className="hg">the greater light</mark></a>{' '}
          to rule the day, and{' '}
          <a className="mark-link" href="#c-lamps"><mark className="hg">the lesser light</mark></a>{' '}
          to rule the night:{' '}
          <a className="mark-link" href="#christ-star"><mark className="hp">he made the stars also</mark></a>.
          <span className="v">17</span>
          And God set them in the firmament of the heaven to give light upon the earth,
          <span className="v">18</span>
          And to rule over the day and over the night, and to divide the light from the darkness: and God saw that it was good.
          <span className="v">19</span>
          And the evening and the morning were the fourth day.
        </p>
        <p id="c-lamps">
          Every culture around ancient Israel worshiped the sun and moon as gods. Genesis refuses to even name them. The sun is &ldquo;the greater light.&rdquo; The moon is &ldquo;the lesser light.&rdquo; The stars get one brief mention. What the nations worshiped, Genesis reduces to lamps. God alone is God.
        </p>
        <div className="christ" id="christ-star">
          <span className="title">Christ Connection — Sun of Righteousness, Morning Star</span>
          The final prophet of the Old Testament calls the coming Messiah &ldquo;the Sun of righteousness… with healing in his wings&rdquo; (Mal. 4:2). The final page of the New Testament has Jesus say, &ldquo;I am the root and the offspring of David, and the bright and morning star&rdquo; (Rev. 22:16). The sun and stars on day four are placeholders. The Light they point to eventually shows up in person — and when He does, the light of sun and stars becomes unnecessary: &ldquo;and the city had no need of the sun… for the Lamb is the light thereof&rdquo; (Rev. 21:23).
        </div>
        <div className="carry">
          The world still asks you to worship the lights — headlines, metrics, the algorithm, the number of followers, the doctor&apos;s scan, the balance in the account. They are useful. They are not God. Today, notice what you check first in the morning. That is the light you are asking to rule your day.
        </div>
      </section>

      <ReflectionBlock
        studyId="genesis-1"
        id="day-4"
        prompt="What 'suns' have been quietly ruling your rhythms — career, approval, a screen, a relationship? What would it look like to demote them back to lamps, with God as the real light?"
      />

      {/* ================= Day 5 ================= */}
      <h2 className="section">
        <span className="ref">Day 5 · Genesis 1:20–23</span>
        Fish and Birds
      </h2>

      <section className="verse-section">
        <p className="scripture">
          <span className="v">20</span>
          And God said, Let the waters bring forth abundantly the moving creature that hath life, and fowl that may fly above the earth in the open firmament of heaven.
          <span className="v">21</span>
          And God created{' '}
          <a className="mark-link" href="#c-seamonsters"><mark className="hg">great whales</mark></a>, and every living creature that moveth, which the waters brought forth abundantly, after their kind, and every winged fowl after his kind: and God saw that it was good.
        </p>
        <p id="c-seamonsters">
          In the stories around Israel, sea monsters were terrifying rivals to the gods. Genesis calls them creatures — made by God, blessed by God, called good. The sea itself, which will be the Bible&apos;s ongoing symbol of chaos, is filled with things God delights in.
        </p>
      </section>

      <section className="verse-section">
        <p className="scripture">
          <span className="v">22</span>
          And{' '}
          <a className="mark-link" href="#c-blessing"><mark className="hg">God blessed them</mark></a>, saying, Be fruitful, and multiply, and fill the waters in the seas, and let fowl multiply in the earth.
          <span className="v">23</span>
          And the evening and the morning were the fifth day.
        </p>
        <p id="c-blessing">
          The first blessing in the Bible is spoken over a fish and a bird. Before humanity exists, God is blessing living things — not as a reward, but as the gift of life&apos;s capacity to keep going. There are exactly three blessings in the Genesis creation account: creatures, humans, and the seventh day. Blessing is not an afterthought in the Bible. It is the architecture of creation.
        </p>
        <div className="carry">
          Step outside today, even for three minutes. Put the phone in your pocket. Look at one living thing — a bird at the feeder, the tree out front, your kid, your dog — and agree out loud with the Creator: &ldquo;It is good.&rdquo; This is not a small practice. It is how the first chapter of the Bible teaches you to see.
        </div>
      </section>

      <ReflectionBlock
        studyId="genesis-1"
        id="day-5"
        prompt="Where do you see blessing multiplying in your life beyond anything you could have produced on your own?"
      />

      {/* ================= Day 6 · Land Animals ================= */}
      <h2 className="section">
        <span className="ref">Day 6 · Genesis 1:24–25</span>
        Land Animals
      </h2>

      <section className="verse-section">
        <p className="scripture">
          <span className="v">24</span>
          And God said, Let the earth bring forth the living creature{' '}
          <a className="mark-link" href="#c-kinds"><mark className="hg">after his kind</mark></a>, cattle, and creeping thing, and beast of the earth after his kind: and it was so.
          <span className="v">25</span>
          And God made the beast of the earth after his kind, and cattle after his kind, and every thing that creepeth upon the earth after his kind: and God saw that it was good.
        </p>
        <p id="c-kinds">
          God makes life in many kinds — each distinct, each specific, each good. Difference is not a problem in creation. It is a design.
        </p>
      </section>

      {/* ================= Day 6 · Image ================= */}
      <h2 className="section">
        <span className="ref">Day 6 · Genesis 1:26–28</span>
        Made in God&apos;s Image
      </h2>

      <section className="verse-section">
        <p className="scripture">
          <span className="v">26</span>
          And God said,{' '}
          <a className="mark-link" href="#c-letusmake"><mark className="hp">Let us make</mark></a>{' '}
          man in our{' '}
          <a className="mark-link" href="#hebrew-tselem"><mark className="hy">image</mark></a>, after our{' '}
          <a className="mark-link" href="#hebrew-tselem"><mark className="hy">likeness</mark></a>: and let them have{' '}
          <a className="mark-link" href="#c-carved-image"><mark className="hy">dominion</mark></a>{' '}
          over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth.
        </p>
        <p id="c-letusmake">
          Notice the shift: &ldquo;Let <em>us</em> make.&rdquo; After five days of solo speech, God speaks to Himself in the plural. Christians have read this, from the earliest centuries, as the first quiet glimpse of the Trinity. The God who will one day be revealed as Father, Son, and Spirit is already in conversation inside Himself before humanity exists.
        </p>
        <p id="c-carved-image">
          In the ancient world, a king would set up a carved image of himself in a distant province — a stone statue declaring <em>this land belongs to me.</em> Genesis uses exactly that word for human beings. Every person is a living statue God has set up in His world. The most revolutionary sentence in ancient literature is right here: not just the king, not just the priest, not just the elite — <em>every human</em> bears the image of God.
        </p>
        <div className="hebrew" id="hebrew-tselem">
          <span className="title">Tselem — &ldquo;image&rdquo;</span>
          <span className="script">צֶלֶם</span>
          <span className="translit"><strong>tselem</strong> · a carved statue; a royal representation</span>
          <p className="desc">
            The verb for dominion is <em>radah</em>, the royal word for how a king rules. Because humans are the image of a God who blesses, separates gently, and calls things good, we rule as He rules: by making space, filling it with life, and calling good what is good.
          </p>
        </div>
      </section>

      <section className="verse-section">
        <p className="scripture">
          <span className="v">27</span>
          So God created man in his own image, in the image of God created he him;{' '}
          <a className="mark-link" href="#christ-image"><mark className="hg">male and female</mark></a>{' '}
          created he them.
          <span className="v">28</span>
          And God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth, and subdue it: and have dominion over the fish of the sea, and over the fowl of the air, and over every living thing that moveth upon the earth.
        </p>
        <div className="christ" id="christ-image">
          <span className="title">Christ Connection — The True Image</span>
          Genesis says humanity is the image of God. Paul goes further and says Jesus <em>is</em> &ldquo;the image of the invisible God&rdquo; (Col. 1:15), and that we are being &ldquo;conformed to the image of his Son&rdquo; (Rom. 8:29). The image was cracked in Eden; Christ is the unbroken Image, the Second Adam (1 Cor. 15:45), and salvation is not only forgiveness — it is being restored to look like Him. Day six was always pointing at Jesus.
        </div>
        <div className="carry">
          Every person you see today is an image of God — the coworker who drains you, the cashier at the grocery store, the driver who cut you off, the kid melting down in aisle five, the face in the mirror. You cannot scroll past an image of God without consequences to your own soul. Treat them accordingly.
        </div>
      </section>

      {/* ================= Day 6 · Very Good ================= */}
      <h2 className="section">
        <span className="ref">Day 6 · Genesis 1:29–31</span>
        Very Good
      </h2>

      <section className="verse-section">
        <p className="scripture">
          <span className="v">29</span>
          And God said, Behold,{' '}
          <a className="mark-link" href="#c-provision"><mark className="hg">I have given you every herb</mark></a>{' '}
          bearing seed, which is upon the face of all the earth, and every tree, in the which is the fruit of a tree yielding seed; to you it shall be for meat.
          <span className="v">30</span>
          And to every beast of the earth, and to every fowl of the air, and to every thing that creepeth upon the earth, wherein there is life, I have given every green herb for meat: and it was so.
        </p>
        <p id="c-provision">
          God provisions the world — every seed-bearing plant for humans, every green plant for animals. He takes responsibility for what He has made.
        </p>
      </section>

      <section className="verse-section">
        <p className="scripture">
          <span className="v">31</span>
          And God saw every thing that he had made, and, behold, it was{' '}
          <a className="mark-link" href="#c-seven-goods"><mark className="hy">very good</mark></a>. And the evening and the morning were the sixth day.
        </p>
        <p id="c-seven-goods">
          Count the word &ldquo;good&rdquo; across Genesis 1 and you get seven — the Bible&apos;s number for completeness. For five days God calls His work &ldquo;good.&rdquo; On the sixth He looks at the whole thing and says something new: <em>very good.</em> The Bible begins with a Creator delighting in what He has made.
        </p>
        <div className="carry">
          Tonight, before you sleep, stop scrolling and look back over your day. Find one or two small things — the coffee that was right, the conversation that landed, the five minutes of sun — and say it out loud: &ldquo;It was good.&rdquo; You are practicing the oldest rhythm in the Bible. God named His work good before He rested. So can you.
        </div>
      </section>

      <div className="divider">· · ·</div>

      <ReflectionBlock
        studyId="genesis-1"
        id="day-6"
        prompt="You were made in God's image. Think back over yesterday. What about how you spent it reflected Him? What obscured Him?"
      />

      {/* ================= Day 7 ================= */}
      <h2 className="section">
        <span className="ref">Day 7 · Genesis 2:1–3</span>
        Rest
      </h2>

      <section className="verse-section">
        <p className="scripture">
          <span className="v">1</span>
          Thus the heavens and the earth were finished, and all the host of them.
          <span className="v">2</span>
          And on the seventh day God ended his work which he had made; and{' '}
          <a className="mark-link" href="#c-king-rests"><mark className="hy">he rested</mark></a>{' '}
          on the seventh day from all his work which he had made.
        </p>
        <p id="c-king-rests">
          God is not tired; the work is simply done. In the ancient world, a king &ldquo;rested&rdquo; when his temple was finished — meaning he moved in and began to reign. Day seven is God taking His place in the world He has made. The whole creation is His temple; humans are the priests inside it; the seventh day is the throne room.
        </p>
      </section>

      <section className="verse-section">
        <p className="scripture">
          <span className="v">3</span>
          And{' '}
          <a className="mark-link" href="#c-sabbath-today"><mark className="hg">God blessed the seventh day</mark></a>, and{' '}
          <a className="mark-link" href="#hebrew-kadosh"><mark className="hy">sanctified it</mark></a>: because that in it he had rested from all his work which God{' '}
          <a className="mark-link" href="#christ-rest"><mark className="hp">created and made</mark></a>.
        </p>
        <p id="c-holy-time">
          The first thing the Bible calls <em>holy</em> is not a place, a person, or a ritual. It is a day. Time itself can be set apart for God.
        </p>
        <div className="hebrew" id="hebrew-kadosh">
          <span className="title">Kadosh — &ldquo;holy&rdquo;</span>
          <span className="script">קָדוֹשׁ</span>
          <span className="translit"><strong>kadosh</strong> · set apart, consecrated</span>
          <p className="desc">
            In a world that consumes every moment with work, God sets apart one full day and says: this belongs to Me, and to you, together.
          </p>
        </div>
        <p id="c-sabbath-today">
          What does a holy day look like right now, in a world of 24/7 notifications, weekend emails, and a calendar that never stops filling? Not a rule to enforce — a rhythm to receive. One day a week where you stop producing and start receiving. Phones in a drawer. A long meal with the people you love. A walk without a podcast. Worship with other believers. Saying out loud what the rest of the week is too busy to admit: <em>the world can turn without me, because God is the one holding it together.</em> The Sabbath is God&apos;s weekly way of teaching you that you are a human, not a machine, and that your worth is never your output.
        </p>
        <div className="christ" id="christ-rest">
          <span className="title">Christ Connection — The True Rest</span>
          God&apos;s rest on day seven is the one day in Genesis 1 that has no &ldquo;evening and morning.&rdquo; It is left open. Hebrews picks that up: &ldquo;There remaineth therefore a rest to the people of God&rdquo; (Heb. 4:9). Jesus steps into that open seventh day and says, &ldquo;Come unto me, all ye that labour and are heavy laden, and I will give you rest&rdquo; (Matt. 11:28). Creation ends with an invitation — an unfinished day waiting for us to enter it through Him.
        </div>
        <div className="carry">
          Pick a day this week. Pick a start time and a stop time. Tell the people you live with. Put the laptop away. Leave the email unanswered. Eat slowly. Read Scripture. Nap without guilt. Go to church. A day of rest is an act of faith that the world is not yours to finish — and the God who finished creation in six days is inviting you into His seventh.
        </div>
      </section>

      <ReflectionBlock
        studyId="genesis-1"
        id="day-7"
        prompt="What would your week look like if one day a week truly belonged to God and to you together? Name the day. Name a start time. Name what you'll set down."
      />

      <div className="study-bottom-share">
        <p className="study-bottom-share-lead">Thought this guide would help someone?</p>
        <ShareButton
          variant="pill"
          label="Share Genesis 1"
          content={{
            quote: 'How God spoke a world into being — and why every word of it still belongs to you.',
            snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
            ref: 'Genesis 1 · Study Guide',
            variant: 'insight',
            sourceUrl: (typeof window !== 'undefined' ? window.location.origin : 'https://learnofchrist.com') + '/study/genesis/1',
          }}
        />
      </div>
    </article>
  );
}
