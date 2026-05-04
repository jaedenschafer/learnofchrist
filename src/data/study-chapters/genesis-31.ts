import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 31 - Jacob&apos;s Secret Flight and the Covenant of Mizpah
 *
 * God tells Jacob to return to Canaan. Jacob secretly departs with wives,
 * children, and flocks. Rachel steals her father&apos;s teraphim (household idols).
 * Laban pursues and overtakes Jacob, searches for the stolen gods, but Rachel
 * hides them under her saddle. The two men erect a stone monument and make
 * a covenant: &ldquo;The LORD watch between me and thee, when we are absent one
 * from another.&rdquo; A beautiful phrase often quoted as a benediction, but the
 * original context shows two men who don&apos;t quite trust each other, needing
 * God to police a boundary.
 */
export const GENESIS_31: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 31,

  estimatedMinutes: { beginner: 12, intermediate: 18, deep: 22 },
  opener: {
    matchTitle: /Jacob/i,
    caption: 'Genesis 31',
  },
  intros: [
    'Genesis 31 is a chapter about departure-about the moment when a man must leave behind the place where he built everything and return to the land God promised him. Jacob has served Laban faithfully for twenty years, but the relationship has soured. Laban keeps changing Jacob&apos;s wages. The sons of Laban, once friendly, now whisper that Jacob has stolen from their father. Jacob is caught between loyalty to the man who took him in and obedience to the God who has been with him.',
    'God breaks the silence. He tells Jacob to go home. And Jacob does something striking: he does not announce his departure. He gathers his wives and children, rounds up his flocks, and leaves in secret. Rachel, Laban&apos;s daughter and Jacob&apos;s beloved, steals her father&apos;s household idols on the way out-an act the text leaves unresolved, with echoes of judgment hanging over it. [res:bibleodyssey-jacob-israel] When Laban chases them down and searches for the gods, he finds nothing. The two men who once were close enough to share a household are now strangers who must ask God to keep watch over a boundary between them.',
  ],

  bottomShare: {
    label: 'Share Genesis 31',
    quote:
      'Jacob fled secretly with his wives, children, and flocks. Laban pursued and overtook him. They erected a stone monument and made a covenant: &ldquo;The LORD watch between me and thee, when we are absent one from another.&rdquo; The Mizpah blessing is not sentimental-it&apos;s a God called to police a boundary between two men who have stopped trusting each other.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 31 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-genesis-31',
      kind: 'lexicon',
      source: 'Sefaria',
      label: 'Genesis 31 · Commentaries & Translations',
      url: 'https://www.sefaria.org/Genesis.31',
      description: 'Rabbinic and academic commentaries on Jacob&apos;s departure and the Mizpah covenant.',
    },
    {
      id: 'iaa-israel-sites',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Canaanite and Patriarchal Sites',
      url: 'https://www.antiquities.org.il/Article/ArticleFull/1',
      description: 'Archaeological records of settlements and family structures in Iron Age Canaan.',
    },
    {
      id: 'bibleodyssey-jacob-israel',
      kind: 'study',
      source: 'Bible Odyssey',
      label: 'Jacob &amp; Israel: Deception, Wrestling, &amp; Divine Naming',
      url: 'https://www.bibleodyssey.org/en/passages/related-articles/Jacob-Israel',
      description: 'Theological exploration of Jacob&apos;s role in covenant continuation and God&apos;s sovereign choice.',
    },
  ],

  sections: [
    /* ─── Genesis 31:1-16 - The Call and the Secret Departure ──────────── */
    {
      ref: 'Genesis 31:1-16',
      title: 'The Divine Call and the Secret Flight',
      blocks: [
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 1,
              spans: [t('And he heard the words of Laban&apos;s sons, saying, Jacob hath '), hy('taken away all that was our father&apos;s', 'c-accusation'), t('; and of that which was our father&apos;s hath he gotten all this glory.')],
            },
            {
              number: 2,
              spans: [t('And Jacob beheld the countenance of Laban, and, behold, it was not toward him as before.')],
            },
            {
              number: 3,
              spans: [t('And the LORD said unto Jacob, '), hp('Return unto the land of thy fathers, and to thy kindred', 'christ-homecoming'), t('; and I will be with thee.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-accusation',
          html: 'The accusation is false--Jacob has built his wealth honestly, as verse 6 will explain. But lies have a way of poisoning relationships. Even when Laban&apos;s sons are speaking envy, Jacob feels the wall going up. [res:sefaria-genesis-31] Sometimes staying becomes impossible the moment the people around you decide it has become so.',
        },
        {
          kind: 'commentary',
          id: 'christ-homecoming',
          html: 'God&apos;s command is not framed as a reward for faithfulness but as a calling. Jacob must leave. Not because Laban has turned cold--though that matters--but because Jacob&apos;s covenant belongs in Canaan, not in Mesopotamia. [res:iaa-israel-sites] God names him to go home.',
        },
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 4,
              spans: [t('And Jacob sent and called Rachel and Leah to the field unto his flock,')],
            },
            {
              number: 5,
              spans: [t('And said unto them, I see your father&apos;s countenance, that it is not toward me as before; but the God of my father hath been with me.')],
            },
            {
              number: 6,
              spans: [t('And ye know that with all my power I have served your father.')],
            },
            {
              number: 7,
              spans: [t('And your father hath deceived me, and changed my wages '), hg('ten times', 'c-ten-times'), t('; but God suffered him not to hurt me.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ten-times',
          html: 'Ten times is completeness, exhaustion. Jacob is not exaggerating--he is naming a pattern of betrayal that has become habitual. Laban promised him wages, then shifted the terms. A relationship built on shifting ground cannot hold.',
        },
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 8,
              spans: [t('If he said thus, The speckled shall be thy wages; then all the cattle bare speckled: and if he said thus, The ringstraked shall be thine; then bare all the cattle ringstraked.')],
            },
            {
              number: 9,
              spans: [t('Thus God hath taken away the cattle of your father, and given them to me.')],
            },
            {
              number: 10,
              spans: [t('And it came to pass at the time that the cattle conceived, that I lifted up mine eyes, and saw in a dream, behold, the rams which leaped upon the cattle were '), hy('ringstraked, speckled, and grisled', 'hebrew-pattern'), t('.')],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-pattern',
          title: 'Ringstraked, Speckled, Grisled - &ldquo;קָלוּד, נָקוּד, בְרוּדִים&rdquo;',
          script: 'קָלוּד, נָקוּד, בְרוּדִים',
          translit: '<strong>qallud, naquod, brudim</strong> · striped, speckled, dappled cattle',
          description: 'The Hebrew words capture every variation in coat pattern. Jacob&apos;s eye is keen and detailed-he notices the particulars of what God is doing for him, not in a mystical dream alone but in the daily patterns of breeding. God works through detail, through the natural laws He made.',
        },
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 11,
              spans: [t('And the angel of God spake unto me in a dream, saying, Jacob: And I said, Here am I.')],
            },
            {
              number: 12,
              spans: [t('And he said, Lift up now thine eyes, and see, all the rams which leap upon the cattle are ringstraked, speckled, and grisled: for I have seen all that Laban doeth unto thee.')],
            },
            {
              number: 13,
              spans: [t('I am the God of Bethel, where thou anointedst the pillar, and where thou vowedst a vow unto me: now arise, get thee out from this land, and return unto the land of thy kindred.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-bethel-memory',
          html: 'God does not argue Jacob into obedience. He reminds him. Bethel--the place where Jacob once saw the ladder and made a vow to God--becomes the anchor for this new command. God is saying: <em>You made me a promise there. This is how you keep it.</em> The vow Jacob made in desperation, fleeing from Esau, is now being called back in his name.',
        },
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 14,
              spans: [t('And Rachel and Leah answered and said unto him, Is there yet any portion or inheritance for us in our father&apos;s house?')],
            },
            {
              number: 15,
              spans: [t('Are we not accounted of him strangers? for he hath sold us, and hath quite devoured also our '), hg('money', 'c-money-spent'), t('.')],
            },
            {
              number: 16,
              spans: [t('For all the riches which God hath taken to our father, it is ours, and our children&apos;s: now then, whatsoever God hath said unto thee, do.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-money-spent',
          html: 'The wives have a legitimate claim. In ancient custom, the bride-price belonged to the family, and if a man remarried the daughters of a different father, his wealth should remain in the household. But Laban has spent it. Rachel and Leah are saying: <em>We have no home here. We have no inheritance. God has made us your wives--let us follow you to yours.</em> It is both practical and loyal.',
        },
        {
          kind: 'carry',
          html: 'There are seasons when staying becomes impossible even though it once was home. When the people around you change, when the trust erodes, when the promises that held everything together start to unravel--sometimes obedience looks like leaving, and sometimes leaving is the only way to honor the promises you made before. If you sense God calling you to go somewhere, to leave something behind, listen to the women and men who love you. If they are willing to follow, move toward what God is calling you toward.',
        },
        {
          kind: 'reflection',
          id: 'gen31-call',
          prompt: 'Is God calling you away from something that once was good-a place, a season, a relationship? What is one small thing you can do this week to begin honoring that calling?',
        },
      ],
    },

    /* ─── Genesis 31:17-25 - The Departure and the Pursuit ──────────────── */
    {
      ref: 'Genesis 31:17-25',
      title: 'Laban Pursues',
      blocks: [
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 17,
              spans: [t('Then Jacob rose up, and set his sons and his wives upon camels;')],
            },
            {
              number: 18,
              spans: [t('And he carried away all his cattle, and all his goods which he had gotten, the cattle of his getting, which he had in Padan-aram, for to go to Isaac his father in the land of Canaan.')],
            },
            {
              number: 19,
              spans: [t('Now Laban was gone to shear his sheep: and Rachel had '), hg('stolen the images', 'c-stolen-images'), t(' that were her father&apos;s.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-stolen-images',
          html: 'Rachel steals the <em>teraphim</em>--small household idols believed in the ancient Near East to confer inheritance rights and protection on a household. Why does she take them? The text never tells us. She might believe they protect her on the journey. She might be reclaiming what she sees as rightfully hers--a daughter&apos;s share of the household gods. Or she might be acting out of bitterness toward a father who has treated her like a commodity. The text leaves the theft unresolved, and that silence is important. Not every act of disobedience the Bible records is directly condemned.',
        },
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 20,
              spans: [t('And Jacob stole away unawares to Laban the Syrian, in that he told him not that he fled.')],
            },
            {
              number: 21,
              spans: [t('So he fled with all that he had; and he rose up, and passed over the river, and set his face toward the mount Gilead.')],
            },
            {
              number: 22,
              spans: [t('And it was told Laban on the third day that Jacob was fled.')],
            },
            {
              number: 23,
              spans: [t('And he took his brethren with him, and pursued after him seven days&apos; journey; and they overtook him in the mount Gilead.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-silence-matters',
          html: 'Jacob leaves without saying goodbye. For a man who has just received a direct command from God, he is oddly secretive. He does not announce the departure. He does not ask permission. He simply goes--and in doing so, he exposes how deep the mistrust has become. Two men who once shared a tent and a life cannot speak to each other anymore.',
        },
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 24,
              spans: [t('And God came to Laban the Syrian in a dream by night, and said unto him, '), hp('Take heed that thou speak not to Jacob either good or bad', 'christ-mediation'), t('.')],
            },
            {
              number: 25,
              spans: [t('Then Laban overtook Jacob. Now Jacob had pitched his tent in the mount: and Laban with his brethren pitched in the mount Gilead.')],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'christ-mediation',
          title: 'Christ Connection - The Mediator Between Brothers',
          html: 'God intervenes in the confrontation before it happens. He speaks to Laban and puts a boundary around what Laban is allowed to say. This is the first function of a mediator--not to resolve everything, but to prevent the stronger party from destroying the weaker. Christ, in His role as Judge, stands between sinful humanity and the holiness of God in precisely this way: He does not eliminate justice, but He prevents our condemnation from being final. &ldquo;If any man sin, we have an advocate with the Father, Jesus Christ the righteous&rdquo; (1 John 2:1). God speaking to Laban, silencing his anger before words are spoken, is a small picture of that much larger intercession.',
        },
        {
          kind: 'carry',
          html: 'The next time you are about to say something to someone in anger--something you might later regret--pause. God spoke to Laban in the night and silenced his voice. The Holy Spirit can do the same for you. Not to suppress truth, but to make sure that truth is spoken in its time, in wisdom, to the right audience.',
        },
        {
          kind: 'reflection',
          id: 'gen31-mediation',
          prompt: 'Is there a conversation you are dreading with someone? What would change if you asked God to intervene before the words are spoken?',
        },
        {
          kind: 'artwork',
          matchTitle: /jacob.*laban|laban.*jacob/i,
          caption: 'Genesis 31:17-25 · The Pursuit Begins',
        },
      ],
    },

    /* ─── Genesis 31:26-35 - The Search for the Teraphim ──────────────── */
    {
      ref: 'Genesis 31:26-35',
      title: 'The Search and Rachel&apos;s Deception',
      blocks: [
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 26,
              spans: [t('And Laban said to Jacob, What hast thou done? that thou hast stolen away unawares to me, and carried away my daughters, as captives taken with the sword?')],
            },
            {
              number: 27,
              spans: [t('Wherefore didst thou flee secretly, and steal away from me? and didst not tell me, that I might have sent thee away with mirth, and with songs, with tabret, and with harp;')],
            },
            {
              number: 28,
              spans: [t('And hast not suffered me to kiss my sons and my daughters? thou hast now done foolishly in so doing.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-laban-wounded',
          html: 'Laban is wounded, and his words betray it. He speaks as if Jacob has kidnapped his daughters, as if the man he loved has robbed him. Notice what Laban does not mention first: the livestock, the wealth. He grieves the daughters. It is a moment of real pain beneath the anger, and it complicates the picture. Laban is not simply a tyrant--he is a father losing his children without goodbyes.',
        },
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 29,
              spans: [t('It is in the power of my hand to do you hurt: but the God of your father spake unto me yesternight, saying, Take heed that thou speak not to Jacob either good or bad.')],
            },
            {
              number: 30,
              spans: [t('And now, though thou wouldest needs be gone, because thou sore longedst after thy father&apos;s house, yet wherefore hast thou stolen my gods?')],
            },
            {
              number: 31,
              spans: [t('And Jacob answered and said to Laban, Because I was afraid: for I said, Peradventure thou wouldest take thy daughters from me by force.')],
            },
            {
              number: 32,
              spans: [t('With whomsoever thou findest thy gods, '), hp('let him not live', 'c-curse-spoken'), t(': before our brethren point thou out what is thine with me, and take it to thee. For Jacob knew not that Rachel had stolen them.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-curse-spoken',
          html: 'Jacob, not knowing Rachel has the images, makes a curse: <em>let him not live.</em> It hangs in the air. Jacob will learn later that Rachel is pregnant with Benjamin, her second son. She will die giving birth to him (35:19), bringing Jacob&apos;s unwitting curse to pass. The text does not explicitly say the curse caused her death, but the echo is there, and generations of readers have heard it. Not every word we speak carelessly goes harmless into the air.',
        },
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 33,
              spans: [t('And Laban went into Jacob&apos;s tent, and into Leah&apos;s tent, and into the two maidservants&apos; tents; but he found them not. Then went he out of Leah&apos;s tent, and entered into Rachel&apos;s tent.')],
            },
            {
              number: 34,
              spans: [t('Now Rachel had taken the images, and put them in the camel&apos;s furniture, and sat upon them. And Laban searched all the tent, but found them not.')],
            },
            {
              number: 35,
              spans: [t('And she said to her father, Let it not displease my lord that I cannot rise up before thee; for the custom of women is upon me. And he searched, but found not the images.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-rachel-sits',
          html: 'Rachel sits on the gods. It is a gesture of profound disrespect in the ancient world--a woman, ritually unclean according to her own culture&apos;s standards, sitting on her father&apos;s household deities. She uses the very thing that makes her unclean--menstruation--to protect what she has stolen. She has inverted the household order completely. The gods that were meant to protect the family now rest under the body of the woman Laban tried to control.',
        },
        {
          kind: 'carry',
          html: 'We don&apos;t often talk about the women in these stories--the ones who act, who resist, who refuse to be purely passive in their own fates. Rachel is neither villain nor saint in this moment. She is a woman caught between loyalty to a father who sold her and loyalty to a husband she loves. She chooses. It costs her everything eventually. But in this moment, she chooses her own future. Whatever you are carrying--a secret, a theft, a choice you have made that the world does not yet know--you don&apos;t have to defend it with lies forever. But you also don&apos;t have to rush to confess it to people who have not earned your trust.',
        },
        {
          kind: 'reflection',
          id: 'gen31-rachel',
          prompt: 'When have you had to choose between honoring an old loyalty and protecting your own future? What did you learn about yourself in that moment?',
        },
      ],
    },

    /* ─── Genesis 31:36-42 - Jacob&apos;s Defense ────────────────────────── */
    {
      ref: 'Genesis 31:36-42',
      title: 'Jacob Speaks His Truth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 36,
              spans: [t('And Jacob was wroth, and chode with Laban: and Jacob said unto Laban, What is my trespass? what is my sin, that thou hast so hotly pursued after me?')],
            },
            {
              number: 37,
              spans: [t('Whereas thou hast searched all my stuff, what hast thou found of all thy household stuff? set it here before my brethren and thy brethren, that they may judge betwixt us both.')],
            },
            {
              number: 38,
              spans: [t('This twenty years have I been with thee; thy ewes and thy she goats have not cast their young: and the rams of thy flock have I not eaten.')],
            },
            {
              number: 39,
              spans: [t('Neither did I bring unto thee that which was torn of beasts; I bare the loss of it: of my hand didst thou require it, whether stolen by day, or stolen by night.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-jacob-accounting',
          html: 'Jacob is not claiming perfection. He is claiming faithfulness. For twenty years, he bore losses that belonged to the owner--the animals that died, the ones torn by beasts. He demanded nothing of Laban in return. He is asking: <em>What more do you want from me?</em> It is a legitimate question of a man worn out by ingratitude.',
        },
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 40,
              spans: [t('Thus I was; in the day the drought consumed me, and the frost by night; and my sleep departed from mine eyes.')],
            },
            {
              number: 41,
              spans: [t('Thus have I served thee fourteen years for thy two daughters, and six years for thy cattle: and thou hast changed my wages ten times.')],
            },
            {
              number: 42,
              spans: [t('Except the God of my father, the God of Abraham, and the fear of Isaac, had been with me, surely thou hadst sent me away now empty: God hath seen my affliction and the labour of my hands, and rebuked thee yesternight.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-god-vindication',
          html: 'Jacob&apos;s final appeal is not to Laban&apos;s fairness but to God&apos;s justice. <em>Except the God of my father had been with me</em>--this is the refrain that runs through Jacob&apos;s whole journey. He has been alone, far from home, working for a man who betrays him repeatedly, and the only thing that has kept him from utter ruin is that God saw him. God witnessed his suffering. God defended him. This is the language of vindication, not triumph. Jacob has been justified by One greater than Laban, and that is enough.',
        },
        {
          kind: 'christ',
          id: 'christ-vindication',
          title: 'Christ Connection - The Servant Vindicated by God',
          html: 'Jacob serves faithfully and is repaid with betrayal and changing terms. His only recourse is to the God who sees him. Isaiah describes a suffering servant in much the same language: &ldquo;He was oppressed, and he was afflicted, yet he opened not his mouth... Like a lamb that is led to the slaughter... he shall see his seed, he shall prolong his days, and the pleasure of the LORD shall prosper in his hand&rdquo; (Isa. 53:7, 10). Christ, the ultimate servant, was never vindicated in His earthly lifetime by the powers that opposed Him. His vindication came from God the Father, in the resurrection. Every faithful servant since learns from both Jacob and Christ that the world&apos;s recognition is not the goal--God&apos;s recognition is.',
        },
        {
          kind: 'carry',
          html: 'If you are in a season where your faithfulness is not being acknowledged, where your work is taken for granted, where someone in power keeps moving the terms--look to God. Not as a way to excuse the injustice, but as a way to stay standing. God sees you. God witnesses your affliction and your labor. That seeing is not nothing. It is not everything you want, but it is real, and it is more solid than any human recognition could be.',
        },
        {
          kind: 'reflection',
          id: 'gen31-vindication',
          prompt: 'Where in your life are you serving faithfully but not being recognized for it? How does it change things to know that God sees you, even if no one else does?',
        },
      ],
    },

    /* ─── Genesis 31:43-55 - The Covenant of Mizpah ─────────────────────── */
    {
      ref: 'Genesis 31:43-55',
      title: 'The Covenant of Mizpah',
      blocks: [
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 43,
              spans: [t('And Laban answered and said unto Jacob, These daughters are my daughters, and these children are my children, and these cattle are my cattle, and all that thou seest is mine: and what can I do this day unto these my daughters, or unto their children which they have born?')],
            },
            {
              number: 44,
              spans: [t('Now therefore come thou, let us make a covenant, I and thou; and let it be for a witness between me and thee.')],
            },
            {
              number: 45,
              spans: [t('And Jacob took a stone, and set it up for a pillar.')],
            },
            {
              number: 46,
              spans: [t('And Jacob said unto his brethren, Gather stones: and they took stones, and made an heap: and they did eat there upon the heap.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-laban-last-claim',
          html: 'Laban&apos;s words are both true and false. Yes, he is Jacob&apos;s father-in-law and has legal claims. But Jacob has paid for every daughter and every lamb with his own labor. The moment Laban invokes these claims is the moment he loses the power to enforce them. He cannot touch Jacob now. God has made that clear. So instead, Laban asks for something different: a boundary. A witness. Something to mark that two men who were once close can no longer be trusted together.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-mizpah',
          title: 'Mizpah - &ldquo;Watchtower&rdquo;',
          script: 'מִצְפָּה',
          translit: '<strong>Mizpah</strong> · watchtower, lookout; from the root meaning &ldquo;to watch&rdquo;',
          description: 'The name of the covenant comes from its form: a stone heap serving as a watchtower between two territories. It is a boundary marker, a monument to the fact that two parties can no longer inhabit the same space without risk. The name itself encodes what the covenant is for: watching, surveillance, protection against violation.',
        },
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 47,
              spans: [t('And Laban called it '), hy('Jegar-sahadutha', 'hebrew-jegar'), t(': but Jacob called it '), hy('Galeed', 'hebrew-galeed'), t('.')],
            },
            {
              number: 48,
              spans: [t('And Laban said, This heap is a witness between me and thee this day. Therefore was the name of it called Mizpah;')],
            },
            {
              number: 49,
              spans: [t('For he said, The LORD watch between me and thee, when we are absent one from another.')],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-jegar',
          title: 'Yegar-Sahadutha - &ldquo;Heap of Witness&rdquo; (Aramaic)',
          script: 'יְגַר שָׂהֲדוּתָא',
          translit: '<strong>Yegar-Sahadutha</strong> · Aramaic for &ldquo;heap of witness&rdquo;',
          description: 'One of the few Aramaic phrases in Genesis, a signal that Laban is speaking in his own language, asserting his own identity at the boundary. Both men name the heap in their own tongues-Aramaic and Hebrew-each claiming it as a monument to their own culture.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-galeed',
          title: 'Galeed - &ldquo;Heap of Witness&rdquo; (Hebrew)',
          script: 'גַּלְעֵד',
          translit: '<strong>Galeed</strong> · Hebrew for &ldquo;heap of witness&rdquo;; also the name of the region where the covenant is made',
          description: 'Jacob gives the heap the Hebrew name, marking it as part of the land he will claim. The two names-Aramaic and Hebrew-stand side by side, each man asserting his place, his language, his right to name what lies between them.',
        },
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 50,
              spans: [t('If thou shalt afflict my daughters, or if thou shalt take other wives beside my daughters, no man is with us; see, God is judge between me and thee.')],
            },
            {
              number: 51,
              spans: [t('And he said unto Jacob, Behold this heap, and behold this pillar, which I have cast betwixt me and thee;')],
            },
            {
              number: 52,
              spans: [t('This heap be witness, and this pillar be witness, that I will not pass over this heap to thee, and that thou shalt not pass over this heap and this pillar unto me, for harm.')],
            },
            {
              number: 53,
              spans: [t('The God of Abraham, and the God of Nahor, the God of their father, '), hp('judge betwixt us', 'christ-judge'), t('. And Jacob sware by the fear of his father Isaac.')],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'christ-judge',
          title: 'Christ Connection - The Judge Between Brothers',
          html: 'Laban and Jacob invoke God as a judge to arbitrate between them. &ldquo;The God of Abraham and the God of Nahor... judge betwixt us.&rdquo; Neither man trusts the other to keep the covenant, so they appeal to One who stands outside both of them. Christ, in His role as Judge, fulfills this function on a cosmic scale: He stands between sinful humanity and a holy God, between the accusations of the enemy and the mercy of the Father, between our worst selves and our redeemed selves. He does not abolish the boundary between what is right and what is wrong; He stands at that boundary and mediates. &ldquo;Who shall lay any thing to the charge of God&apos;s elect? It is Christ that died, yea rather, that is risen again&rdquo; (Rom. 8:33--34).',
        },
        {
          kind: 'scripture',
          chapter: 31,
          lines: [
            {
              number: 54,
              spans: [t('Then Jacob offered sacrifice upon the mount, and called his brethren to eat bread: and they did eat bread, and tarried all night in the mount.')],
            },
            {
              number: 55,
              spans: [t('And early in the morning Laban rose up, and kissed his sons and his daughters, and blessed them: and Laban departed, and returned unto his place.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-covenant-meal',
          html: 'Before they part, they eat together. The covenant is sealed not in anger but in a shared meal, a moment where they remember that they were once family. Laban blesses his daughters and grandchildren before he leaves. It is a sad goodbye--a goodbye that marks an ending of intimacy--but it is a goodbye, not a war. Two men who cannot live together have found a way to part without destroying each other.',
        },
        {
          kind: 'carry',
          html: 'The Mizpah blessing is often quoted as a sweet benediction: &ldquo;The Lord watch between me and thee.&rdquo; But the original context is two people who have stopped trusting each other, who need God to be the one keeping watch because they cannot trust themselves to keep the boundary. That is the real power of the blessing. It is for seasons when relationships change, when closeness becomes impossible, when all you can do is ask God to keep guard over the space between you. If you are in a relationship that has changed shape, where once there was intimacy and now there is distance, the Mizpah blessing is for you--not as a romantic promise, but as a prayer that God will be faithful where human trust has failed.',
        },
        {
          kind: 'reflection',
          id: 'gen31-mizpah',
          prompt: 'Is there a relationship in your life that has changed shape-where you once were close and now are distant? What would it mean to ask God to &ldquo;watch between me and thee&rdquo; in that space?',
        },
        {
          kind: 'artwork',
          matchTitle: /mizpah|covenant.*stone|stone.*covenant/i,
          caption: 'Genesis 31:43-55 · The Covenant at Mizpah',
        },
      ],
    },
  ],
};
