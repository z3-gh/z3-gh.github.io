<script setup>
import { computed, ref, onUnmounted } from 'vue'

const props = defineProps({
  /** 要复制的文本；留空时自动复制插槽（默认内容）中的文本 */
  text: { type: String, default: '' },
  tip: { type: String, default: '复制' },
  copiedTip: { type: String, default: '已复制 ✓' },
  failedTip: { type: String, default: '复制失败' },
  /** 状态提示持续时间（ms） */
  duration: { type: Number, default: 1800 }
})

const contentRef = ref(null)
const copied = ref(false)
const failed = ref(false)
let timer = null

/** 降级方案：http 环境 / 老浏览器下 navigator.clipboard 不可用 */
function legacyCopy(text) {
  const ta = document.createElement('textarea')
  ta.value = text
  ta.setAttribute('readonly', '')
  ta.style.cssText = 'position:fixed;top:-9999px;opacity:0'
  document.body.appendChild(ta)

  const selection = document.getSelection()
  const previousRange =
    selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null

  ta.select()
  ta.setSelectionRange(0, ta.value.length)

  let ok = false
  try {
    ok = document.execCommand('copy')
  } catch {
    ok = false
  }

  document.body.removeChild(ta)

  // 还原用户原有选区，避免复制后页面选中内容被清空
  if (selection) {
    selection.removeAllRanges()
    if (previousRange) selection.addRange(previousRange)
  }

  return ok
}

async function writeText(text) {
  try {
    // navigator.clipboard 仅在 https / localhost 下可用
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
      return true
    }
  } catch {
    // 权限被拒或无剪贴板 API，走降级方案
  }
  return legacyCopy(text)
}

async function copy() {
  const value = props.text || contentRef.value?.textContent?.trim() || ''
  if (!value) return

  const ok = await writeText(value)
  copied.value = ok
  failed.value = !ok

  clearTimeout(timer)
  timer = setTimeout(() => {
    copied.value = false
    failed.value = false
  }, props.duration)
}

const tipText = computed(() => {
  if (copied.value) return props.copiedTip
  if (failed.value) return props.failedTip
  return props.tip
})

const ariaLabel = computed(() => `复制：${props.text || contentRef.value?.textContent?.trim() || ''}`)

onUnmounted(() => clearTimeout(timer))
</script>

<template>
  <span
    class="copy-text"
    :class="{ 'is-copied': copied, 'is-failed': failed }"
    role="button"
    tabindex="0"
    :title="copied ? copiedTip : '点击复制'"
    :aria-label="ariaLabel"
    @click="copy"
    @keydown.enter.prevent="copy"
    @keydown.space.prevent="copy"
  >
    <span ref="contentRef" class="copy-text__content"><slot>{{ text }}</slot></span>
    <span class="copy-text__tip">{{ tipText }}</span>
  </span>
</template>

<style scoped>
.copy-text {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 2px 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
  font-size: 0.9em;
  cursor: pointer;
  user-select: none;
  transition: border-color 0.2s, color 0.2s;
}
.copy-text:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
.copy-text:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}
.copy-text__tip {
  font-size: 12px;
  opacity: 0.55;
  white-space: nowrap;
}
.copy-text.is-copied {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
.copy-text.is-copied .copy-text__tip {
  opacity: 1;
}
.copy-text.is-failed {
  border-color: var(--vp-c-danger-1, #f43f5e);
  color: var(--vp-c-danger-1, #f43f5e);
}
.copy-text.is-failed .copy-text__tip {
  opacity: 1;
}
</style>
