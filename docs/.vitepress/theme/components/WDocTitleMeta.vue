<template>
  <div class="weiz-title-meta">
    <div class="tags">
      <div class="created meta-item" title="发表于">
        <font-awesome-icon icon="calendar-alt" class="text-blue" />
        <span>发表于 {{ firstCommit }}</span>
      </div>
      <div class="updated meta-item" title="更新于">
        <font-awesome-icon icon="sync-alt" class="gray text-green" />
        <span>更新于 {{ lastUpdated }}</span>
      </div>
      <div class="word meta-item" title="字数">
        <font-awesome-icon icon="file-lines" class="gray text-gray" />
        <span>字数 {{ wordCount }}</span>
      </div>
      <div class="reader meta-item" title="阅读量">
        <font-awesome-icon icon="eye" class="gray text-gray" />
        <span
          >阅读量 {{ pv
          }}<span id="busuanzi_value_page_pv" style="display: none"
        /></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData } from "vitepress";
import { ref, onMounted } from "vue";
import { countWord, countTransK, formatDate } from "../utils/tools";

const { frontmatter, page } = useData();
const wordCount = ref("");
const firstCommit = ref("");
const lastUpdated = ref("");
const pv = ref("");

console.log("useData {}", useData());

let timeoutPV = 0;
const getPV = () => {
  if (timeoutPV) clearTimeout(timeoutPV);
  timeoutPV = window.setTimeout(() => {
    const $PV = document.querySelector("#busuanzi_value_page_pv");
    const text = $PV?.innerHTML;
    if ($PV && text) {
      pv.value = countTransK(parseInt(text));
    } else {
      getPV();
    }
  }, 500);
};

onMounted(() => {
  const dateOption = formatDate();
  lastUpdated.value = dateOption
    .format(new Date(frontmatter.value.lastUpdated || page.value.lastUpdated!))
    .replace(/\//g, "-");

  firstCommit.value = dateOption
    .format(new Date(frontmatter.value.firstCommit!))
    .replace(/\//g, "-");

  const docDomContainer = window.document.querySelector("#VPContent");
  const words =
    docDomContainer?.querySelector(".content-container .main")?.textContent ||
    "";
  wordCount.value = countTransK(countWord(words));

  getPV();
});
</script>

<style lang="scss" scoped>
.weiz-title-meta {
  .tags {
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 32px;
    color: var(--vp-c-text-2);
    font-weight: 500;
    line-height: 18px;
    word-break: keep-all;
    > div {
      display: flex;
      align-items: center;
      margin-top: 16px;
      margin-right: 6px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .weiz-icon {
    margin-right: 2px;
  }
}
.meta-item {
  display: flex;
  align-items: center;
  gap: 4px; /* 图标与文字间隔 */
}

/* 彩色图标类 */
.text-blue {
  color: #1e90ff;
}
.text-green {
  color: #28a745;
}
.text-purple {
  color: #6f42c1;
}
.text-orange {
  color: #ff9800;
}

 
</style>
