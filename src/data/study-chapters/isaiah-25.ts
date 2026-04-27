import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Isaiah 25 — He Will Swallow Up Death in Victory
 *
 * Isaiah 25 is a song of thanksgiving and trust. The prophet celebrates the
 * Lord&apos;s faithfulness, His overthrow of the proud and their strongholds, His
 * care for the poor and needy. Then comes the climactic promise: "He will swallow
 * up death in victory; and the Lord God will wipe away tears from off all faces."
 * This is quoted in 1 Corinthians 15:54 as the ultimate victory over death
 * accomplished through Christ&apos;s resurrection.
 */
export const ISAIAH_25: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 25,

  intros: [
    'Isaiah 25 moves from the apocalyptic vision of chapter 24 to a response of worship. The prophet praises God for His faithfulness, His destruction of the enemies of His people, and His care for those who are poor and needy. But the passage culminates in a promise that transcends national victory or the defeat of earthly enemies. It speaks to the defeat of death itself—the ultimate enemy that all humanity faces.',
    'The vision of death being swallowed up in victory is the Christian hope in its fullness. It speaks to the resurrection of Christ and, through Him, the resurrection of all who believe in Him. In a world where death seems to have the final word, Isaiah announces that God will triumph over death itself, that tears will be wiped away, and that His people will rejoice forever.',
  ],

  sections: [
    {
      ref: 'Isaiah 25:1–8',
      title: 'The Song of Trust; Death Defeated',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            plain(1, 'O Lord, thou art my God; I will exalt thee, I will praise thy name; for thou hast done wonderful things; thy counsels of old are faithfulness and truth.'),
            plain(2, 'For thou hast made of a city an heap; of a defenced city a ruin: a palace of strangers to be no city; it shall never be built.'),
            plain(3, 'Therefore shall the strong people glorify thee, the city of the terrible nations shall fear thee.'),
            plain(4, 'For thou hast been a strength to the poor, a strength to the needy in his distress, a refuge from the storm, a shadow from the heat, when the blast of the terrible ones is as a storm against the wall.'),
            plain(5, 'Thou shalt bring down the noise of strangers, as the heat in a dry place; even the heat with the shadow of a cloud: the branch of the terrible ones shall be brought low.'),
            plain(6, 'And in this mountain shall the Lord of hosts make unto all people a feast of fat things, a feast of wines on the lees, of fat things full of marrow, of wines on the lees well refined.'),
            plain(7, 'And he will destroy in this mountain the face of the covering cast over all people, and the vail that is spread over all nations.'),
            plain(8, 'He will swallow up death in victory; and the Lord God will wipe away tears from off all faces; and the rebuke of his people shall he take away from off all the earth: for the Lord hath spoken it.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah25-praise',
          html:
            'The chapter opens with direct address: "O Lord, thou art my God; I will exalt thee, I will praise thy name." This is intimate worship. The prophet does not merely announce God&apos;s power; he praises it directly. He exalts the Lord and sings His name because of His "wonderful things" and His "counsels of old" which are "faithfulness and truth".',
        },
        {
          kind: 'commentary',
          id: 'isaiah25-cities',
          html:
            '"For thou hast made of a city an heap; of a defenced city a ruin." The Lord has overthrown the strongholds of His enemies, the cities that seemed impregnable. "A palace of strangers to be no city; it shall never be built." The city that belonged to the enemies of God will not be rebuilt. Yet this judgment serves a purpose: the strong people will glorify the Lord, and the terrible nations will fear Him.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah25-strength',
          title: 'Oz — "Strength" (Power; Fortress)',
          script: 'עוֹז',
          translit: '<strong>Oz</strong> · strength; power; fortress; that which makes strong',
          description:
            'God is described as "a strength to the poor, a strength to the needy in his distress." The word oz suggests both power and refuge. The weak find in God a fortress, a protected place, a source of strength. This is the opposite of worldly power, which is concentrated in the hands of the strong and terrible ones.',
        },
        {
          kind: 'commentary',
          id: 'isaiah25-feast',
          html:
            '"In this mountain shall the Lord of hosts make unto all people a feast of fat things." Mount Zion becomes the place of God&apos;s dwelling and the site of a universal feast. "Fat things full of marrow" suggest abundance and nourishment—not the mere survival food of the poor, but the richest provision. This feast is for "all people," suggesting that the ultimate future holds blessing for all who come to God&apos;s mountain.',
        },
        {
          kind: 'commentary',
          id: 'isaiah25-covering',
          html:
            '"He will destroy in this mountain the face of the covering cast over all people, and the vail that is spread over all nations." The covering and veil suggest blindness, hiding, separation from truth. The Lord will remove this covering—will grant vision, will end the separation between God and His people.',
        },
        {
          kind: 'christ',
          id: 'isaiah25-christ-death',
          title: 'Christ Connection — Death Defeated; Victory Eternal',
          html:
            '"He will swallow up death in victory; and the Lord God will wipe away tears from off all faces." In 1 Corinthians 15:54, Paul quotes this verse directly in celebrating Christ&apos;s resurrection: "Death is swallowed up in victory." It is through Christ&apos;s resurrection that death loses its power. Christ became the first fruits of those who are risen. By His death and resurrection, He defeated the enemy that no earthly king, no earthly power can overcome. To follow Christ is to be united with Him in His victory over death, to share in the eternal feast on the holy mountain.',
        },
        {
          kind: 'carry',
          html:
            'In a world where death touches every life, where tears are shed in grief and mourning, Isaiah&apos;s promise offers ultimate hope. It does not deny the reality of death or sorrow. But it declares that they will not have the final word. God will wipe away tears, and His people will rejoice at last.',
        },
        {
          kind: 'reflection',
          id: 'isaiah25-hope',
          prompt: 'What death, what sorrow, what tears in your own life or the world weigh upon you? How does the promise that God will swallow up death in victory speak to that sorrow?',
        },
      ],
    },

    {
      ref: 'Isaiah 25:9–12',
      title: 'The Waiting, the Vindication, and the Fall of Pride',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            plain(9, 'And it shall be said in that day, Lo, this is our God; we have waited for him, and he will save us: this is the Lord; we have waited for him, we will be glad and rejoice in his salvation.'),
            plain(10, 'For in this mountain shall the hand of the Lord rest, and Moab shall be trodden down under him, even as straw is trodden down for the dunghill.'),
            plain(11, 'And he shall spread forth his hands in the midst of them, as he that swimmeth spreadeth forth his hands to swim: and he shall bring down their pride together with the spoils of their hands.'),
            plain(12, 'And the fortress of the high fort of thy walls shall he bring down, lay low, and bring to the ground, even to the dust.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah25-vindication',
          html:
            '"And it shall be said in that day, Lo, this is our God; we have waited for him, and he will save us." The moment of vindication comes. Those who have waited—who have maintained faith in the face of opposition and despair—will see their faith justified. "We have waited for him, we will be glad and rejoice in his salvation." The joy is not merely relief. It is the fulfillment of hope, the vindication of trust.',
        },
        {
          kind: 'commentary',
          id: 'isaiah25-judgment',
          html:
            'Yet the passage does not end in universal blessing. Moab—representing those who oppose God and His people—will be "trodden down under him, even as straw is trodden down for the dunghill." Their pride will be brought low. The contrast is stark: those who wait for God are saved and rejoice; those who set themselves against God are humiliated and destroyed.',
        },
        {
          kind: 'carry',
          html:
            'The passage teaches that waiting upon God is not passive resignation but active faith. It is the confidence that God will vindicate those who trust in Him, and it will bring them to a joy that no earthly circumstance can diminish.',
        },
        {
          kind: 'reflection',
          id: 'isaiah25-wait',
          prompt: 'What are you waiting for from God? In what circumstances does it feel difficult to maintain the trust that "we have waited for him, and he will save us"?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'He will swallow up death in victory; and the Lord God will wipe away tears from off all faces; and the rebuke of his people shall he take away from off all the earth: for the Lord hath spoken it.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 25 · Study Guide',
  },

  hasHebrew: true,
};
