<!-- .vitepress/theme/components/NavCard.vue -->
<template>
  <a
    v-if="href"
    class="nav-card"
    :href="href"
    :target="target"
    rel="noopener noreferrer"
  >
    <div class="nav-card__icon">
      <!-- 图片图标 -->
      <img
        v-if="isImgIcon"
        :src="icon.src"
        :alt="icon.alt"
        :width="icon.width ?? 48"
        :height="icon.height ?? 48"
      />
      <!-- SVG组件 -->
      <component v-else-if="isSvgIcon" :is="icon" />
      <!-- Emoji -->
      <span v-else>{{ icon }}</span>
    </div>
    <div class="nav-card__content">
      <h3 class="nav-card__title">{{ title }}</h3>
      <p class="nav-card__desc">{{ details }}</p>
    </div>
  </a>

  <div v-else class="nav-card">
    <div class="nav-card__icon">
      <img
        v-if="isImgIcon"
        :src="icon.src"
        :alt="icon.alt"
        :width="icon.width ?? 48"
        :height="icon.height ?? 48"
      />
      <component v-else-if="isSvgIcon" :is="icon" />
      <span v-else>{{ icon }}</span>
    </div>
    <div class="nav-card__content">
      <h3 class="nav-card__title">{{ title }}</h3>
      <p class="nav-card__desc">{{ details }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type ImgIcon = {
  src: string
  alt?: string
  width?: number
  height?: number
}

interface Props {
  icon: string | ImgIcon | any
  title: string
  details: string
  href?: string
  target?: '_self' | '_blank'
}

const props = withDefaults(defineProps<Props>(), {
  target: '_self'
})

const isImgIcon = computed(() => {
  return typeof props.icon === 'object' && props.icon !== null && 'src' in props.icon
})
const isSvgIcon = computed(() => {
  return typeof props.icon !== 'string' && !isImgIcon.value
})
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
