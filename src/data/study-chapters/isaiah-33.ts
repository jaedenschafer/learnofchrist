import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 33 — Waiting for the King
 *
 * "Lord, be gracious unto us; we have waited for thee: be thou our arm every
 * morning, our salvation also in the time of trouble." The people call upon
 * God. "Thine eyes shall see the king in his beauty: they shall behold the
 * land that is very far off." The promise is vision—the reader will see the
 * king, will behold the land of promise. This is a chapter about waiting,
 * about trust tested, about the certainty that comes when the eyes behold
 * the king.
 */
export const ISAIAH_33: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 33,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  intros: [
    'Isaiah 33 is a prayer book chapter—a cry of the people in their need. "Lord, be gracious unto us; we have waited for thee." This is not the arrogant prayer of those who assume God owes them something. This is the humble prayer of those who have been waiting, watching, watching for God to act. They ask Him to be their arm every morning, their salvation in the time of trouble. The promise that comes in response is one of vision: the eyes that call upon God will see the king in his beauty. They will behold the land that is very far off. The God who hears the prayer of the waiting will show them wonders.',
  ],

  sections: [
    {
      ref: 'Isaiah 33:1–12',
      title: 'The Cry for Grace and the Promise of Sight',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            plain(1, 'Woe to thee that spoilest, and thou wast not spoiled; and dealest treacherously, and they dealt not treacherously with thee! when thou shalt cease to spoil, thou shalt be spoiled; and when thou shalt make an end to deal treacherously, they shall deal treacherously with thee.'),
            plain(2, 'O Lord, be gracious unto us; we have waited for thee: be thou our arm every morning, our salvation also in the time of trouble.'),
            plain(3, 'At the noise of the tumult the people fled; at the lifting up of thyself the nations were scattered.'),
            plain(4, 'And your spoils shall be gathered like the gathering of the caterpillar: as the running to and fro of locusts shall he run upon them.'),
            plain(5, 'The Lord is exalted; for he dwelleth on high: he hath filled Zion with judgment and righteousness.'),
            plain(6, 'And wisdom and knowledge shall be the stability of thy times, and strength of salvation: the fear of the Lord is his treasure.'),
            plain(7, 'Behold, their valiant ones shall cry without: the ambassadors of peace shall weep bitterly.'),
            plain(8, 'The highways lie waste, the wayfaring man ceaseth: he hath broken the covenant, he hath despised the cities, he regardeth no man.'),
            plain(9, 'The earth mourneth and languisheth: Lebanon is ashamed and hewn down: Sharon is like a wilderness; and Bashan and Carmel shake off their fruits.'),
            plain(10, 'Now will I arise, saith the Lord; now will I be exalted; now will I lift up myself.'),
            plain(11, 'Ye shall conceive chaff, ye shall bring forth stubble: your breath, as fire, shall devour you.'),
            plain(12, 'And the people shall be as the burnings of lime: as thorns cut up shall they be burned in the fire.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah33-woe',
          html:
            'The chapter opens with judgment against those who spoil and deal treacherously. This is Sennacherib and Assyria—the power that has come against Jerusalem with spoil and treachery in mind. But a principle operates: when you cease to spoil, you will be spoiled. When you deal treacherously, others will deal treacherously with you. This is not arbitrary punishment. This is the natural consequence of a life of violence and betrayal.',
        },
        {
          kind: 'commentary',
          id: 'isaiah33-gracious',
          html:
            'Against the background of invasion and threat comes the prayer: "O Lord, be gracious unto us; we have waited for thee." This is not self-pity. This is the cry of those who have placed their hope in God and now ask Him to act. "Be thou our arm every morning, our salvation also in the time of trouble." The prayer recognizes that strength comes not from their own arms, but from God. Every morning they need Him. In the time of trouble, they need Him.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah33-chacah',
          title: 'Chacah — "Gracious" (Show Grace)',
          script: 'חוּס',
          translit: '<strong>Chacah</strong> · to show favor, to be merciful; to spare or protect',
          description:
            'The Hebrew word carries the sense of being moved with compassion, of choosing to spare someone from deserved judgment. When the people ask God to "be gracious," they are asking Him to act out of mercy, not justice. They are asking Him to spare them, to protect them, to show them favor when they have done nothing to earn it.',
        },
        {
          kind: 'commentary',
          id: 'isaiah33-exalted',
          html:
            'The response comes: "The Lord is exalted; for he dwelleth on high: he hath filled Zion with judgment and righteousness." The God who dwells on high—whose perspective is eternal, whose power is infinite—acts to defend His people. He fills Zion (the people, the place of His dwelling) with judgment and righteousness. These are not harsh qualities in this context. They are the qualities that protect the vulnerable and punish the aggressor.',
        },
        {
          kind: 'christ',
          id: 'isaiah33-christ-exalt',
          title: 'Christ Connection — The Exalted Lord',
          html:
            'Christ ascended into heaven and sat down at the right hand of God the Father, exalted on high. Yet His exaltation did not remove Him from His people. Instead, He sent the Spirit to dwell within them, filling them with righteousness and judgment—the ability to discern right from wrong, to act justly, to be protected from evil. The exalted Lord remains present to His people through His Spirit.',
        },
        {
          kind: 'carry',
          html:
            'The prayer in this passage is not passive. The people "have waited" for God. They have not given up. They have not turned to other gods or other saviors. They have maintained their trust even as circumstances have grown dire. This is the posture Isaiah calls for: active waiting, faithful waiting, the kind of waiting that cries out to God while maintaining hope.',
        },
        {
          kind: 'reflection',
          id: 'isaiah33-waiting',
          prompt: 'What are you waiting for God to do? How long have you been waiting? What would it look like to pray as Isaiah teaches here—to cry out for grace while maintaining faith in God&apos;s exaltation?',
        },
      ],
    },

    {
      ref: 'Isaiah 33:13–24',
      title: 'The Eyes That See the King',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            plain(13, 'Hear, ye that are far off, what I have done; and, ye that are near, acknowledge my might.'),
            plain(14, 'The sinners in Zion are afraid; fearfulness hath surprised the hypocrites. Who among us shall dwell with the devouring fire? who among us shall dwell with everlasting burnings?'),
            plain(15, 'He that walketh righteously, and speaketh uprightly; he that despiseth the gain of oppressions, and shaketh his hands from holding of bribes: he that stoppeth his ears from hearing of blood, and shutteth his eyes from seeing evil;'),
            plain(16, 'He shall dwell in the high places: his place of defence shall be the munitions of rocks: bread shall be given him; his waters shall be sure.'),
            plain(17, 'Thine eyes shall see the king in his beauty: they shall behold the land that is very far off.'),
            plain(18, 'Thine heart shall meditate in fear: Where is the scribe? where is the receiver? where is he that counted the towers?'),
            plain(19, 'Thou shalt not see a fierce people, a people of a deeper speech than thou canst perceive; of a stammering tongue, that thou canst not understand.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah33-righteous-to-vision',
          html:
            'The righteous are described: those who walk in righteousness, speak uprightly, despise oppressive gain, refuse bribes, turn away from bloodshed and evil. They dwell in the high places, secure in God&apos;s defense. And now comes the supreme promise: their eyes will see the king in his beauty, and behold the land very far off. From the description of the righteous to the vision of the king—the turning point of the passage.',
        },
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            plain(20, 'Look upon Zion, the city of our solemnities: thine eyes shall see Jerusalem a quiet habitation, a tabernacle that shall not be taken down; not one of the stakes thereof shall ever be removed, neither shall any of the cords thereof be broken.'),
            plain(21, 'But there the glorious Lord will be unto us a place of broad rivers and streams; wherein shall go no galley with oars, neither shall gallant ship pass thereby.'),
            plain(22, 'For the Lord is our judge, the Lord is our lawgiver, the Lord is our king; he will save us.'),
            plain(23, 'Thy tacklings are loosed; they could not well strengthen their mast, they could not spread the sail: then is the prey of a great spoil divided; the lame take the prey.'),
            plain(24, 'And the inhabitant shall not say, I am sick: the people that dwell therein shall be forgiven their iniquity.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah33-righteous-dwell',
          html:
            'The vision shifts. Who can dwell in the presence of the devouring fire? Who can endure before God? The answer is: he that walketh righteously and speaketh uprightly. He that despises the gain of oppressions. He that will not take bribes. He that stops his ears from hearing of blood and shuts his eyes from seeing evil. The righteous are those who have turned away from the ways of the world and turned toward the ways of God.',
        },
        {
          kind: 'commentary',
          id: 'isaiah33-eyes-king',
          html:
            'Then comes the climax: "Thine eyes shall see the king in his beauty: they shall behold the land that is very far off." This is the promise given to those who have waited, who have prayed, who have lived righteously. Their eyes will see the king. Not through intermediaries. Not through reports. Not through faith alone, but with their own eyes, they will behold him in his beauty. And they will see the land of promise, the land that had seemed so far away.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah33-eyin',
          title: 'Eyin — "Eyes" (Sight)',
          script: 'עַיִן',
          translit: '<strong>Eyin</strong> · eye, eyes; the organ of sight and perception',
          description:
            'The Hebrew word eyin refers not merely to the physical eye, but to perception, understanding, witness. When the promise says "thine eyes shall see the king," it means you will perceive him, you will understand who he is, you will be able to testify to what you have seen. The eyes are the window of seeing and knowing.',
        },
        {
          kind: 'commentary',
          id: 'isaiah33-jerusalem-quiet',
          html:
            'The vision describes Jerusalem as a quiet habitation, a tabernacle that will not be taken down, whose stakes will never be removed and whose cords will never be broken. This is permanence. This is stability. This is the opposite of the wilderness wandering, the opposite of exile. Those who see the king will dwell in a city that is secure, established, at rest.',
        },
        {
          kind: 'christ',
          id: 'isaiah33-christ-king-beauty',
          title: 'Christ Connection — The Beauty of the King',
          html:
            'Isaiah promises that the eyes of the faithful will see "the king in his beauty." This is not a king who impresses through military might or worldly power. This is a king whose beauty is spiritual, moral, transcendent. Christ is that king. He is called "the fairest of ten thousand" in the New Testament. Those who have faith to see Him perceive not His physical appearance, but His character—His love, His sacrifice, His holiness. The promise is that those who wait for Him will see Him as He truly is, in His genuine beauty.',
        },
        {
          kind: 'carry',
          html:
            'The promise of Isaiah 33 is vision. Not merely the fulfillment of material need, though that is promised. But the vision of the king. The eyes that have waited, that have prayed, that have maintained righteousness in the midst of chaos—those eyes will see. This is the reward of faithfulness. This is what the waiting is for. Not comfort or ease, but the sight of the king himself.',
        },
        {
          kind: 'reflection',
          id: 'isaiah33-see-king',
          prompt: 'What does it mean to you to "see the king in his beauty"? How has your waiting on God prepared your eyes to perceive Him? What would you like to see or understand about Him?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Thine eyes shall see the king in his beauty: they shall behold the land that is very far off.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 33 · Study Guide',
  },

  hasHebrew: true,
};
