-- Add 'licensed' to art_license enum.
-- Used for the LDS Gospel Art Book plates: images licensed from
-- Intellectual Reserve, Inc. under a first-party license that permits
-- reuse but is neither public domain nor Creative Commons.
ALTER TYPE art_license ADD VALUE IF NOT EXISTS 'licensed';
