<!-- .vitepress/theme/components/NavCard.vue -->
<template>
  <a class="nav-card" :href="href" :target="linkTarget" rel="noopener noreferrer">
    <div v-if="iconUrl || icon" class="nav-card__icon">
      <img v-if="iconUrl" :src="iconUrl" :alt="title" width="48" height="48" />
      <img
        v-else-if="isImgIcon(icon)"
        :src="icon.src"
        :alt="icon.alt ?? title"
        :width="icon.width ?? 48"
        :height="icon.height ?? 48"
      />
      <component v-else-if="icon && typeof icon !== 'string'" :is="icon" />
      <span v-else-if="icon">{{ icon }}</span>
    </div>
    <div class="nav-card__content">
      <h3 class="nav-card__title">{{ title }}</h3>
      <p class="nav-card__desc">{{ details }}</p>
    </div>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Component } from 'vue'

type ImgIcon = {
  src: string
  alt?: string
  width?: number
  height?: number
}

type Icon = string | ImgIcon | Component

interface Props {
  title: string
  details: string
  href: string
  icon?: Icon
}

const props = defineProps<Props>()

const siteOrigin = 'https://z3-gh.github.io'
const isExternal = computed(() => {
  const url = new URL(props.href, siteOrigin)
  return (url.protocol === 'http:' || url.protocol === 'https:') && url.origin !== siteOrigin
})

const linkTarget = computed(() => (isExternal.value ? '_blank' : '_self'))

const iconUrl = computed(() => {
  if (!isExternal.value) return ''

  const domain = new URL(props.href, siteOrigin).hostname
  const params = new URLSearchParams({ domain, sz: '64' })
  return `https://favicon.run/favicon?${params}`
})

function isImgIcon(icon: Icon | undefined): icon is ImgIcon {
  return typeof icon === 'object' && icon !== null && 'src' in icon && typeof icon.src === 'string'
}
</script>

<style scoped>
.nav-card {
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 24px;
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  background: var(--vp-c-bg);
  transition: border-color 0.2s, background 0.2s;
  text-decoration: none;
}

.nav-card:hover {
  border-color: var(--vp-c-brand);
}

.nav-card__icon {
  flex: 0 0 48px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: var(--vp-c-brand);
}

.nav-card__icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 6px;
}

.nav-card__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-card__title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.nav-card__desc {
  margin: 0;
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

@media (max-width: 640px) {
  .nav-card {
    flex-direction: column;
    text-align: center;
  }
  .nav-card__icon {
    margin: 0 auto;
  }
}
</style>
