import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 2 Esdras 3 — The Opening Cry of the Apocalypse
 *
 * Thirty years after Jerusalem&apos;s fall, Ezra lies in Babylon, troubled in spirit.
 * He does not sleep peacefully in exile; he wrestles with the deepest question faith
 * can ask: Why does God allow His own people to suffer while wicked nations prosper?
 * The answer will not come easily. It will require a entire book of visions.
 *
 * This chapter is the opening prayer of 2 Esdras — the gateway to Jewish apocalyptic
 * theology. Ezra recounts creation, the fall, the flood, Abraham, the law, Israel&apos;s
 * exile. And then he cries out with the theodicy question that will echo through centuries:
 * "Are the deeds of Babylon better than those of Sion?"
 */

export const SECOND_ESDRAS_3: RichChapterContent = {
  bookSlug: '2-esdras',
  bookName: '2 Esdras',
  chapter: 3,

  estimatedMinutes: { 5: 12, 10: 18, 15: 24 },
  intros: [
    'Two esdras is the opening voice of Jewish apocalypse. Written after Jerusalem&apos;s fall, it speaks from the deepest place of theological crisis: If God is just, how could He allow this? Ezra enters not as a rebel but as one who loves God and cannot understand His ways. He will spend the next seven chapters in visions, wrestling with the answer.',
    '2 Esdras 3 begins with a man unable to sleep. Ezra lies on his bed in Babylon, heart troubled, recounting history: Adam&apos;s creation, the fall, the flood, Abraham, the law given at Sinai, Israel&apos;s repeated refusal to listen to the prophets, the exile. And then the cry that defines the entire book: Why does Babylon prosper while Jerusalem weeps? The theodicy question has never been asked more fiercely.',
  ],

  opener: {
    matchArtist: /tissot/i,
    matchTitle: /babylon|captivity/i,
    caption: 'Ezra in Babylon — The Beginning of Vision',
  },

  sections: [
    /* ─── 2 Esdras 3:1–3 — Ezra Troubled in Babylon ──────────────────── */
    {
      ref: '2 Esdras 3:1–3',
      title: 'Ezra Troubled in Babylon',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 1,
              spans: [
                t('In the thirtieth year after the ruin of the city, I was in Babylon: and '),
                hp('it came to pass in the night of the month Nisan', 'nisan-night'),
                t(', that I was lying in my bed;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'nisan-night',
          html:
            'Nisan is the month of Passover—the month of remembered deliverance from Egypt. That Ezra lies awake during Nisan, thirty years after Jerusalem&apos;s destruction, makes the irony cut even deeper. The season of freedom is now a season of captivity. The prophet cannot sleep; his heart is restless.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 2,
              spans: [
                t('And my heart was greatly moved within me.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And I began to speak words of great concern, and said, '),
                hp('O Lord, thou art the Creator of all things', 'lord-creator'),
                t(': hear me, and I will speak in thy presence.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lord-creator',
          html:
            'Ezra&apos;s prayer does not begin with complaint. It begins with confession of God&apos;s power and majesty. <em>Thou art the Creator of all things.</em> This is crucial: Ezra comes not as an accuser but as one who affirms God&apos;s sovereignty even as he struggles to understand it. The prayer of lament in Scripture always begins with acknowledgment of who God is.',
        },

        {
          kind: 'carry',
          html:
            'When your heart is moved—when something troubles you deeply—the first word out of your mouth shapes everything that follows. Ezra begins his theodicy not with "Why have you failed?" but with "O Lord, you are the Creator." This is the posture of honest faith: troubled, yes, but beginning from affirmation rather than accusation.',
        },

        {
          kind: 'reflection',
          id: 'troubled-heart',
          prompt:
            'When something troubles your heart deeply—injustice you cannot explain, suffering you cannot understand—where do you begin your prayer? What would it mean to begin, like Ezra, with confession of God&apos;s greatness?',
        },
      ],
    },

    /* ─── 2 Esdras 3:4–7 — Adam&apos;s Creation and Fall ──────────────────── */
    {
      ref: '2 Esdras 3:4–7',
      title: 'Adam&apos;s Creation and Fall',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 4,
              spans: [
                t('For thou madest the world, and when Adam transgressed thy commandments, then thou madest decay; and thou knewest that evil should come. '),
                hy('Yet thou removedst not the evil seed out of his heart', 'evil-seed'),
                t(', which was able to bring forth sin.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'evil-seed',
          html:
            'This is Ezra&apos;s diagnosis of human history: God made the world good. Adam sinned. But God did not remove the capacity for evil from human hearts. Generation after generation inherits both the image of God and the seed of disobedience. Ezra is not blaming God—he is naming the mystery that will occupy theologians for millennia.',
        },

        {
          kind: 'hebrew',
          id: 'hebrew-tzelem',
          title: 'Tzelem — "Image"',
          script: 'צֶלֶם',
          translit: '<strong>Tzelem</strong> · the image or likeness; a carved representation',
          description:
            'Adam was made in the image of God, yet carries within him the capacity for transgression. The question becomes: why does God leave this burden within human nature? Ezra will struggle with this throughout the night.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 5,
              spans: [
                t('For the first Adam bearing a corrupt seed was overcome, and so were all that were born of him. Thus infirmity was made permanent: and the law also in the hearts of the people with the malignity of the root; so the good went away, and the evil abode still.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'corrupt-seed',
          html:
            'Ezra traces a genealogy of sin. Adam&apos;s transgression was not isolated; it became a disease of the human condition. Every child born inherits both the image of God and the capacity to break His law. The law was given to counteract this—written on hearts, offered as a path to life. Yet the evil remained.',
        },

        {
          kind: 'christ',
          id: 'christ-second-adam',
          title: 'Christ Connection — The Second Adam',
          html:
            'Paul takes Ezra&apos;s meditation and transforms it. "Wherefore, as by one man sin entered into the world, and death by sin… By the offence of one many be dead, much more the grace of God… hath abounded unto many… For if by one man&apos;s offence death reigned by one; much more they which receive abundance of grace… shall reign in life by one, Jesus Christ" (Romans 5:12, 15, 17). Christ enters as the Second Adam—bearing God&apos;s image perfectly, refusing the seed of evil, opening a new lineage. Where the first Adam&apos;s transgression brought death to all, the Second Adam&apos;s obedience brings life.',
        },

        {
          kind: 'carry',
          html:
            'Ezra looks back at Adam and sees his own nature there—the capacity for the good mixed inseparably with the pull toward evil. That diagnosis did not end with Adam or with Ezra. You carry it. The law was written to help you navigate it, but the law alone cannot transform it. This is the setup for Christ&apos;s entrance.',
        },

        {
          kind: 'reflection',
          id: 'adam-within',
          prompt:
            'Where do you see within yourself both the image of God and the capacity for evil? How do you live with that mixture without despair? How is it transformed?',
        },
      ],
    },

    /* ─── 2 Esdras 3:8–11 — The Flood and Abraham ──────────────────── */
    {
      ref: '2 Esdras 3:8–11',
      title: 'The Flood and Abraham',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 8,
              spans: [
                t('When therefore the time was come that thou shouldest destroy him, thou leftest not his generation: but '),
                hg('madest for thyself a name, and didst keep Abraham faithful', 'abraham-faithful'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'abraham-faithful',
          html:
            'From Adam&apos;s fall, history moves to Noah&apos;s judgment and then to Abraham. God does not simply destroy His creation; He preserves a remnant. He chooses Abraham and makes him faithful—not because Abraham earned it, but because God made him a name. This is the pattern: judgment, then mercy; destruction, then election; failure, then the beginning again through one man&apos;s faith.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 9,
              spans: [
                t('And thou gavest him Isaac, and unto Isaac also thou gavest Jacob and Esau. And thou separatedst Jacob from him, and Jacob became a great multitude.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And when the time of his seed was come, thou leddest them out of Egypt, and broughtst them to mount Sinai.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jacob-multitude',
          html:
            'The narrative accelerates through centuries. God promises; the promise multiplies; the promise escapes Egypt; the promise stands before Sinai to receive the law. Each generation receives what the previous could not—not by their merit but by God&apos;s persistence.',
        },

        {
          kind: 'hebrew',
          id: 'hebrew-chesed',
          title: 'Chesed — "Mercy" or "Covenant Love"',
          script: 'חֶסֶד',
          translit: '<strong>Chesed</strong> · covenant steadfastness; mercy; kindness; the love that keeps its promises',
          description:
            'Throughout this recounting, chesed is the connecting thread. God does not abandon the seed of Adam; He keeps covenant with Abraham; He preserves Israel. Not because they deserve it, but because He is chesed—faithful to His word.',
        },

        {
          kind: 'carry',
          html:
            'Ezra&apos;s memory moves through generations, watching God make and keep promise after promise. Your own story—if you have believed—is part of this same pattern. You are a descendant of Abraham&apos;s faith. The God who kept covenant with Abraham, who led Israel out of Egypt, who spoke at Sinai, is still the same God whose covenant-keeping you live in.',
        },

        {
          kind: 'reflection',
          id: 'covenant-memory',
          prompt:
            'What promise has God kept in your own life? How does it connect you to the longer story of Abraham, Israel, and the covenant? What would change if you saw your life as part of that chain?',
        },
      ],
    },

    /* ─── 2 Esdras 3:12–18 — The Law Given and Refused ──────────────────── */
    {
      ref: '2 Esdras 3:12–18',
      title: 'The Law Given and Refused',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 12,
              spans: [
                t('And thou gavest them '),
                hg('commandments by the hand of Moses', 'commandments-moses'),
                t(': thou gavest them good laws and statutes. But they turned away from thy law.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'commandments-moses',
          html:
            'The law was not an afterthought or a punishment. It was <em>good laws</em>—a gift. But immediately Israel turned from it. This is not the voice of a moralist condemning Israel; it is the voice of one confessing a universal pattern. Generation after generation receives God&apos;s word and refuses it.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 13,
              spans: [
                t('Therefore thou didst set fire in Sion, and takest vengeance of them that dwelt in the earth: and thou didst not take away the evil inclination out of mankind, but thou didst leave it.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'evil-inclination',
          html:
            'Ezra returns to the root problem: God gave the law, but He did not remove from human hearts the inclination toward evil. The law reveals sin; it does not transform the heart. Judgment falls on Jerusalem—fire on Sion—but the fundamental problem remains: humans still choose wrongly.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 14,
              spans: [
                t('For an evil seed, O Adam, what hast thou done? for though it was thou that sinned, thou art not fallen alone, but we all that come of thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'adam-sin-all',
          html:
            'Ezra addresses Adam directly. Your sin was not just yours; it became the inheritance of all your descendants. I bear your consequences. We all do. This is not blame—it is the acknowledgment of a shared condition. The evil seed, once planted in Eden, has grown through all history.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 15,
              spans: [
                t('For what profit is it that we live in wickedness, and labour with the increase of sin?'),
              ],
            },
            {
              number: 16,
              spans: [
                t('For thus thou speakest, This is that bread which I have given you, when ye have sown all evil, yet the earthly vessel shall be made whole: for into a paradise whose fruit remaineth unsown, into a field whose harvest faileth not, and into an house, whose building is surpassingly glorious;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'bread-and-promise',
          html:
            'Even in the midst of exile, even in the midst of acknowledging human failure, God does not withdraw the promise. The earthly vessel—the body, the creation—will be made whole. There remains a paradise whose fruit is unsown, a field that will not fail. The promise does not depend on human performance but on God&apos;s faithfulness.',
        },

        {
          kind: 'christ',
          id: 'christ-bread-life',
          title: 'Christ Connection — The Bread and the Paradise',
          html:
            'Jesus will say, "I am the bread of life: he that cometh to me shall never hunger" (John 6:35). And He will speak to the thief on the cross: "To day shalt thou be with me in paradise" (Luke 23:43). The bread God speaks of in 2 Esdras, the paradise whose fruit is unsown—these are not merely future consolations. They are present realities in Christ. The field that will not fail is the harvest of souls brought in through the cross. The house whose building is glorious is the Church, built on the foundation of Christ&apos;s obedience.',
        },

        {
          kind: 'carry',
          html:
            'Ezra grieves the human condition and the weight of Adam&apos;s sin that all of us carry. Yet even in his grief, he clings to God&apos;s promise: the earthly vessel will be made whole. This is the prayer of faith in exile—not denying the brokenness, but refusing to let the brokenness be the final word. God has promised something more.',
        },

        {
          kind: 'reflection',
          id: 'evil-seed-promise',
          prompt:
            'What evil seed—what sin, what broken pattern—do you carry? Not by your choice, but as part of the human inheritance? What promise would it take for you to believe that the earthly vessel can be made whole?',
        },
      ],
    },

    /* ─── 2 Esdras 3:19–22 — "Are the Deeds of Babylon Better Than Sion?" ──── */
    {
      ref: '2 Esdras 3:19–22',
      title: '"Are the Deeds of Babylon Better Than Sion?"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 19,
              spans: [
                t('For the first Adam bare a corrupt seed, was overcome, and so were all that were born of him. Thus infirmity was made permanent; and the law also in the hearts of the people with the malignity of the root; so the good went away, and the evil abode still. Then were the times passed away, and the years were brought to an end: and the most High did raise up unto him a prophet named Jeremias, who prophesied unto him to pull down the walls of the city, and to break in sunder the vessels of the sanctuary.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jeremiah-prophet',
          html:
            'God raised up Jeremiah—the weeping prophet—to speak what the people would not hear. Jeremiah announced judgment: the walls would fall, the vessels of the temple would be broken. Yet the people refused to listen. The prophet spoke; the people closed their ears.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 20,
              spans: [
                t('Yet said he not unto them that he would destroy them, but as a mother mourneth over her children, and as a pastor over his flock; thou speakest quietly unto them, what thou shouldest do unto them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'mother-mourn',
          html:
            'Even Jeremiah&apos;s judgment was spoken in the tone of a mother mourning over her children, a pastor weeping over his flock. God did not send judgment with cruelty; He sent it with grief. The pronouncement of exile came from a heart full of sorrow for His people.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 21,
              spans: [
                t('Now when thou hadst heard that thou shouldest do thus unto a city, thou loathest it; and thou refusedst to obey the commandment that was spoken unto thee of the Lord.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('Then said I in my heart, '),
                hp('Are the deeds of those that dwell in Babylon better? or hath she obtained glory another way?', 'babylon-better'),
                t(' When I came into the land of the Heathens, and my soul took much pleasure in the sight of it, I saw wickedness there without measure. And thou hast shewed me abundantly many times, the ways of thy judgment unto me.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'babylon-better',
          html:
            'This is the theodicy question in its most burning form. Israel, God&apos;s chosen people, received the law, heard the prophets, and was judged. Babylon, wicked and godless, prospers. Where is the justice in this? If being righteous leads to exile, and being unrighteous leads to dominion, what incentive is there to follow God at all? This question stands at the heart of apocalyptic theology.',
        },

        {
          kind: 'greek',
          id: 'theodicia',
          title: 'Theodokia—"Justification of God"',
          script: 'θεοδικία',
          translit: '<strong>Theodokia</strong> · the justification or defense of God&apos;s character in light of evil',
          description:
            'The word "theodicy" comes from theo (God) and dikia (justice). To ask "Why does God allow this?" is to engage in the ancient task of theodicy—defending God&apos;s justice when the world appears unjust. 2 Esdras is a masterpiece of theodicy, not because it resolves the question easily, but because it refuses to.',
        },

        {
          kind: 'christ',
          id: 'christ-cross-theodicy',
          title: 'Christ Connection — The Cross and the Theodicy',
          html:
            'The cross is God&apos;s answer to the theodicy question, though not the answer Ezra expected. It is not a rational explanation but an event: God Himself enters into suffering. "My God, my God, why hast thou forsaken me?" (Matthew 27:46). Jesus cries out in the very language of the psalms of lament—and in doing so, transforms the meaning of suffering itself. The righteous One suffers. The wicked think they have won. Yet through the cross, death is defeated, and resurrection opens a new possibility. God does not explain evil away; He enters into it and conquers it from within. "For we know that all things work together for good to them that love God" (Romans 8:28)—not because suffering is good, but because God works through suffering toward redemption.',
        },

        {
          kind: 'carry',
          html:
            'Ezra&apos;s question remains the deepest question faith can ask. When the righteous suffer and the wicked prosper, when justice seems inverted and God seems hidden—that is when the God of the cross becomes most necessary. The cross does not answer the question with logic. It answers it with presence: <em>I am with you in this.</em>',
        },

        {
          kind: 'artwork',
          matchTitle: /babylon|exile/i,
          matchArtist: /tissot/i,
          caption: '2 Esdras 3 — The Exile&apos;s Lament',
        },

        {
          kind: 'reflection',
          id: 'theodicy-cry',
          prompt:
            'Where does injustice most burn in your vision of the world? When have you asked, like Ezra, "Why does the righteous suffer while the wicked prosper?" And where, if at all, have you found God in that question?',
        },
      ],
    },

    /* ─── 2 Esdras 3:23–27 — Show Me Thy Way ──────────────────────────── */
    {
      ref: '2 Esdras 3:23–27',
      title: 'Show Me Thy Way',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 23,
              spans: [
                t('Therefore, I pray thee, leave me not, that we may perish utterly. For if thou hatest thy people, it shall be punished by thine own hands, and not by the hands of the heathen.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'leave-me-not',
          html:
            'Ezra does not demand an answer; he pleads. <em>Leave me not.</em> The cry is not for justice but for presence. If judgment must come, let it come from God Himself, not from the hands of the heathen. There is something in suffering that comes directly from God&apos;s hand that is bearable; what comes from the hands of enemies is unbearable abandonment.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 24,
              spans: [
                t('For as a father thou art kind unto thy people, but thou art cruel when thou art angry with them.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('For behold, the heathen are accounted of thee as nothing: and so are all the powers of the people, whom thou hatest; yet thy people, whom thou hast called thy firstborn, only beloved, thine only, are given into the hands of the Gentiles.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'father-cruel',
          html:
            'Ezra frames God as both father and—in the moment of judgment—as one who appears cruel. He does not soften this contradiction. He lives in it. A father is kind, yet a father who judges is, in the moment, cruel. To be judged by God is not the same as to be abandoned by God, but in the moment of exile, the distinction feels thin.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 26,
              spans: [
                t('But what hath this people done, that thou art so angry with them? or what doth the heathen that thou lovest more, that thou hast not made them to understand thy covenant, as thou hast made Israel to understand it?'),
              ],
            },
            {
              number: 27,
              spans: [
                t('Whom wilt thou favour? or whose children dost thou account thine own? For I had rather be in the power of the godly, and ruled by the righteous, than to be under the dominion of the ungodly and wicked.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'whose-children',
          html:
            'The prayer closes with a confession: <em>Whose children dost thou account thine own?</em> Ezra is willing to accept suffering if it comes from God as Father. But to be ruled by those who do not acknowledge God at all—to be under Babylonian dominion—is to be separated from that filial relationship. The deepest suffering is the sense of being orphaned.',
        },

        {
          kind: 'christ',
          id: 'christ-abba-father',
          title: 'Christ Connection — Abba, Father',
          html:
            'Jesus will teach a different language of fatherhood. "Abba," He cries in Gethsemane—the intimate Aramaic word for father. And He teaches His disciples: "Our Father which art in heaven." Through Christ, the exiled people discover they are not orphaned. They are adopted into God&apos;s family. "For ye have not received the spirit of bondage again to fear; but ye have received the Spirit of adoption, whereby we cry, Abba, Father" (Romans 8:15). What Ezra mourns as separation—the sense of being cast away—Christ transforms into the deepest intimacy. The God who judges is also the God who calls us "beloved."',
        },

        {
          kind: 'carry',
          html:
            'Ezra cries out the prayer of exile: <em>Leave me not.</em> He would rather be ruled by the righteous than by the godless, because being ruled by the righteous means being cared for as a child. In that cry, every person who has felt abandoned—by circumstance, by loss, by the apparent injustice of the world—finds a voice. And the answer to that voice comes not in explanation but in relationship: You are not abandoned. You are beloved. You are called by name.',
        },

        {
          kind: 'reflection',
          id: 'leave-me-not-prayer',
          prompt:
            'When have you prayed "Leave me not"? What would it mean to believe that God, even in judgment, is not abandoning you but still holding you as a Father holds His child?',
        },
      ],
    },

    /* ─── 2 Esdras 3:28–36 — Show Me Yet, O Lord ──────────────────────── */
    {
      ref: '2 Esdras 3:28–36',
      title: 'Show Me Yet, O Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 28,
              spans: [
                t('Therefore I will speak; Hear me, O Lord, and I shall speak. For as long as I live I will not hold my peace, so long as I have understanding.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'shall-speak',
          html:
            'Ezra will not be silent. Even in exile, even in the midst of injustice, he will speak. He will not hold his peace as long as he has understanding. This is the vow of the apocalypticist: to ask questions that others are afraid to ask, to refuse easy comfort, to demand that God explain Himself.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 29,
              spans: [
                t('O Lord, thou spakest at the beginning of the creation, and saidst thus, Let the earth be made; and it was made. And then the air, that it might hold up the earth. But the spirit thou commandedst to hold the wind, and to move all about.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And then thou madest the rain, and gavest it a body to water the earth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'spirit-commanded',
          html:
            'Ezra rehearses creation. God spoke, and the world obeyed. The elements—wind, rain, earth—all move according to His word. Why, then, does humanity alone resist? The creation obeys its Maker; why do the people of God refuse Him?',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 31,
              spans: [
                t('And thou madest the stars, and gavest them a course, that they should go; and they kept not the way which thou commandedst them. But this people which thou hast called thy firstborn, thy only beloved, I have given into the power of the Gentiles. Judged I amiss, O Lord?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'stars-course',
          html:
            'Even the stars keep their course. Even the rain obeys. But the firstborn—the people called to relationship with God—refuse to obey. And yet they are judged, handed over to the Gentiles, while the Gentiles themselves do not answer to God at all. The logic seems inverted.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 32,
              spans: [
                t('Therefore I will speak; thou Lord, hear me. And now, O Lord, I will tell thee further: as touching the law which they that lived before me kept, (for I was not the first, but they that lived before, and they that come after,) what is come, for they kept thy law, what reward hath thou given them?'),
              ],
            },
            {
              number: 33,
              spans: [
                t('And thou didst separate from among them a man called Abraham, and thou lovedst him, and unto him only thou revealedst thy law; and thy covenant he kept.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('And when the children of Abraham were born, thou gavest them the law, but they kept it not; thou commandedst them, but they would not obey.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'law-kept-not',
          html:
            'Ezra traces the pattern through generations: Abraham kept the law and was loved. His children received the law but would not obey it. The same pattern repeats through every generation. Obedience is rewarded with love; disobedience is met with judgment. Yet now, in exile, even disobedient Israel is treated more harshly than disobedient Babylon.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 35,
              spans: [
                t('And then thou didst gather them, and when they came to dwell in the land of Sion, thou didst measure out, and there thou didst call thy name, and thou didst say unto them, I will leave my law in you, and it shall bring forth fruit in you, and ye shall be glorious through it.'),
              ],
            },
            {
              number: 36,
              spans: [
                t('Yet for all these things which I have spoken, thou hast not turned from thy fierce anger toward us. For we, that have received thy law, are to perish by sin; but thou wilt not suffer those that dwell in thy land to perish, although they have no law.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'fierce-anger',
          html:
            'The final turn of Ezra&apos;s prayer is the cruelest observation: Those who have the law perish because they break it. Those who have no law do not perish—they thrive in Babylon. Is the law itself a curse? Does knowledge of God&apos;s word bring only judgment? Ezra does not resolve this—he states it, leaves it hanging, and waits for God&apos;s response. This is the first of seven visions. The answer will not come easily.',
        },

        {
          kind: 'christ',
          id: 'christ-law-fulfilled',
          title: 'Christ Connection — The Law Fulfilled and Transformed',
          html:
            'Paul will write: "The law was our schoolmaster to bring us unto Christ, that we might be justified by faith" (Galatians 3:24). The law that judged Israel is not meant to be a burden but a pathway. And Christ fulfills it completely: "Think not that I am come to destroy the law… I am not come to destroy, but to fulfil" (Matthew 5:17). Through Christ, the law moves from being a measure of condemnation to being a revelation of God&apos;s love. What condemns is not the law but the refusal to accept the grace that the law points toward—which is Christ Himself.',
        },

        {
          kind: 'carry',
          html:
            'Ezra ends his opening prayer with a question that will haunt the rest of the book: <em>Why does the law bring judgment to those who have it, while those without it prosper?</em> He does not answer it. He brings it to God. And the willingness to ask—without demanding, without refusing to listen—opens the door to the visions that follow. Your hardest questions do not separate you from God. Brought honestly, they bring you toward Him.',
        },

        {
          kind: 'reflection',
          id: 'law-curse-or-grace',
          prompt:
            'How have you experienced the law—God&apos;s revealed will—as a gift? As a burden? As both? What would it mean for you to see it the way Christ sees it—not as a measure of your failure but as a revelation of His love?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 2 Esdras 3',
    quote:
      'In the thirtieth year after the ruin of the city, I was in Babylon: and it came to pass in the night of the month Nisan, that I was lying in my bed. Are the deeds of those that dwell in Babylon better? or hath she obtained glory another way?',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Esdras 3 · Study Guide',
  },

  hasHebrew: true,
};
