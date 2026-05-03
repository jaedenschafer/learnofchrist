import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Chronicles 7 — Fire from Heaven and "If My People"
 *
 * Solomon has finished his prayer in the temple. Then, in a moment of divine
 * affirmation, fire comes down from heaven and consumes the offerings. The
 * glory of the Lord fills the house. The people bow, worship, and praise. But
 * the chapter turns inward: the Lord appears to Solomon by night with a
 * conditional promise. "If my people, which are called by my name, shall
 * humble themselves, and pray, and seek my face, and turn from their wicked
 * ways; then will I hear from heaven, and will forgive their sin, and will
 * heal their land." It is one of the Old Testament's most quoted verses on
 * national repentance—and a foreshadowing of the One in whom all conditions
 * are fulfilled.
 */
export const CHRONICLES_2_7: RichChapterContent = {
  bookSlug: '2-chronicles',
  bookName: '2 Chronicles',
  chapter: 7,

  estimatedMinutes: { beginner: 5, intermediate: 13, deep: 16 },
  intros: [
    'The dedication of Solomon&apos;s temple is the culmination of David&apos;s vision and Solomon&apos;s labor. The ark is in place. The altar stands. The priests and Levites are ready. And now Solomon finishes his long prayer of consecration—a prayer that stretches across the span of the previous chapter, moving from gratitude to confession to intercession, holding before God the needs of the people and the future of the nation.',
    'But prayer alone does not complete the dedication. Something more is needed—a sign from heaven, a word of the Lord that affirms what has been built, that sets apart this house as God&apos;s own. And it comes. Fire comes down from heaven, just as it came in the days of Aaron and in the days of Elijah. The glory of the Lord fills the house. The people see and respond: they bow, they worship, they praise. The dedication is complete. But the Lord&apos;s word is not finished. In the same night, the Lord appears to Solomon again, and what He says changes everything. This is not a promise of unending favor. It is a conditional word—the word that will echo through Israel&apos;s entire history.',
  ],

  bottomShare: {
    label: 'Share 2 Chronicles 7',
    quote:
      '"If my people, which are called by my name, shall humble themselves, and pray, and seek my face, and turn from their wicked ways; then will I hear from heaven, and will forgive their sin, and will heal their land." One of the Old Testament&apos;s most quoted verses on repentance.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Chronicles 7 · Study Guide',
  },

  sections: [
    /* ─── 2 Chronicles 7:1–3 — Fire from Heaven ──────────────────────── */
    {
      ref: '2 Chronicles 7:1–3',
      title: 'Fire from Heaven',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(1, 'Now when Solomon had made an end of praying, the fire came down from heaven, and consumed the burnt offering and the sacrifices; and the glory of the Lord filled the house.'),
            plain(2, 'And the priests could not enter into the house of the Lord, because the glory of the Lord had filled the Lord&apos;s house.'),
            plain(3, 'And when all the children of Israel saw how the fire came down, and the glory of the Lord upon the house, they bowed themselves with their faces to the ground upon the pavement, and worshipped, and praised the Lord, saying, For he is good; for his mercy endureth for ever.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'fire-heaven-descent',
          html:
            'Fire comes down from heaven. It is the same sign that appeared in the days of Aaron: when the tabernacle was dedicated, fire from the Lord consumed the offering on the altar (Leviticus 9:24). It is the same sign that appeared in the days of Elijah: when the prophet called upon God to show that He alone is God, fire fell from heaven and consumed the sacrifice (1 Kings 18:38). In each moment, fire from heaven is a visible affirmation—a sign that God sees, God accepts, God is present. Solomon did not call down the fire through magic or ritual. Solomon prayed. And God answered with fire.',
        },
        {
          kind: 'commentary',
          id: 'glory-fills-house',
          html:
            'The glory of the Lord fills the house. The Hebrew word for "glory"—<em>kavod</em>—carries the weight of God&apos;s presence, His honor, His radiance. This is not metaphor. The priests cannot enter the house. The visible presence of God is so intense that human beings cannot stand in it. The house has been sanctified not by the priests&apos; hands alone, but by the descent of God Himself.',
        },
        {
          kind: 'hebrew',
          id: 'esh-mehashamayim',
          title: 'Esh mehashamayim—"Fire from Heaven"',
          script: 'אֵשׁ מֵהַשָּׁמַ֫יִם',
          translit: '<strong>esh mehashamayim</strong> · fire from the heavens; divine fire',
          description:
            'The fire that comes from heaven is always a sign of God&apos;s active involvement, His direct intervention in human affairs. It is not an accidental fire, nor is it a fire the priests kindled. It is fire that comes from above—from the realm of God—and it falls upon the altar where sacrifice is offered. When Israel sees it, they know: God has been here. God has seen. God has accepted.',
        },
        {
          kind: 'commentary',
          id: 'people-worship',
          html:
            'The people see the fire, they see the glory, and they bow. They do not stand. They do not argue about whether the sign is real. They bow with their faces to the ground upon the pavement, and they worship. And they praise the Lord with the words that would echo through Israel&apos;s entire worship: "For he is good; for his mercy endureth for ever." This is the response that God draws from human hearts when they encounter His presence—not fear that drives them away, but awe that draws them down in worship.',
        },
        {
          kind: 'carry',
          html:
            'What does it take for us to recognize God&apos;s presence? The people of Solomon&apos;s day saw fire. They saw glory. They could not miss it. But Scripture tells us that in our own time, God&apos;s presence comes to us in quieter ways—in answered prayer, in providential timing, in a word spoken at just the right moment, in a peace that surpasses understanding. These signs are no less real than fire from heaven. The question is: do we recognize them? And when we do, do we bow?',
        },
        {
          kind: 'reflection',
          id: 'fire-response',
          prompt: 'When have you experienced a moment of God&apos;s presence or provision that was unmistakable to you? How did you respond?',
        },
      ],
    },

    /* ─── 2 Chronicles 7:4–10 — The Great Festival of Dedication ──────── */
    {
      ref: '2 Chronicles 7:4–10',
      title: 'The Great Festival of Dedication',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(4, 'And the king and all the people offered sacrifices before the Lord.'),
            plain(5, 'And king Solomon offered a sacrifice of twenty and two thousand oxen, and an hundred and twenty thousand sheep: so the king and all the people dedicated the house of God.'),
            plain(6, 'And the priests waited on their offices: the Levites also with instruments of musick of the Lord, which David the king had made to praise the Lord, because his mercy endureth for ever, when David praised by their ministry; and the priests sounded trumpets before them: and all Israel stood.'),
          ],
        },
        {
          kind: 'commentary',
          id: '2-chronicles-7-mid-6',
          html:
            '<p>One phase concludes and the next begins, showing step-by-step restoration.</p>',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(7, 'Moreover Solomon hallowed the middle of the court that was before the house of the Lord: for there he offered burnt offerings, and the fat of the peace offerings, because the brasen altar which Solomon had made was not able to receive the burnt offerings, and the meat offerings, and the fat.'),
            plain(8, 'Also at the same time Solomon kept the feast seven days, and all Israel with him, a very great congregation, from the entering in of Hamath unto the river of Egypt.'),
            plain(9, 'And in the eighth day they made a solemn assembly: for they kept the dedication of the altar seven days, and the feast seven days.'),
            plain(10, 'And on the three and twentieth day of the seventh month he sent the people away into their tents, glad and merry in heart for the goodness that the Lord had shewed unto David, and to Solomon, and to Israel his people.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'sacrifice-multitude',
          html:
            'The numbers are staggering. Twenty-two thousand oxen. One hundred twenty thousand sheep. These are not symbolic numbers; they are acts of total commitment. The king and the people have emptied their flocks to offer before the Lord. Each animal represents a covenant acknowledgment—"You are God, and we are Yours. All that we have comes from Your hand." The sheer scale of the offering shows that this is not a private ceremony. This is a nation turning its entire attention toward heaven.',
        },
        {
          kind: 'commentary',
          id: 'priests-levites-music',
          html:
            'The priests wait on their offices. The Levites stand with instruments of music—the very instruments that David had made and appointed for the praise of the Lord. Music is not incidental to worship; it is integral. The trumpets sound. The people worship with both their bodies (standing still, listening) and their ears (hearing the praise). Worship is multisensory, and all of it points toward God.',
        },
        {
          kind: 'commentary',
          id: 'seven-days-assembly',
          html:
            'They keep the feast for seven days—the traditional period of dedication and consecration in Israel. On the eighth day, a solemn assembly. Seven days for the dedication of the altar, and seven days for the feast itself. The doubling of the number shows the importance of the moment. It is not a brief ceremony; it is a season set apart, a full week of the nation turning toward God together.',
        },
        {
          kind: 'commentary',
          id: 'glad-merry',
          html:
            'On the twenty-third day of the seventh month, the people are sent away into their tents—glad and merry in heart. This is not grim obedience. This is joy. "For the goodness that the Lord had shewed unto David, and to Solomon, and to Israel his people." The people recognize that what has happened is not just the completion of a building project. It is a sign of God&apos;s favor, God&apos;s goodness made visible. And they go home with their hearts filled with gladness.',
        },
        {
          kind: 'carry',
          html:
            'Corporate worship—worship with others, even on a grand scale—has power that private devotion cannot match. The people of Israel did not stand alone before God. They stood together, thousands upon thousands, all offering, all praising, all recognizing His goodness. They went home changed, their hearts full of joy because they had experienced something larger than themselves. What does it mean for us to gather with others in worship?',
        },
        {
          kind: 'reflection',
          id: 'gathering-worship',
          prompt: 'When have you felt the power of worshipping with others? How did it differ from your private times of prayer or devotion?',
        },
      ],
    },

    /* ─── 2 Chronicles 7:11–16 — "If My People..." The Conditional Promise ─ */
    {
      ref: '2 Chronicles 7:11–16',
      title: 'The Conditional Promise: "If My People"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(11, 'Thus Solomon finished the house of the Lord, and the king&apos;s house: and all that came into Solomon&apos;s heart to make in the house of the Lord, and in his own house, he prosperously effected.'),
            plain(12, 'And the Lord appeared to Solomon by night, and said unto him, I have heard thy prayer, and have chosen this place to myself for an house of sacrifice.'),
            {
              number: 13,
              spans: [
                t('If I shut up heaven that there be no rain, or if I command the locusts to devour the land, or if I send pestilence among my people;'),
              ],
            },
            {
              number: 14,
              spans: [
                t('If my people, which are called by my name, shall '),
                t('humble themselves'),
                t(', and '),
                t('pray'),
                t(', and '),
                t('seek my face'),
                t(', and '),
                t('turn from their wicked ways'),
                t('; then will I '),
                t('hear from heaven'),
                t(', and will '),
                t('forgive their sin'),
                t(', and will '),
                t('heal their land'),
                t('.'),
              ],
            },
            plain(15, 'Now mine eyes shall be open, and mine ears attent unto the prayer that is made in this place.'),
            plain(16, 'For now have I chosen and sanctified this house, that my name may be there for ever: and mine eyes and my heart shall be there perpetually.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'solomon-finished',
          html:
            'Solomon has finished the house. He has also finished the king&apos;s house. All that came into his heart to make—he has made it, and he has done it prosperously. There is a moment of completion here, a moment where everything is in place. But it is precisely in this moment of completion that the Lord appears to Solomon. The message is clear: finishing the building is not the end of the work. What happens next depends on what the people do.',
        },
        {
          kind: 'commentary',
          id: 'if-conditions',
          html:
            'The Lord lays out conditions. "If I shut up heaven that there be no rain, or if I command the locusts to devour the land, or if I send pestilence among my people"—these are not threats spoken in anger. These are the natural consequences of covenant-breaking. When God&apos;s people turn away from Him, famine comes. Plague comes. The land withers. It is the outworking of a broken covenant. But the condition continues: "If my people...shall humble themselves, and pray, and seek my face, and turn from their wicked ways; then will I hear, and will forgive, and will heal their land." The door is always open. Repentance is always possible. Healing is always available to those who return.',
        },
        {
          kind: 'hebrew',
          id: 'hiphil-rapha',
          title: 'Rapha—"To Heal"',
          script: 'רָפָא',
          translit: '<strong>Rapha</strong> · to heal; to make whole; to restore',
          description:
            'The verb "rapha" appears not only in connection with physical healing but with the healing of a nation, the restoration of what has been broken. When God says "I will heal their land," it is not merely the plants that will grow again. It is the people&apos;s relationship with God that will be restored, the people&apos;s peace and security that will return. Healing is total—body, soul, and land made whole.',
        },
        {
          kind: 'commentary',
          id: 'humble-pray-seek-turn',
          html:
            'Notice the four movements: <strong>humble</strong> (recognize dependence on God), <strong>pray</strong> (voice the recognition aloud), <strong>seek my face</strong> (turn attention toward God Himself), and <strong>turn from wicked ways</strong> (change behavior, not just emotion). Repentance is not a single act. It is a progression—a turning of the heart, a turning toward God, and a turning away from sin. All four elements are necessary.',
        },
        {
          kind: 'commentary',
          id: 'eyes-open-ears-attent',
          html:
            'God promises that His eyes will be open and His ears attent to prayer made in this place. He is not distant. He is not preoccupied. He is listening. He is watching. The temple becomes not just a building but a place where heaven leans in to hear the cries of the people. Every prayer offered there has the full attention of the God of heaven.',
        },
        {
          kind: 'christ',
          id: '2c7-christ-keeper',
          title: 'Christ Connection — The One Who Keeps the Condition',
          html:
            'Christ is the perfect Davidic Son who does what Israel could not. He humbles Himself, taking on human form and becoming obedient unto death (Philippians 2:8). He prays without ceasing, not just in moments of crisis but in the fabric of His entire life—in the wilderness, in Gethsemane, on the cross. He seeks the Father&apos;s face with perfect devotion: "Not my will, but thine be done" (Luke 22:42). And He turns entirely from wickedness—He knows no sin; He commits no transgression. In His resurrection, He opens the door for the healing of all lands, all peoples, all creation. When we are "in Christ," we are covered by His perfect fulfillment of every condition. We are made whole, not by our own repentance, but by His. As Peter says: "To him give all the prophets witness, that through his name whosoever believeth in him shall receive remission of sins" (Acts 3:43). The "if" of 2 Chronicles 7:14 finds its fullness in Him.',
        },
        {
          kind: 'carry',
          html:
            'This verse is quoted more often in the context of national revival than almost any other Old Testament passage. And rightly so—it speaks to the power of collective repentance, the way a nation can turn toward God and find healing. But it also speaks to individual transformation. Each person who humbles themselves, who prays, who seeks God&apos;s face, who turns from wickedness—each one participates in the work of healing. You cannot control whether a nation will repent. But you can make the choice yourself. What would change in your own life if you began to live out these four movements?',
        },
        {
          kind: 'reflection',
          id: 'if-my-people',
          prompt: 'Humble yourself. Pray. Seek God&apos;s face. Turn from your wicked ways. Which of these four is most challenging for you right now, and why?',
        },
      ],
    },

    /* ─── 2 Chronicles 7:17–22 — The Covenant with David; The Warning ──── */
    {
      ref: '2 Chronicles 7:17–22',
      title: 'The Covenant Promise and the Warning',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(17, 'And as for thee, if thou wilt walk before me, as David thy father walked, and do according to all that I have commanded thee, and shalt observe my statutes and my judgments;'),
            plain(18, 'Then will I stablish the throne of thy kingdom, according as I have covenanted with David thy father, saying, There shall not fail thee a man to be ruler in Israel.'),
            plain(19, 'But if ye turn away, and forsake my statutes and my commandments, which I have set before you, and shall go and serve other gods, and worship them;'),
            plain(20, 'Then will I pluck them up by the roots out of my land which I have given them; and this house, which I have sanctified for my name, will I cast out of my sight, and will make it to be a proverb and a byword among all nations.'),
            plain(21, 'And this house, which is high, shall be an astonishment to every one that passeth by it; so that he shall say, Why hath the Lord done thus unto this land, and unto this house?'),
            plain(22, 'And it shall be answered, Because they forsook the Lord God of their fathers, which brought them forth out of the land of Egypt, and laid hold on other gods, and worshipped them, and served them: therefore hath he brought all this evil upon them.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'walk-before-me',
          html:
            'The Lord addresses Solomon directly: "If thou wilt walk before me, as David thy father walked." This is a personal challenge to the king. It is not enough to build a temple. It is not enough to offer sacrifices. The king himself must walk in obedience. He must become a living embodiment of covenant faithfulness. David set the pattern—a man who, for all his failures, always returned to God, always sought God&apos;s face. Can Solomon do the same?',
        },
        {
          kind: 'commentary',
          id: 'stablish-throne',
          html:
            'If Solomon obeys, the Lord will establish his throne according to the covenant made with David. There shall not fail a man to be ruler in Israel. This is the Davidic promise—an endless line of successors, a kingdom that will endure. But it is conditional on obedience. The promise stands, but only for those who walk in the way.',
        },
        {
          kind: 'commentary',
          id: 'if-turn-away',
          html:
            'The alternative is devastation. "If ye turn away, and forsake my statutes...and shall go and serve other gods." Idolatry is the breaking point. It is not a minor failing; it is a fundamental repudiation of the covenant. And the consequences are total. The Lord will pluck the people up by the roots out of the land. The house that has been sanctified will be cast out of God&apos;s sight. It will become "a proverb and a byword among all nations." What was meant to be the glory of Israel becomes a monument to national shame.',
        },
        {
          kind: 'commentary',
          id: 'passerby-astonishment',
          html:
            'Centuries later, strangers passing by the ruins of the temple will ask: "Why hath the Lord done thus unto this land, and unto this house?" And the answer will be given: "Because they forsook the Lord God of their fathers...and laid hold on other gods...therefore hath he brought all this evil upon them." The destruction is not a mystery. It is the consequence of a choice. A nation turned away, and the covenant was broken. The warning here is clear and unambiguous.',
        },
        {
          kind: 'carry',
          html:
            'We live in an age that often treats consequences as optional—as if we can choose the behavior but not accept the result. But Scripture teaches that there is a moral order to the universe. Choices have weight. Faithfulness is followed by blessing; unfaithfulness by loss. This does not mean that every hardship is punishment, or that every person who suffers has done something to deserve it. But it does mean that as a community, as a people, as a church, we cannot ignore God indefinitely and expect to thrive. The promised consequences are not arbitrary punishment. They are the natural working out of covenant broken.',
        },
        {
          kind: 'reflection',
          id: 'covenant-choice',
          prompt: 'What choice in your own life feels like it is testing whether you will walk before God or turn away? What difference would faithfulness make?',
        },
      ],
    },

    /* ─── Synthesis: Fire, Promise, and Repentance ──────────────────────── */
    {
      ref: '2 Chronicles 7',
      title: 'Fire, Promise, and Repentance',
      blocks: [
        {
          kind: 'commentary',
          id: 'synthesis',
          html:
            'The chapter moves through three moments. First, the visible affirmation: fire from heaven, the glory of the Lord, the people&apos;s worship. It is a moment of clarity, of undeniable divine presence. Second, the conditional promise: if the people humble themselves, pray, seek God&apos;s face, and turn from wickedness, then God will hear, forgive, and heal. It is an open door, always available. Third, the warning: if they turn away and serve other gods, the consequences will be total. The temple will fall. The nation will be displaced. What was meant to be glory becomes ruin.',
        },
        {
          kind: 'commentary',
          id: 'pattern-israel',
          html:
            'This chapter writes the entire pattern of Israel&apos;s later history in advance. They will turn away. They will be taken captive. And yet, the promise of 2 Chronicles 7:14 will echo through the prophets: if they return, God will restore. It is not a one-time offer. It is the fundamental structure of covenant. Breaking is always possible. Return is always possible. Healing is always available.',
        },
        {
          kind: 'christ',
          id: '2c7-synthesis-christ',
          title: 'Christ — The Fulfillment of All Conditions',
          html:
            'Christ is the Perfect Davidic Son (Hebrews 1:8), the One in whom all the conditions are met, the One whose obedience undoes the consequences of disobedience, the One through whom return is made possible. In His passion, the veil of the temple is torn—not destroyed, but opened (Matthew 27:51). The outer barrier falls away. Access to God is no longer mediated through a building or a priesthood. It is direct, through Christ. And through His resurrection, the promise of "healing" is renewed: not just national restoration, but the healing of the breach between humanity and God, the healing of death itself.',
        },
        {
          kind: 'carry',
          html:
            'The great invitation of 2 Chronicles 7:14 stands for every generation: "If my people, which are called by my name..." Are you called by His name? Then the condition is laid out. It is not impossible. It is not arbitrary. It is the path home. And the promise is unambiguous: if you turn, He will hear. If you seek, He will be found. If you ask for healing, He will heal.',
        },
        {
          kind: 'reflection',
          id: 'final-reflection',
          prompt: 'If you were to answer the call of 2 Chronicles 7:14 today—to humble yourself, to pray, to seek God&apos;s face, and to turn from wickedness—what would that look like in your own life? What would be healed?',
        },
      ],
    },
  ],
};
