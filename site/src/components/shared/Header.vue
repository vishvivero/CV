<template>
  <header class="hstack justify-between pl-4 pr-1">
    <nuxt-link class="hstack gap-x-2" :to="$nuxt.$localePath('/')">
      <SharedLogo text-base />
      <div text-lg><SharedBrandName /></div>
    </nuxt-link>

    <div class="hstack">
      <UiButton
        :as="NuxtLink"
        :to="$nuxt.$localePath('/dashboard')"
        variant="ghost-secondary"
        size="xs"
        class="h-8 gap-x-1"
        :aria-label="$t('dashboard.my_resumes')"
      >
        <span class="i-ep:menu text-lg" />
        <span class="hide-on-mobile text-base">
          {{ $t("dashboard.my_resumes") }}
        </span>
      </UiButton>

      <slot name="tail" />

      <SharedToggleDark />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { NuxtLink } from "#components";
</script>
