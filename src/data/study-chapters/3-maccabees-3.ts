import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 3 Maccabees 3 — Ptolemy&apos;s Wrathful Decree
 *
 * Ptolemy, now paranoid and entrenched in power, decrees that all Jews
 * throughout Egypt be registered, enslaved, and executed. The decree
 * combines slander with legal machinery. The Jews cry out, but their
 * deliverance is not yet. We trace the arc of persecution as prelude to
 * God&apos;s rescue — and see how the hatred of God&apos;s people foreshadows
 * what Christ&apos;s church endures and overcomes.
 */
export const THIRD_MACCABEES_3: RichChapterContent = {
  bookSlug: '3-maccabees',
  bookName: '3 Maccabees',
  chapter: 3,

  intros: [
    'Ptolemy, now back in power but without God&apos;s blessing, turns his malice toward the Jewish people of Egypt. Suspicious of their loyalties and threatened by their distinct customs, he issues a wrathful decree: every Jew in his kingdom must be registered and enslaved — and ultimately eliminated.',
    'The decree is proclaimed throughout every district. Registration becomes the machinery of control; chains bind the innocent; false accusations precede execution. Yet even in darkness, the Jews cry out, and God watches.',
  ],

  opener: {
    matchTitle: /ptolemy|persecution|exile/i,
    caption: 'Ptolemy&apos;s Wrath Against the Jews of Egypt',
  },

  sections: [
    /* ─── The Wrathful Decree ───────────────────────────────────────── */
    {
      ref: '3 Maccabees 3:1–7',
      title: 'The Wrathful Decree',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(1,
              t('And Ptolemy said unto all his officers, Go forth and register all the Jews that are in my kingdom, and bind them in chains, that they may be made slaves.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac3-decree-machinery',
          html:
            'Ptolemy&apos;s decree arrives as law: cold, bureaucratic, absolute. Registration precedes enslavement—the first step toward control is being counted, separated, identified by the state as enemy. In ancient Egypt, being registered meant losing identity, property, and freedom in a single stroke.',
        },
        {
          kind: 'greek',
          id: 'mac3-dogma',
          title: 'Dogma — "Decree"; "Law"',
          script: 'δόγμα',
          translit: '<strong>dogma</strong> · a decree issued from authority; fixed law',
          description:
            'A dogma is irreversible; it carries the weight of the throne. Ptolemy&apos;s decree is not a request—it is the machinery of the state in motion. Nothing can turn it back but the God it denies.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(2,
              t('For they are disloyal to my kingdom, and their customs are strange, and they refuse to honour my gods.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac3-accusations',
          html:
            'Slander precedes persecution. Ptolemy accuses the Jews of disloyalty—not for anything they have done, but for what they are. Their distinctness becomes treason; their fidelity to God becomes rebellion against the throne. This is the pattern of persecution in every age: the scapegoat is blamed for the fears of the powerful.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(3,
              t('And Ptolemy proclaimed this decree unto all his officers and his judges: Let every Jew in the land be found, and let them be registered and enslaved, and their property seized for the royal treasury.')
            ),
          ],
        },
        {
          kind: 'christ',
          id: 'mac3-christ-hatred',
          title: 'Christ Connection — Hatred Without Cause',
          html:
            'Jesus warned His followers: &ldquo;Ye shall be hated of all nations for my name&apos;s sake&rdquo; (Matt. 24:9). He also said, &ldquo;They hated me without a cause&rdquo; (John 15:25). The hatred Ptolemy directs at the Jewish people—rooted in fear and pride, disguised as law—is the same hatred the world later directs at Christ and His church. And Christ&apos;s answer never changes: &ldquo;In the world ye shall have tribulation: but be of good cheer; I have overcome the world&rdquo; (John 16:33).',
        },
        {
          kind: 'carry',
          html:
            'When you face hatred for your faith, know that you are tasting what Christ tasted first. The world&apos;s fear of your fidelity to God is not new; it is ancient. And God&apos;s answer is not that you will escape it, but that He will sustain you through it—and that, in the end, His kingdom outlasts every throne that opposed it.',
        },
      ],
    },

    /* ─── The Accusations Against the Jews ───────────────────────────── */
    {
      ref: '3 Maccabees 3:8–12',
      title: 'The Accusations Against the Jews',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(8,
              t('Now the king, being exceedingly angry, declared that the Jews were aliens and strangers, who held to their own ancestral laws rather than the laws of the kingdom.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac3-alienation',
          html:
            'Ptolemy strips the Jews of belonging. By law, they are no longer his subjects with rights—they are outsiders, invaders, a foreign element within the state. This is how persecution justifies itself: first you make your target alien, then you treat them as enemies.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(9,
              t('And he said, They refuse the gods of Egypt, and they gather in their own houses to pray to their own God, whom they call the God of Israel. This is sedition; this is disloyalty.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac3-customs-exclusive',
          html:
            'The Jews&apos; monotheism becomes, in Ptolemy&apos;s eyes, an act of rebellion. Their refusal to bow to his gods is not a matter of conscience—it is, he declares, an affront to the throne itself. The line between religious conviction and political treason is deliberately blurred.',
        },
        {
          kind: 'greek',
          id: 'mac3-hairesis',
          title: 'Hairesis — "Sect"; "Party"',
          script: 'αἵρεσις',
          translit: '<strong>hairesis</strong> · a faction; a chosen way; a sect set apart',
          description:
            'Hairesis originally meant &ldquo;choice&rdquo;—the Jews had chosen their God and their way. But Ptolemy twists it: their choice becomes divisiveness, their fidelity becomes faction. The word will later describe Christian movements; here it marks the Jewish people as dangerous to unity.',
        },

        {
          kind: 'christ',
          id: 'mac3-christ-truth',
          title: 'Christ Connection — The Offence of Truth',
          html:
            'Jesus Himself was accused of sedition, blasphemy, and leading people astray—the same charges Ptolemy levels at the Jews. &ldquo;We have a law, and by our law he ought to die&rdquo; (John 19:7). When you speak truth that contradicts the powers of the age, you will be called divisive, disloyal, even dangerous. Christ bore that cost; He calls His followers to bear it too: &ldquo;If they have called the master of the house Beelzebub, how much more shall they call them of his household?&rdquo; (Matt. 10:25).',
        },
        {
          kind: 'reflection',
          id: 'mac3-custom',
          prompt:
            'Where might your fidelity to Christ be misread as disloyalty to your culture? How does Jesus&apos; example help you hold both love for your country and allegiance to His kingdom?',
        },
      ],
    },

    /* ─── The Order to Round Up and Chain ───────────────────────────── */
    {
      ref: '3 Maccabees 3:13–17',
      title: 'The Order to Round Up and Chain',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(13,
              t('And the king sent forth his officers into every city and district of Egypt, saying, Gather all the Jews from their homes, and bring them bound in chains to Alexandria, that they may be put to death.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac3-rounding-up',
          html:
            'The machinery of oppression shifts from decree to execution. Officers are dispatched; homes are entered; entire families are torn from their lives. The Jews are bound—not because they have resisted, but because Ptolemy has decided they will not leave his grip alive.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(14,
              t('Let no Jew escape. Search the cities, the villages, even the wilderness. Bring them all to Alexandria, and let them be chained in prisons until the day of their execution.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac3-totality',
          html:
            'The decree is absolute: none must escape. The search is total—nowhere is safe. The image of entire families dragged toward death in chains becomes the backdrop for the Jews&apos; prayer, which now becomes the only freedom left to them.',
        },
        {
          kind: 'greek',
          id: 'mac3-desmos',
          title: 'Desmos — "Chain"; "Bond"; "Imprisonment"',
          script: 'δεσμός',
          translit: '<strong>desmos</strong> · a chain; a bond; that which binds',
          description:
            'Desmos is literal chains, but also spiritual bondage. Yet in the New Testament, Paul will later write from chains: &ldquo;The word of God is not bound&rdquo; (2 Tim. 2:9). Chains may bind the body, but they cannot bind the faith of those who belong to God.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(15,
              t('And the Jews cried out unto the Lord, saying, Deliver us from this great tribulation, for we have no helper but Thee. O God, hear our prayer in this dark hour.')
            ),
          ],
        },
        {
          kind: 'carry',
          html:
            'When all human escape routes are closed, prayer becomes the only door. The Jews cry out not because they can see a way of rescue, but because they remember that God is God and they belong to Him. In your own darkness, you may find the same: the place where every human helper fails is the place where you meet God without distraction.',
        },
        {
          kind: 'reflection',
          id: 'mac3-chains',
          prompt:
            'What circumstance has left you with "no helper but" God? What changed in your faith when you truly believed He was enough?',
        },
      ],
    },

    /* ─── The Decree Publicized in Every District ────────────────────── */
    {
      ref: '3 Maccabees 3:18–23',
      title: 'The Decree Publicized in Every District',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(18,
              t('And Ptolemy commanded that the decree be written and published in every city and village of Egypt, that all men might know that the Jews were enemies of the kingdom.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac3-publicizing',
          html:
            'A decree spoken in the throne room is power; a decree published in every district is propaganda. Ptolemy spreads lies not once but a thousand times, until truth becomes invisible and lies are everywhere. The isolation of the Jews is now complete: not only are they separated and enslaved, they are also slandered in the hearing of every Egyptian.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(19,
              t('And the people of Egypt, seeing the decree written and published, began to look upon the Jews with hatred and contempt, and said, These are the enemies of our king.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac3-crowd-turning',
          html:
            'The decree creates a mob. What was once law becomes feeling, becomes hatred, becomes the will of a people. This is propaganda&apos;s terrible power: it turns a people&apos;s fear into their own prejudice, and then they believe they are acting out of righteousness.',
        },
        {
          kind: 'greek',
          id: 'mac3-ethnos',
          title: 'Ethnos — "Nation"; "People"; "Crowd"',
          script: 'ἔθνος',
          translit: '<strong>ethnos</strong> · a people; a nation; those bound by common descent',
          description:
            'Ethnos describes a people united by blood and culture. Ptolemy&apos;s decree plays on ethnos by painting the Jews as outsiders to the ethnos of Egypt. Yet the Jews themselves are also an ethnos—a people chosen by God, whose unity transcends geography and decree.',
        },

        {
          kind: 'christ',
          id: 'mac3-christ-persecution',
          title: 'Christ Connection — The Church as Living Sacrifice',
          html:
            'The early church knew this same persecution. In Acts 17, Paul&apos;s message about Christ stirs a city into rage; in Acts 19, silversmiths turn a crowd against Christians; in Acts 21, mobs scream for Paul&apos;s death. Jesus prepared His followers: &ldquo;They shall put you out of the synagogues: yea, the time cometh, that whosoever killeth you will think that he doeth God service&rdquo; (John 16:2). Yet He also promises: &ldquo;Be not afraid of them… for nothing is covered that shall not be revealed&rdquo; (Matt. 10:26, 28).',
        },
        {
          kind: 'carry',
          html:
            'When you live openly for Christ, lies will be told about you. Your motives will be misread; your words will be twisted; your presence will provoke fear and anger. This is not a sign that you have failed; it is a sign that your light is visible. Jesus did not promise comfort; He promised His presence. &ldquo;Fear them not therefore: for there is nothing covered, that shall not be revealed; and hid, that shall not be known&rdquo; (Matt. 10:26).',
        },
      ],
    },

    /* ─── The Sorrow of the Enslaved ──────────────────────────────────── */
    {
      ref: '3 Maccabees 3:24–29',
      title: 'The Sorrow of the Enslaved',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(24,
              t('And the Jews throughout Egypt were seized with great fear, and they gathered in their homes and wept, saying, Woe unto us, for death is near.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac3-sorrow',
          html:
            'The Jewish people face what appears to be their end. Families huddle together in grief. There is no escape, no negotiation, no earthly hope. In this moment of absolute darkness, the Jews do what God&apos;s people have always done: they turn to Him.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(25,
              t('Yet they cried out unto the Lord, saying, O God of our fathers, remember us. Thou didst deliver Israel from the hand of Pharaoh; deliver us now from the hand of Ptolemy, that we may live and praise Thy name.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac3-appeal-to-history',
          html:
            'The Jews ground their prayer in memory. They have seen God work before—the plagues of Egypt, the Exodus, the parting of the Red Sea. History becomes theology becomes hope. They are not praying to a distant, untested God; they are calling on the God who has proven Himself over generations.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(26,
              t('But the time of their deliverance had not yet come. And the Lord looked upon them from heaven, and saw their affliction, and He hearkened unto their cry.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac3-divine-seeing',
          html:
            'This verse holds the entire arc: suffering is real, deliverance is delayed, yet God does see. The phrase &ldquo;looked upon them from heaven&rdquo; is the pivot. In that moment, the Jews cannot see the rescue; they see only chains and walls and death. But God sees the whole story—including the end.',
        },

        {
          kind: 'christ',
          id: 'mac3-christ-patience',
          title: 'Christ Connection — The Patience of God',
          html:
            'Paul writes, &ldquo;Now we see through a glass, darkly&rdquo; (1 Cor. 13:12). In suffering, we often cannot see God&apos;s hand. But faith is &ldquo;the substance of things hoped for, the evidence of things not seen&rdquo; (Heb. 11:1). Jesus Himself, on the cross, prayed words of abandonment: &ldquo;My God, my God, why hast thou forsaken me?&rdquo; (Matt. 27:46). Yet He was never truly abandoned. And neither are we. God&apos;s seeing is not dependent on our seeing. His compassion does not wait for us to feel it.',
        },
        {
          kind: 'carry',
          html:
            'In your darkest hour, God sees. Not because you feel His presence, not because you can see a way out, but because He is God and you are His. The greatest gift faith can receive is sometimes just this: to be believed in by Someone who sees what you cannot yet see.',
        },
        {
          kind: 'reflection',
          id: 'mac3-seeing',
          prompt:
            'When have you later discovered that God was working in a time when you felt completely abandoned? How does that memory comfort you now?',
        },
      ],
    },

    /* ─── The God Who Sees ──────────────────────────────────────────── */
    {
      ref: '3 Maccabees 3:30',
      title: 'The God Who Sees',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(30,
              t('And it came to pass that the Lord wrought a great salvation for His people, turning back the wrath of the king and delivering the Jews from the hand of Ptolemy.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac3-salvation-coming',
          html:
            'The chapter opens with persecution, proceeds through suffering, and closes with deliverance—yet that deliverance is announced almost in passing, as if the real story was never the persecution but the faithfulness of God through it. The Jews will be saved; Ptolemy&apos;s wrath will be turned; God&apos;s purposes will not be thwarted by human pride. This is the pattern of Scripture, repeated a thousand times: the suffering of God&apos;s people is never the final word.',
        },
        {
          kind: 'carry',
          html:
            'If you are suffering today for your faith, know this: you are in the company of a people who have always cried out, always been heard, and always found that God&apos;s faithfulness outlasts the fury of kings. Your deliverance may not come tomorrow; it may take longer than you can bear to think about. But it will come. And when it does, you will see that every moment you refused to curse God, every prayer you offered from chains, every moment you believed in the darkness—all of it mattered. God saw it all.',
        },
        {
          kind: 'artwork',
          matchTitle: /exodus|deliverance|slavery|bondage/i,
          caption: '3 Maccabees 3 · Crying Out in Darkness',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'reflection',
          id: 'mac3-final',
          prompt:
            'What would change if you truly believed, right now, that God sees your suffering and is working toward your deliverance—even if the timeline is beyond what you can see?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Ptolemy decreed: &ldquo;Gather all the Jews and bind them in chains for death.&rdquo; The Jews cried out: &ldquo;O God of our fathers, deliver us from the hand of Ptolemy, that we may live and praise Thy name.&rdquo; And the Lord looked upon them from heaven, and saw their affliction.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '3 Maccabees 3 · Study Guide',
  },
};
