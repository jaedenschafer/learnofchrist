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
import { KINGS_1_17 } from './1-kings-17';
import { KINGS_1_18 } from './1-kings-18';
import { KINGS_1_19 } from './1-kings-19';
import { KINGS_1_20 } from './1-kings-20';
import { KINGS_1_21 } from './1-kings-21';
import { KINGS_1_22 } from './1-kings-22';
import { KINGS_2_1 } from './2-kings-1';
import { KINGS_2_2 } from './2-kings-2';
import { KINGS_2_3 } from './2-kings-3';
import { KINGS_2_4 } from './2-kings-4';
import { KINGS_2_5 } from './2-kings-5';
import { KINGS_2_6 } from './2-kings-6';
import { KINGS_2_7 } from './2-kings-7';
import { KINGS_2_8 } from './2-kings-8';
import { KINGS_2_9 } from './2-kings-9';
import { KINGS_2_10 } from './2-kings-10';
import { KINGS_2_11 } from './2-kings-11';
import { KINGS_2_12 } from './2-kings-12';
import { KINGS_2_13 } from './2-kings-13';
import { KINGS_2_14 } from './2-kings-14';
import { KINGS_2_15 } from './2-kings-15';
import { KINGS_2_16 } from './2-kings-16';
import { KINGS_2_17 } from './2-kings-17';
import { KINGS_2_18 } from './2-kings-18';
import { KINGS_2_19 } from './2-kings-19';
import { KINGS_2_20 } from './2-kings-20';
import { KINGS_2_21 } from './2-kings-21';
import { KINGS_2_22 } from './2-kings-22';
import { KINGS_2_23 } from './2-kings-23';
import { KINGS_2_24 } from './2-kings-24';
import { KINGS_2_25 } from './2-kings-25';
import { CHRONICLES_1_1 } from './1-chronicles-1';
import { CHRONICLES_1_2 } from './1-chronicles-2';
import { CHRONICLES_1_3 } from './1-chronicles-3';
import { CHRONICLES_1_4 } from './1-chronicles-4';
import { CHRONICLES_1_5 } from './1-chronicles-5';
import { CHRONICLES_1_6 } from './1-chronicles-6';
import { CHRONICLES_1_7 } from './1-chronicles-7';
import { CHRONICLES_1_8 } from './1-chronicles-8';
import { CHRONICLES_1_9 } from './1-chronicles-9';
import { CHRONICLES_1_10 } from './1-chronicles-10';
import { CHRONICLES_1_11 } from './1-chronicles-11';
import { CHRONICLES_1_12 } from './1-chronicles-12';
import { CHRONICLES_1_13 } from './1-chronicles-13';
import { CHRONICLES_1_14 } from './1-chronicles-14';
import { CHRONICLES_1_15 } from './1-chronicles-15';
import { CHRONICLES_1_16 } from './1-chronicles-16';
import { CHRONICLES_1_17 } from './1-chronicles-17';
import { CHRONICLES_1_18 } from './1-chronicles-18';
import { CHRONICLES_1_19 } from './1-chronicles-19';
import { CHRONICLES_1_20 } from './1-chronicles-20';
import { CHRONICLES_1_21 } from './1-chronicles-21';
import { CHRONICLES_1_22 } from './1-chronicles-22';
import { CHRONICLES_1_23 } from './1-chronicles-23';
import { CHRONICLES_1_24 } from './1-chronicles-24';
import { CHRONICLES_1_25 } from './1-chronicles-25';
import { CHRONICLES_1_26 } from './1-chronicles-26';
import { CHRONICLES_1_27 } from './1-chronicles-27';
import { CHRONICLES_1_28 } from './1-chronicles-28';
import { CHRONICLES_1_29 } from './1-chronicles-29';
import { CHRONICLES_2_1 } from './2-chronicles-1';
import { CHRONICLES_2_2 } from './2-chronicles-2';
import { CHRONICLES_2_3 } from './2-chronicles-3';
import { CHRONICLES_2_4 } from './2-chronicles-4';
import { CHRONICLES_2_5 } from './2-chronicles-5';
import { CHRONICLES_2_6 } from './2-chronicles-6';
import { CHRONICLES_2_7 } from './2-chronicles-7';
import { CHRONICLES_2_8 } from './2-chronicles-8';
import { CHRONICLES_2_9 } from './2-chronicles-9';
import { CHRONICLES_2_10 } from './2-chronicles-10';
import { CHRONICLES_2_11 } from './2-chronicles-11';
import { CHRONICLES_2_12 } from './2-chronicles-12';
import { CHRONICLES_2_13 } from './2-chronicles-13';
import { CHRONICLES_2_14 } from './2-chronicles-14';
import { CHRONICLES_2_15 } from './2-chronicles-15';
import { CHRONICLES_2_16 } from './2-chronicles-16';
import { CHRONICLES_2_17 } from './2-chronicles-17';
import { CHRONICLES_2_18 } from './2-chronicles-18';
import { CHRONICLES_2_19 } from './2-chronicles-19';
import { CHRONICLES_2_20 } from './2-chronicles-20';
import { CHRONICLES_2_21 } from './2-chronicles-21';
import { CHRONICLES_2_22 } from './2-chronicles-22';
import { CHRONICLES_2_23 } from './2-chronicles-23';
import { CHRONICLES_2_24 } from './2-chronicles-24';
import { CHRONICLES_2_25 } from './2-chronicles-25';
import { CHRONICLES_2_26 } from './2-chronicles-26';
import { CHRONICLES_2_27 } from './2-chronicles-27';
import { CHRONICLES_2_28 } from './2-chronicles-28';
import { CHRONICLES_2_29 } from './2-chronicles-29';
import { CHRONICLES_2_30 } from './2-chronicles-30';
import { CHRONICLES_2_31 } from './2-chronicles-31';
import { CHRONICLES_2_32 } from './2-chronicles-32';
import { CHRONICLES_2_33 } from './2-chronicles-33';
import { CHRONICLES_2_34 } from './2-chronicles-34';
import { CHRONICLES_2_35 } from './2-chronicles-35';
import { CHRONICLES_2_36 } from './2-chronicles-36';
import { EZRA_1 } from './ezra-1';
import { EZRA_2 } from './ezra-2';
import { EZRA_3 } from './ezra-3';
import { EZRA_4 } from './ezra-4';
import { EZRA_5 } from './ezra-5';
import { EZRA_6 } from './ezra-6';
import { EZRA_7 } from './ezra-7';
import { EZRA_8 } from './ezra-8';
import { EZRA_9 } from './ezra-9';
import { EZRA_10 } from './ezra-10';
import { NEHEMIAH_1 } from './nehemiah-1';
import { NEHEMIAH_2 } from './nehemiah-2';
import { NEHEMIAH_3 } from './nehemiah-3';
import { NEHEMIAH_4 } from './nehemiah-4';
import { NEHEMIAH_5 } from './nehemiah-5';
import { NEHEMIAH_6 } from './nehemiah-6';
import { NEHEMIAH_7 } from './nehemiah-7';
import { NEHEMIAH_8 } from './nehemiah-8';
import { NEHEMIAH_9 } from './nehemiah-9';
import { NEHEMIAH_10 } from './nehemiah-10';
import { NEHEMIAH_11 } from './nehemiah-11';
import { NEHEMIAH_12 } from './nehemiah-12';
import { NEHEMIAH_13 } from './nehemiah-13';
import { ESTHER_1 } from './esther-1';
import { ESTHER_2 } from './esther-2';
import { ESTHER_3 } from './esther-3';
import { ESTHER_4 } from './esther-4';
import { ESTHER_5 } from './esther-5';
import { ESTHER_6 } from './esther-6';
import { ESTHER_7 } from './esther-7';
import { ESTHER_8 } from './esther-8';
import { ESTHER_9 } from './esther-9';
import { ESTHER_10 } from './esther-10';
import { JOB_1 } from './job-1';
import { JOB_2 } from './job-2';
import { JOB_3 } from './job-3';
import { JOB_4 } from './job-4';
import { JOB_5 } from './job-5';
import { JOB_6 } from './job-6';
import { JOB_7 } from './job-7';
import { JOB_8 } from './job-8';
import { JOB_9 } from './job-9';
import { JOB_10 } from './job-10';
import { JOB_11 } from './job-11';
import { JOB_12 } from './job-12';
import { JOB_13 } from './job-13';
import { JOB_14 } from './job-14';
import { JOB_15 } from './job-15';
import { JOB_16 } from './job-16';
import { JOB_17 } from './job-17';
import { JOB_18 } from './job-18';
import { JOB_19 } from './job-19';
import { JOB_20 } from './job-20';
import { JOB_21 } from './job-21';
import { JOB_22 } from './job-22';
import { JOB_23 } from './job-23';
import { JOB_24 } from './job-24';
import { JOB_25 } from './job-25';
import { JOB_26 } from './job-26';
import { JOB_27 } from './job-27';
import { JOB_28 } from './job-28';
import { JOB_29 } from './job-29';
import { JOB_30 } from './job-30';
import { JOB_31 } from './job-31';
import { JOB_32 } from './job-32';
import { JOB_33 } from './job-33';
import { JOB_34 } from './job-34';
import { JOB_35 } from './job-35';
import { JOB_36 } from './job-36';
import { JOB_37 } from './job-37';
import { JOB_38 } from './job-38';
import { JOB_39 } from './job-39';
import { JOB_40 } from './job-40';
import { JOB_41 } from './job-41';
import { JOB_42 } from './job-42';
import { PSALMS_1 } from './psalms-1';
import { PSALMS_2 } from './psalms-2';
import { PSALMS_3 } from './psalms-3';
import { PSALMS_4 } from './psalms-4';
import { PSALMS_5 } from './psalms-5';
import { PSALMS_6 } from './psalms-6';
import { PSALMS_7 } from './psalms-7';
import { PSALMS_8 } from './psalms-8';
import { PSALMS_9 } from './psalms-9';
import { PSALMS_10 } from './psalms-10';
import { PSALMS_11 } from './psalms-11';
import { PSALMS_12 } from './psalms-12';
import { PSALMS_13 } from './psalms-13';
import { PSALMS_14 } from './psalms-14';
import { PSALMS_15 } from './psalms-15';
import { PSALMS_16 } from './psalms-16';
import { PSALMS_17 } from './psalms-17';
import { PSALMS_18 } from './psalms-18';
import { PSALMS_19 } from './psalms-19';
import { PSALMS_20 } from './psalms-20';
import { PSALMS_21 } from './psalms-21';
import { PSALMS_22 } from './psalms-22';
import { PSALMS_23 } from './psalms-23';
import { PSALMS_24 } from './psalms-24';
import { PSALMS_25 } from './psalms-25';
import { PSALMS_26 } from './psalms-26';
import { PSALMS_27 } from './psalms-27';
import { PSALMS_28 } from './psalms-28';
import { PSALMS_29 } from './psalms-29';
import { PSALMS_30 } from './psalms-30';
import { PSALMS_31 } from './psalms-31';
import { PSALMS_32 } from './psalms-32';
import { PSALMS_33 } from './psalms-33';
import { PSALMS_34 } from './psalms-34';
import { PSALMS_35 } from './psalms-35';
import { PSALMS_36 } from './psalms-36';
import { PSALMS_37 } from './psalms-37';
import { PSALMS_38 } from './psalms-38';
import { PSALMS_39 } from './psalms-39';
import { PSALMS_40 } from './psalms-40';
import { PSALMS_41 } from './psalms-41';
import { PSALMS_42 } from './psalms-42';
import { PSALMS_43 } from './psalms-43';
import { PSALMS_44 } from './psalms-44';
import { PSALMS_45 } from './psalms-45';
import { PSALMS_46 } from './psalms-46';
import { PSALMS_47 } from './psalms-47';
import { PSALMS_48 } from './psalms-48';
import { PSALMS_49 } from './psalms-49';
import { PSALMS_50 } from './psalms-50';

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
  '1-kings/17': KINGS_1_17,
  '1-kings/18': KINGS_1_18,
  '1-kings/19': KINGS_1_19,
  '1-kings/20': KINGS_1_20,
  '1-kings/21': KINGS_1_21,
  '1-kings/22': KINGS_1_22,
  '2-kings/1': KINGS_2_1,
  '2-kings/2': KINGS_2_2,
  '2-kings/3': KINGS_2_3,
  '2-kings/4': KINGS_2_4,
  '2-kings/5': KINGS_2_5,
  '2-kings/6': KINGS_2_6,
  '2-kings/7': KINGS_2_7,
  '2-kings/8': KINGS_2_8,
  '2-kings/9': KINGS_2_9,
  '2-kings/10': KINGS_2_10,
  '2-kings/11': KINGS_2_11,
  '2-kings/12': KINGS_2_12,
  '2-kings/13': KINGS_2_13,
  '2-kings/14': KINGS_2_14,
  '2-kings/15': KINGS_2_15,
  '2-kings/16': KINGS_2_16,
  '2-kings/17': KINGS_2_17,
  '2-kings/18': KINGS_2_18,
  '2-kings/19': KINGS_2_19,
  '2-kings/20': KINGS_2_20,
  '2-kings/21': KINGS_2_21,
  '2-kings/22': KINGS_2_22,
  '2-kings/23': KINGS_2_23,
  '2-kings/24': KINGS_2_24,
  '2-kings/25': KINGS_2_25,
  '1-chronicles/1': CHRONICLES_1_1,
  '1-chronicles/2': CHRONICLES_1_2,
  '1-chronicles/3': CHRONICLES_1_3,
  '1-chronicles/4': CHRONICLES_1_4,
  '1-chronicles/5': CHRONICLES_1_5,
  '1-chronicles/6': CHRONICLES_1_6,
  '1-chronicles/7': CHRONICLES_1_7,
  '1-chronicles/8': CHRONICLES_1_8,
  '1-chronicles/9': CHRONICLES_1_9,
  '1-chronicles/10': CHRONICLES_1_10,
  '1-chronicles/11': CHRONICLES_1_11,
  '1-chronicles/12': CHRONICLES_1_12,
  '1-chronicles/13': CHRONICLES_1_13,
  '1-chronicles/14': CHRONICLES_1_14,
  '1-chronicles/15': CHRONICLES_1_15,
  '1-chronicles/16': CHRONICLES_1_16,
  '1-chronicles/17': CHRONICLES_1_17,
  '1-chronicles/18': CHRONICLES_1_18,
  '1-chronicles/19': CHRONICLES_1_19,
  '1-chronicles/20': CHRONICLES_1_20,
  '1-chronicles/21': CHRONICLES_1_21,
  '1-chronicles/22': CHRONICLES_1_22,
  '1-chronicles/23': CHRONICLES_1_23,
  '1-chronicles/24': CHRONICLES_1_24,
  '1-chronicles/25': CHRONICLES_1_25,
  '1-chronicles/26': CHRONICLES_1_26,
  '1-chronicles/27': CHRONICLES_1_27,
  '1-chronicles/28': CHRONICLES_1_28,
  '1-chronicles/29': CHRONICLES_1_29,
  '2-chronicles/1': CHRONICLES_2_1,
  '2-chronicles/2': CHRONICLES_2_2,
  '2-chronicles/3': CHRONICLES_2_3,
  '2-chronicles/4': CHRONICLES_2_4,
  '2-chronicles/5': CHRONICLES_2_5,
  '2-chronicles/6': CHRONICLES_2_6,
  '2-chronicles/7': CHRONICLES_2_7,
  '2-chronicles/8': CHRONICLES_2_8,
  '2-chronicles/9': CHRONICLES_2_9,
  '2-chronicles/10': CHRONICLES_2_10,
  '2-chronicles/11': CHRONICLES_2_11,
  '2-chronicles/12': CHRONICLES_2_12,
  '2-chronicles/13': CHRONICLES_2_13,
  '2-chronicles/14': CHRONICLES_2_14,
  '2-chronicles/15': CHRONICLES_2_15,
  '2-chronicles/16': CHRONICLES_2_16,
  '2-chronicles/17': CHRONICLES_2_17,
  '2-chronicles/18': CHRONICLES_2_18,
  '2-chronicles/19': CHRONICLES_2_19,
  '2-chronicles/20': CHRONICLES_2_20,
  '2-chronicles/21': CHRONICLES_2_21,
  '2-chronicles/22': CHRONICLES_2_22,
  '2-chronicles/23': CHRONICLES_2_23,
  '2-chronicles/24': CHRONICLES_2_24,
  '2-chronicles/25': CHRONICLES_2_25,
  '2-chronicles/26': CHRONICLES_2_26,
  '2-chronicles/27': CHRONICLES_2_27,
  '2-chronicles/28': CHRONICLES_2_28,
  '2-chronicles/29': CHRONICLES_2_29,
  '2-chronicles/30': CHRONICLES_2_30,
  '2-chronicles/31': CHRONICLES_2_31,
  '2-chronicles/32': CHRONICLES_2_32,
  '2-chronicles/33': CHRONICLES_2_33,
  '2-chronicles/34': CHRONICLES_2_34,
  '2-chronicles/35': CHRONICLES_2_35,
  '2-chronicles/36': CHRONICLES_2_36,
  'ezra/1': EZRA_1,
  'ezra/2': EZRA_2,
  'ezra/3': EZRA_3,
  'ezra/4': EZRA_4,
  'ezra/5': EZRA_5,
  'ezra/6': EZRA_6,
  'ezra/7': EZRA_7,
  'ezra/8': EZRA_8,
  'ezra/9': EZRA_9,
  'ezra/10': EZRA_10,
  'nehemiah/1': NEHEMIAH_1,
  'nehemiah/2': NEHEMIAH_2,
  'nehemiah/3': NEHEMIAH_3,
  'nehemiah/4': NEHEMIAH_4,
  'nehemiah/5': NEHEMIAH_5,
  'nehemiah/6': NEHEMIAH_6,
  'nehemiah/7': NEHEMIAH_7,
  'nehemiah/8': NEHEMIAH_8,
  'nehemiah/9': NEHEMIAH_9,
  'nehemiah/10': NEHEMIAH_10,
  'nehemiah/11': NEHEMIAH_11,
  'nehemiah/12': NEHEMIAH_12,
  'nehemiah/13': NEHEMIAH_13,
  'esther/1': ESTHER_1,
  'esther/2': ESTHER_2,
  'esther/3': ESTHER_3,
  'esther/4': ESTHER_4,
  'esther/5': ESTHER_5,
  'esther/6': ESTHER_6,
  'esther/7': ESTHER_7,
  'esther/8': ESTHER_8,
  'esther/9': ESTHER_9,
  'esther/10': ESTHER_10,
  'job/1': JOB_1,
  'job/2': JOB_2,
  'job/3': JOB_3,
  'job/4': JOB_4,
  'job/5': JOB_5,
  'job/6': JOB_6,
  'job/7': JOB_7,
  'job/8': JOB_8,
  'job/9': JOB_9,
  'job/10': JOB_10,
  'job/11': JOB_11,
  'job/12': JOB_12,
  'job/13': JOB_13,
  'job/14': JOB_14,
  'job/15': JOB_15,
  'job/16': JOB_16,
  'job/17': JOB_17,
  'job/18': JOB_18,
  'job/19': JOB_19,
  'job/20': JOB_20,
  'job/21': JOB_21,
  'job/22': JOB_22,
  'job/23': JOB_23,
  'job/24': JOB_24,
  'job/25': JOB_25,
  'job/26': JOB_26,
  'job/27': JOB_27,
  'job/28': JOB_28,
  'job/29': JOB_29,
  'job/30': JOB_30,
  'job/31': JOB_31,
  'job/32': JOB_32,
  'job/33': JOB_33,
  'job/34': JOB_34,
  'job/35': JOB_35,
  'job/36': JOB_36,
  'job/37': JOB_37,
  'job/38': JOB_38,
  'job/39': JOB_39,
  'job/40': JOB_40,
  'job/41': JOB_41,
  'job/42': JOB_42,
  'psalms/1': PSALMS_1,
  'psalms/2': PSALMS_2,
  'psalms/3': PSALMS_3,
  'psalms/4': PSALMS_4,
  'psalms/5': PSALMS_5,
  'psalms/6': PSALMS_6,
  'psalms/7': PSALMS_7,
  'psalms/8': PSALMS_8,
  'psalms/9': PSALMS_9,
  'psalms/10': PSALMS_10,
  'psalms/11': PSALMS_11,
  'psalms/12': PSALMS_12,
  'psalms/13': PSALMS_13,
  'psalms/14': PSALMS_14,
  'psalms/15': PSALMS_15,
  'psalms/16': PSALMS_16,
  'psalms/17': PSALMS_17,
  'psalms/18': PSALMS_18,
  'psalms/19': PSALMS_19,
  'psalms/20': PSALMS_20,
  'psalms/21': PSALMS_21,
  'psalms/22': PSALMS_22,
  'psalms/23': PSALMS_23,
  'psalms/24': PSALMS_24,
  'psalms/25': PSALMS_25,
  'psalms/26': PSALMS_26,
  'psalms/27': PSALMS_27,
  'psalms/28': PSALMS_28,
  'psalms/29': PSALMS_29,
  'psalms/30': PSALMS_30,
  'psalms/31': PSALMS_31,
  'psalms/32': PSALMS_32,
  'psalms/33': PSALMS_33,
  'psalms/34': PSALMS_34,
  'psalms/35': PSALMS_35,
  'psalms/36': PSALMS_36,
  'psalms/37': PSALMS_37,
  'psalms/38': PSALMS_38,
  'psalms/39': PSALMS_39,
  'psalms/40': PSALMS_40,
  'psalms/41': PSALMS_41,
  'psalms/42': PSALMS_42,
  'psalms/43': PSALMS_43,
  'psalms/44': PSALMS_44,
  'psalms/45': PSALMS_45,
  'psalms/46': PSALMS_46,
  'psalms/47': PSALMS_47,
  'psalms/48': PSALMS_48,
  'psalms/49': PSALMS_49,
  'psalms/50': PSALMS_50,
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
