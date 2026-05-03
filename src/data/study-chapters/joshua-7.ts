import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Joshua 7 — Achan[res:bibleodyssey-achan-sin]&apos;s Secret Sin and the Defeat at Ai[res:iaa-ai-excavation]
 *
 * When Israel[res:intertextual-sin-community]&apos;s first conquest attempt at Ai fails, Joshua tears his clothes
 * and falls in prayer. The Lord answers: Israel has sinned. Achan, in covetousness,
 * took devoted[res:sefaria-devoted-things] plunder and hid it. The pattern of sin — I saw, I coveted, I took,
 * I hid — mirrors Eve in Eden and David with Bathsheba. The valley of Achor[res:intertextual-achor-hope][res:topostext-achor-valley] becomes
 * judgment, but Hosea will prophesy it as the "door of hope."
 */
export const JOSHUA_7: RichChapterContent = {
  bookSlug: 'joshua',
  bookName: 'Joshua',
  chapter: 7,

  estimatedMinutes: { beginner: 9, intermediate: 16, deep: 20 },
  intros: [
    'Joshua 7 opens with the first crack in Israel&apos;s otherwise flawless conquest narrative. After the walls of Jericho fall at the blast of trumpets, the people are sent to take the small city of Ai. But the spies return with confidence: "Let not all the people go up... for they are but few." So about 3,000 march against Ai — and the men of Ai smite them, chase them, kill 36, and send Israel fleeing in disorder. The conquerors are routed.',
    'Joshua&apos;s response is immediate: he tears his clothes, falls on his face, and cries out to God. His prayer is not complaint, but covenant appeal — "What shall I say, when Israel turneth their backs before their enemies?" He knows the Lord promised victory. Something is wrong. The answer, when it comes, is shattering: "Israel hath sinned... for they have even taken of the accursed thing." One man, Achan, secretly coveted devoted plunder and hid it. The whole nation pays the price until the sin is exposed, the sinner is dealt with, and the Lord&apos;s anger turns.',
    'This chapter teaches one of Scripture&apos;s hardest truths: that we do not live unto ourselves. When Achan sinned in secret, Israel lost a battle in public. The anatomy of sin — covet, take, hide — is the same in Eden, in David&apos;s palace, and in our own hearts. But the valley where judgment falls becomes, in God&apos;s hands, a door of hope.',
  ],

  opener: {
    matchTitle: /achan|devoted|herem/i,
    caption: 'Joshua 7 · The Pattern of Hidden Sin',
  },

  sections: [
    /* ─── Joshua 7:1–5 — The Defeat at Ai ─────────────────────────────── */
    {
      ref: 'Joshua 7:1–5',
      title: 'The Unexpected Defeat',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 1,
              spans: [
                t('But the children of Israel committed a '),
                hy('trespass', 'hebrew-cherem'),
                t(' in the accursed thing: for Achan, the son of Carmi, the son of Zabdi, the son of Zerah, of the tribe of Judah, '),
                hg('took of the accursed thing', 'c-achan-took'),
                t(': and the anger of the Lord was kindled against the children of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-achan-took',
          html:
            'The chapter opens not with the battle but with the root cause — Achan took. One person, one secret transgression, and the entire nation stands under the Lord&apos;s wrath. This is Scripture&apos;s corporate perspective: Israel is one body. No sin is truly private. Paul will later write: "no man liveth to himself... whether we live, we live unto the Lord" (Rom. 14:7–8). Achan&apos;s hidden theft made Israel unable to stand before their enemies.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-cherem',
          title: 'Cherem — &ldquo;devoted thing&rdquo;',
          script: 'חֵרֶם',
          translit: '<strong>cherem</strong> · something under sacred ban, devoted to destruction',
          description:
            'The devoted things of Jericho were meant for the Lord alone — the gold, silver, vessels of brass and iron were to go into the Lord&apos;s treasury. Everything else was to be destroyed. To take cherem was to break covenant with God Himself.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 2,
              spans: [t('And Joshua sent men from Jericho to Ai, which is beside Beth-aven, on the east side of Bethel: and spake unto them, saying, Go up and view the country. And the men went up and viewed Ai.')],
            },
            {
              number: 3,
              spans: [
                t('And they returned to Joshua, and said unto him, '),
                hg('Let not all the people go up', 'c-scouts-report'),
                t('; but let about two or three thousand men go up and smite Ai; and weary not all the people thither; for they are but few.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-scouts-report',
          html:
            'The scouts see Ai is small and weak. They recommend a light force — a reasonable military judgment. What they cannot see is the Lord&apos;s withdrawal of protection. Military wisdom, however sound, cannot substitute for covenant faithfulness. The spies are not wrong about Ai&apos;s size; they are blind to what the Lord has already decided.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 4,
              spans: [
                t('So there went up thither of the people about three thousand men: and they fled before the men of Ai.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And the men of Ai smote of them about thirty and six men: for they chased them from before the gate even unto Shebarim, and smote them in the going down: wherefore '),
                hp('the hearts of the people melted', 'christ-melting-hearts'),
                t(', and became as water.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'christ-melting-hearts',
          html:
            'Thirty-six men fall. A small number, but enough. The invincible people who watched Jericho&apos;s walls collapse are now fleeing in panic. Their hearts melt like water — a phrase that suggests utter dissolution of confidence. The psychological shift is as devastating as the military one.',
        },
        {
          kind: 'carry',
          html:
            'When you find yourself in a place where God&apos;s promised power seems absent, where something that should be easy becomes impossible, the problem is rarely what you can see. It is often what you cannot — unfaithfulness somewhere that breaks the covenant you thought was solid. Before you blame the enemy or the odds, ask God: "What have I hidden?"',
        },
        {
          kind: 'reflection',
          id: 'defeat-mystery',
          prompt:
            'Have you ever experienced a "defeat at Ai" — something you expected to go well suddenly falling apart? What hidden thing might the Lord have been exposing?',
        },
      ],
    },

    /* ─── Joshua 7:6–9 — Joshua&apos;s Desperate Prayer ──────────────────── */
    {
      ref: 'Joshua 7:6–9',
      title: '"What Wilt Thou Do Unto Thy Great Name?"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 6,
              spans: [
                t('And Joshua rent his clothes, and fell to the earth upon his face before the ark of the Lord until the eventide, he and the elders of Israel, and put dust upon their heads.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'Joshua does not gather the generals or devise a new strategy. He goes to the place where heaven touches earth — before the ark of the Lord. He tears his clothes, falls on his face, remains there until evening. His first response is not action but lament, not speech but the silence of dust and darkness. This is grief that meets God.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 7,
              spans: [
                t('And Joshua said, Alas, O Lord God, wherefore hast thou at all brought this people over Jordan, to deliver us into the hand of the Amorites, to destroy us?'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Would to God we had been content, and dwelt on the other side Jordan!'),
              ],
            },
            {
              number: 9,
              spans: [
                t('O Lord, what shall I say, when Israel turneth their backs before their enemies!'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-joshua-prayer',
          html:
            'Joshua&apos;s prayer moves from personal anguish ("why didst thou bring us here") to public shame ("what shall I say to the nations?") to the deepest concern of all:',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 9,
              spans: [
                t('For the Canaanites and all the inhabitants of the land shall hear of it, and shall environ us round, and '),
                hp('cut off our name from the earth', 'christ-name-glory'),
                t(': and '),
                hg('what wilt thou do unto thy great name', 'c-great-name'),
                t('?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-great-name',
          html:
            'Joshua&apos;s final plea moves beyond Israel&apos;s survival to the glory of God&apos;s name. This is the pattern of intercessory prayer throughout Scripture: Moses does the same in Exodus 32:11–13 after the golden calf. The deepest argument with God is not "save us" but "for the sake of Your name." Joshua hands the problem back to God in the form that matters most — God&apos;s own honor and reputation in the earth.',
        },
        {
          kind: 'christ',
          id: 'christ-name-glory',
          title: 'Christ Connection — The Name That Cannot Be Cut Off',
          html:
            'Joshua fears Israel&apos;s name will be cut off from the earth. But Jesus teaches us to pray, "Hallowed be thy name" and reminds us that the Father "glorified the Son, that the Son also may glorify him" (John 17:1). Christ&apos;s name — the name that the nations tried to bury in shame at the cross — is the name that outlasted every empire and continues to be the power of salvation to all who believe. The name the enemy tried to cut off has become immortal.',
        },
        {
          kind: 'carry',
          html:
            'When you find yourself making an intercessory prayer, start where Joshua starts: with your own lament, your honest confusion. But move, as Joshua does, from your problem to God&apos;s glory. The question "what will you do about my situation?" is real, but the deeper one is "what will you do for your own great name?" This shift in perspective often opens doors that personal pleading alone never could.',
        },
        {
          kind: 'reflection',
          id: 'intercessory-prayer',
          prompt:
            'When you pray for something you care about, do you naturally move from your need to God&apos;s glory? What would change if you began with "for the sake of Your name"?',
        },
      ],
    },

    /* ─── Joshua 7:10–15 — The Lord&apos;s Answer: Israel Has Sinned ────── */
    {
      ref: 'Joshua 7:10–15',
      title: 'The Lord Breaks the Silence',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 10,
              spans: [
                t('And the Lord said unto Joshua, '),
                hp('Get thee up', 'c-get-up'),
                t('; wherefore liest thou thus upon thy face?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-get-up',
          html:
            'The Lord breaks silence with a command, not a comfort. There is no reassurance, no "I have heard your prayer." Instead: get up. The prayer of lament has its place, but action cannot wait. The sin that caused the defeat must be addressed before Joshua can rest.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 11,
              spans: [
                t('Israel hath sinned, and they have also transgressed my covenant which I commanded them: for they have even '),
                hg('taken of the accursed thing', 'c-israel-sinned'),
                t(', and have also '),
                hg('stolen', 'c-stolen'),
                t(', and dissembled also, and they have put it even among their own stuff.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-israel-sinned',
          html:
            'The Lord names the sin: taken, stolen, dissembled. Achan took what belonged to the Lord. Israel took what Achan took. The one man&apos;s secret crime is now the nation&apos;s public covenant-breach. The question is not "why did 36 men die?" but "why did Achan hide silver and gold in his tent?" The answer to Israel&apos;s military defeat lies not on the battlefield but in a hidden cache in a family&apos;s belongings.',
        },
        {
          kind: 'commentary',
          id: 'c-stolen',
          html: 'To steal is to deny God&apos;s claim and sovereignty over all things.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 12,
              spans: [
                t('Therefore the children of Israel could not stand before their enemies, because they were accursed: neither will I be with you any more, '),
                hp('except ye destroy the accursed from among you', 'c-destroy'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-destroy',
          html:
            'This is the condition of covenant. The Lord will not go with Israel until the accursed thing is removed. The devoted thing Achan stole is now the thing that devours Israel&apos;s strength. What was meant to be burned or given to the Lord&apos;s treasury instead destroys the nation that harbored it. Sin, hidden or open, corrupts the whole community it lives in.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 13,
              spans: [
                t('Up, sanctify the people, and say, Sanctify yourselves against to morrow: for thus saith the Lord God of Israel, There is an accursed thing in the midst of thee, O Israel: thou canst not stand before thine enemies, until ye take away the accursed thing from among you.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('In the morning therefore ye shall be brought according to your tribes: and it shall be, that the tribe which the Lord taketh shall come according to the families thereof; and the family which the Lord taketh shall come by households; and the household which the Lord taketh shall come man by man.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And it shall be, that he that is taken with the accursed thing shall be burnt with fire, he and all that he hath: because he hath transgressed the covenant of the Lord, and because he hath wrought folly in Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'The Lord prescribes the method: a casting of lots by tribe, then family, then household, then individual. It is a methodical narrowing, a public exposure. The Lord knows exactly who took the plunder; this process allows Israel to witness the covenant-breaking themselves, to see the Urim and Thummim — the Lord&apos;s priestly instruments of judgment — confirm what sin in secret has hidden.',
        },
        {
          kind: 'carry',
          html:
            'The Lord says: "Sanctify yourselves." Before exposing sin, there must be preparation. Confession must come before judgment. Are you hiding something — a word spoken in anger, a covenant broken, something taken that wasn&apos;t yours? Sanctification begins when you stop defending what you&apos;ve done and step into the light. Only then can the Lord restore what sin has fractured.',
        },
        {
          kind: 'reflection',
          id: 'sanctification',
          prompt:
            'Is there something in your life you know is accursed — something you took, lied about, or hid away? What would it cost you to bring it into the light?',
        },
      ],
    },

    /* ─── Joshua 7:16–21 — The Casting of Lots and Achan&apos;s Confession ── */
    {
      ref: 'Joshua 7:16–21',
      title: 'The Anatomy of Sin: "I Saw, I Coveted, I Took, I Hid"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 16,
              spans: [
                t('So Joshua rose up early in the morning, and brought Israel by their tribes; and the tribe of Judah was taken:'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And he brought the family of Judah; and he took the family of the Zarhites: and he brought the family of the Zarhites man by man; and Zabdi was taken:'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And he brought his household man by man; and Achan, the son of Carmi, the son of Zabdi, the son of Zerah, of the tribe of Judah, was taken.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'The methodical process moves like a spotlight narrowing: Israel, Judah, Zarhites, Zabdi&apos;s house, Achan. At each stage the narrative pauses, allowing the tension to build. There is no escape, no way to hide once the process begins. The Lord&apos;s judgment, when it works itself out, is as inexorable as it is just.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 19,
              spans: [
                t('And Joshua said unto Achan, My son, '),
                hg('give, I pray thee, glory to the Lord God of Israel', 'c-give-glory'),
                t(', and make confession unto him; and tell me now what thou hast done; hide it not from me.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-give-glory',
          html:
            'Joshua&apos;s appeal is not cruel but merciful. "Give glory to the Lord God" — by confessing, Achan honors God and stops adding deception to theft. The same phrase will come later: Judas will be asked to "give glory to God" before his betrayal is made public (John 8:11, though the phrase refers to truthfulness before judgment). There is dignity in confession — the last remnant of honor Achan can preserve is to tell the truth.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 20,
              spans: [
                t('And Achan answered Joshua, and said, Indeed I have sinned against the Lord God of Israel, and thus and thus have I done:'),
              ],
            },
            {
              number: 21,
              spans: [
                t('When '),
                hg('I saw among the spoils', 'c-i-saw'),
                t(' a goodly '),
                hy('Babylonish garment', 'c-garment'),
                t(', and '),
                hy('two hundred shekels of silver', 'c-silver'),
                t(', and a '),
                hy('wedge of gold', 'c-gold'),
                t(' of fifty shekels weight, then '),
                hg('I coveted them, and took them', 'c-i-coveted'),
                t('; and, behold, they are hid in the earth in the midst of my tent, and '),
                hg('the silver under it', 'c-hid'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-i-saw',
          html:
            'Achan&apos;s confession lays bare the anatomy of sin. The progression is exact, the same in every human heart: I saw — desire begins with the eye. Eve saw the tree was good for food. David saw Bathsheba bathing. Achan saw beauty in the plunder. The first act of sin is often seeing what we should not allow ourselves to see.',
        },
        {
          kind: 'commentary',
          id: 'c-garment',
          html: 'A goodly Babylonish garment — luxury, craftsmanship, beauty. Achan&apos;s eye caught the beautiful thing first.',
        },
        {
          kind: 'commentary',
          id: 'c-silver',
          html: 'Two hundred shekels of silver — wealth. The metal that can purchase anything.',
        },
        {
          kind: 'commentary',
          id: 'c-gold',
          html: 'A wedge of gold — precious metal, treasure. The things of earth glittered in his sight.',
        },
        {
          kind: 'commentary',
          id: 'c-i-coveted',
          html:
            'Then I coveted — the heart turns the eye&apos;s report into longing. This is the root of the tenth commandment: "Thou shalt not covet." Covetousness is the root of every theft, every adultery, every act of rebellion. It happens before the hand moves, in the hidden chamber of desire.',
        },
        {
          kind: 'commentary',
          id: 'c-hid',
          html:
            'And I took and hid — the public acts follow the private ones. But notice: Achan does not keep the plunder openly or use it. He hides it in his tent and covers it with silver. The sin that began as secret longing becomes secret keeping. Many sins live longest when they live hidden. Achan carried stolen devotion into every meal, every sleep, every family moment. The weight of the secret never lifts until it is spoken.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-chamad',
          title: 'Chamad — &ldquo;covet&rdquo;',
          script: 'חָמַד',
          translit: '<strong>chamad</strong> · desire intensely, lust after, covet',
          description:
            'The same root that appears in "Thou shalt not covet" (Exodus 20:17). It is the inward desire before the outward act — the condition of the heart that precedes all breaking of law. Achan&apos;s confession shows the exact movement: saw, chamad, took, hid.',
        },
        {
          kind: 'christ',
          id: 'christ-covenant-breaking',
          title: 'Christ Connection — The Pattern Broken at the Cross',
          html:
            'The pattern "I saw, I coveted, I took, I hid" appears three times in Scripture: first in Eden (Genesis 3:6), second with Achan, third with David and Bathsheba. It is the pattern of human sin across every age. But at the cross, Christ reverses it: He took nothing that was not given. He hid nothing. He desired nothing for Himself. His final act was to speak everything into light, to bear the judgment, and to break the power of that ancient pattern. "If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness" (1 John 1:9).',
        },
        {
          kind: 'carry',
          html:
            'You have already walked through Achan&apos;s first three steps. Every person has. Something caught your eye, your heart wanted it, your hand reached. The question is the fourth step: Will you hide it or will you confess it? The hidden sin grows heavier with each day. Confession is costly, but silence exacts a higher price — from you, and often from others around you.',
        },
        {
          kind: 'reflection',
          id: 'anatomy-of-sin',
          prompt:
            'Can you trace the pattern of a sin in your own life: what you saw, what you wanted, what you took, and what you then had to hide? What would confession look like?',
        },
      ],
    },

    /* ─── Joshua 7:22–26 — The Execution of Judgment ───────────────────── */
    {
      ref: 'Joshua 7:22–26',
      title: 'The Valley of Trouble: From Judgment to Hope',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 22,
              spans: [
                t('So Joshua sent messengers, and they ran unto the tent; and, behold, it was hid in his tent, and the silver under it.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And they took them out of the midst of the tent, and brought them unto Joshua, and unto all the children of Israel, and laid them out before the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'The silver and garment and gold wedge — the very things Achan coveted — are dug up and laid before the Lord. What was hidden in darkness is now exposed in light. This is the path confession must take: not in secret whispers, but in the company of the covenant people, before the Lord.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 24,
              spans: [
                t('And Joshua, and all Israel with him, took Achan the son of Zerah, and the silver, and the garment, and the wedge of gold, and his sons, and his daughters, and his oxen, and his asses, and his sheep, and his tent, and all that he had: and they brought them unto the '),
                hy('valley of Achor', 'hebrew-achor'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-achor',
          title: 'Achor — &ldquo;trouble&rdquo;',
          script: 'עָכוֹר',
          translit: '<strong>achor</strong> · trouble, turmoil',
          description:
            'The valley is named for the disturbance, the crisis that happened there. It becomes the place of Israel&apos;s darkest judicial act in the conquest — but later, the prophet Hosea will prophesy of this same valley becoming a door of hope.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 25,
              spans: [
                t('And Joshua said, Why hast thou '),
                hg('troubled us', 'c-troubled'),
                t('? the Lord shall trouble thee this day. And all Israel stoned him with stones: and they burned them with fire, after they had stoned them with stones.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-troubled',
          html:
            'Joshua&apos;s words play on the valley&apos;s name: "You have troubled us; the Lord shall trouble you." The judgment is severe — Achan, his family, his livestock, all are destroyed. The inclusion of his family raises difficult questions about their knowledge and culpability. Some interpreters note that the plunder was hidden in his tent; the family would have seen it. Others read it as corporate accountability, common in ancient Near Eastern practice. Scripture does not resolve this tension. The text is grim and unsparing in this regard.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 26,
              spans: [
                t('And they raised over him a great heap of stones unto this day: so the Lord '),
                hp('turned from the fierceness of his anger', 'christ-anger-turned'),
                t('. Wherefore the name of that place was called, The valley of Achor, unto this day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'A heap of stones marks the spot — a permanent memorial to judgment. But notice: "the Lord turned from the fierceness of his anger." The anger was kindled because of the trespass (7:1); now it is appeased because the accursed thing is destroyed. The removal of sin restores the covenant; the removal of the covenant-breaker restores the community. After this, Israel is ready again to take Ai.',
        },
        {
          kind: 'christ',
          id: 'christ-anger-turned',
          title: 'Christ Connection — The Valley of Achor as Door of Hope',
          html:
            'Centuries later, Hosea prophesies of Israel in exile: "I will give her... the valley of Achor for a door of hope" (Hos. 2:15). The valley where judgment fell, where Israel cried out in trouble, becomes the entrance to restored mercy. This is the deepest pattern of Scripture: the place of curse can become the place of grace. The cross was called Golgotha, the place of skulls — a place of death. But through that place of shame and execution, Christ opened the "door of hope" for all who believe. The valley of trouble leads home.',
        },
        {
          kind: 'carry',
          html:
            'Every significant sin you have committed is a valley of Achor — a place you have named in your own heart with shame, regret, and the weight of judgment. The text here does not erase that weight. But it teaches something harder and truer: the valley where your judgment fell can become the door where mercy enters. That low place, that terrible valley, is exactly where Christ meets you. Not above it, but in it. The scandal is that the place of death becomes the place of life.',
        },
        {
          kind: 'reflection',
          id: 'valley-of-achor',
          prompt:
            'Is there a "valley of Achor" in your past — a place of shame or judgment? Can you imagine that same place becoming a door of hope through Christ&apos;s grace?',
        },
        {
          kind: 'artwork',
          matchTitle: /achor|valley|stoning/i,
          caption: 'Joshua 7:24–26 · The Valley of Achor',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'When Achan confessed his hidden sin — the Babylonish garment, the silver, the gold — Israel was freed from the Lord&apos;s judgment, and the valley of Achor became not a tomb but a door of hope.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Joshua 7 · Study Guide',
  },

  resources: [
    {
      id: 'topostext-achor-valley',
      kind: 'archive',
      source: 'ToposText',
      label: 'Valley of Achor: Geography and Significance',
      url: 'https://topostext.org/',
      description: 'Geographical and textual analysis of the Valley of Achor and its significance as a place of judgment and hope.',
    },
    {
      id: 'iaa-ai-excavation',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Ai (et-Tell) Excavations',
      url: 'https://www.antiquities.org.il/article-3100-en/Ai.html',
      description: 'Archaeological evidence from Ai, the second city Joshua conquered after the Achan incident.',
    },
    {
      id: 'intertextual-achor-hope',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Valley of Achor as Door of Hope (Joshua 7 and Hosea 2)',
      url: 'https://intertextual.bible/search?q=valley+achor+hope+hosea',
      description: 'Connection between Joshua&apos;s valley of judgment and Hosea&apos;s prophecy of hope through the same place.',
    },
  ],

  hasHebrew: true,
};
