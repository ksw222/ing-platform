"use client";

import { createContext, useContext, useMemo, useState } from "react";
import {
  defaultLandingCriteria,
  landingCriteria,
} from "../data/landing-criteria";
import {
  getMatchedProducts,
  landingProducts,
  type LandingCriterionId,
  type LandingProductMatch,
} from "../data/landing-products";

type LandingCriteriaContextValue = {
  filteredProducts: LandingProductMatch[];
  selectedCriteria: LandingCriterionId[];
  toggleCriterion: (criterion: LandingCriterionId) => void;
};

const LandingCriteriaContext =
  createContext<LandingCriteriaContextValue | null>(null);

export function LandingCriteriaProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedCriteria, setSelectedCriteria] =
    useState<LandingCriterionId[]>(defaultLandingCriteria);

  const filteredProducts = useMemo(
    () => getMatchedProducts(landingProducts, selectedCriteria),
    [selectedCriteria],
  );

  function toggleCriterion(criterion: LandingCriterionId) {
    setSelectedCriteria((currentCriteria) =>
      currentCriteria.includes(criterion)
        ? currentCriteria.filter((item) => item !== criterion)
        : [...currentCriteria, criterion],
    );
  }

  const value = useMemo(
    () => ({
      filteredProducts,
      selectedCriteria,
      toggleCriterion,
    }),
    [filteredProducts, selectedCriteria],
  );

  return (
    <LandingCriteriaContext.Provider value={value}>
      {children}
    </LandingCriteriaContext.Provider>
  );
}

export function useLandingCriteria() {
  const context = useContext(LandingCriteriaContext);

  if (!context) {
    throw new Error(
      "useLandingCriteria must be used inside LandingCriteriaProvider.",
    );
  }

  return context;
}

export function useSelectedLandingCriteria() {
  const { selectedCriteria } = useLandingCriteria();

  return landingCriteria.filter((criterion) =>
    selectedCriteria.includes(criterion.id),
  );
}
