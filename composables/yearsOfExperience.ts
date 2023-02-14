export default function () {
  const UXDesignStartingYear = 2008;
  const FrontendDevStartingYear = 2015;
  const FigmaStartingYear = 2016;
  const currentYear = new Date().getFullYear();

  const UXDesignExperience = computed(() => currentYear - UXDesignStartingYear);
  const FrontendDevExperience = computed(
    () => currentYear - FrontendDevStartingYear
  );
  const FigmaExperience = computed(() => currentYear - FigmaStartingYear);

  return { UXDesignExperience, FrontendDevExperience, FigmaExperience };
}
