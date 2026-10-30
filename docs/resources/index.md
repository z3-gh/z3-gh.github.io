---
layout: home

hero:
  name: 资源导航
  text: 
  tagline: 在线资源中心

  actions:
    - theme: brand
      text: 工具教程
      link: /tools/
    - theme: alt
      text: 资源导航
    - theme: brand
      text: 返回首页
      link: /

---

<div class="nav-container">
  <NavCard
    :icon="{ src: 'https://favicon.run/favicon?domain=123apps.com&sz=64', alt: '123apps', width: 48, height: 48 }"
    title="123apps"
    details="视频、音频、PDF 和文件转换在线工具"
    href="https://123apps.com/cn/"
    target="_blank"
  />
  <NavCard
    :icon="{ src: 'https://favicon.run/favicon?domain=freenav.net&sz=64', alt: 'freenav', width: 48, height: 48 }"
    title="FreeNav"
    details="开源软件"
    href="https://freenav.net/"
    target="_blank"
  />
  <NavCard
    :icon="{ src: 'https://favicon.run/favicon?domain=tboxn.com&sz=64', alt: 'tbox', width: 48, height: 48 }"
    title="TBox"
    details="工具导航"
    href="https://www.tboxn.com/"
    target="_blank"
  />
  <NavCard
    :icon="{ src: 'https://favicon.run/favicon?domain=mfsc.cc&sz=64', alt: '免费素材', width: 48, height: 48 }"
    title="CC免费素材"
    details="设计素材"
    href="https://www.mfsc.cc/"
    target="_blank"
  />
  <NavCard
    :icon="{ src: 'https://favicon.run/favicon?domain=jcpoo.cn&sz=64', alt: 'ModZoo', width: 48, height: 48 }"
    title="ModZoo"
    details="修改版资源"
    href="https://www.jcpoo.cn/"
    target="_blank"
  />
  <NavCard
    :icon="{ src: 'https://favicon.run/favicon?domain=yinghezhinan.com&sz=64', alt: '硬核指南', width: 48, height: 48 }"
    title="硬核指南"
    details="休闲娱乐"
    href="https://yinghezhinan.com/"
    target="_blank"
  />
  <NavCard
    :icon="{ src: 'https://favicon.run/favicon?domain=plnav.com&sz=64', alt: '迷鹿导航', width: 48, height: 48 }"
    title="迷鹿导航"
    details="综合导航"
    href="https://www.plnav.com/"
    target="_blank"
  />
  <NavCard
    :icon="{ src: 'https://favicon.run/favicon?domain=baozangdh.com&sz=64', alt: '宝藏导航', width: 48, height: 48 }"
    title="宝藏导航"
    details="综合导航"
    href="https://baozangdh.com/"
    target="_blank"
  />
  <NavCard
    :icon="{ src: 'https://favicon.run/favicon?domain=kulayu.com&sz=64', alt: '酷拉鱼导航', width: 48, height: 48 }"
    title="酷拉鱼导航"
    details="综合导航"
    href="https://www.kulayu.com/"
    target="_blank"
  />
</div>

<style>
.nav-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  margin-top: 48px;
}
</style>
