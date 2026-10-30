---
layout: home

hero:
  name: 工具教程
  text: 
  tagline: 实用工具，优质教程

  actions:
    - theme: alt
      text: 工具教程
    - theme: brand
      text: 资源导航
      link: /resources/
    - theme: brand
      text: 返回首页
      link: /
---

<div class="nav-container">
  <NavCard icon="🚀" title="加速访问Github" details="解决GitHub打不开、下载慢问题" href="./visit-github" />
  <NavCard icon="📤" title="传文件" details="快速、跨平台分享文件" href="./send-files" />
  <NavCard icon="📖" title="阅读" details="看小说、看漫画、看出版书" href="./reading" />
  <NavCard icon="🎬" title="影视" details="看视频" href="./video" />
  <NavCard icon="🎵" title="音乐" details="听音乐" href="./music" />
  <NavCard icon="🎮" title="游戏" details="玩游戏" href="./game" />
</div>

<style>
.nav-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  margin-top: 48px;
}
</style>
