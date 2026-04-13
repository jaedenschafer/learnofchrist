'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type DenominationId =
  | 'none'
  | 'baptist'
  | 'catholic'
  | 'jehovahs-witnesses'
  | 'lds'
  | 'lutheran'
  | 'methodist'
  | 'non-denominational'
  | 'pentecostal'
  | 'presbyterian'
  | 'seventh-day-adventist';

export interface Denomination {
  id: DenominationId;
  label: string;
  shortLabel: string;
  description: string;
}

export const DENOMINATIONS: Denomination[] = [
  { id: 'none', label: 'No Lens', shortLabel: 'None', description: 'Standard study without a denominational perspective' },
  { id: 'baptist', label: 'Baptist', shortLabel: 'Baptist', description: 'Emphasizes salvation by grace through faith, believer\'s baptism, and biblical authority' },
  { id: 'catholic', label: 'Catholic', shortLabel: 'Catholic', description: 'Emphasizes Sacred Tradition, the Magisterium, sacraments, and apostolic succession' },
  { id: 'jehovahs-witnesses', label: 'Jehovah\'s Witnesses', shortLabel: 'JW', description: 'Emphasizes God\'s name Jehovah, His Kingdom, and restoration of paradise on earth' },
  { id: 'lds', label: 'Latter-day Saint (LDS)', shortLabel: 'LDS', description: 'Emphasizes the restored gospel, modern revelation, and the Book of Mormon as a companion to the Bible' },
  { id: 'lutheran', label: 'Lutheran', shortLabel: 'Lutheran', description: 'Emphasizes grace alone, faith alone, Scripture alone, and the theology of the cross' },
  { id: 'methodist', label: 'Methodist', shortLabel: 'Methodist', description: 'Emphasizes personal holiness, social justice, prevenient grace, and the Wesleyan Quadrilateral' },
  { id: 'non-denominational', label: 'Non-Denominational', shortLabel: 'Non-Denom', description: 'Focuses on core biblical teaching with an emphasis on a personal relationship with Christ' },
  { id: 'pentecostal', label: 'Pentecostal', shortLabel: 'Pentecostal', description: 'Emphasizes the baptism of the Holy Spirit, spiritual gifts, and experiential worship' },
  { id: 'presbyterian', label: 'Presbyterian', shortLabel: 'Presbyterian', description: 'Emphasizes God\'s sovereignty, covenant theology, and the Reformed confessions' },
  { id: 'seventh-day-adventist', label: 'Seventh-day Adventist', shortLabel: 'SDA', description: 'Emphasizes the seventh-day Sabbath, the Second Coming, and wholistic health' },
];

interface DenominationContextType {
  denomination: DenominationId;
  setDenomination: (d: DenominationId) => void;
  currentDenomination: Denomination;
}

const DenominationContext = createContext<DenominationContextType>({
  denomination: 'none',
  setDenomination: () => {},
  currentDenomination: DENOMINATIONS[0],
});

const STORAGE_KEY = 'loc-denomination';

export function DenominationProvider({ children }: { children: ReactNode }) {
  const [denomination, setDenominationState] = useState<DenominationId>('none');

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && DENOMINATIONS.some(d => d.id === saved)) {
      setDenominationState(saved as DenominationId);
    }
  }, []);

  const setDenomination = (newDenom: DenominationId) => {
    setDenominationState(newDenom);
    localStorage.setItem(STORAGE_KEY, newDenom);
  };

  const currentDenomination = DENOMINATIONS.find(d => d.id === denomination) || DENOMINATIONS[0];

  return (
    <DenominationContext.Provider value={{ denomination, setDenomination, currentDenomination }}>
      {children}
    </DenominationContext.Provider>
  );
}

export function useDenomination() {
  return useContext(DenominationContext);
}
