export default {
  setup() {
    const currentYear = new Date().getFullYear();
    const yearDifference = computed(() => currentYear - 2008);

    return { yearDifference };
  },
};