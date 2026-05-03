import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Exodus 9 — Plagues 5, 6, 7 (livestock pestilence, boils, hail with fire).
 *
 * The hail plague is the worst storm in Egypt&apos;s history. Only Goshen is spared.
 * God&apos;s stated purpose (v.16): He has raised Pharaoh up to display His power,
 * so that His name may be declared throughout all the earth.
 *
 * Key threads: (1) God begins separating those who fear Him within Egypt itself;
 * (2) Pharaoh&apos;s confessions are hollow, not lasting.
 */
export const EXODUS_9: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 9,

  estimatedMinutes: { beginner: 8, intermediate: 13, deep: 16 },
  intros: [
    'By Exodus 9, the plagues are no longer just warnings — they are judgments that strike to the heart of Egyptian religion and power. Each plague dismantles a god the Egyptians worship: Hapi the Nile god, Heqet the frog goddess, Apis the sacred bull. Now come three more: a livestock plague, boils that attack the Egyptian priestly class (who are supposed to be pure), and a hail storm of apocalyptic scale that kills every living thing in the open field and strips the land bare.',
    'But Exodus 9 introduces a shift. God begins to separate the fearful from the faithless. A handful of Egyptians — those who &ldquo;feared the word of the LORD&rdquo; (v.20) — bring their servants and animals inside and are spared. And Pharaoh breaks again, confessing sin, only to harden his heart once more. The plagues are teaching Egypt (and us) that judgment is not indiscriminate: those who align themselves with God are protected, while those who resist face the full weight of His power.',
  ],

  opener: {
    matchTitle: /hail|plague|egypt/i,
    caption: 'Exodus 9 — The Hail Storm',
  },

  sections: [
    /* ─── Exodus 9:1–7 — The Cattle Plague ───────────────────────────────── */
    {
      ref: 'Exodus 9:1–7',
      title: 'The Cattle Plague',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 1,
              spans: [
                t('Then the LORD said unto Moses, Go in unto Pharaoh, and tell him, Thus saith the LORD God of the Hebrews, Let my people go, that they may serve me. '),
              ],
            },
            {
              number: 2,
              spans: [
                t('For if thou refuse to let them go, and wilt hold them still,'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Behold, the '),
                hy('hand of the LORD', 'hand-lord'),
                t(' is upon thy cattle which is in the field, upon the horses, upon the asses, upon the camels, upon the oxen, and upon the sheep: there shall be a very grievous '),
                hg('murrain', 'murrain-plague'),
                t('.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And the LORD shall sever the cattle of Israel from the cattle of the Egyptians: and there shall nothing die of all that is '),
                hp('the children of Israel have', 'separation-begin'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'hand-lord',
          html:
            'The phrase &ldquo;the hand of the LORD&rdquo; echoes from verse 3 of this chapter and will become a refrain through the rest of Exodus. God&apos;s hand is not distant or impersonal — it is the instrument of His power touching Egypt directly, visibly[res:plague-animals].',
        },
        {
          kind: 'commentary',
          id: 'murrain-plague',
          html:
            'A <em>murrain</em> is a disease that strikes livestock. To Egypt, this is catastrophic. Cattle are not merely economic resources — the bull Apis is sacred, the symbol of fertility and resurrection. When Egypt&apos;s cattle die, a god dies with them[res:apis-bull].',
        },
        {
          kind: 'commentary',
          id: 'separation-begin',
          html:
            'For the first time, God explicitly promises <em>separation</em>. The cattle of Israel will be untouched. This is not mercy distributed randomly — it is a marker drawn between the people of God and the people who resist Him. The line runs not only between nations but through Egypt itself, between those who fear God and those who do not.',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 5,
              spans: [
                t('And the LORD appointed a set time, saying, To morrow the LORD shall do this thing in the land of Egypt.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And the LORD did that thing on the morrow, and all the cattle of the Egyptians died: but of the cattle of the children of Israel died not one.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And Pharaoh sent, and, behold, '),
                hg('there was not one of the cattle of the Israelites dead', 'israel-spared'),
                t('. And the heart of Pharaoh was hardened, and he did not let the people go.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'israel-spared',
          html:
            'Pharaoh sends spies to verify. The evidence is unmistakable — every Egyptian animal is dead, every Israelite animal lives. Yet even this proof of God&apos;s power and care for His people does not break Pharaoh&apos;s resistance. His heart hardens instead. The plagues are not really about Egypt&apos;s animals; they are about whether Pharaoh will yield to the God who controls all things.',
        },
        {
          kind: 'carry',
          html:
            'When you see clear evidence that God is protecting His own — whether in Scripture or in your own life — do you soften toward Him, or do you find reasons to resist? Hardness is not natural; it is a choice made again and again, even when the proof of His power is impossible to deny.',
        },
        {
          kind: 'reflection',
          id: 'cattle-plague-reflect',
          prompt:
            'When have you seen unmistakable evidence of God&apos;s care or power and still chosen to resist? What would it take for that evidence to change you?',
        },
      ],
    },

    /* ─── Exodus 9:8–12 — Boils ───────────────────────────────────────────── */
    {
      ref: 'Exodus 9:8–12',
      title: 'The Boils Upon the Land',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 8,
              spans: [
                t('And the LORD said unto Moses and unto Aaron, Take you handfuls of ashes of the furnace, and let Moses sprinkle it toward the heaven in the sight of Pharaoh.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And it shall become small dust in all the land of Egypt, and shall be a boil breaking forth with blains upon man, and upon '),
                hy('beast', 'beast-boils'),
                t(', throughout all the land of Egypt.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And they took ashes of the furnace, and stood before Pharaoh; and Moses sprinkled it up toward heaven; and it became a boil breaking forth with blains upon man, and upon beast.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And the magicians could not stand before Moses because of the boils; for the boil was upon the magicians, and upon all the Egyptians.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And the LORD '),
                hp('hardened the heart of Pharaoh', 'hardened-word'),
                t(', and he hearkened not unto them; as the LORD had spoken unto Moses.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'beast-boils',
          html:
            'Notice the boils strike both man and beast. But this plague is unique: the Egyptian magicians themselves are afflicted, their bodies covered in boils. These are the men who have been matching Moses&apos; signs — turning water to blood, bringing up frogs. Now their own bodies betray them. They cannot even stand before Pharaoh to counsel him. The priests, who are supposed to be ritually pure to approach the gods, are made ceremonially unclean by disease.',
        },
        {
          kind: 'commentary',
          id: 'hardened-word',
          html:
            'Here, for the first time, the text says God Himself hardened Pharaoh&apos;s heart. Earlier, Pharaoh hardened his own heart (8:15, 8:32). Now the divine hardening begins. This is not manipulation — it is response. Pharaoh has had nine plagues to change his mind. He has had opportunities to release the people. Each refusal strengthens his resistance. God&apos;s hardening seals what Pharaoh has already chosen to become.',
        },
        {
          kind: 'carry',
          html:
            'Resistance to God has a gravity to it. The longer you say no, the harder it becomes to say yes. Not because God is punishing you arbitrarily, but because you are training your will to refuse. Staying soft in God&apos;s presence — able to change, able to repent — is a deliberate act, not a passive one.',
        },
        {
          kind: 'reflection',
          id: 'boils-reflect',
          prompt:
            'Where are you hardening your heart against God? How could you choose softness today?',
        },
      ],
    },

    /* ─── Exodus 9:13–21 — Warning Before the Hail ───────────────────────── */
    {
      ref: 'Exodus 9:13–21',
      title: 'The Warning: A Hail Storm Approaches',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 13,
              spans: [
                t('And the LORD said unto Moses, Rise up early in the morning, and stand before Pharaoh, and say unto him, Thus saith the LORD God of the Hebrews, Let my people go, that they may serve me.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('For '),
                hp('I will at this time send', 'all-plagues'),
                t(' all my plagues upon thine heart, and upon thy servants, and upon thy people; that thou mayest know that there is '),
                hy('none like me', 'none-like-god'),
                t(' in all the earth.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('For now I had stretched out my hand, and smitten thee and thy people with pestilence; and thou shouldest have been cut off from the earth:'),
              ],
            },
            {
              number: 16,
              spans: [
                t('But in very deed for '),
                hg('this cause have I raised thee up', 'raised-up-pharaoh'),
                t(', for to shew in thee my power; and that my name may be declared throughout all the earth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'all-plagues',
          html:
            'God says He is now sending <em>all</em> His plagues at once — concentrated on Pharaoh&apos;s heart, his servants, and his people. The language escalates. This is no longer a sequence of escalating warnings; this is the full weight of divine judgment.',
        },
        {
          kind: 'commentary',
          id: 'none-like-god',
          html:
            'God asserts that there is <em>none like Him in all the earth</em>. The context makes clear He is speaking to Pharaoh&apos;s supposed divine authority. Pharaoh claims to be god, the son of Ra. But there is only one God, and He alone holds power over nature, life, death, and the fate of nations.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-koach',
          title: 'Koach — &ldquo;power, strength&rdquo;',
          script: 'כֹּחַ',
          translit: '<strong>koach</strong> · strength, might, power',
          description:
            'The word <em>koach</em> appears in verse 16 when God says He is showing His power. It is the word for raw, undeniable force — the ability to do what you will, regardless of resistance. God&apos;s <em>koach</em> is absolute.',
        },
        {
          kind: 'commentary',
          id: 'raised-up-pharaoh',
          html:
            'This statement is profound and controversial. God says He <em>raised up Pharaoh</em> for this very purpose — to display His power and that His name may be declared throughout all the earth. Paul will later cite this exact verse (Romans 9:17) to argue that God&apos;s freedom supersedes human will. Pharaoh&apos;s resistance is not random; it is part of God&apos;s design to demonstrate His sovereignty to all peoples.',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 17,
              spans: [
                t('As yet exaltest thou thyself against my people, that thou wilt not let them go?'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Behold, to morrow about this time I will cause it to rain a very grievous '),
                hy('hail', 'barad-hail'),
                t(', such as hath not been in Egypt since the foundation thereof even until now.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Send therefore now, and gather thy cattle, and all that thou hast in the field; for upon every man and beast which shall be found in the field, and shall not be brought home, the hail shall come down upon them, and they shall die.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('He that '),
                hp('feared the word of the LORD', 'fear-word-lord'),
                t(' of the servants of Pharaoh made his servants and his cattle flee into the houses:'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And he that '),
                hg('regarded not the word of the LORD', 'regarded-not'),
                t(' left his servants and his cattle in the field.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'barad-hail',
          html:
            'The Hebrew word <em>barad</em> (בָּרָד, &ldquo;hail&rdquo;) describes not ordinary hail but an apocalyptic storm. This will be the worst storm in Egypt&apos;s recorded history — large, violent, destroying everything in its path. The fact that it is promised a full day in advance underscores God&apos;s sovereignty: the storm is not a natural disaster; it is a word God speaks beforehand and then executes exactly as promised.',
        },
        {
          kind: 'commentary',
          id: 'fear-word-lord',
          html:
            'A crucial line. Some of Pharaoh&apos;s own servants — Egyptians — <em>fear the word of the LORD</em>. They bring their animals inside. They escape the judgment. This is the first sign that the line between saved and judged runs not only between nations but through individual hearts. Those who align themselves with God and His word are protected, even if they live in the house of the enemy.',
        },
        {
          kind: 'commentary',
          id: 'regarded-not',
          html:
            'Others regard not the word of the LORD and leave their cattle in the field. They will die. The judgment is never indiscriminate; it always divides between those who hear God&apos;s word and those who harden themselves against it.',
        },
        {
          kind: 'carry',
          html:
            'God gives clear warning before He executes judgment. He sends messengers. He speaks ahead of time. The question is always: will you <em>fear the word of the LORD</em> and align yourself with it, even when it costs you? Will you bring your livestock inside, so to speak — will you order your life according to what God says, or will you leave yourself exposed?',
        },
        {
          kind: 'reflection',
          id: 'warning-reflect',
          prompt:
            'Where is God giving you clear warning that something is not safe? Are you moving your &ldquo;livestock&rdquo; inside by heeding His word?',
        },
      ],
    },

    /* ─── Exodus 9:22–26 — The Hail Storm ──────────────────────────────── */
    {
      ref: 'Exodus 9:22–26',
      title: 'The Hail: God&apos;s Power Displayed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 22,
              spans: [
                t('And the LORD said unto Moses, Stretch forth thine hand toward heaven, that there may be hail in all the land of Egypt, upon man, and upon '),
                hy('beast', 'beast-hail'),
                t(', and upon every herb of the field, throughout the land of Egypt.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And Moses stretched forth his rod toward heaven: and the LORD sent thunder and hail, and the fire ran along upon the ground; and the LORD rained hail upon the land of Egypt.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('So there was hail, and fire mingled with the hail, very grievous, such as there was none like it in all the land of Egypt since it became a nation.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And the hail smote throughout all the land of Egypt all that was in the field, both man and beast; and the hail smote every herb of the field, and brake every tree of the field.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('Only in the land of '),
                hp('Goshen', 'goshen-spared'),
                t(', where the children of Israel were, was there no hail.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'beast-hail',
          html:
            'The hail strikes man and beast alike — everything in the field. But notice what is not mentioned: the livestock <em>brought inside</em> by those who feared the word of the LORD in verse 20. They are safe.',
        },
        {
          kind: 'commentary',
          id: 'goshen-spared',
          html:
            'The land of Goshen, where Israel dwells, is completely spared. Not a single hailstone falls there. This is the ultimate visual proof of separation: two lands, side by side, one devastated, one untouched. God&apos;s people are not merely living in the same region; they are living under a different reality altogether — protected by a boundary God has drawn.',
        },
        {
          kind: 'carry',
          html:
            'The hail falls, indiscriminate in its destruction, on everyone in the field. But it does not fall on you if you are in Goshen — if you belong to God&apos;s people, if you have aligned yourself with His word. Protection is not earned by goodness; it is granted by alignment. You are either under God&apos;s hand of judgment or under His hand of protection. There is no middle ground.',
        },
        {
          kind: 'reflection',
          id: 'hail-reflect',
          prompt:
            'What would it mean for you to live as if you truly believe you are in Goshen — protected by God because you belong to Him?',
        },
      ],
    },

    /* ─── Exodus 9:27–35 — Pharaoh&apos;s Hollow Repentance ──────────────────── */
    {
      ref: 'Exodus 9:27–35',
      title: 'Confession Without Conversion',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 27,
              spans: [
                t('And Pharaoh sent, and called for Moses and Aaron, and said unto them, '),
                hg('I have sinned this time', 'sinned-this-time'),
                t(': the LORD is '),
                hp('righteous', 'pharaoh-righteous'),
                t(', and I and my people are wicked.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('Intreat the LORD (for it is enough) that there be no more mighty thunderings and hail; and I will let you go, and ye shall stay no longer.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And Moses said unto him, As soon as I am out of the city, I will spread abroad my hands unto the LORD; and the thunder shall cease, neither shall there be any more hail; that thou mayest know how that the earth is the LORD&apos;s.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('But as for thee and thy servants, I know that ye will not yet fear the LORD God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'sinned-this-time',
          html:
            'Pharaoh confesses: &ldquo;I have sinned.&rdquo; But he adds a damning qualifier: &ldquo;this time.&rdquo; He does not say he has always been wrong. He confesses only because the judgment is unbearable. The moment relief comes, his repentance will evaporate.',
        },
        {
          kind: 'commentary',
          id: 'pharaoh-righteous',
          html:
            'Pharaoh even grants that God is righteous and that he and his people are wicked. It is a true confession, theologically precise. And it changes nothing. Confession without conversion is hollow. Pharaoh speaks the words but does not become the man.',
        },
        {
          kind: 'christ',
          id: 'christ-hollow-repentance',
          title: 'Christ Connection — True and False Repentance',
          html:
            'Jesus will later teach that not everyone who says &ldquo;Lord, Lord&rdquo; enters the kingdom of heaven (Matthew 7:21). Pharaoh&apos;s confession shows us the difference between what you say when judgment is on you and who you actually are. John describes the test: &ldquo;If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness&rdquo; (1 John 1:9). But that confession leads to &ldquo;cleansing,&rdquo; not just words. Real repentance bears fruit.',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 31,
              spans: [
                t('(And the flax and the barley was smitten: for the barley was in the ear, and the flax was bolled.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('But the wheat and the rie were not smitten: for they were not grown up.)'),
              ],
            },
            {
              number: 33,
              spans: [
                t('And Moses went out of the city from Pharaoh, and spread abroad his hands unto the LORD: and the thunders and hail ceased, and the rain was not poured upon the earth.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('And when Pharaoh saw that the rain and the hail and the thunders were ceased, he '),
                hg('sinned yet more', 'sinned-yet-more'),
                t(', and hardened his heart, he and his servants.'),
              ],
            },
            {
              number: 35,
              spans: [
                t('And the heart of Pharaoh was hardened, neither would he let the children of Israel go; as the LORD had spoken by Moses.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'sinned-yet-more',
          html:
            'As soon as the hail stops, Pharaoh reverts. He <em>sins yet more</em> and hardens his heart. His confession meant nothing. The god he served — his own will, his own pride — has reasserted itself. The pattern will continue: judgment, confession, relief, hardening. Seven more plagues will follow.',
        },
        {
          kind: 'carry',
          html:
            'Beware of crisis confessions. When trouble comes, the heart cries out to God. But when relief comes, what are you actually changed into? Do you return to your old patterns, your old gods, your old ways? Real repentance means turning — not just saying the words when it hurts, but staying turned when the pressure is off.',
        },
        {
          kind: 'reflection',
          id: 'repentance-reflect',
          prompt:
            'When have you confessed something to God in a moment of crisis and then fallen back into the same pattern? What would it take to actually change, not just apologize?',
        },
      ],
    },

    /* ─── Artwork Block ────────────────────────────────────────────────── */
    {
      ref: 'Exodus 9 — Reflection',
      blocks: [
        {
          kind: 'divider',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Exodus 9',
    quote:
      'God raises up Pharaoh to display His power, so that His name may be declared throughout all the earth. Those who fear the word of the LORD are separated and spared; those who harden themselves against Him face the full weight of His judgment.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 9 · Study Guide',
  },


  resources: [
    {
      id: 'plague-animals',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Plague of Livestock',
      url: 'https://www.bibleodyssey.org/dictionary/livestock/',
      description: 'Study of the fifth plague and Israel&apos;s protection.',
    },
    {
      id: 'apis-bull',
      kind: 'archaeology',
      source: 'British Museum',
      label: 'The Apis Bull',
      url: 'https://www.britishmuseum.org/collection/',
      description: 'The sacred bull cult of Egypt challenged.',
    },
  ],

  hasHebrew: true,
};
