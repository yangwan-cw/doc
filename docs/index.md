---
layout: home
---

<div class="docs-hero">
  <div class="docs-hero-image">
    <div class="docs-image-container">
      <img src="./public/sheep.png" alt="技术文档中心" />
    </div>
  </div>
  <div class="docs-hero-text">
    <h1>技术学习文档</h1>
    <p>
      Html, CSS, JavaScript, 后端：Java, Python, Go 等各类技术栈文档
    </p>
    <p class="docs-sub-text">汇集前沿技术知识，助力开发者快速成长</p>
  </div>
  
  <div class="docs-hero-actions">
    <a href="/about" class="docs-btn docs-about-btn">关于我</a>
    <a href="/getting-started" class="docs-btn docs-learn-btn">开始学习</a>
  </div>
</div>

<style>
.docs-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
  text-align: center;
  margin-top: 3rem;
  border-radius: 16px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
}

.docs-hero-image {
  margin-bottom: 1.8rem;
}

.docs-image-container {
  width: 220px;
  height: 220px;
  border-radius: 16px;
  overflow: hidden;
  margin: 0 auto;
  transition: all 0.4s ease;
  position: relative;
  box-shadow: 0 12px 30px rgba(7, 193, 96, 0.15);
  border: 1px solid rgba(7, 193, 96, 0.08);
}

.docs-image-container:hover {
  transform: translateY(-8px) rotate(2deg);
  box-shadow: 0 18px 40px rgba(7, 193, 96, 0.22);
}

.docs-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.docs-image-container:hover img {
  transform: scale(1.05);
}

.docs-hero-text h1 {
  font-size: 2.6rem;
  margin-bottom: 1.2rem;
  color: #1a1a1a;
  font-weight: 750;
  background: linear-gradient(135deg, #07C160 0%, #08a85c 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  position: relative;
  display: inline-block;
}




.docs-hero-text p {
  font-size: 1.25rem;
  color: var(--vp-c-text-1);
  margin-bottom: 0.6rem;
  max-width: 650px;
  line-height: 1.6;
}

.docs-sub-text {
  font-size: 1.1rem;
  color: #666;
  margin-top: 1.2rem;
  letter-spacing: 0.5px;
}

.docs-hero-actions {
  display: flex;
  gap: 1.8rem;
  margin-top: 2.2rem;
  position: relative;
  z-index: 2;
}

.docs-btn {
  padding: 0.85rem 2rem;
  border-radius: 10px;
  font-weight: 650;
  font-size: 1.15rem;
  text-decoration: none;
  transition: all 0.35s ease;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: white;
  min-width: 160px;
  position: relative;
  overflow: hidden;
  color:white;
}

.docs-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.15);
  transform: translateX(-100%);
  transition: transform 0.4s ease;
  z-index: 1;
}

.docs-btn:hover::before {
  transform: translateX(0);
}

.docs-btn:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 10px 25px rgba(7, 193, 96, 0.4);
  color:white !important;
}

/* 统一设置两个按钮为微信绿色 */
.docs-about-btn, .docs-learn-btn {
  color: white !important; 
  background: #07C160;
  box-shadow: 0 6px 20px rgba(7, 193, 96, 0.3);
  z-index: 2;
}

.docs-btn:active {
  transform: translateY(1px);
}

.docs-btn:hover::after {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .docs-hero {
    padding: 2rem;
    margin-top: 2rem;
  }
  
  .docs-hero-actions {
    flex-direction: column;
    gap: 1.2rem;
    width: 100%;
    max-width: 280px;
  }
  
  .docs-image-container {
    width: 200px;
    height: 200px;
  }
  
  .docs-hero-text h1 {
    font-size: 2.2rem;
  }
  
  .docs-hero-text p {
    font-size: 1.15rem;
  }
  
  .docs-btn {
    width: 100%;
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .docs-hero {
    padding: 1.8rem 1.5rem;
  }
  
  .docs-image-container {
    width: 170px;
    height: 170px;
  }
  
  .docs-hero-text h1 {
    font-size: 1.9rem;
  }
  
  .docs-sub-text {
    font-size: 1rem;
  }
}
</style>