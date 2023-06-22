<template>
  <footer class="footer"></footer>
</template>

<script>
export default {
  name: 'FooterMain',
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  background: #ece9e9;
  padding: 2.375rem 0;
  &__main {
    display: flex;
    align-items: center;
    gap: 0 127px;
    @media (max-width: 1263px) {
      gap: 2rem;
    }
    @media (max-width: 767px) {
      flex-direction: column;
    }
  }
  &__nav {
    display: flex;
    flex: 1 0;
    gap: 0 48px;
    margin: 0px 0px 0px 6rem;
    font-size: 0.875rem;
    @media (max-width: 1263px) {
      flex-wrap: wrap;
      gap: 1rem 1rem;
      margin: 0px 0px 0px 2rem;
    }
  }
  &__nav-block {
    display: flex;
    flex-wrap: wrap;
    align-items: end;
    gap: 10px 48px;
    white-space: nowrap;
    @media (max-width: 1263px) {
      flex-direction: column;
      justify-content: end;
      align-items: flex-start;
      gap: 1rem 2rem;
      margin: 0px 0px 0px 36px;
    }
    @media (max-width: 958px) {
      margin: 0;
    }
  }
  &__contacts {
    @media (max-width: 958px) {
      display: flex;
      flex-direction: column;
      gap: 1rem 0;
    }
  }
  &__tel {
    position: relative;
    padding-left: 1.57em;
    font-size: 0.875rem;
    &::before {
      position: absolute;
      bottom: 0px;
      left: 0px;
      background: url('@/assets/ico-svg/telephone.svg') no-repeat center / cover;
      width: 14px;
      height: 14px;
      content: '';
    }
  }
  &__address {
    position: relative;
    margin-left: 5.35em;
    padding-left: 1.43em;
    font-size: 0.875rem;
    @media (max-width: 1263px) {
      margin-left: 3em;
    }
    @media (max-width: 958px) {
      margin-left: 0;
    }
    &::before {
      position: absolute;
      bottom: 2px;
      left: 0px;
      background: url('@/assets/ico-svg/location.svg') no-repeat center / cover;
      width: 10px;
      height: 14px;
      content: '';
    }
  }
}
</style>
