import { hp, hy, hg, t, type RichChapterContent } from './types';

export const LEVITICUS_26: RichChapterContent = {
  bookSlug: 'leviticus',
  bookName: 'Leviticus',
  chapter: 26,

  estimatedMinutes: { beginner: 9, intermediate: 17, deep: 20 },
  topicTags: ['holiness', 'sacrifice', 'priest', 'worship'],
  opener: {
    topical: true,
    caption: 'Leviticus 26',
  },
  intros: [
    'Leviticus 26 lays out the covenant terms with brutal clarity. Do this, and you will live in peace with rain in season, fruitful harvests, safety, victory over enemies. Break the covenant, and the curses unfold in layers — each one worse than the last. Terror. Drought. Wild beasts. Sword. Plague. Exile. The chapter does not soften the darkness; it names it straight. Yet underneath every curse runs a promise: &ldquo;I will remember my covenant.&rdquo; If Israel confesses and humbles itself, God will not turn away.',
    'For the Christian reader, Leviticus 26 is written entirely in shadow. Christ stepped into the curses meant for His people. The blessings promised here flow to us through Him. This is not <em>our</em> judgment waiting; it is judgment already faced and overcome.',
  ],

  sections: [
    /* ─── Leviticus 26:1–2 — The Preamble ─────────────────────────────── */
    {
      ref: 'Leviticus 26:1–2',
      title: 'No Idols; Keep the Sabbath',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 1,
              spans: [
                t('Ye shall make you no '),
                hy('idols', 'lev26-idols'),
                t(' nor graven image, neither raise you up a standing image, neither shall ye set up any image of stone in your land, to bow down unto it: for I am the LORD your God.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Ye shall '),
                hg('keep my sabbaths', 'lev26-sabbath-anchor'),
                t(', and '),
                hy('reverence', 'lev26-reverence'),
                t(' my sanctuary: I am the LORD.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev26-sabbath-anchor',
          html:
            'The covenant opens not with a list of rules but with two prohibitions: no idols, and one command: keep My Sabbaths[res:sefaria-leviticus-26]. The repetition is deliberate. The Sabbath is the sign of the covenant. It is less a rule than a rhythm — Israel bound to God by the weekly refusal to work, the weekly confession that the world can turn without them.',
        },
        {
          kind: 'hebrew',
          id: 'lev26-idols',
          title: 'Pesel — &ldquo;graven image&rdquo;',
          script: 'פֶּסֶל',
          translit: '<strong>pesel</strong> · a carved or hewn image',
          description:
            'An idol is not worship of something evil; it is worship of a good thing in God&apos;s place. The second commandment forbids any carved image of God Himself — not because God cannot be represented, but because the invisible God cannot be captured in wood or stone. The covenant begins with the demand for an unseen, unmanufactured God.',
        },
        {
          kind: 'hebrew',
          id: 'lev26-reverence',
          title: 'Yare — &ldquo;reverence&rdquo;',
          script: 'יָרֵא',
          translit: '<strong>yare</strong> · to fear, to hold in awe',
          description:
            'The covenant is not a business transaction between equals. It is a relationship steeped in reverence. Fear here is not terror but the kind of holy awe that melts the knees in God&apos;s presence.',
        },
        {
          kind: 'carry',
          html:
            'The covenant opens by clearing the field — nothing between you and God, no carved thing, no false comfort. Then it offers one practice: stop. One day in seven, refuse to work and confess that you are not the one holding the world together. That single refusal, repeated weekly, is how Israel stays bound to God. What carved thing — a success that defines you, a failure that haunts you, a dream that owns your day — might need to be set down this week so you can remember the invisible God who is actually running things?',
        },
        {
          kind: 'reflection',
          id: 'lev26-intro',
          prompt:
            'What is one &ldquo;carved image&rdquo; in your life — something you&apos;ve put together to represent God or security that isn&apos;t the real thing? What would it cost to put it down?',
        },
      ],
    },

    /* ─── Leviticus 26:3–13 — If You Obey ────────────────────────────── */
    {
      ref: 'Leviticus 26:3–13',
      title: 'The Blessings of Obedience',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 3,
              spans: [
                t('If ye '),
                hg('walk in my statutes', 'lev26-walk-statutes'),
                t(', and keep my commandments, and do them;'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Then I will give you '),
                hp('rain in due season', 'lev26-rain'),
                t(', and the land shall yield her increase, and the trees of the field shall yield their fruit.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev26-walk-statutes',
          html:
            'The covenant opens with a conditional: <em>if</em> you walk in My statutes[res:bibleodyssey-covenant-consequences]. Not if you are perfect, but if you walk — a consistent direction, an orientation of the will. The blessings that follow are not rewards for external performance but the natural fruit of a life aligned with God&apos;s design.',
        },
        {
          kind: 'commentary',
          id: 'lev26-rain',
          html:
            'In the ancient Near East, rain was the primary sign of blessing. Without it, the land dies. Genesis 2 describes Eden watered by mist; Israel&apos;s covenant with God is sealed by His promise to let the rains fall. The blessing is <em>not</em> of a world untouched by need — it is of a world where need is met, where seasons turn as they should.',
        },
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 5,
              spans: [
                t('And your threshing shall reach unto the vintage, and the vintage shall reach unto the sowing time: and ye shall '),
                hg('eat your bread to the full', 'lev26-plenty'),
                t(', and dwell in your land safely.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And I will give '),
                hp('peace in the land', 'lev26-peace'),
                t(': and ye shall lie down, and none shall make you afraid: and I will rid evil beasts out of the land, neither shall the sword go through your land.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev26-plenty',
          html:
            'The blessing is not survival but abundance — harvest flowing into harvest, tables laden, the primary anxiety of ancient life (will there be enough?) answered with a steady <em>yes.</em> Peace is not the absence of threat; it is the security of knowing you are safe in God&apos;s land.',
        },
        {
          kind: 'christ',
          id: 'lev26-peace',
          title: 'Christ Connection — Peace With God',
          html:
            'The ultimate blessing of the covenant is <em>shalom</em> — peace. Paul writes, &ldquo;Therefore being justified by faith, we have peace with God through our Lord Jesus Christ&rdquo; (Rom. 5:1). The covenant promises rain in season and safety from beasts and sword; Christ brings something deeper — not safety <em>in</em> the world, but peace <em>with God.</em> Every threat the curse can bring, He has already faced. Every blessing the covenant promised, He fulfilled.',
        },
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 7,
              spans: [
                t('And ye shall '),
                hg('chase your enemies', 'lev26-victory'),
                t(', and they shall fall before you by the sword.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And five of you shall chase an hundred, and an hundred of you shall put ten thousand to flight: and your enemies shall fall before you by the sword.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev26-victory',
          html:
            'The blessings expand outward from food and safety to victory. Israel will not merely survive opposition; it will overcome — not through superior numbers but through alignment with God. Five will chase a hundred. The promise is not military supremacy but a disproportionate grace, a supernatural advantage that belongs to those bound to God by covenant.',
        },
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 9,
              spans: [
                t('For I will have respect unto you, and '),
                hg('make you fruitful', 'lev26-fruitful'),
                t(', and multiply you, and establish my covenant with you.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And ye shall eat old store, and bring forth the old because of the new.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev26-fruitful',
          html:
            'The blessings circle back to the beginning — fruitfulness. But now it is not simply abundance of crops; it is increase of the people themselves. A family multiplied, a name established, a covenant kept. The harvest is so great that last year&apos;s stores must be cleared out to make room for the new.',
        },
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 11,
              spans: [
                t('And I will set my tabernacle among you: and my soul shall not abhor you.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And I will '),
                hp('walk among you', 'lev26-presence'),
                t(', and will be your God, and ye shall be my people.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev26-presence',
          html:
            'The blessings culminate not in material plenty but in presence. God says <em>I will walk among you.</em> The covenant&apos;s deepest reward is not safety or harvest but the knowledge that you are not alone — that God has made His home in the midst of His people.',
        },
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 13,
              spans: [
                t('I am the LORD your God, which brought you forth out of the land of Egypt, that ye should not be their bondmen; and I have broken the bands of your yoke, and made you go upright.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev26-freedom',
          html:
            'The covenant is grounded in memory — not an abstract promise but history. God is the One who freed Israel from Egypt, who broke their chains. The blessings promised here are not new mercies; they are the continuation of a rescue already begun. To obey the covenant is to keep walking in the same direction God has already pointed.',
        },
        {
          kind: 'carry',
          html:
            'The blessings in this section are not about gaining ground in the world or the approval of others. They are about having enough, being safe, being fruitful, and — most of all — having the sense that God is walking near you. That is not a reward for perfect obedience; it is the natural shape a life takes when it aligns with the One who made it. If you are walking in the statutes of God — not perfectly, but honestly — these blessings are already moving toward you. Rain in season. Bread to the full. Peace. The sense that you are not alone.',
        },
        {
          kind: 'reflection',
          id: 'lev26-blessing',
          prompt:
            'Which of these blessings do you most need right now — provision, safety, victory over an enemy, or simply the presence of God near you? What would change if you trusted that these were already His intention for you?',
        },
      ],
    },

    /* ─── Leviticus 26:14–39 — The Curses (escalating) ──────────────── */
    {
      ref: 'Leviticus 26:14–39',
      title: 'The Curses of Disobedience',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 14,
              spans: [
                t('But if ye will not hearken unto me, and will not do all these commandments;'),
              ],
            },
            {
              number: 15,
              spans: [
                t('If ye shall '),
                hg('despise my statutes', 'lev26-despise'),
                t(', or if your soul abhor my judgments, so that ye will not do all my commandments, but that ye break my covenant;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev26-despise',
          html:
            'The chapter now turns. Not to rules broken by accident or weakness, but to <em>despising</em> — a deliberate turning away, a stomach-level rejection. The curses that follow are not punishment for human weakness but the shape a world takes when it turns its back on the God who made it. The darkness here is not arbitrary; it is the logic of broken covenant.',
        },
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 16,
              spans: [
                t('I also will do this unto you; I will even appoint over you '),
                hg('terror', 'lev26-terror'),
                t(', consumption, and the burning ague, that shall consume the eyes, and cause sorrow of heart: and ye shall sow your seed in vain, for your enemies shall eat it.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev26-terror',
          html:
            'The first curse is terror — a sickness of the soul. Not a lightning bolt but the creeping feeling that something is fundamentally wrong. The seed they sow will not be theirs to harvest; the work of their hands will feed someone else. This is the curse of labor divorced from meaning, of building without completion.',
        },
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 17,
              spans: [
                t('And I will set my face against you, and ye shall be '),
                hg('smitten before your enemies', 'lev26-smitten'),
                t(': they that hate you shall reign over you; and ye shall flee when none pursueth you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev26-smitten',
          html:
            'The second curse escalates — military defeat. But notice the detail: <em>ye shall flee when none pursueth you.</em> The enemy is not chasing them; they are running from their own fear. Cowardice is the curse. The covenant that promised disproportionate strength now promises disproportionate weakness — five will no longer chase a hundred.',
        },
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 18,
              spans: [
                t('And if ye will not yet for all this hearken unto me, then I will punish you '),
                hy('seven times more', 'lev26-seven-times'),
                t(' for your sins.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev26-seven-times',
          html:
            'The first <em>seven times more</em> appears here. The curses do not flatten out; they intensify by stages. This is not random punishment — it is the careful architecture of covenant justice. Each refusal to hear deepens the darkness.',
        },
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 19,
              spans: [
                t('And I will break the '),
                hy('pride of your power', 'lev26-pride'),
                t('; and I will make your heaven as iron, and your earth as brass:'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And your '),
                hg('strength shall be spent in vain', 'lev26-vain-strength'),
                t(': for your land shall not yield her increase, neither shall the trees of the land yield their fruits.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'lev26-pride',
          title: 'Ga&apos;on — &ldquo;pride&rdquo;',
          script: 'גָּאוֹן',
          translit: '<strong>ga&apos;on</strong> · pride, majesty, excellence',
          description:
            'The Hebrew word for pride also means majesty or excellence. Breaking the covenant does not only diminish moral standing — it breaks something in the people themselves, a dignity that flows from alignment with God.',
        },
        {
          kind: 'commentary',
          id: 'lev26-vain-strength',
          html:
            'The curse becomes physical. Heaven as iron. Earth as brass. Rain will not fall; the land will not answer to human labor. The work that should produce life produces only exhaustion. This is the curse of famine — not a single bad year but a persistent drying up, the sky closed, the ground unyielding.',
        },
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 21,
              spans: [
                t('And if ye walk contrary unto me, and will not hearken unto me; I will bring '),
                hg('seven times more plagues', 'lev26-plagues'),
                t(' upon you according to your sins.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('I will also send wild beasts among you, which shall rob you of your children, and destroy your cattle, and make you few in number; and your high ways shall be desolate.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev26-plagues',
          html:
            'The third escalation brings plague and wild beasts. The natural world turns predatory. Children are taken. Cattle die. The covenant that promised fruitfulness now promises a people dwindling. The highways — the arteries of trade and society — become empty and dangerous.',
        },
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 23,
              spans: [
                t('And if ye will not be reformed by me by these things, but will walk contrary unto me;'),
              ],
            },
            {
              number: 24,
              spans: [
                t('Then will I also walk contrary unto you, and will smite you, yet seven times for your sins.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And I will bring a sword upon you, that shall avenge the quarrel of my covenant: and when ye are gathered together within your cities, I will send the pestilence among you; and ye shall be delivered into the hand of the enemy.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev26-sword',
          html:
            'The fourth curse brings sword and pestilence. War and plague. The text deepens: <em>God walks contrary unto you.</em> It is not simply that good things withdraw; it is that God Himself becomes an adversary. This is the darkness beneath all the other darkness — the sense that you have made God your enemy.',
        },
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 26,
              spans: [
                t('And when I have broken the '),
                hy('staff of your bread', 'lev26-staff-bread'),
                t(', ten women shall bake your bread in one oven, and they shall deliver you your bread again by weight: and ye shall eat, and not be satisfied.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev26-staff-bread',
          html:
            'The <em>staff of bread</em> is supply — the physical staff you lean on to live. When it breaks, food becomes scarce enough that ten households must share one oven. They will labor to make bread and still not be satisfied. This is the curse of hunger — not so much the absence of food as the persistence of want no matter how hard you work.',
        },
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 27,
              spans: [
                t('And if ye will not for all this hearken unto me, but walk contrary unto me;'),
              ],
            },
            {
              number: 28,
              spans: [
                t('Then I will walk contrary unto you also in fury; and I, even I, will chastise you '),
                hy('seven times', 'lev26-seventh-times'),
                t(' for your sins.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And ye shall eat the flesh of your sons, and the flesh of your daughters shall ye eat.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev26-seventh-times',
          html:
            'The text does not shy away. Famine reaches its absolute extreme: <em>ye shall eat the flesh of your sons and daughters.</em> This is not metaphor; this happens in sieges, in famines, in the breaking points of human civilization. The text speaks of the unthinkable — the ultimate inversion of the covenant promise to multiply, now become a promise to cannibalize your own children. This is the pit the covenant curses describe.',
        },
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 30,
              spans: [
                t('And I will destroy your high places, and cut down your images, and cast your carcases upon the carcases of your idols, and my soul shall abhor you.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And I will make your cities waste, and bring your sanctuaries unto desolation, and I will not smell the savour of your sweet odours.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And I will bring the land into desolation: and your enemies which dwell therein shall be astonished at it.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev26-desolation',
          html:
            'The final curse is desolation and exile. The land itself becomes a waste. The cities emptied. The temples destroyed. The covenant people, who were promised to be blessed in the land, are driven out of it. The land that was promised to them, taken away.',
        },
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 33,
              spans: [
                t('And I will scatter you among the heathen, and will draw out a sword after you: and your land shall be desolate, and your cities waste.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('Then shall the land enjoy her sabbaths, as long as it lieth desolate, and ye be in your enemies&apos; land; even then shall the land rest, and enjoy her sabbaths.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev26-exile',
          html:
            'Exile. Scattered. The sword following them. But even here, the land keeps the Sabbath — it rests in their absence. The covenant never ceases; even judgment operates within its rhythms. There is almost a mercy in the image: the land that they would not let rest keeps the Sabbath anyway, in their exile.',
        },
        {
          kind: 'carry',
          html:
            'These verses do not describe what God wants; they describe what happens when we turn away from Him. The curses are not capricious; they are the shape a world takes when it rejects its Maker. But hold this alongside verse 42 — they are not final. Even in exile, even in the darkest moment, God says: <em>I will remember my covenant.</em> Do not soften these verses by skipping over them. Let them speak their dark truth. But let them open the question: What in your own life — a relationship, a habit, a refusal to listen — is moving in this direction? And what would turn it back?',
        },
        {
          kind: 'reflection',
          id: 'lev26-curses',
          prompt:
            'Where do you see the logic of these curses at work in your own choices or the world around you? What would it look like to walk contrary to the direction you&apos;re heading?',
        },
      ],
    },

    /* ─── Leviticus 26:40–46 — The Promise of Restoration ───────────── */
    {
      ref: 'Leviticus 26:40–46',
      title: 'God Remembers His Covenant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 40,
              spans: [
                t('If they shall '),
                hg('confess their iniquity', 'lev26-confess'),
                t(', and the iniquity of their fathers, with their trespass which they trespassed against me, and that also they have walked contrary unto me;'),
              ],
            },
            {
              number: 41,
              spans: [
                t('And that I also have walked contrary unto them, and have brought them into the land of their enemies; if then their uncircumcised hearts be '),
                hy('humbled', 'lev26-humbled'),
                t(', and they then accept of the punishment of their iniquity;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev26-confess',
          html:
            'The text now turns a corner. The curses are not the last word. If Israel confesses — not performs a ritual, but admits the truth of what they have done — a door opens. Confession here means acknowledging the reality: we have turned away. We have broken covenant. We deserve what has come upon us.',
        },
        {
          kind: 'hebrew',
          id: 'lev26-humbled',
          title: 'Kana — &ldquo;humbled&rdquo;',
          script: 'כָּנַע',
          translit: '<strong>kana</strong> · to be brought low, subdued',
          description:
            'Humility is not fake contrition or self-flagellation. It is simply the acknowledgment that you cannot fix what you have broken. The knees buckle because the truth is too big to stand under. This is the posture the covenant awaits.',
        },
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 42,
              spans: [
                t('Then '),
                hp('will I remember my covenant', 'lev26-remember-covenant'),
                t(' with Jacob, and also my covenant with Isaac, and also my covenant with Abraham will I remember; and I will remember the land.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev26-remember-covenant',
          html:
            'The heart of Leviticus 26 is here. <em>I will remember my covenant.</em> Not because Israel deserves it, but because God <em>is</em> covenant-faithful. He traces the memory backward — back to Jacob, to Isaac, to Abraham. The covenant does not rest on Israel&apos;s obedience; it rests on God&apos;s faithfulness. And His faithfulness goes deeper than any sin.',
        },
        {
          kind: 'christ',
          id: 'lev26-remember-covenant-2',
          title: 'Christ Connection — The Curse Becomes a Blessing',
          html:
            'Paul writes[res:intertextual-deuteronomy-28-leviticus-26], &ldquo;Christ hath redeemed us from the curse of the law, being made a curse for us… that the blessing of Abraham might come on the Gentiles through Jesus Christ&rdquo; (Gal. 3:13–14). Every curse in Leviticus 26 — terror, famine, plague, exile, the consumption of the flesh — fell on Christ at the cross. Romans 5:1 says, &ldquo;Therefore being justified by faith, we have peace with God through our Lord Jesus Christ&rdquo; (Rom. 5:1). The blessings promised here — peace, fruitfulness, God&apos;s presence — flow now through Him. The covenant is not abolished; it is fulfilled and opened to all who believe.',
        },
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 43,
              spans: [
                t('The land also shall be left of them, and shall enjoy her sabbaths, while she lieth desolate without them: and they shall accept of the punishment of their iniquity: because, even because they despised my judgments, and because their soul abhorred my statutes.'),
              ],
            },
            {
              number: 44,
              spans: [
                t('And yet for all that, when they be in the land of their enemies, I will not cast them away, neither will I abhor them, to destroy them utterly, and to break my covenant with them: for I am the LORD their God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev26-not-destroy',
          html:
            'Even in exile, God says: I will not cast you away utterly. I will not break covenant. The land rests, but it rests in a covenant that holds even in exile. God has committed Himself not to annihilate His people. They will be punished; they will suffer the fruits of their turning away. But they will not be erased.',
        },
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 45,
              spans: [
                t('But I will for their sakes remember the covenant of their ancestors, whom I brought forth out of the land of Egypt in the sight of all the heathen, that I might be their God: I am the LORD.'),
              ],
            },
            {
              number: 46,
              spans: [
                t('These are the statutes and judgments and laws, which the LORD made between him and the children of Israel in mount Sinai by the hand of Moses.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev26-closure',
          html:
            'The covenant ends where it began — at Sinai, in the memory of the exodus. God does not forget. He does not casually overturn the promises He has made. The covenant is written in stone, but also written in God&apos;s memory, which is far more reliable. For their sakes — because of His history with them, because of His nature — He remembers.',
        },
        {
          kind: 'carry',
          html:
            'The covenant opens with a conditional: if you walk in My statutes, you will live in peace and plenty. It closes with a deeper truth: even when you turn away, I will not turn away. Even in exile, even in the darkness of what you chose, you belong to Me. If you find yourself in the territory of the curses — worn down by your own choices, anxious, fruitless, smitten, fearful — confession is the door out. Not magical; not instant. But real. Tell God the truth. Humble yourself. And know that His covenant is older and deeper than your sin.',
        },
        {
          kind: 'reflection',
          id: 'lev26-restoration',
          prompt:
            'Is there something you have turned away from — a relationship with God, a practice, a truth — that you need to confess and return to? What would it look like to humble yourself and trust that God still remembers His covenant?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'If ye walk in my statutes, ye shall have rain in due season, bread to the full, peace, and I will walk among you. If ye despise my laws, ye shall face terror, drought, beasts, and exile. Yet even in exile, I will remember my covenant, for I am the LORD your God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Leviticus 26 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-leviticus-26',
      kind: 'study',
      source: 'Sefaria',
      label: 'Leviticus 26 — Sefaria Community Notes',
      url: 'https://www.sefaria.org/Leviticus.26',
      description: 'Annotated text with rabbinic commentary on covenant blessings and curses.',
    },
    {
      id: 'bibleodyssey-covenant-consequences',
      kind: 'study',
      source: 'Bible Odyssey',
      label: 'Covenant Blessings and Curses in Ancient Israel',
      url: 'https://www.bibleodyssey.org',
      description: 'Overview of conditional covenant language and the consequences of obedience and disobedience.',
    },
    {
      id: 'intertextual-deuteronomy-28-leviticus-26',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'The Covenant Pattern — Deuteronomy 28',
      url: 'https://intertextual.bible/',
      description: 'Parallels between Leviticus 26 and Deuteronomy 28 on the blessings and curses of the covenant.',
    },
  ],

  hasHebrew: true,
};
