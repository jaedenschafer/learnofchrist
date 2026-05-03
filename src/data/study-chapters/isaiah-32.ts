import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 32 — The Righteous King and the Outpouring of the Spirit
 *
 * "Behold, a king shall reign in righteousness, and princes shall rule in
 * judgment." The messianic king will come. The wilderness will become a
 * fruitful field. "The Spirit be poured upon us from on high, and the
 * wilderness shall become a fruitful field, and the fruitful field shall be
 * esteemed as a forest." This is the vision of restoration—a king who rules
 * with justice, a people empowered by the Spirit, a land transformed from
 * desolation to abundance.
 */
export const ISAIAH_32: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 32,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  intros: [
    'After the judgment against those who trust in Egypt comes a vision of restoration. A king shall come—not merely a ruler, but one who reigns in righteousness. Princes will rule in justice. Each man will be like a refuge from the wind and a covert from the tempest. And more than the coming of righteous rulers, the Spirit will be poured out from on high. The wilderness—symbol of desolation, curse, emptiness—will become a fruitful field. The work of righteousness will be peace, and the effect of righteousness will be quietness and assurance forever. This is not merely political renewal. This is spiritual transformation.',
  ],

  sections: [
    {
      ref: 'Isaiah 32:1–8',
      title: 'A King in Righteousness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            plain(1, 'Behold, a king shall reign in righteousness, and princes shall rule in judgment.'),
            plain(2, 'And a man shall be as an hiding place from the wind, and a covert from the tempest; as rivers of water in a dry place, as the shadow of a great rock in a weary land.'),
            plain(3, 'And the eyes of them that see shall not be dim, and the ears of them that hear shall be attentive.'),
            plain(4, 'The heart also of the rash shall understand knowledge, and the tongue of the stammerers shall be ready to speak plainly.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'resolve-king-reigns',
          html:
            '<p>A king reigns for justice; a prince rules for righteousness. Then the desert blooms, blindness lifts, and peace comes.</p>',
        },
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            plain(5, 'The vile person shall be no more called liberal, nor the churl said to be bountiful.'),
            plain(6, 'For the vile person will speak villany, and his heart will work iniquity, to practise hypocrisy, and to utter error against the Lord, to make empty the soul of the hungry, and he will cause the drink of the thirsty to fail.'),
            plain(7, 'The instruments of the churl are evil: he deviseth wicked devices to destroy the poor with lying words, even when the needy speaketh right.'),
            plain(8, 'But the liberal deviseth liberal things; and by liberal things shall he stand.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah32-king-righteous',
          html:
            'The chapter opens with a vision of restoration: a king reigning in righteousness. This is not a mere earthly ruler sitting on an earthly throne. This is a vision of what human leadership can be when it is aligned with the divine character. Such a king does not rule through fear or manipulation. He rules through righteousness—which is to say, he rules in alignment with the character of God. The princes under him rule in judgment—not favoritism, not corruption, but true judgment, discerning between right and wrong, protecting the weak and punishing the wicked.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah32-melek',
          title: 'Melek — "King" (Rule)',
          script: 'מֶלֶךְ',
          translit: '<strong>Melek</strong> · king; one who reigns and rules',
          description:
            'The Hebrew melek refers not merely to a person who holds political power, but to one who establishes order. A melek creates a kingdom—a realm organized around certain principles. When Isaiah promises a king who reigns in righteousness, he is promising a fundamental reorganization of society around divine justice rather than human whim or military might.',
        },
        {
          kind: 'commentary',
          id: 'isaiah32-man-hiding',
          html:
            'The second verse shifts the image. A man (the king) shall be as a hiding place from the wind, a covert from the tempest, rivers of water in a dry place, the shadow of a great rock in a weary land. These are all images of refuge and survival. The righteous king is not a warrior on horseback. He is a shelter. He is water to the thirsty. He is shade to the weary. His presence protects and sustains.',
        },
        {
          kind: 'christ',
          id: 'isaiah32-christ-king',
          title: 'Christ Connection — The Righteous King',
          html:
            'Jesus claimed the title "King of Kings." But His kingdom is not of this world. It operates on the logic of righteousness, of justice, of love. He described Himself as "meek and lowly in heart," not because He lacks power, but because His power serves the broken and the lost. He is the shelter, the water, the shade that this passage describes. Those who follow Him find in Him protection from the storm, sustenance in the wilderness, rest in the weariness of life.',
        },
        {
          kind: 'carry',
          html:
            'The vision of a righteous king challenges every reader to ask: What kind of leadership do I submit to? What kind of leadership do I offer? A righteous king or leader does not hide the truth or protect the corrupt. He opens the eyes of the blind and the ears of the deaf. He makes the heart of the rash understand knowledge. He transforms the way the world speaks and the way people are treated. This is the standard Isaiah holds up.',
        },
        {
          kind: 'reflection',
          id: 'isaiah32-righteous-rule',
          prompt: 'In what spheres do you have authority over others—as a parent, a friend, a colleague, a leader? Are you ruling in righteousness? What would it look like to be a shelter and a refuge for those under your care?',
        },
      ],
    },

    {
      ref: 'Isaiah 32:9–20',
      title: 'The Spirit Poured Out and the Land Transformed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            plain(9, 'Rise up, ye women that are at ease; hear my voice, ye careless daughters; give ear unto my speech.'),
            plain(10, 'Many days and years shall ye be troubled, ye careless women: for the vintage shall fail, the gathering shall not come.'),
            plain(11, 'Tremble, ye women that are at ease; be troubled, ye careless ones: strip you, and make you bare, and gird sackcloth upon your loins.'),
            plain(12, 'They shall lament for the teats, for the pleasant fields, for the fruitful vine.'),
            plain(13, 'Upon the land of my people shall come up thorns and briers; yea, upon all the houses of joy in the joyous city:'),
            plain(14, 'Because the palaces shall be forsaken; the multitude of the city shall be left; the forts and towers shall be for dens for ever, a joy of wild asses, a pasture of flocks;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah32-devastation-to-spirit',
          html:
            'The call to judgment is clear: the careless must tremble, vintage will fail, gathering will not come. Thorns and briers will cover the land. Houses of joy become desolate. Palaces are forsaken. The forts and towers become dens for wild creatures. The picture of devastation is complete. Now comes the turning point: what happens when the Spirit is poured out.',
        },
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            plain(15, 'Until the spirit be poured upon us from on high, and the wilderness shall become a fruitful field, and the fruitful field shall be esteemed as a forest.'),
            plain(16, 'Then judgment shall dwell in the wilderness, and righteousness remain in the fruitful field.'),
            plain(17, 'And the work of righteousness shall be peace; and the effect of righteousness quietness and assurance for ever.'),
            plain(18, 'And my people shall dwell in a peaceable habitation, and in sure dwellings, and in quiet resting places;'),
            plain(19, 'When it shall hail, coming down on the forest; and the city shall be low in a low place.'),
            plain(20, 'Blessed are ye that sow beside all waters, that send out thither the feet of the oxen.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah32-ease',
          html:
            'The second half of the chapter addresses women at ease, careless and complacent. They must be startled from their complacency because judgment is coming. The vintage will fail. The gathering will not come. There will be thorns and briers on the land. The houses of joy will become desolate. This is not cruelty. This is mercy—a shaking designed to wake the people to their need for God.',
        },
        {
          kind: 'commentary',
          id: 'isaiah32-spirit',
          html:
            'But the turning point comes at verse 15: "Until the spirit be poured upon us from on high." This is the key promise. Not merely that the king will come, but that the Spirit will be given. And when the Spirit is poured out, everything changes. The wilderness becomes a fruitful field. The barren becomes fertile. The curse becomes blessing. This is not a natural process. This is the supernatural transformation that comes through the Spirit of God.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah32-ruach',
          title: 'Ruach — "Spirit" (Breath, Wind)',
          script: 'רוּחַ',
          translit: '<strong>Ruach</strong> · spirit, breath, wind; the vital force that animates life',
          description:
            'The Hebrew ruach carries the sense of breath, wind, or spirit—the unseen force that gives life. When the Spirit is "poured out," the language suggests abundance, generosity, a rushing flow. The same word describes the Spirit that hovered over the waters at creation. When the Spirit is poured out on the wilderness, creation is renewed. Dead things live. Barren things flourish.',
        },
        {
          kind: 'commentary',
          id: 'isaiah32-wilderness-fruitful',
          html:
            'The transformation from wilderness to fruitfulness is complete and total. The wilderness becomes a fruitful field. The fruitful field becomes a forest. Nothing is left barren. And with the transformation of the land comes the transformation of governance: "Then judgment shall dwell in the wilderness, and righteousness remain in the fruitful field." Justice and righteousness—the marks of the righteous king—will pervade the entire land.',
        },
        {
          kind: 'christ',
          id: 'isaiah32-christ-spirit',
          title: 'Christ Connection — Pentecost and the Outpouring of the Spirit',
          html:
            'On Pentecost, the Spirit was poured out on the apostles and the early church. What Isaiah prophesied—the pouring out of the Spirit from on high—came to pass. And with that outpouring came transformation. The disciples, who had been cowering in fear, became bold witnesses. The wilderness of human fear and shame became fruitful with the fruit of the Spirit: love, joy, peace, patience, kindness. When Christ sends the Holy Spirit, He transforms the inner wilderness into a fruitful field.',
        },
        {
          kind: 'carry',
          html:
            'The promise of this chapter is that the wilderness will become fruitful. Every reader faces wilderness seasons—seasons of emptiness, barrenness, loss, grief. The promise is not that the wilderness will be avoided. The promise is that the wilderness will be transformed. When the Spirit is poured out, the barren becomes fertile. What seemed like desert becomes garden. The effect of this transformation is peace, quietness, and assurance forever—not the absence of difficulty, but the presence of the Spirit in the midst of difficulty.',
        },
        {
          kind: 'reflection',
          id: 'isaiah32-wilderness-field',
          prompt: 'What wilderness in your own life might the Spirit of God be calling to transformation? What would it look like for the barren places to become fruitful? How are you inviting the Spirit to work?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Until the spirit be poured upon us from on high, and the wilderness shall become a fruitful field...And the work of righteousness shall be peace.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 32 · Study Guide',
  },

  hasHebrew: true,
};
