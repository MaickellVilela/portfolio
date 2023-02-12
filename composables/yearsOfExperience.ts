export default function () {
  const UXDesignStartingYear = 2008;
  const FrontendDevStartingYear = 2015;
  const currentYear = new Date().getFullYear();

  const UXDesignExperience = computed(() => currentYear - UXDesignStartingYear);
  const FrontendDevExperience = computed(
    () => currentYear - FrontendDevStartingYear
  );

  return { UXDesignExperience, FrontendDevExperience };
}
