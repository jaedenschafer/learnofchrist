import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Deuteronomy 13 — Three sources of seduction toward false gods.
 * The supremacy of God&apos;s character over signs and wonders.
 * Loyalty to God comes before loyalty to family.
 * The community responsibility for purity.
 */
export const DEUTERONOMY_13: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 13,

  estimatedMinutes: { beginner: 9, intermediate: 15, deep: 19 },
  topicTags: ['covenant', 'faithfulness', 'leadership', 'love'],
  opener: {
    topical: true,
    caption: 'Deuteronomy 13',
  },
  intros: [
    'Deuteronomy 13 is a chapter about testing. Not God testing you — you testing the prophets, the friends, the voices that come to you claiming to speak for God. The chapter presents three cases: a prophet who performs wonders but turns hearts toward false gods, an intimate family member who entices you secretly, and an entire city seduced into idolatry. In each case, the community is called to judge and respond. The lesson beneath all three is the same: signs and wonders are not the test. Character is the test. Whose god? That is the only question that matters.',
    'This is a chapter about loyalty. Jesus will later echo its hard logic — loyalty to Him comes before loyalty to mother or father or wife (Luke 14:26). The deepest seductions always come through someone close. Israel is a covenanted nation; every member has a stake in the nation&apos;s allegiance. Purity in ancient Israel was not a personal matter — it was a community matter. The church under the new covenant disciplines differently, through rebuke and exclusion (1 Corinthians 5), not the sword. But the principle persists: our loyalty to God must be unswerving, even when the seduction comes from someone we love.',
  ],

  bottomShare: {
    label: 'Share Deuteronomy 13',
    quote:
      'Test the voice that claims to speak for God. Judge by character and allegiance, not by signs and wonders. Loyalty to God comes before loyalty even to the closest person in your life.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Deuteronomy 13 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-deuteronomy-13',
      kind: 'study',
      source: 'Sefaria',
      label: 'Deuteronomy 13',
      url: 'https://www.sefaria.org/Deuteronomy.13',
      description: 'Open-access source text and rabbinic commentary on testing false prophets, evaluating claims to divine authority, and covenant loyalty.',
    },
    {
      id: 'false-prophets-idolatry-bible-odyssey',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'False Prophets and Tests of Authenticity',
      url: 'https://www.bibleodyssey.org/dictionary/prophet/',
      description: 'Theological entry on how to discern true from false prophets and the biblical test of authentic divine revelation.',
    },
    {
      id: 'cherem-devoted-destruction-ancient-israel',
      kind: 'archaeology',
      source: 'Bible Odyssey (SBL)',
      label: 'Cherem — Covenant Violation and Total Destruction',
      url: 'https://www.bibleodyssey.org/topical-article/idolatry/',
      description: 'Explores the practice of cherem in ancient Israel where covenant-breaking communities were destroyed entirely, reflecting the theological boundary between faithfulness and apostasy.',
    },
  ],

  sections: [
    /* ─── The False Prophet or Dreamer ─────────────────────────────── */
    {
      ref: 'Deuteronomy 13:1–5',
      title: 'The False Prophet or Dreamer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 1,
              spans: [
                t('If there arise among you a '),
                hy('prophet', 'heb-navi'),
                t(', or a dreamer of dreams, and he giveth thee a sign or a wonder,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And the '),
                hg('sign or the wonder come to pass', 'c-sign-comes'),
                t(', whereof he spake unto thee, saying, Let us go after other gods, which thou hast not known, and let us serve them;'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Thou shalt not hearken unto the words of that prophet, or that dreamer of dreams: for the '),
                hp('Lord your God proveth you', 'christ-test-you'),
                t(', to know whether ye love the Lord your God with all your heart and with all your soul.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Ye shall walk after the Lord your God, and fear him, and keep his commandments, and obey his voice, and ye shall serve him, and cleave unto him.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And that prophet, or that dreamer of dreams, shall be '),
                hg('put to death', 'c-death-false'),
                t('; because he hath '),
                hg('spoken to turn you away from the Lord your God', 'c-turn-away'),
                t(', which brought you out of the land of Egypt, and redeemed you out of the house of bondage, to thrust thee out of the way which the Lord thy God commanded thee to walk in. So shalt thou put the evil away from the midst of thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sign-comes',
          html:
            'The sign or wonder comes to pass. It happens. The prediction proves true. This is not a case of a false prophet whose signs fail — it is precisely the opposite. This is the harder case: the sign is real, but the god is false [res:false-prophets-idolatry-bible-odyssey]. Many will ask: how can we know? How can we distinguish a real wonder from a false one? Deuteronomy says: don&apos;t judge by the sign. Judge by the god [res:sefaria-deuteronomy-13].',
        },
        {
          kind: 'hebrew',
          id: 'heb-navi',
          title: 'Navi — "prophet"',
          script: 'נָבִיא',
          translit: '<strong>navi</strong> · one who speaks forth, a proclaimer',
          description:
            'A prophet speaks the word of someone higher. The question is always: whose word is he speaking? If he speaks God&apos;s word toward God&apos;s character, he is a true prophet. If he speaks toward other gods, he is false — no matter how real the sign.',
        },
        {
          kind: 'commentary',
          id: 'c-turn-away',
          html:
            'The offense is not the sign. It is the turning away. Deuteronomy defines the false prophet by his function: he turns hearts away from the Lord. The wonder itself is merely the tool of the seduction. In the ancient world, false prophets surrounded Israel — prophets of Baal and Asherah who could apparently produce results, healings, wonders. The point of this chapter is to tell Israel: do not be fooled by results. Judge by trajectory. Is this voice turning you toward the Lord or away from Him?',
        },
        {
          kind: 'christ',
          id: 'christ-test-you',
          title: 'Christ Connection — The Spirit Tests',
          html:
            'Paul applies this directly to the new covenant: &ldquo;Beloved, believe not every spirit, but try the spirits whether they are of God: because many false prophets are gone out into the world&rdquo; (1 John 4:1). And in Galatians, he is explicit: &ldquo;Though we, or an angel from heaven, preach any other gospel unto you than that which we have preached unto you, let him be accursed&rdquo; (Galatians 1:8). A sign or wonder is not the test. The god at the end of the road is the test. Jesus constantly refused to validate Himself by signs. When the Pharisees demanded a sign, He refused. The only sign He offered was the sign of Jonah — the resurrection, which comes after apparent defeat. This is the opposite of the false prophet&apos;s way.',
        },
        {
          kind: 'commentary',
          id: 'c-death-false',
          html:
            'In ancient Israel, a theocracy, the false prophet is put to death. The church under the new covenant does not wield the sword; it disciplines through exclusion and rebuke (Matthew 18, 1 Corinthians 5). But the principle is the same: false prophets are not tolerated. They threaten the entire covenant community. This is a harsh text, and it needs to be read in its own context — a nation-state held together by covenant with God, where apostasy threatened the whole.'
        },
        {
          kind: 'carry',
          html:
            'Every day you hear voices claiming to lead you. Some come with impressive credentials, published books, viral posts, real results. But do they lead you toward the God you know in Jesus, or away from Him? Do they call you deeper into obedience to His character, or into something easier that feels spiritual? The test is not whether the voice sounds true or produces results. The test is the trajectory: are you walking toward the Lord your God, or away?'
        },
        {
          kind: 'reflection',
          id: 'refl-prophet',
          prompt: 'What voice in your life right now is loudest? Does it lead you closer to Jesus or further away?'
        },
      ],
    },

    /* ─── The Seducing Intimate ─────────────────────────────────── */
    {
      ref: 'Deuteronomy 13:6–11',
      title: 'The Seducing Intimate',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 6,
              spans: [
                t('If thy brother, the son of thy mother, or thy son, or thy daughter, or '),
                hy('the wife of thy bosom', 'heb-wife-bosom'),
                t(', or thy friend, which is as thine own soul, entice thee '),
                hy('secretly', 'heb-sut'),
                t(', saying, Let us go and serve other gods, which thou hast not known, thou, nor thy fathers;'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Namely, of the gods of the people which are round about you, nigh unto thee, or far off from thee, from the one end of the earth even unto the other end of the earth;'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Thou shalt not consent unto him, nor hearken unto him; neither shall thine eye pity him, neither shalt thou spare him, neither shalt thou conceal him:'),
              ],
            },
            {
              number: 9,
              spans: [
                t('But thou shalt surely kill him: '),
                hg('thine hand shall be first upon him', 'c-hand-first'),
                t(' to put him to death, and afterwards the hand of all the people.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And '),
                hg('thou shalt stone him with stones', 'c-stone'),
                t(', that he die; because he hath sought to thrust thee away from the Lord thy God, which brought thee out of the land of Egypt, from the house of bondage.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And all Israel shall hear, and fear, and shall not do any more any such wickedness as this is among you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'heb-wife-bosom',
          html:
            'The phrase &ldquo;the wife of thy bosom&rdquo; speaks of intimacy — the person you sleep beside, trust with your secrets, build a life with. The point is deliberate: the deepest seduction comes from the closest person. This is Eden&apos;s lesson repeated. The serpent did not approach Adam alone in the garden and demand he eat the fruit. The serpent came to the woman first, and it was the woman — the person Adam loved most — who gave him the fruit. The same dynamic appears throughout Scripture. Samson is betrayed by Delilah, not by a stranger. Peter denies Jesus after walking with Him for three years. The seduction is always most dangerous when it comes through someone you love.',
        },
        {
          kind: 'hebrew',
          id: 'heb-sut',
          title: 'Sut — "entice, seduce"',
          script: 'סוּת',
          translit: '<strong>sut</strong> · to incite, instigate, entice away',
          description:
            'The word carries the sense of being drawn away from your true path by someone close. It is not a crude command but a soft seduction — a whisper from someone whose voice you trust.'
        },
        {
          kind: 'commentary',
          id: 'c-hand-first',
          html:
            'The witness — the person who hears the seduction — must be the first to execute the sentence. This seems designed to prevent vendetta killings disguised as religious justice. If you are the one who heard the seduction, your own hand must be first. You cannot hide behind the crowd. You own the judgment. Again: this is ancient Israel&apos;s law of the land. The church does not execute the false teacher; it exercises church discipline through Word and community.',
        },
        {
          kind: 'commentary',
          id: 'c-stone',
          html:
            'Stoning in ancient Israel was a community execution — it involved everyone. No one could hide. No one could pretend. This was a method designed to prevent secret or individual revenge and to make the judgment transparent. The entire community participated in upholding the covenant they had made together.',
        },
        {
          kind: 'christ',
          id: 'christ-loyalty',
          title: 'Christ Connection — Loyalty Before Family',
          html:
            'Jesus applies this principle with shocking directness: &ldquo;If any man come to me, and hate not his father, and mother, and wife, and children, and brethren, and sisters, yea, and his own life also, he cannot be my disciple&rdquo; (Luke 14:26). He is not calling for literal hatred. He is stating the priority: loyalty to God comes first, before every human relationship, even the closest one. Paul echoes it: &ldquo;Be ye not unequally yoked with unbelievers&rdquo; (2 Corinthians 6:14). The principle is ancient and consistent: no human relationship can override your allegiance to God.',
        },
        {
          kind: 'carry',
          html:
            'The person who entices you from God today probably won&apos;t be a stranger. It will be someone close to you. A spouse suggesting you abandon church for their comfort. A parent pushing you toward security instead of faith. A friend inviting you into a compromise you know is wrong. The hardest obedience is saying no to the people you love most. But that obedience is the test. Loyalty to God is not real until it costs you something you genuinely value.'
        },
        {
          kind: 'reflection',
          id: 'refl-intimate',
          prompt: 'Is there someone close to you whose voice might be leading you away from God? How do you stay loyal to God without rejecting them?'
        },
      ],
    },

    /* ─── The Apostate City ────────────────────────────────────── */
    {
      ref: 'Deuteronomy 13:12–18',
      title: 'The Apostate City',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 12,
              spans: [
                t('If thou shalt hear say in one of thy cities, which the Lord thy God hath given thee to dwell there, saying,'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Certain men, the '),
                hy('children of Belial', 'heb-belial'),
                t(', are gone out from among you, and have '),
                hg('withdrawn the inhabitants of their city', 'c-withdraw-city'),
                t(', saying, Let us go and serve other gods, which ye have not known;'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Then shalt thou enquire, and make search, and ask diligently; and, behold, if it be truth, and the thing certain, that such abomination is wrought among you;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deuteronomy_13_v12-18',
          html:
            '<p>Weaving God&apos;s ongoing care through each command and promise.</p>',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 15,
              spans: [
                t('Thou shalt surely smite the inhabitants of that city with the edge of the sword, '),
                hg('destroying it utterly', 'c-destroy-all'),
                t(', and all that is therein, and the cattle thereof, with the edge of the sword.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And thou shalt gather all the spoil of it into the midst of the street thereof, and shalt burn with fire the city, and all the spoil thereof every whit, for the Lord thy God: and it shall be an heap for ever; it shall not be built again.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And '),
                hg('there shall cleave naught of the cursed thing', 'c-cursed-thing'),
                t(' to thine hand: that the Lord may turn from the fierceness of his anger, and shew thee mercy, and have compassion upon thee, and multiply thee, as he hath sworn unto thy fathers;'),
              ],
            },
            {
              number: 18,
              spans: [
                t('When thou shalt hearken to the voice of the Lord thy God, to keep all his commandments which I command thee this day, to do that which is right in the eyes of the Lord thy God.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'heb-belial',
          title: 'Belial — "worthlessness"',
          script: 'בְלִיַּעַל',
          translit: '<strong>belial</strong> · destruction, ruin; applied to the enemies of God',
          description:
            'A name that eventually comes to mean Satan himself. Here it simply means those who have abandoned covenant and reason — the worthless, the wicked. The children of Belial are those who have decided to unmake the covenant their entire community was bound by.'
        },
        {
          kind: 'commentary',
          id: 'c-withdraw-city',
          html:
            'One of the tests here is that you must verify the report. You cannot act on rumor. &ldquo;Make search and ask diligently&rdquo; — the truth must be certain before judgment falls. This is why verse 14 insists on inquiry: &ldquo;if it be truth, and the thing certain.&rdquo; The law is hard, but it is not reckless. You must know.'
        },
        {
          kind: 'commentary',
          id: 'c-destroy-all',
          html:
            'The destruction is total. Every inhabitant, every animal, every object that belonged to the city. Nothing is spared. This is a practice called <em>cherem</em> [res:cherem-devoted-destruction-ancient-israel] — devoted to destruction. It appears elsewhere in Joshua (Jericho, Ai) as the practice of warfare in a theocracy. The theological meaning is: this city has violated its covenant so completely that it cannot be reintegrated. It must be utterly removed. Again: this is the law of an ancient nation-state under covenant with God. The church does not practice this. But the principle — that persistent apostasy cannot be tolerated in the community of God — remains.'
        },
        {
          kind: 'hebrew',
          id: 'heb-cherem',
          title: 'Cherem — "devoted to destruction"',
          script: 'חֵרֶם',
          translit: '<strong>cherem</strong> · ban, proscription, something set apart for destruction',
          description:
            'In warfare, cherem meant that the city and all it contained was forfeit to God — given over entirely, which in practice meant destruction. Nothing could be kept for personal gain. Everything was devoted to God&apos;s judgment.'
        },
        {
          kind: 'commentary',
          id: 'c-cursed-thing',
          html:
            'The spoil of a cursed city cannot come into your hand. You cannot profit from apostasy. You cannot take their silver or their goods or their animals. This is a protection against greed masquerading as righteousness. If you keep anything, you become complicit in their idolatry. The only clean way is complete separation.'
        },
        {
          kind: 'christ',
          id: 'christ-community',
          title: 'Christ Connection — Community Discipline',
          html:
            'Paul applies this principle to the church: &ldquo;Wherefore come out from among them, and be ye separate, saith the Lord, and touch not the unclean thing&rdquo; (2 Corinthians 6:17). And in 1 Corinthians 5, he writes about a man openly engaged in sexual immorality: &ldquo;Let him be delivered unto Satan for the destruction of the flesh, that the spirit may be saved&rdquo; (1 Corinthians 5:5). The church does not execute; it excludes. But the logic is the same: persistent, unrepentant apostasy cannot be tolerated in the body. The health of the whole community depends on maintaining the boundaries of covenant.'
        },
        {
          kind: 'carry',
          html:
            'You live in a culture full of cities that have turned to false gods. Wealth, pleasure, power, comfort, self-definition — the spirits of the age have a thousand names. Most of your neighbors are devoted to them. The question for you is: will you be contaminated by proximity? Will you profit from their systems? Or will you separate yourself cleanly, taking nothing that belongs to their cursed city? This is the call to live as a foreigner in your own culture — not with arrogance, but with clarity. You belong to a different covenant.'
        },
        {
          kind: 'reflection',
          id: 'refl-city',
          prompt: 'What systems in your culture are devoted to false gods? How do you stay clean of them without becoming self-righteous toward those still caught in them?'
        },
      ],
    },

    /* ─── Why God Allows the Test ──────────────────────────────── */
    {
      ref: 'Deuteronomy 13:1–3',
      title: 'Why God Allows the Test',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 3,
              spans: [
                t('Thou shalt not hearken unto the words of that prophet, or that dreamer of dreams: for the '),
                t('Lord your God proveth you'),
                t(', to know whether ye love the Lord your God with all your heart and with all your soul.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-test-heart',
          html:
            'God <em>proveth</em> you. He allows the false prophet to arise. He allows the intimate to entice you. He allows the city to apostatize. Why? Not because He does not know the outcome. But because testing is the only way to develop real loyalty. A love that is never tested is not yet love — it is preference, convenience, the default. God&apos;s testing shows what your allegiance actually is. This is the deeper mystery of the chapter: God is not afraid of the false prophet. God is not vulnerable to losing you to the seduction. What He cares about is whether your heart is truly His.',
        },
        {
          kind: 'commentary',
          id: 'c-all-heart',
          html:
            'The test reveals whether you love Him &ldquo;with all your heart and with all your soul.&rdquo; Not partially. Not when it&apos;s convenient. Not as long as nothing better comes along. But all. The test is designed to expose whether your love is half-hearted or complete. The false prophet&apos;s sign comes to pass. The friend&apos;s voice is warm and compelling. The city seems to be prospering. In those moments, do you remember that the Lord God is enough? Is your allegiance unswerving? That is what the test is measuring.'
        },
        {
          kind: 'carry',
          html:
            'Every temptation you face — every compromise, every seduction, every moment when the false god looks good — is a test. And it is a test <em>from God</em>. Not because He is trying to trap you, but because He wants to know if He really has all of your heart. You cannot grow in love toward Him without this. Every time you choose Him over the attractive alternative, your heart becomes more fully His. The test is a gift wrapped in difficulty.'
        },
        {
          kind: 'reflection',
          id: 'refl-test',
          prompt: 'What is the current test in your life — the seduction you find most compelling? What does your response to it reveal about where your heart truly lies?'
        },
      ],
    },

    /* ─── Mercy After Judgment ────────────────────────────────── */
    {
      ref: 'Deuteronomy 13:17–18',
      title: 'Mercy After Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 17,
              spans: [
                t('And there shall cleave naught of the cursed thing to thine hand: that '),
                hp('the Lord may turn from the fierceness of his anger', 'christ-mercy-turn'),
                t(', and '),
                hp('shew thee mercy', 'christ-mercy-turn'),
                t(', and have compassion upon thee, and multiply thee, as he hath sworn unto thy fathers;'),
              ],
            },
            {
              number: 18,
              spans: [
                t('When thou shalt hearken to the voice of the Lord thy God, to keep all his commandments which I command thee this day, to do that which is right in the eyes of the Lord thy God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-mercy-restore',
          html:
            'The chapter ends not with judgment but with restoration. If you purge the apostasy — if you refuse the seduction and hold fast to God — His anger will turn away and He will show mercy. He will multiply you as He swore to your fathers. This is the promise at the heart of judgment itself. Judgment is not the final word. Restoration is. If you endure the test and remain loyal, God will respond with mercy. This is the pattern of the entire book of Deuteronomy: judgment follows disobedience, but mercy and restoration await those who repent and return.'
        },
        {
          kind: 'christ',
          id: 'christ-mercy-turn',
          title: 'Christ Connection — Repentance Turns Away Anger',
          html:
            'This is the pattern that runs through all of Scripture. Jonah preaches judgment to Nineveh; the city repents; God relents (Jonah 3). John writes to the seven churches, warning of judgment; to those who repent, He promises restoration (Revelation 2–3). And the ultimate mercy: Christ Himself becomes the cursed thing. He is devoted to destruction in our place. His judgment satisfies God&apos;s justice, so that we who were apostate can be brought back and shown mercy. &ldquo;Therefore being justified by faith, we have peace with God through our Lord Jesus Christ&rdquo; (Romans 5:1).'
        },
        {
          kind: 'carry',
          html:
            'If you have been seduced away from God, Deuteronomy&apos;s word is not final rejection but restoration. The door is open. If you turn back, if you refuse the false gods and cleave to Him, His anger will turn and His mercy will come. He will not reject you. He will do what He swore to your ancestors — multiply you, bless you, make you His own. But first you must hear His voice and keep His commandments. You must do what is right in His eyes. The mercy is real, but it is not costless. It requires a turning, a choice, a genuine return to Him.'
        },
        {
          kind: 'divider'
        },
        {
          kind: 'reflection',
          id: 'refl-mercy',
          prompt: 'Is there a way you have turned from God? What would it mean to genuinely turn back and believe in His mercy?'
        },
      ],
    },
  ],
};
