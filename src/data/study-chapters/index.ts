/**
 * Rich-study-guide registry.
 *
 * Two routes lead here:
 *
 *   1. Hand-authored rich chapters live in their own files (e.g.
 *      genesis-1.ts) and are registered in RICH_CHAPTERS below. These get the
 *      full Genesis 1 template — verse-by-verse marks, Hebrew/Greek callouts,
 *      Christ Connection boxes, Carry blocks, the works.
 *
 *   2. Every other chapter — anything not in RICH_CHAPTERS — is auto-ported
 *      from the legacy ChapterContent shape (overview/themes/questions/
 *      christConnection/keyVerse) so the page renders in the same Genesis-1
 *      visual idiom while we wait for handcrafted commentary.
 *
 * Result: every study guide on the site uses RichStudyGuide. The format is
 * consistent everywhere; quality varies until each chapter is hand-authored.
 */

import type { ChapterContent } from '../chapter-content';
import type { Verse } from '../../lib/supabase';
import type { Block, RichChapterContent } from './types';
import { GENESIS_1 } from './genesis-1';
import { GENESIS_2 } from './genesis-2';
import { GENESIS_3 } from './genesis-3';
import { GENESIS_4 } from './genesis-4';
import { GENESIS_5 } from './genesis-5';
import { GENESIS_6 } from './genesis-6';
import { GENESIS_7 } from './genesis-7';
import { GENESIS_8 } from './genesis-8';
import { GENESIS_9 } from './genesis-9';
import { GENESIS_10 } from './genesis-10';
import { GENESIS_11 } from './genesis-11';
import { GENESIS_12 } from './genesis-12';
import { GENESIS_13 } from './genesis-13';
import { GENESIS_14 } from './genesis-14';
import { GENESIS_15 } from './genesis-15';
import { GENESIS_16 } from './genesis-16';
import { GENESIS_17 } from './genesis-17';
import { GENESIS_18 } from './genesis-18';
import { GENESIS_19 } from './genesis-19';
import { GENESIS_20 } from './genesis-20';
import { GENESIS_21 } from './genesis-21';
import { GENESIS_22 } from './genesis-22';
import { GENESIS_23 } from './genesis-23';
import { GENESIS_24 } from './genesis-24';
import { GENESIS_25 } from './genesis-25';
import { GENESIS_26 } from './genesis-26';
import { GENESIS_27 } from './genesis-27';
import { GENESIS_28 } from './genesis-28';
import { GENESIS_29 } from './genesis-29';
import { GENESIS_30 } from './genesis-30';
import { GENESIS_31 } from './genesis-31';
import { GENESIS_32 } from './genesis-32';
import { GENESIS_33 } from './genesis-33';
import { GENESIS_34 } from './genesis-34';
import { GENESIS_35 } from './genesis-35';
import { GENESIS_36 } from './genesis-36';
import { GENESIS_37 } from './genesis-37';
import { GENESIS_38 } from './genesis-38';
import { GENESIS_39 } from './genesis-39';
import { GENESIS_40 } from './genesis-40';
import { GENESIS_41 } from './genesis-41';
import { GENESIS_42 } from './genesis-42';
import { GENESIS_43 } from './genesis-43';
import { GENESIS_44 } from './genesis-44';
import { GENESIS_45 } from './genesis-45';
import { GENESIS_46 } from './genesis-46';
import { GENESIS_47 } from './genesis-47';
import { GENESIS_48 } from './genesis-48';
import { GENESIS_49 } from './genesis-49';
import { GENESIS_50 } from './genesis-50';
import { EXODUS_1 } from './exodus-1';
import { EXODUS_2 } from './exodus-2';
import { EXODUS_3 } from './exodus-3';
import { EXODUS_4 } from './exodus-4';
import { EXODUS_5 } from './exodus-5';
import { EXODUS_6 } from './exodus-6';
import { EXODUS_7 } from './exodus-7';
import { EXODUS_8 } from './exodus-8';
import { EXODUS_9 } from './exodus-9';
import { EXODUS_10 } from './exodus-10';
import { EXODUS_11 } from './exodus-11';
import { EXODUS_12 } from './exodus-12';
import { EXODUS_13 } from './exodus-13';
import { EXODUS_14 } from './exodus-14';
import { EXODUS_15 } from './exodus-15';
import { EXODUS_16 } from './exodus-16';
import { EXODUS_17 } from './exodus-17';
import { EXODUS_18 } from './exodus-18';
import { EXODUS_19 } from './exodus-19';
import { EXODUS_20 } from './exodus-20';
import { EXODUS_21 } from './exodus-21';
import { EXODUS_22 } from './exodus-22';
import { EXODUS_23 } from './exodus-23';
import { EXODUS_24 } from './exodus-24';
import { EXODUS_25 } from './exodus-25';
import { EXODUS_26 } from './exodus-26';
import { EXODUS_27 } from './exodus-27';
import { EXODUS_28 } from './exodus-28';
import { EXODUS_29 } from './exodus-29';
import { EXODUS_30 } from './exodus-30';
import { EXODUS_31 } from './exodus-31';
import { EXODUS_32 } from './exodus-32';
import { EXODUS_33 } from './exodus-33';
import { EXODUS_34 } from './exodus-34';
import { EXODUS_35 } from './exodus-35';
import { EXODUS_36 } from './exodus-36';
import { EXODUS_37 } from './exodus-37';
import { EXODUS_38 } from './exodus-38';
import { EXODUS_39 } from './exodus-39';
import { EXODUS_40 } from './exodus-40';
import { LEVITICUS_1 } from './leviticus-1';
import { LEVITICUS_2 } from './leviticus-2';
import { LEVITICUS_3 } from './leviticus-3';
import { LEVITICUS_4 } from './leviticus-4';
import { LEVITICUS_5 } from './leviticus-5';
import { LEVITICUS_6 } from './leviticus-6';
import { LEVITICUS_7 } from './leviticus-7';
import { LEVITICUS_8 } from './leviticus-8';
import { LEVITICUS_9 } from './leviticus-9';
import { LEVITICUS_10 } from './leviticus-10';
import { LEVITICUS_11 } from './leviticus-11';
import { LEVITICUS_12 } from './leviticus-12';
import { LEVITICUS_13 } from './leviticus-13';
import { LEVITICUS_14 } from './leviticus-14';
import { LEVITICUS_15 } from './leviticus-15';
import { LEVITICUS_16 } from './leviticus-16';
import { LEVITICUS_17 } from './leviticus-17';
import { LEVITICUS_18 } from './leviticus-18';
import { LEVITICUS_19 } from './leviticus-19';
import { LEVITICUS_20 } from './leviticus-20';
import { LEVITICUS_21 } from './leviticus-21';
import { LEVITICUS_22 } from './leviticus-22';
import { LEVITICUS_23 } from './leviticus-23';
import { LEVITICUS_24 } from './leviticus-24';
import { LEVITICUS_25 } from './leviticus-25';
import { LEVITICUS_26 } from './leviticus-26';
import { LEVITICUS_27 } from './leviticus-27';
import { NUMBERS_1 } from './numbers-1';
import { NUMBERS_2 } from './numbers-2';
import { NUMBERS_3 } from './numbers-3';
import { NUMBERS_4 } from './numbers-4';
import { NUMBERS_5 } from './numbers-5';
import { NUMBERS_6 } from './numbers-6';
import { NUMBERS_7 } from './numbers-7';
import { NUMBERS_8 } from './numbers-8';
import { NUMBERS_9 } from './numbers-9';
import { NUMBERS_10 } from './numbers-10';
import { NUMBERS_11 } from './numbers-11';
import { NUMBERS_12 } from './numbers-12';
import { NUMBERS_13 } from './numbers-13';
import { NUMBERS_14 } from './numbers-14';
import { NUMBERS_15 } from './numbers-15';
import { NUMBERS_16 } from './numbers-16';
import { NUMBERS_17 } from './numbers-17';
import { NUMBERS_18 } from './numbers-18';
import { NUMBERS_19 } from './numbers-19';
import { NUMBERS_20 } from './numbers-20';
import { NUMBERS_21 } from './numbers-21';
import { NUMBERS_22 } from './numbers-22';
import { NUMBERS_23 } from './numbers-23';
import { NUMBERS_24 } from './numbers-24';
import { NUMBERS_25 } from './numbers-25';
import { NUMBERS_26 } from './numbers-26';
import { NUMBERS_27 } from './numbers-27';
import { NUMBERS_28 } from './numbers-28';
import { NUMBERS_29 } from './numbers-29';
import { NUMBERS_30 } from './numbers-30';
import { NUMBERS_31 } from './numbers-31';
import { NUMBERS_32 } from './numbers-32';
import { NUMBERS_33 } from './numbers-33';
import { NUMBERS_34 } from './numbers-34';
import { NUMBERS_35 } from './numbers-35';
import { NUMBERS_36 } from './numbers-36';
import { DEUTERONOMY_1 } from './deuteronomy-1';
import { DEUTERONOMY_2 } from './deuteronomy-2';
import { DEUTERONOMY_3 } from './deuteronomy-3';
import { DEUTERONOMY_4 } from './deuteronomy-4';
import { DEUTERONOMY_5 } from './deuteronomy-5';
import { DEUTERONOMY_6 } from './deuteronomy-6';
import { DEUTERONOMY_7 } from './deuteronomy-7';
import { DEUTERONOMY_8 } from './deuteronomy-8';
import { DEUTERONOMY_9 } from './deuteronomy-9';
import { DEUTERONOMY_10 } from './deuteronomy-10';
import { DEUTERONOMY_11 } from './deuteronomy-11';
import { DEUTERONOMY_12 } from './deuteronomy-12';
import { DEUTERONOMY_13 } from './deuteronomy-13';
import { DEUTERONOMY_14 } from './deuteronomy-14';
import { DEUTERONOMY_15 } from './deuteronomy-15';
import { DEUTERONOMY_16 } from './deuteronomy-16';
import { DEUTERONOMY_17 } from './deuteronomy-17';
import { DEUTERONOMY_18 } from './deuteronomy-18';
import { DEUTERONOMY_19 } from './deuteronomy-19';
import { DEUTERONOMY_20 } from './deuteronomy-20';
import { DEUTERONOMY_21 } from './deuteronomy-21';
import { DEUTERONOMY_22 } from './deuteronomy-22';
import { DEUTERONOMY_23 } from './deuteronomy-23';
import { DEUTERONOMY_24 } from './deuteronomy-24';
import { DEUTERONOMY_25 } from './deuteronomy-25';
import { DEUTERONOMY_26 } from './deuteronomy-26';
import { DEUTERONOMY_27 } from './deuteronomy-27';
import { DEUTERONOMY_28 } from './deuteronomy-28';
import { DEUTERONOMY_29 } from './deuteronomy-29';
import { DEUTERONOMY_30 } from './deuteronomy-30';
import { DEUTERONOMY_31 } from './deuteronomy-31';
import { DEUTERONOMY_32 } from './deuteronomy-32';
import { DEUTERONOMY_33 } from './deuteronomy-33';
import { DEUTERONOMY_34 } from './deuteronomy-34';
import { JOSHUA_1 } from './joshua-1';
import { JOSHUA_2 } from './joshua-2';
import { JOSHUA_3 } from './joshua-3';
import { JOSHUA_4 } from './joshua-4';
import { JOSHUA_5 } from './joshua-5';
import { JOSHUA_6 } from './joshua-6';
import { JOSHUA_7 } from './joshua-7';
import { JOSHUA_8 } from './joshua-8';
import { JOSHUA_9 } from './joshua-9';
import { JOSHUA_10 } from './joshua-10';
import { JOSHUA_11 } from './joshua-11';
import { JOSHUA_12 } from './joshua-12';
import { JOSHUA_13 } from './joshua-13';
import { JOSHUA_14 } from './joshua-14';
import { JOSHUA_15 } from './joshua-15';
import { JOSHUA_16 } from './joshua-16';
import { JOSHUA_17 } from './joshua-17';
import { JOSHUA_18 } from './joshua-18';
import { JOSHUA_19 } from './joshua-19';
import { JOSHUA_20 } from './joshua-20';
import { JOSHUA_21 } from './joshua-21';
import { JOSHUA_22 } from './joshua-22';
import { JOSHUA_23 } from './joshua-23';
import { JOSHUA_24 } from './joshua-24';
import { JUDGES_1 } from './judges-1';
import { JUDGES_2 } from './judges-2';
import { JUDGES_3 } from './judges-3';
import { JUDGES_4 } from './judges-4';
import { JUDGES_5 } from './judges-5';
import { JUDGES_6 } from './judges-6';
import { JUDGES_7 } from './judges-7';
import { JUDGES_8 } from './judges-8';
import { JUDGES_9 } from './judges-9';
import { JUDGES_10 } from './judges-10';
import { JUDGES_11 } from './judges-11';
import { JUDGES_12 } from './judges-12';
import { JUDGES_13 } from './judges-13';
import { JUDGES_14 } from './judges-14';
import { JUDGES_15 } from './judges-15';
import { JUDGES_16 } from './judges-16';
import { JUDGES_17 } from './judges-17';
import { JUDGES_18 } from './judges-18';
import { JUDGES_19 } from './judges-19';
import { JUDGES_20 } from './judges-20';
import { JUDGES_21 } from './judges-21';
import { RUTH_1 } from './ruth-1';
import { RUTH_2 } from './ruth-2';
import { RUTH_3 } from './ruth-3';
import { RUTH_4 } from './ruth-4';
import { SAMUEL_1_1 } from './1-samuel-1';
import { SAMUEL_1_2 } from './1-samuel-2';
import { SAMUEL_1_3 } from './1-samuel-3';
import { SAMUEL_1_4 } from './1-samuel-4';
import { SAMUEL_1_5 } from './1-samuel-5';
import { SAMUEL_1_6 } from './1-samuel-6';
import { SAMUEL_1_7 } from './1-samuel-7';
import { SAMUEL_1_8 } from './1-samuel-8';
import { SAMUEL_1_9 } from './1-samuel-9';
import { SAMUEL_1_10 } from './1-samuel-10';
import { SAMUEL_1_11 } from './1-samuel-11';
import { SAMUEL_1_12 } from './1-samuel-12';
import { SAMUEL_1_13 } from './1-samuel-13';
import { SAMUEL_1_14 } from './1-samuel-14';
import { SAMUEL_1_15 } from './1-samuel-15';
import { SAMUEL_1_16 } from './1-samuel-16';
import { SAMUEL_1_17 } from './1-samuel-17';
import { SAMUEL_1_18 } from './1-samuel-18';
import { SAMUEL_1_19 } from './1-samuel-19';
import { SAMUEL_1_20 } from './1-samuel-20';
import { SAMUEL_1_21 } from './1-samuel-21';
import { SAMUEL_1_22 } from './1-samuel-22';
import { SAMUEL_1_23 } from './1-samuel-23';
import { SAMUEL_1_24 } from './1-samuel-24';
import { SAMUEL_1_25 } from './1-samuel-25';
import { SAMUEL_1_26 } from './1-samuel-26';
import { SAMUEL_1_27 } from './1-samuel-27';
import { SAMUEL_1_28 } from './1-samuel-28';
import { SAMUEL_1_29 } from './1-samuel-29';
import { SAMUEL_1_30 } from './1-samuel-30';
import { SAMUEL_1_31 } from './1-samuel-31';
import { SAMUEL_2_1 } from './2-samuel-1';
import { SAMUEL_2_2 } from './2-samuel-2';
import { SAMUEL_2_3 } from './2-samuel-3';
import { SAMUEL_2_4 } from './2-samuel-4';
import { SAMUEL_2_5 } from './2-samuel-5';
import { SAMUEL_2_6 } from './2-samuel-6';
import { SAMUEL_2_7 } from './2-samuel-7';
import { SAMUEL_2_8 } from './2-samuel-8';
import { SAMUEL_2_9 } from './2-samuel-9';
import { SAMUEL_2_10 } from './2-samuel-10';
import { SAMUEL_2_11 } from './2-samuel-11';
import { SAMUEL_2_12 } from './2-samuel-12';
import { SAMUEL_2_13 } from './2-samuel-13';
import { SAMUEL_2_14 } from './2-samuel-14';
import { SAMUEL_2_15 } from './2-samuel-15';
import { SAMUEL_2_16 } from './2-samuel-16';
import { SAMUEL_2_17 } from './2-samuel-17';
import { SAMUEL_2_18 } from './2-samuel-18';
import { SAMUEL_2_19 } from './2-samuel-19';
import { SAMUEL_2_20 } from './2-samuel-20';
import { SAMUEL_2_21 } from './2-samuel-21';
import { SAMUEL_2_22 } from './2-samuel-22';
import { SAMUEL_2_23 } from './2-samuel-23';
import { SAMUEL_2_24 } from './2-samuel-24';
import { KINGS_1_1 } from './1-kings-1';
import { KINGS_1_2 } from './1-kings-2';
import { KINGS_1_3 } from './1-kings-3';
import { KINGS_1_4 } from './1-kings-4';
import { KINGS_1_5 } from './1-kings-5';
import { KINGS_1_6 } from './1-kings-6';
import { KINGS_1_7 } from './1-kings-7';
import { KINGS_1_8 } from './1-kings-8';
import { KINGS_1_9 } from './1-kings-9';
import { KINGS_1_10 } from './1-kings-10';
import { KINGS_1_11 } from './1-kings-11';
import { KINGS_1_12 } from './1-kings-12';
import { KINGS_1_13 } from './1-kings-13';
import { KINGS_1_14 } from './1-kings-14';
import { KINGS_1_15 } from './1-kings-15';
import { KINGS_1_16 } from './1-kings-16';

/** Hand-authored rich chapters. Keyed by `<book-slug>/<chapter>`. */
const RICH_CHAPTERS: Record<string, RichChapterContent> = {
  'genesis/1': GENESIS_1,
  'genesis/2': GENESIS_2,
  'genesis/3': GENESIS_3,
  'genesis/4': GENESIS_4,
  'genesis/5': GENESIS_5,
  'genesis/6': GENESIS_6,
  'genesis/7': GENESIS_7,
  'genesis/8': GENESIS_8,
  'genesis/9': GENESIS_9,
  'genesis/10': GENESIS_10,
  'genesis/11': GENESIS_11,
  'genesis/12': GENESIS_12,
  'genesis/13': GENESIS_13,
  'genesis/14': GENESIS_14,
  'genesis/15': GENESIS_15,
  'genesis/16': GENESIS_16,
  'genesis/17': GENESIS_17,
  'genesis/18': GENESIS_18,
  'genesis/19': GENESIS_19,
  'genesis/20': GENESIS_20,
  'genesis/21': GENESIS_21,
  'genesis/22': GENESIS_22,
  'genesis/23': GENESIS_23,
  'genesis/24': GENESIS_24,
  'genesis/25': GENESIS_25,
  'genesis/26': GENESIS_26,
  'genesis/27': GENESIS_27,
  'genesis/28': GENESIS_28,
  'genesis/29': GENESIS_29,
  'genesis/30': GENESIS_30,
  'genesis/31': GENESIS_31,
  'genesis/32': GENESIS_32,
  'genesis/33': GENESIS_33,
  'genesis/34': GENESIS_34,
  'genesis/35': GENESIS_35,
  'genesis/36': GENESIS_36,
  'genesis/37': GENESIS_37,
  'genesis/38': GENESIS_38,
  'genesis/39': GENESIS_39,
  'genesis/40': GENESIS_40,
  'genesis/41': GENESIS_41,
  'genesis/42': GENESIS_42,
  'genesis/43': GENESIS_43,
  'genesis/44': GENESIS_44,
  'genesis/45': GENESIS_45,
  'genesis/46': GENESIS_46,
  'genesis/47': GENESIS_47,
  'genesis/48': GENESIS_48,
  'genesis/49': GENESIS_49,
  'genesis/50': GENESIS_50,
  'exodus/1': EXODUS_1,
  'exodus/2': EXODUS_2,
  'exodus/3': EXODUS_3,
  'exodus/4': EXODUS_4,
  'exodus/5': EXODUS_5,
  'exodus/6': EXODUS_6,
  'exodus/7': EXODUS_7,
  'exodus/8': EXODUS_8,
  'exodus/9': EXODUS_9,
  'exodus/10': EXODUS_10,
  'exodus/11': EXODUS_11,
  'exodus/12': EXODUS_12,
  'exodus/13': EXODUS_13,
  'exodus/14': EXODUS_14,
  'exodus/15': EXODUS_15,
  'exodus/16': EXODUS_16,
  'exodus/17': EXODUS_17,
  'exodus/18': EXODUS_18,
  'exodus/19': EXODUS_19,
  'exodus/20': EXODUS_20,
  'exodus/21': EXODUS_21,
  'exodus/22': EXODUS_22,
  'exodus/23': EXODUS_23,
  'exodus/24': EXODUS_24,
  'exodus/25': EXODUS_25,
  'exodus/26': EXODUS_26,
  'exodus/27': EXODUS_27,
  'exodus/28': EXODUS_28,
  'exodus/29': EXODUS_29,
  'exodus/30': EXODUS_30,
  'exodus/31': EXODUS_31,
  'exodus/32': EXODUS_32,
  'exodus/33': EXODUS_33,
  'exodus/34': EXODUS_34,
  'exodus/35': EXODUS_35,
  'exodus/36': EXODUS_36,
  'exodus/37': EXODUS_37,
  'exodus/38': EXODUS_38,
  'exodus/39': EXODUS_39,
  'exodus/40': EXODUS_40,
  'leviticus/1': LEVITICUS_1,
  'leviticus/2': LEVITICUS_2,
  'leviticus/3': LEVITICUS_3,
  'leviticus/4': LEVITICUS_4,
  'leviticus/5': LEVITICUS_5,
  'leviticus/6': LEVITICUS_6,
  'leviticus/7': LEVITICUS_7,
  'leviticus/8': LEVITICUS_8,
  'leviticus/9': LEVITICUS_9,
  'leviticus/10': LEVITICUS_10,
  'leviticus/11': LEVITICUS_11,
  'leviticus/12': LEVITICUS_12,
  'leviticus/13': LEVITICUS_13,
  'leviticus/14': LEVITICUS_14,
  'leviticus/15': LEVITICUS_15,
  'leviticus/16': LEVITICUS_16,
  'leviticus/17': LEVITICUS_17,
  'leviticus/18': LEVITICUS_18,
  'leviticus/19': LEVITICUS_19,
  'leviticus/20': LEVITICUS_20,
  'leviticus/21': LEVITICUS_21,
  'leviticus/22': LEVITICUS_22,
  'leviticus/23': LEVITICUS_23,
  'leviticus/24': LEVITICUS_24,
  'leviticus/25': LEVITICUS_25,
  'leviticus/26': LEVITICUS_26,
  'leviticus/27': LEVITICUS_27,
  'numbers/1': NUMBERS_1,
  'numbers/2': NUMBERS_2,
  'numbers/3': NUMBERS_3,
  'numbers/4': NUMBERS_4,
  'numbers/5': NUMBERS_5,
  'numbers/6': NUMBERS_6,
  'numbers/7': NUMBERS_7,
  'numbers/8': NUMBERS_8,
  'numbers/9': NUMBERS_9,
  'numbers/10': NUMBERS_10,
  'numbers/11': NUMBERS_11,
  'numbers/12': NUMBERS_12,
  'numbers/13': NUMBERS_13,
  'numbers/14': NUMBERS_14,
  'numbers/15': NUMBERS_15,
  'numbers/16': NUMBERS_16,
  'numbers/17': NUMBERS_17,
  'numbers/18': NUMBERS_18,
  'numbers/19': NUMBERS_19,
  'numbers/20': NUMBERS_20,
  'numbers/21': NUMBERS_21,
  'numbers/22': NUMBERS_22,
  'numbers/23': NUMBERS_23,
  'numbers/24': NUMBERS_24,
  'numbers/25': NUMBERS_25,
  'numbers/26': NUMBERS_26,
  'numbers/27': NUMBERS_27,
  'numbers/28': NUMBERS_28,
  'numbers/29': NUMBERS_29,
  'numbers/30': NUMBERS_30,
  'numbers/31': NUMBERS_31,
  'numbers/32': NUMBERS_32,
  'numbers/33': NUMBERS_33,
  'numbers/34': NUMBERS_34,
  'numbers/35': NUMBERS_35,
  'numbers/36': NUMBERS_36,
  'deuteronomy/1': DEUTERONOMY_1,
  'deuteronomy/2': DEUTERONOMY_2,
  'deuteronomy/3': DEUTERONOMY_3,
  'deuteronomy/4': DEUTERONOMY_4,
  'deuteronomy/5': DEUTERONOMY_5,
  'deuteronomy/6': DEUTERONOMY_6,
  'deuteronomy/7': DEUTERONOMY_7,
  'deuteronomy/8': DEUTERONOMY_8,
  'deuteronomy/9': DEUTERONOMY_9,
  'deuteronomy/10': DEUTERONOMY_10,
  'deuteronomy/11': DEUTERONOMY_11,
  'deuteronomy/12': DEUTERONOMY_12,
  'deuteronomy/13': DEUTERONOMY_13,
  'deuteronomy/14': DEUTERONOMY_14,
  'deuteronomy/15': DEUTERONOMY_15,
  'deuteronomy/16': DEUTERONOMY_16,
  'deuteronomy/17': DEUTERONOMY_17,
  'deuteronomy/18': DEUTERONOMY_18,
  'deuteronomy/19': DEUTERONOMY_19,
  'deuteronomy/20': DEUTERONOMY_20,
  'deuteronomy/21': DEUTERONOMY_21,
  'deuteronomy/22': DEUTERONOMY_22,
  'deuteronomy/23': DEUTERONOMY_23,
  'deuteronomy/24': DEUTERONOMY_24,
  'deuteronomy/25': DEUTERONOMY_25,
  'deuteronomy/26': DEUTERONOMY_26,
  'deuteronomy/27': DEUTERONOMY_27,
  'deuteronomy/28': DEUTERONOMY_28,
  'deuteronomy/29': DEUTERONOMY_29,
  'deuteronomy/30': DEUTERONOMY_30,
  'deuteronomy/31': DEUTERONOMY_31,
  'deuteronomy/32': DEUTERONOMY_32,
  'deuteronomy/33': DEUTERONOMY_33,
  'deuteronomy/34': DEUTERONOMY_34,
  'joshua/1': JOSHUA_1,
  'joshua/2': JOSHUA_2,
  'joshua/3': JOSHUA_3,
  'joshua/4': JOSHUA_4,
  'joshua/5': JOSHUA_5,
  'joshua/6': JOSHUA_6,
  'joshua/7': JOSHUA_7,
  'joshua/8': JOSHUA_8,
  'joshua/9': JOSHUA_9,
  'joshua/10': JOSHUA_10,
  'joshua/11': JOSHUA_11,
  'joshua/12': JOSHUA_12,
  'joshua/13': JOSHUA_13,
  'joshua/14': JOSHUA_14,
  'joshua/15': JOSHUA_15,
  'joshua/16': JOSHUA_16,
  'joshua/17': JOSHUA_17,
  'joshua/18': JOSHUA_18,
  'joshua/19': JOSHUA_19,
  'joshua/20': JOSHUA_20,
  'joshua/21': JOSHUA_21,
  'joshua/22': JOSHUA_22,
  'joshua/23': JOSHUA_23,
  'joshua/24': JOSHUA_24,
  'judges/1': JUDGES_1,
  'judges/2': JUDGES_2,
  'judges/3': JUDGES_3,
  'judges/4': JUDGES_4,
  'judges/5': JUDGES_5,
  'judges/6': JUDGES_6,
  'judges/7': JUDGES_7,
  'judges/8': JUDGES_8,
  'judges/9': JUDGES_9,
  'judges/10': JUDGES_10,
  'judges/11': JUDGES_11,
  'judges/12': JUDGES_12,
  'judges/13': JUDGES_13,
  'judges/14': JUDGES_14,
  'judges/15': JUDGES_15,
  'judges/16': JUDGES_16,
  'judges/17': JUDGES_17,
  'judges/18': JUDGES_18,
  'judges/19': JUDGES_19,
  'judges/20': JUDGES_20,
  'judges/21': JUDGES_21,
  'ruth/1': RUTH_1,
  'ruth/2': RUTH_2,
  'ruth/3': RUTH_3,
  'ruth/4': RUTH_4,
  '1-samuel/1': SAMUEL_1_1,
  '1-samuel/2': SAMUEL_1_2,
  '1-samuel/3': SAMUEL_1_3,
  '1-samuel/4': SAMUEL_1_4,
  '1-samuel/5': SAMUEL_1_5,
  '1-samuel/6': SAMUEL_1_6,
  '1-samuel/7': SAMUEL_1_7,
  '1-samuel/8': SAMUEL_1_8,
  '1-samuel/9': SAMUEL_1_9,
  '1-samuel/10': SAMUEL_1_10,
  '1-samuel/11': SAMUEL_1_11,
  '1-samuel/12': SAMUEL_1_12,
  '1-samuel/13': SAMUEL_1_13,
  '1-samuel/14': SAMUEL_1_14,
  '1-samuel/15': SAMUEL_1_15,
  '1-samuel/16': SAMUEL_1_16,
  '1-samuel/17': SAMUEL_1_17,
  '1-samuel/18': SAMUEL_1_18,
  '1-samuel/19': SAMUEL_1_19,
  '1-samuel/20': SAMUEL_1_20,
  '1-samuel/21': SAMUEL_1_21,
  '1-samuel/22': SAMUEL_1_22,
  '1-samuel/23': SAMUEL_1_23,
  '1-samuel/24': SAMUEL_1_24,
  '1-samuel/25': SAMUEL_1_25,
  '1-samuel/26': SAMUEL_1_26,
  '1-samuel/27': SAMUEL_1_27,
  '1-samuel/28': SAMUEL_1_28,
  '1-samuel/29': SAMUEL_1_29,
  '1-samuel/30': SAMUEL_1_30,
  '1-samuel/31': SAMUEL_1_31,
  '2-samuel/1': SAMUEL_2_1,
  '2-samuel/2': SAMUEL_2_2,
  '2-samuel/3': SAMUEL_2_3,
  '2-samuel/4': SAMUEL_2_4,
  '2-samuel/5': SAMUEL_2_5,
  '2-samuel/6': SAMUEL_2_6,
  '2-samuel/7': SAMUEL_2_7,
  '2-samuel/8': SAMUEL_2_8,
  '2-samuel/9': SAMUEL_2_9,
  '2-samuel/10': SAMUEL_2_10,
  '2-samuel/11': SAMUEL_2_11,
  '2-samuel/12': SAMUEL_2_12,
  '2-samuel/13': SAMUEL_2_13,
  '2-samuel/14': SAMUEL_2_14,
  '2-samuel/15': SAMUEL_2_15,
  '2-samuel/16': SAMUEL_2_16,
  '2-samuel/17': SAMUEL_2_17,
  '2-samuel/18': SAMUEL_2_18,
  '2-samuel/19': SAMUEL_2_19,
  '2-samuel/20': SAMUEL_2_20,
  '2-samuel/21': SAMUEL_2_21,
  '2-samuel/22': SAMUEL_2_22,
  '2-samuel/23': SAMUEL_2_23,
  '2-samuel/24': SAMUEL_2_24,
  '1-kings/1': KINGS_1_1,
  '1-kings/2': KINGS_1_2,
  '1-kings/3': KINGS_1_3,
  '1-kings/4': KINGS_1_4,
  '1-kings/5': KINGS_1_5,
  '1-kings/6': KINGS_1_6,
  '1-kings/7': KINGS_1_7,
  '1-kings/8': KINGS_1_8,
  '1-kings/9': KINGS_1_9,
  '1-kings/10': KINGS_1_10,
  '1-kings/11': KINGS_1_11,
  '1-kings/12': KINGS_1_12,
  '1-kings/13': KINGS_1_13,
  '1-kings/14': KINGS_1_14,
  '1-kings/15': KINGS_1_15,
  '1-kings/16': KINGS_1_16,
};

/**
 * Look up a rich chapter, falling back to an auto-port of the legacy data
 * if no hand-authored chapter exists. Returns `null` only when neither
 * source has anything.
 *
 * `chapterVerses` — when supplied, the auto-port path renders the entire
 * chapter as a single scripture block at the top of the body so readers
 * still see the full chapter text, not just the key verse.
 */
export function getRichChapter(
  bookSlug: string,
  bookName: string,
  chapter: number,
  legacyContent: ChapterContent | null,
  chapterVerses: Verse[] = [],
): RichChapterContent | null {
  const key = `${bookSlug}/${chapter}`;
  if (RICH_CHAPTERS[key]) return RICH_CHAPTERS[key];
  if (!legacyContent) {
    return emptyChapter(bookSlug, bookName, chapter, chapterVerses);
  }
  return autoPortChapter(bookSlug, bookName, chapter, legacyContent, chapterVerses);
}

/**
 * True when (book, chapter) has a hand-authored entry in RICH_CHAPTERS — the
 * admin in-page editor skips these because the rich layout doesn't round-trip
 * through the legacy ChapterContent shape (the file is the source of truth).
 */
export function isHandAuthoredChapter(bookSlug: string, chapter: number): boolean {
  return Boolean(RICH_CHAPTERS[`${bookSlug}/${chapter}`]);
}

/** Build a scripture block that renders every verse of the chapter as plain
 *  lines (no highlights). Used by the auto-port path so readers always see
 *  the chapter text at the top of the guide. */
function fullChapterScripture(chapter: number, verses: Verse[]): Block {
  return {
    kind: 'scripture',
    chapter,
    lines: verses.map((v) => ({
      number: v.verse_number,
      spans: [{ kind: 'text' as const, text: cleanVerseText(v.text) }],
    })),
  };
}

function cleanVerseText(text: string): string {
  return text
    .replace(/<\/?FI>/gi, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/**
 * Auto-port the legacy ChapterContent shape into a RichChapterContent.
 *
 * The legacy data has five fields. Here is how each maps onto the rich
 * template — the result reads top-to-bottom in the same visual order as
 * Genesis 1, just with less depth:
 *
 *   • overview        → `intros` paragraph (and the page meta description)
 *   • keyVerse        → an "At a Glance" section with the verse rendered as
 *                       a normal scripture block + a small commentary line
 *                       repeating the reference.
 *   • themes          → a "Key Themes" section. Each theme becomes a christ
 *                       block (without the Christ-Connection title) so it
 *                       gets the same colored side rail.
 *   • christConnection → a single Christ Connection block in its own section.
 *   • questions       → a "Questions to Sit With" section, one reflection
 *                       block per question (so they pick up the same journal
 *                       integration as Genesis 1's reflection prompts).
 */
function autoPortChapter(
  bookSlug: string,
  bookName: string,
  chapter: number,
  c: ChapterContent,
  chapterVerses: Verse[],
): RichChapterContent {
  const studyKey = `${bookSlug}-${chapter}`;
  // Try to extract a single verse number for the key verse so the scripture
  // block renders the [v] marker. "Genesis 1:1" → 1; "Psalm 23:1-3" → 1.
  const keyVerseNumber = parseFirstVerseNumber(c.keyVerse.reference);

  // Either render the full chapter as one scripture block, or — if we don't
  // have the verses (e.g. a translation we don't carry) — fall back to just
  // the key verse so the section is never empty.
  const openingScripture: Block = chapterVerses.length > 0
    ? fullChapterScripture(chapter, chapterVerses)
    : {
        kind: 'scripture',
        chapter,
        lines: [
          {
            number: keyVerseNumber,
            spans: [{ kind: 'text', text: c.keyVerse.text }],
          },
        ],
      };

  return {
    bookSlug,
    bookName,
    chapter,
    intros: [c.overview],
    // No KJV-anchored highlights yet, so no "tap any highlighted phrase" hint.
    tapHint: null,
    showKjvNote: false,
    sections: [
      {
        title: 'The Chapter',
        blocks: [
          openingScripture,
          {
            kind: 'commentary',
            html: `<em>Key verse: ${c.keyVerse.reference}.</em>`,
          },
        ],
      },
      ...(c.themes.length > 0
        ? [
            {
              title: 'Key Themes',
              blocks: c.themes.map((theme, i) => ({
                kind: 'christ' as const,
                id: `${studyKey}-theme-${i}`,
                title: theme.title,
                html: theme.desc,
              })),
            },
          ]
        : []),
      {
        title: 'Connection to Christ',
        blocks: [
          {
            kind: 'christ',
            id: `${studyKey}-christ`,
            title: 'Christ Connection',
            html: c.christConnection,
          },
        ],
      },
      ...(c.questions.length > 0
        ? [
            {
              title: 'Questions to Sit With',
              blocks: c.questions.map((q, i) => ({
                kind: 'reflection' as const,
                id: `${studyKey}-q-${i}`,
                prompt: q,
              })),
            },
          ]
        : []),
    ],
    bottomShare: {
      label: `Share ${bookName} ${chapter}`,
      quote: c.overview.length > 280 ? c.overview.slice(0, 277) + '…' : c.overview,
      snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
      ref: `${bookName} ${chapter} · Study Guide`,
    },
  };
}

/**
 * Empty state for chapters with no rich data and no legacy data. The page
 * still uses the same template — we just show the verses + a "this guide
 * is coming soon" note in place of commentary.
 */
function emptyChapter(
  bookSlug: string,
  bookName: string,
  chapter: number,
  chapterVerses: Verse[],
): RichChapterContent {
  return {
    bookSlug,
    bookName,
    chapter,
    intros: [
      `${bookName} ${chapter} — a hand-written study guide for this chapter is on the way. In the meantime, the chapter text is below, with the same translation switcher, highlights, and journal tools as the rest of the site.`,
    ],
    tapHint: null,
    showKjvNote: false,
    sections: [
      ...(chapterVerses.length > 0
        ? [
            {
              title: 'The Chapter',
              blocks: [fullChapterScripture(chapter, chapterVerses)],
            },
          ]
        : []),
      {
        title: 'A guide for this chapter is coming',
        blocks: [
          {
            kind: 'commentary',
            html:
              'We are slowly building a deep, original study guide for every chapter of the Bible — the kind you will find at <a href="/study/genesis/1">Genesis 1</a>. Until this one is written, use the chapter text above and the journal tools to make your own observations. Anything you write here will still be saved when the full guide arrives.',
          },
        ],
      },
    ],
  };
}

/** "Genesis 1:1" → 1. "Psalm 23:1-3" → 1. Fallback: 1. */
function parseFirstVerseNumber(ref: string): number {
  const m = ref.match(/:\s*(\d+)/);
  if (m && m[1]) {
    const n = parseInt(m[1], 10);
    if (Number.isFinite(n) && n > 0) return n;
  }
  return 1;
}
