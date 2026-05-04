import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 2 Peter 2 — False Prophets and Damnable Heresies
 *
 * Peter writes to warn. There were false prophets in Israel, and there will be false
 * teachers among you. They bring in heresies that deny the Lord who bought them. They
 * follow the way of Balaam, motivated by greed. They promise liberty while enslaving
 * others to corruption. Peter rehearses God's pattern: He judges the ungodly while
 * delivering the godly. The angels who sinned. The world of the ungodly. The cities of
 * Sodom and Gomorrha. And Lot, the righteous man tormented by wickedness. From all of
 * these, God knows how to rescue those who belong to Him. But for the false teachers,
 * it ends worse than it began—like a sow washed returning to the mire.
 */
export const SECOND_PETER_2: RichChapterContent = {
  bookSlug: '2-peter',
  bookName: '2 Peter',
  chapter: 2,

  estimatedMinutes: { beginner: 9, intermediate: 15, deep: 20 },
  topicTags: ['faithfulness', 'second-coming', 'witness', 'protection'],
  opener: {
    topical: true,
    caption: '2 Peter 2',
  },
  intros: [
    'Peter opens with a stark warning: there were false prophets in the past, and there will be false teachers among you. These are not outsiders—they are insiders who bring in damnable heresies privately, denying even the Lord who bought them. They are motivated by greed and use the gospel as cover for licentiousness. Yet for all their noise and their apparent freedom, they are enslaved to corruption. Peter\'s answer is not to panic, but to remember God\'s pattern. He has always known how to deliver the godly out of temptation, and to reserve the unjust for judgment.',
    'The passage is built as a series of biblical examples: the angels who sinned, cast to hell; Noah, saved through the flood; Lot, delivered from Sodom. In each case, God separates. He judges the ungodly and saves the righteous. The false teachers are not a new problem; they are an old problem, recurring. And they will be dealt with in the same way. The warning is not about fear, but about clarity. Know what to look for. Remember what God has always done. And rest in the fact that you have a rescuer who is faithful.',
  ],

  sections: [
    /* ─── 2 Peter 2:1–3 — False Prophets and Damnable Heresies ──────────── */
    {
      ref: '2 Peter 2:1–3',
      title: 'False Teachers Among You',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(1, t('But there were '), hy('false prophets also among the people', 'c-false-prophets'), t(', even as there shall be '), hy('false teachers among you', 'greek-pseudodidaskaloi'), t(', who privily shall bring in '), hy('damnable heresies', 'greek-airesis'), t(', even '), hg('denying the Lord that bought them', 'christ-redemption'), t(', and bring upon themselves swift destruction.')),
            verse(2, t('And many shall follow their '), hg('pernicious ways', 'c-destructive-ways'), t('; by reason of whom the way of truth shall be evil spoken of.')),
            verse(3, t('And through covetousness shall they with feigned words make merchandise of you: whose judgment now of a long time lingereth not, and their damnation slumbereth not.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-false-prophets',
          html: 'Peter does not present false teachers as a new phenomenon. They were present in the old covenant; they will be present in the new. The difference is that false prophets came from outside the community; false teachers come from within, and they are more dangerous precisely because they are trusted[res:sefaria-numbers22][res:intertextual-peter-proverbs26][res:perseus-pseudoprophetes].',
        },
        {
          kind: 'greek',
          id: 'greek-pseudodidaskaloi',
          title: 'Pseudodidaskaloi — &ldquo;False Teachers&rdquo;',
          script: 'ψευδοδιδάσκαλοι',
          translit: '<strong>pseudodidaskaloi</strong> · false + teacher; one who teaches what is not true',
          description: 'A false teacher is not merely wrong; the Greek word carries the sense of deception. They deliberately teach what is false while claiming authority. They have a following, influence, and apparent credentials. That is what makes them dangerous.',
        },
        {
          kind: 'greek',
          id: 'greek-airesis',
          title: 'Airesis — &ldquo;Heresy&rdquo;',
          script: 'αἵρεσις',
          translit: '<strong>airesis</strong> · a choice; a sect; a divisive doctrine',
          description: 'The word originally meant &ldquo;choice&rdquo;—picking one thing and rejecting another. A heresy is a doctrine that fractures the faith by choosing partial truth and calling it whole. It is damning not because it differs on detail, but because it severs from Christ.',
        },
        {
          kind: 'commentary',
          id: 'c-destructive-ways',
          html: 'Their ways are <em>pernicious</em>—literally, destructive. Not merely different or bold. The false teachers promise freedom while delivering enslavement to the passions. Their followers do not gain liberty; they lose it.',
        },
        {
          kind: 'christ',
          id: 'christ-redemption',
          title: 'Christ Connection — The Lord Who Bought Them',
          html: 'Peter says the false teachers <em>deny the Lord that bought them</em>. This is extraordinary. Even as they reject Christ, they cannot escape the fact that He paid for them. The redemption was purchased and real, whether they acknowledge it or not. To deny such a Lord is to deny the most elemental fact of the gospel—that Christ&apos;s blood has value, and that we have been bought with a price (1 Cor. 6:20). The heresy here is not merely intellectual error; it is a refusal of ownership, a refusal to belong to Him.',
        },
        {
          kind: 'carry',
          html: 'The false teacher often sounds reasonable. He sounds learned. He sounds as though he is giving you more freedom, not less. But notice Peter\'s test: <em>Does he point you to the Lord who bought you?</em> Any teaching that loosens Christ\'s grip on your life, that gives you permission to live as though the cross never happened, that redefines sin or erases accountability—that teaching, however intelligent it sounds, is a heresy. You belong to Christ. Not metaphorically. Really. He owns you. A teaching that denies that is damning.',
        },
        {
          kind: 'reflection',
          id: 'peter2-false-teachers',
          prompt: 'What teachings in your world sound appealing but subtly deny that you belong to Christ? What would change if you let that ownership really settle?',
        },
      ],
    },

    /* ─── 2 Peter 2:4–6 — God Judges and Delivers ───────────────────── */
    {
      ref: '2 Peter 2:4–6',
      title: 'God Spared Not the Angels',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(4, t('For if God spared not the '), hy('angels that sinned', 'c-fallen-angels'), t(', but cast them down to '), hy('hell', 'greek-tartaroō'), t(', and delivered them into '), hy('chains of darkness', 'c-chains'), t(', to be reserved unto judgment;')),
            verse(5, t('And spared not the '), hy('old world', 'c-old-world'), t(', but '), hg('saved Noah the eighth person', 'christ-ark'), t(', a preacher of righteousness, bringing in the flood upon the world of the ungodly;')),
            verse(6, t('And turning the cities of Sodom and Gomorrha into ashes '), t('condemned them with an overthrow'), t(', making them an ensample unto those that after should live ungodly;')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-fallen-angels',
          html: 'The angels that sinned are referenced in Jude 6 as well. These are not demons in general, but a specific order of angels who committed a specific transgression (likely the sons of God in Genesis 6 who took human wives). The point is: if even the created beings of power and light could fall away and be judged, no one is exempt from accountability.',
        },
        {
          kind: 'greek',
          id: 'greek-tartaroō',
          title: 'Tartaroō — &ldquo;Cast to Hell&rdquo;',
          script: 'ταρταρόω',
          translit: '<strong>tartaroō</strong> · to cast down to Tartarus; to imprison in the abyss',
          description: 'This verb appears nowhere else in the New Testament. Tartarus is the Greek underworld prison reserved for the most wicked beings. Peter uses pagan imagery to make a point: even by the standards of the nations around you, judgment for sin is real and terrible.',
        },
        {
          kind: 'commentary',
          id: 'c-chains',
          html: 'The chains of darkness are not merely restraint but the deprivation of all light, all glory, all presence. Where God is not, there is nothing but darkness and bondage.',
        },
        {
          kind: 'commentary',
          id: 'c-old-world',
          html: 'The old world refers to the antediluvian age—the world before the flood. God judged it utterly, sweeping it away. Yet even then, one righteous man and his family were preserved. The pattern is always the same: judgment on the ungodly, salvation for the righteous.',
        },
        {
          kind: 'christ',
          id: 'christ-ark',
          title: 'Christ Connection — Noah and the Ark',
          html: 'Noah is saved through the flood by the ark. And who is the ark for the people of God in the New Covenant? Christ Himself—the place of refuge, the bearer of judgment (upon Himself), the way through the waters. Just as the flood waters separated the righteous from the unrighteous, so Christ separates those who are in Him from those who are outside. To be in Him is to be safe. To be outside is to be swept away.',
        },
        {
          kind: 'carry',
          html: 'The list Peter gives is not a catalog of ancient history. It is a pattern. God judges. He always has. And He always preserves a people for Himself within that judgment. You are either under His judgment or under His grace. There is no third way. And the grace you have—this very moment—is not something you earned or deserve. It is bestowed. Noah did not deserve to be spared; he was righteous not by his own strength but by grace. The same is true of you. Walk in that.',
        },
        {
          kind: 'reflection',
          id: 'peter2-judgment',
          prompt: 'When you think of God as judge, does that frighten you or comfort you? Why? What would change if you could fully trust His justice?',
        },
      ],
    },

    /* ─── 2 Peter 2:7–10a — Just Lot Delivered ───────────────────────── */
    {
      ref: '2 Peter 2:7–10a',
      title: 'Just Lot, Vexed in His Soul',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(7, t('And delivered '), hy('just Lot', 'c-lot-righteous'), t(', '), hg('vexed with the filthy conversation of the wicked', 'c-vexed'), t('(')),
            verse(8, t('(For that righteous man dwelling among them, in seeing and hearing, vexed his righteous soul from day to day with their unlawful deeds;)')),
            verse(9, t('The Lord knoweth how to '), hp('deliver the godly out of temptations', 'christ-deliverance'), t(', and to '), hg('reserve the unjust unto the day of judgment to be punished', 'c-reserve-unjust'), t(':')),
            verse(10, t('But chiefly them that walk after the flesh in the lust of uncleanness, and despise government. Presumptuous are they, selfwilled, and are not afraid to speak evil of dignities.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-lot-righteous',
          html: 'Peter calls Lot &ldquo;just&rdquo;—not perfect, but righteous. Genesis does not paint Lot as a hero. Yet he is identified here as righteous. The righteousness is not his achievement; it is God&apos;s assessment of the one who, however haltingly, seeks Him.',
        },
        {
          kind: 'commentary',
          id: 'c-vexed',
          html: 'Lot was not untouched by Sodom. He was <em>vexed</em>—tormented, day by day, by the depravity around him. This is not the serene detachment of the righteous, but the active distress of one who sees evil and cannot become complicit in it. Righteousness in a corrupt place is exhausting.',
        },
        {
          kind: 'greek',
          id: 'greek-molunō',
          title: 'Molunō — &ldquo;Pollution&rdquo; or &ldquo;Defilement&rdquo;',
          script: 'μολύνω',
          translit: '<strong>molunō</strong> · to stain; to soil; to defile; to pollute',
          description: 'The word carries the sense of moral pollution—a staining of the soul. Lot could not help but be touched by it. The unclean surroundings seeped into him. Yet God saw his righteousness—his resistance, however costly.',
        },
        {
          kind: 'christ',
          id: 'christ-deliverance',
          title: 'Christ Connection — Deliverance from Temptation',
          html: 'Peter writes: &ldquo;The Lord knoweth how to deliver the godly out of temptations.&rdquo; This echoes 1 Corinthians 10:13, where Paul says no temptation overtakes you except what is common to mankind, and God will provide a way of escape. The Lord Jesus Himself learned obedience through temptation (Heb. 2:18) and is therefore able to help those who are tempted. To be delivered from temptation is not to escape it, but to be given power to withstand it, and ultimately, to be removed from it by the One who is the Way out.',
        },
        {
          kind: 'commentary',
          id: 'c-reserve-unjust',
          html: 'While God delivers the righteous, He reserves the unjust. <em>Reserve</em> carries the sense of keeping in custody. They are not free; they are held until the day of reckoning. To refuse God&apos;s grip is not to escape Him. It is to be reserved for judgment.',
        },
        {
          kind: 'carry',
          html: 'If you are living righteously in an unrighteous place, do not be surprised if you are vexed. Do not assume it means something is wrong with you. It may mean you are seeing clearly. The call is not to withdraw from the world, but to maintain your righteous soul within it, knowing that the Lord knows how to deliver you. You are not abandoned in temptation. You are watched over. And there is an end coming—a deliverance that is final and complete.',
        },
        {
          kind: 'reflection',
          id: 'peter2-vexed',
          prompt: 'Where is your righteous soul being vexed by the unrighteousness around you? What does it mean to believe that the Lord knows how to deliver you from that, not necessarily by removing you, but by holding you fast?',
        },
      ],
    },

    /* ─── 2 Peter 2:10b–14 — Presumptuous and Selfwilled ──────────────── */
    {
      ref: '2 Peter 2:10b–14',
      title: 'Despise Government, Eyes Full of Adultery',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(10, t('Presumptuous are they, selfwilled, and '), hg('are not afraid to speak evil of dignities', 'c-slander-authority'), t(';')),
            verse(11, t('Whereas angels, which are greater in power and might, bring not railing accusation against them before the Lord.')),
            verse(12, t('But these, as natural brute beasts, '), hy('made to be taken and destroyed', 'c-brute-beasts'), t(', speak evil of the things that they understand not; and shall utterly perish in their own corruption;')),
            verse(13, t('Receiving the reward of unrighteousness. They count it pleasure to carouse in the day time. Spots they are and blemishes, '), hg('sporting themselves with their own deceivings while they feast with you', 'c-carousings'), t(';')),
            verse(14, t('Having '), hy('eyes full of adultery', 'greek-plērēs'), t(', and that cannot cease from sin; beguiling unstable souls: an heart they have exercised with covetous practices; cursed children:')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-slander-authority',
          html: 'The false teachers do not merely teach error; they <em>despise government</em> and are <em>not afraid to speak evil of dignities</em>. This is not bold prophetic witness; it is reckless slander. They have untethered themselves from any restraint—not from truth, but from fear of consequences. They speak evil of things they do not understand.',
        },
        {
          kind: 'commentary',
          id: 'c-brute-beasts',
          html: 'Peter compares them to natural brute beasts made to be taken and destroyed. They live like animals, governed only by appetite. Their conversation, their pursuits, their entire orientation is toward what can be consumed. They are not enlightened; they are enslaved to flesh.',
        },
        {
          kind: 'greek',
          id: 'greek-plērēs',
          title: 'Plērēs — &ldquo;Full of&rdquo;',
          script: 'πλήρης',
          translit: '<strong>plērēs</strong> · full; complete; loaded; saturated',
          description: 'The phrase is not merely that they commit adultery. Their eyes are <em>full of it</em>—saturated with lust. It is not a temptation they resist; it is the atmosphere they breathe. Their entire visual field is corrupted by covetousness.',
        },
        {
          kind: 'commentary',
          id: 'c-carousings',
          html: 'They sport themselves in their deceptions <em>while they feast with you</em>. This is insidious. They infiltrate Christian gatherings. They sit at tables with believers and use those spaces as occasions for sensuality. The shared meal becomes corrupted by their presence.',
        },
        {
          kind: 'christ',
          id: 'christ-eyes',
          title: 'Christ Connection — Pure Eyes',
          html: 'The false teachers have eyes full of adultery. Jesus speaks to this directly: &ldquo;Blessed are the pure in heart: for they shall see God&rdquo; (Matt. 5:8). And He warns: &ldquo;If thine eye be evil, thy whole body shall be full of darkness&rdquo; (Matt. 6:23). The gaze frames everything else. A lustful eye corrupts the entire person. In contrast, Jesus fixes His eye on righteousness and truth. To behold Him is to have your eye healed, turned toward what is actual, what is good, what is eternal.',
        },
        {
          kind: 'carry',
          html: 'Where does your eye rest? Not once or twice, but as a pattern? Are your eyes filling with what feeds your soul, or what corrupts it? Notice that Peter does not only call out the false teachers; he warns those who are unstable. Some are being beguiled by them. This suggests you can have sincere faith and still be susceptible to seduction if you are not anchored. Guard what you look at. Guard what you listen to. Guard where you allow your heart to rest. Your eye is the lamp of your body.',
        },
        {
          kind: 'reflection',
          id: 'peter2-eyes',
          prompt: 'What are your eyes habitually full of? How would your day be different if your eyes were set on Christ instead of on what is forbidden?',
        },
      ],
    },

    /* ─── 2 Peter 2:15–17 — The Way of Balaam ──────────────────────── */
    {
      ref: '2 Peter 2:15–17',
      title: 'The Way of Balaam',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(15, t('Which have forsaken the right way, and are gone astray, following '), hy('the way of Balaam the son of Bosor', 'c-balaam-way'), t(', who '), hg('loved the wages of unrighteousness', 'c-balaam-greed'), t('(')),
            verse(16, t('But was rebuked for his iniquity: the dumb ass speaking with '), hy("man&apos;s voice", 'c-talking-donkey'), t(' forbad the madness of the prophet;')),
            verse(17, t('These are '), hy('wells without water', 'greek-pēgē'), t(', clouds that are carried with a tempest; to whom the mist of darkness is reserved for ever.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-balaam-way',
          html: 'Balaam is a figure from Numbers 22–24. He is called to curse Israel for Balak, king of Moab, in exchange for wages. Though God forbids him, Balaam goes, seduced by payment. The pattern is: religious authority + greed = corruption. It is always the same combination.',
        },
        {
          kind: 'commentary',
          id: 'c-balaam-greed',
          html: 'Peter identifies the operative sin: <em>loved the wages of unrighteousness.</em> Not that Balaam was paid (payment is neutral); but that he <em>loved</em> it, pursued it, let it overtake his judgment. This is the root of false teaching. Someone loved something more than truth.',
        },
        {
          kind: 'greek',
          id: 'greek-katara',
          title: 'Katara — &ldquo;Curse&rdquo;',
          script: 'κατάρα',
          translit: '<strong>katara</strong> · a curse; an invocation of evil',
          description: 'A curse in Scripture is not an incantation. It is an alignment with evil, a speaking of evil into existence. To curse what God blessed is to position yourself against Him.',
        },
        {
          kind: 'commentary',
          id: 'c-talking-donkey',
          html: 'The donkey is extraordinary. A beast of burden sees what the prophet does not—an angel standing in the way. And when the donkey speaks in human voice, it is not magic; it is the intervention of God. Balaam is so mad in his greed that he needs a donkey to rebuke him.',
        },
        {
          kind: 'greek',
          id: 'greek-pēgē',
          title: 'Pēgē — &ldquo;Well&rdquo;',
          script: 'πηγή',
          translit: '<strong>pēgē</strong> · a spring; a source; a fountain',
          description: 'In an arid climate, a well is life. To promise a well and deliver emptiness is the cruelest deception. The false teacher offers living water but delivers only drought.',
        },
        {
          kind: 'christ',
          id: 'christ-living-water',
          title: 'Christ Connection — Christ, the Living Water',
          html: 'Jesus says to the woman at the well: &ldquo;Whosoever drinketh of the water that I shall give him shall never thirst; but the water that I shall give him shall be in him a well of water springing up into everlasting life&rdquo; (John 4:14). False teachers promise refreshment and deliver dust. Christ alone is the source. He is the well that never runs dry, the fountain that sustains eternally.',
        },
        {
          kind: 'carry',
          html: 'Beware the person in authority who is motivated by wages. Not that leaders should not be paid; they should. But notice the difference between one who serves and happens to be sustained by his people, and one who serves because of the sustenance. Follow those who would serve you even if you could not pay them. Avoid those whose eye is fixed on the payoff. Their wells will be dry, and you will thirst.',
        },
        {
          kind: 'reflection',
          id: 'peter2-balaam',
          prompt: 'Where in your own life are you tempted to follow the way of Balaam—to compromise truth for what pays? What would repentance look like?',
        },
      ],
    },

    /* ─── 2 Peter 2:18–22 — Liberty is Slavery; Latter End Worse ───────── */
    {
      ref: '2 Peter 2:18–22',
      title: 'The Latter End Worse Than the Beginning',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(18, t('For when they speak great swelling words of vanity, they '), hg('allure through the lusts of the flesh', 'c-allure'), t(' them that '), hy('were clean escaped', 'c-clean-escaped'), t(' from them who live in error;')),
            verse(19, t('While they promise them '), hp('liberty', 'christ-liberty'), t(', they themselves are the '), hy('servants of corruption', 'greek-douleia'), t(': for of whom a man is overcome, of the same is he brought in bondage.')),
            verse(20, t('For if after they have '), hg('escaped the pollutions of the world through the knowledge of the Lord and Saviour Jesus Christ', 'c-escaped-knowledge'), t(', they are again entangled therein, and overcome, '), hg('the latter end is worse with them than the beginning', 'c-worse-end'), t('(')),
            verse(21, t('For it had been better for them not to have known the way of righteousness, than, after they have known it, to turn from the holy commandment delivered unto them.')),
            verse(22, t('But it is happened unto them according to the true proverb, The dog is turned to his own vomit again; and the '), hy('sow that was washed to her wallowing in the mire', 'c-sow-mire'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-allure',
          html: 'The false teachers use the language of liberation. But notice the mechanism: <em>they allure through the lusts of the flesh them that were clean escaped.</em> They do not teach righteousness; they appeal to desire. They use rhetoric to pull people back into the very sins they had abandoned.',
        },
        {
          kind: 'commentary',
          id: 'c-clean-escaped',
          html: 'These are not unbelievers. These are believers who have genuinely escaped the pollutions of the world. They have left their old lives behind. And the false teachers come to pull them back.',
        },
        {
          kind: 'greek',
          id: 'greek-douleia',
          title: 'Douleia — &ldquo;Bondage&rdquo; or &ldquo;Slavery&rdquo;',
          script: 'δουλεία',
          translit: '<strong>douleia</strong> · slavery; servitude; a state of being bound',
          description: 'The word is absolute. To be a dulos (slave) is to have no will of your own. The false teachers, for all their talk of freedom, are slaves. They cannot cease from sin (v. 14). They are owned by their appetites.',
        },
        {
          kind: 'commentary',
          id: 'c-escaped-knowledge',
          html: 'The escape is described as coming through <em>the knowledge of the Lord and Saviour Jesus Christ.</em> Not abstract knowledge, but personal knowing. A relational encounter with Christ Himself is what breaks the power of sin. To turn away from that is to lose everything.',
        },
        {
          kind: 'commentary',
          id: 'c-worse-end',
          html: 'This verse cuts across the modern notion that the goal is merely to get people to Jesus and everything gets better. Peter says the opposite: if someone knows Christ and turns away, the latter end is worse than the beginning. The knowledge deepens the refusal. The grace refused becomes judgment.',
        },
        {
          kind: 'commentary',
          id: 'c-sow-mire',
          html: 'The proverb is brutal. A sow can be washed, but a sow is still a sow. It will return to the mire. This is not a statement about whether salvation is real or permanent, but about human nature unrestrained by grace. Left to itself, sin flows downhill.',
        },
        {
          kind: 'christ',
          id: 'christ-liberty',
          title: 'Christ Connection — Freedom in Christ',
          html: 'The false teachers promise liberty. Jesus defines true liberty: &ldquo;If the Son therefore shall make you free, ye shall be free indeed&rdquo; (John 8:36). And immediately before: &ldquo;Whosoever committeth sin is the servant of sin&rdquo; (v. 34). This is not abstract. To be enslaved to sin is to be enslaved, period. The only freedom that is real is freedom from sin—and that comes through the Son. The irony of the false teachers is that they call it liberty while delivering slavery.',
        },
        {
          kind: 'carry',
          html: 'If you have escaped the pollutions of the world, if you know Christ, do not let anyone allure you back with the language of freedom. The appetite that was killed in you does not deserve another audience. The person who was washed is not improved by returning to the mire. Something far stronger than willpower keeps a person clean: remembrance of why they were washed, and love for the One who washed them. Hold to that. The latter end—your end, if you stay faithful—is not worse than the beginning. It is full of glory.',
        },
        {
          kind: 'reflection',
          id: 'peter2-freedom',
          prompt: 'What sin have you been freed from? What would tempt you to return to it? How would remembering that you were washed help you resist?',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 2 Peter 2',
    quote:
      'The Lord knows how to deliver the godly out of temptations and to reserve the unjust unto the day of judgment to be punished. False teachers will come, but God has always known how to rescue those who belong to Him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Peter 2 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-numbers22',
      kind: 'study',
      source: 'Sefaria',
      label: 'Numbers 22–24 — Balaam and the Talking Donkey',
      url: 'https://www.sefaria.org/Numbers.22',
      description: 'OT account of Balaam, whom Peter cites as example of false prophet who loved the wages of unrighteousness.',
    },
    {
      id: 'intertextual-peter-proverbs26',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Proverbs 26:11 ↔ 2 Peter 2:22 (The Dog Returns)',
      url: 'https://intertextual.bible/text/proverbs-26.11/2-peter-2.22',
      description: 'Cross-reference: Peter cites the proverb about dogs returning to their vomit to warn against apostasy.',
    },
    {
      id: 'perseus-pseudoprophetes',
      kind: 'lexicon',
      source: 'Perseus Digital Library',
      label: 'Greek Lexicon — Pseudoprophetes (False Prophet)',
      url: 'https://www.perseus.tufts.edu/hopper/morph?l=pseudoprophetes&la=greek',
      description: 'The Greek word for &ldquo;false prophets&rdquo; — deceivers who claim divine authority.',
    },
  ],

  hasHebrew: false,
};
