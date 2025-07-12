// 十二时辰数据
const zodiac = [
  { 
    name: "子", 
    range: [23, 1], 
    description: "夜半时分，万物潜藏",
    meridian: "足少阴肾经",
    health: "宜安睡，养肝血，避免熬夜",
    activities: ["睡眠", "静养", "冥想"],
    avoid: ["剧烈运动", "饮酒", "过度思考"],
    color: "#1e40af"
  },
  { 
    name: "丑", 
    range: [1, 3], 
    description: "鸡鸣时分，阳气初生",
    meridian: "足厥阴肝经",
    health: "深度睡眠，养肝护目",
    activities: ["深度睡眠", "护眼"],
    avoid: ["熬夜", "用眼过度", "情绪激动"],
    color: "#1e3a8a"
  },
  { 
    name: "寅", 
    range: [3, 5], 
    description: "平旦时分，阳气渐升",
    meridian: "手太阴肺经",
    health: "宜早起，呼吸新鲜空气",
    activities: ["早起", "深呼吸", "轻微运动"],
    avoid: ["贪睡", "剧烈运动", "过度劳累"],
    color: "#1d4ed8"
  },
  { 
    name: "卯", 
    range: [5, 7], 
    description: "日出时分，万物苏醒",
    meridian: "手阳明大肠经",
    health: "排便排毒，补充水分",
    activities: ["排便", "喝水", "晨练"],
    avoid: ["憋便", "过度饮水", "剧烈运动"],
    color: "#2563eb"
  },
  { 
    name: "辰", 
    range: [7, 9], 
    description: "食时时分，阳气旺盛",
    meridian: "足阳明胃经",
    health: "早餐时间，营养补充",
    activities: ["吃早餐", "工作学习", "适度运动"],
    avoid: ["空腹", "过度劳累", "情绪激动"],
    color: "#3b82f6"
  },
  { 
    name: "巳", 
    range: [9, 11], 
    description: "隅中时分，阳气最盛",
    meridian: "足太阴脾经",
    health: "工作效率最高，适合重要事务",
    activities: ["重要工作", "学习", "决策"],
    avoid: ["过度疲劳", "情绪波动", "剧烈运动"],
    color: "#60a5fa"
  },
  { 
    name: "午", 
    range: [11, 13], 
    description: "日中时分，阳气极盛",
    meridian: "手少阴心经",
    health: "午餐时间，适当休息",
    activities: ["午餐", "小憩", "放松"],
    avoid: ["过度劳累", "情绪激动", "剧烈运动"],
    color: "#fbbf24"
  },
  { 
    name: "未", 
    range: [13, 15], 
    description: "日昳时分，阳气渐衰",
    meridian: "手太阳小肠经",
    health: "消化吸收，适度活动",
    activities: ["适度活动", "消化", "学习"],
    avoid: ["剧烈运动", "过度劳累", "情绪激动"],
    color: "#f59e0b"
  },
  { 
    name: "申", 
    range: [15, 17], 
    description: "晡时时分，阳气下降",
    meridian: "足太阳膀胱经",
    health: "排毒利尿，适度运动",
    activities: ["运动", "排毒", "学习"],
    avoid: ["过度劳累", "情绪激动", "剧烈运动"],
    color: "#d97706"
  },
  { 
    name: "酉", 
    range: [17, 19], 
    description: "日入时分，阳气收敛",
    meridian: "足少阴肾经",
    health: "收心养神，准备休息",
    activities: ["收心", "养神", "准备休息"],
    avoid: ["剧烈运动", "情绪激动", "过度劳累"],
    color: "#b45309"
  },
  { 
    name: "戌", 
    range: [19, 21], 
    description: "黄昏时分，阳气潜藏",
    meridian: "手厥阴心包经",
    health: "晚餐时间，放松心情",
    activities: ["晚餐", "放松", "家庭时间"],
    avoid: ["过度饮食", "剧烈运动", "情绪激动"],
    color: "#92400e"
  },
  { 
    name: "亥", 
    range: [21, 23], 
    description: "人定时分，万物归藏",
    meridian: "手少阳三焦经",
    health: "准备睡眠，放松身心",
    activities: ["准备睡眠", "放松", "冥想"],
    avoid: ["剧烈运动", "情绪激动", "过度思考"],
    color: "#78350f"
  }
];

// 子午流注数据
const meridianData = [
  { time: "子时 (23-1点)", meridian: "足少阴肾经", function: "藏精纳气，主水液代谢", color: "#1e40af" },
  { time: "丑时 (1-3点)", meridian: "足厥阴肝经", function: "藏血疏泄，主情志调节", color: "#1e3a8a" },
  { time: "寅时 (3-5点)", meridian: "手太阴肺经", function: "主气司呼吸，宣发肃降", color: "#1d4ed8" },
  { time: "卯时 (5-7点)", meridian: "手阳明大肠经", function: "传导糟粕，主津液", color: "#2563eb" },
  { time: "辰时 (7-9点)", meridian: "足阳明胃经", function: "受纳腐熟，主降浊", color: "#3b82f6" },
  { time: "巳时 (9-11点)", meridian: "足太阴脾经", function: "运化水谷，主升清", color: "#60a5fa" },
  { time: "午时 (11-13点)", meridian: "手少阴心经", function: "主血脉，藏神明", color: "#fbbf24" },
  { time: "未时 (13-15点)", meridian: "手太阳小肠经", function: "受盛转化，泌别清浊", color: "#f59e0b" },
  { time: "申时 (15-17点)", meridian: "足太阳膀胱经", function: "贮存水液，主一身之表", color: "#d97706" },
  { time: "酉时 (17-19点)", meridian: "足少阴肾经", function: "藏精纳气，主水液代谢", color: "#b45309" },
  { time: "戌时 (19-21点)", meridian: "手厥阴心包经", function: "保护心脏，代心受邪", color: "#92400e" },
  { time: "亥时 (21-23点)", meridian: "手少阳三焦经", function: "通调水道，主气化", color: "#78350f" }
];

// 养生指南数据
const healthTips = {
  spring: {
    title: "春季养生",
    description: "顺应春生之气，早睡早起，多食绿色蔬菜，适当运动",
    tips: ["早睡早起", "多食绿色蔬菜", "适当运动", "保持心情愉悦"]
  },
  summer: {
    title: "夏季养生",
    description: "顺应夏长之气，晚睡早起，清淡饮食，避免过度劳累",
    tips: ["晚睡早起", "清淡饮食", "避免过度劳累", "多喝水"]
  },
  autumn: {
    title: "秋季养生",
    description: "顺应秋收之气，早睡早起，润燥养肺，适当进补",
    tips: ["早睡早起", "润燥养肺", "适当进补", "注意保暖"]
  },
  winter: {
    title: "冬季养生",
    description: "顺应冬藏之气，早睡晚起，温补养肾，注意保暖",
    tips: ["早睡晚起", "温补养肾", "注意保暖", "适度运动"]
  }
};

// 获取当前时辰
function getCurrentPeriod(hour) {
  for (let i = 0; i < zodiac.length; i++) {
    const { name, range } = zodiac[i];
    if (
      (range[0] <= hour && hour < range[1]) ||
      (range[0] > range[1] && (hour >= range[0] || hour < range[1]))
    ) {
      return { index: i, name, start: range[0], end: range[1] };
    }
  }
  return { index: -1, name: "--", start: 0, end: 0 };
}

// 渲染时钟表盘
function renderClockFace() {
  const container = document.getElementById("clock-face");
  if (!container) return;
  
  // Clear existing content
  container.innerHTML = '';
  
  // Get container dimensions for responsive sizing
  const containerRect = container.getBoundingClientRect();
  const containerSize = Math.min(containerRect.width, containerRect.height) || 400;
  const centerX = containerSize / 2;
  const centerY = containerSize / 2;
  const radius = (containerSize / 2) * 0.75; // 75% of container radius

  for (let i = 0; i < 12; i++) {
    const angleDeg = i * 30 - 90;
    const angleRad = (angleDeg * Math.PI) / 180;
    const x = centerX + radius * Math.cos(angleRad);
    const y = centerY + radius * Math.sin(angleRad);

    const hourLabel = document.createElement("div");
    hourLabel.className = "hour-label";
    hourLabel.style.left = `${x}px`;
    hourLabel.style.top = `${y}px`;
    hourLabel.innerHTML = `
      <div class="zodiac-label">${zodiac[i].name}</div>
      <div class="time-range">${zodiac[i].range[0]}-${zodiac[i].range[1]}</div>
    `;
    
    container.appendChild(hourLabel);
  }
}

// 更新时钟显示
function updateClock() {
  const now = new Date();
  const hour = now.getHours();
  const period = getCurrentPeriod(hour);
  
  const currentPeriodElement = document.getElementById("current-period");
  if (currentPeriodElement) {
    currentPeriodElement.innerText = period.name + "时";
  }

  // Remove active class from all hour labels
  const hourLabels = document.querySelectorAll(".hour-label");
  hourLabels.forEach((label, idx) => {
    label.classList.remove("active-hour", "pulse-hour");
    if (idx === period.index) {
      label.classList.add("active-hour", "pulse-hour");
    }
  });
}

// 渲染十二时辰网格
function renderZodiacGrid() {
  const container = document.getElementById("zodiac-grid");
  if (!container) return;
  
  container.innerHTML = '';
  zodiac.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "zodiac-card bg-white p-6 rounded-lg shadow-md";
    card.style.borderLeft = `4px solid ${item.color}`;
    card.innerHTML = `
      <div class="text-center mb-4">
        <div class="text-3xl font-bold text-indigo-600 mb-2">${item.name}时</div>
        <div class="text-lg text-gray-600">${item.range[0]}:00 - ${item.range[1]}:00</div>
      </div>
      <div class="space-y-3">
        <p class="text-gray-700"><strong>描述：</strong>${item.description}</p>
        <p class="text-gray-700"><strong>经脉：</strong>${item.meridian}</p>
        <p class="text-gray-700"><strong>养生：</strong>${item.health}</p>
        <div class="text-gray-700">
          <strong>宜做：</strong>
          <div class="flex flex-wrap gap-1 mt-1">
            ${item.activities.map(activity => `<span class="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">${activity}</span>`).join('')}
          </div>
        </div>
        <div class="text-gray-700">
          <strong>避免：</strong>
          <div class="flex flex-wrap gap-1 mt-1">
            ${item.avoid.map(avoid => `<span class="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">${avoid}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// 渲染子午流注表格
function renderMeridianTable() {
  const container = document.getElementById("meridian-table");
  if (!container) return;
  
  container.innerHTML = '';
  meridianData.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${item.time}</td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.meridian}</td>
      <td class="px-6 py-4 text-sm text-gray-500">${item.function}</td>
    `;
    container.appendChild(row);
  });
}

// 显示指定内容区域
function showSection(sectionId) {
  // 隐藏所有内容区域
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.remove('active');
  });
  
  // 显示选中的内容区域
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
  }
  
  // 更新导航按钮状态
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  
      // 找到对应的导航按钮并激活
    const navButtons = document.querySelectorAll('.nav-link');
    const sectionMap = {
      'home': 0,
      'zodiac': 1,
      'meridian': 2,
      'countdown': 3,
      'health': 4,
      'about': 5
    };
  
  if (sectionMap[sectionId] !== undefined && navButtons[sectionMap[sectionId]]) {
    navButtons[sectionMap[sectionId]].classList.add('active');
  }
  
  // 隐藏移动端菜单
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.classList.add('hidden');
  }
  
  // 滚动到顶部
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 切换移动端菜单
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// 添加平滑滚动效果
function addSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// 添加键盘导航支持
function addKeyboardNavigation() {
  document.addEventListener('keydown', function(e) {
    // ESC键关闭移动端菜单
    if (e.key === 'Escape') {
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
    }
  });
}

// 添加页面可见性API支持
function addVisibilityAPI() {
  let hidden, visibilityChange;
  if (typeof document.hidden !== "undefined") {
    hidden = "hidden";
    visibilityChange = "visibilitychange";
  } else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
  } else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
  }

  function handleVisibilityChange() {
    if (document[hidden]) {
      // 页面隐藏时暂停动画
      document.body.classList.add('page-hidden');
    } else {
      // 页面显示时恢复动画
      document.body.classList.remove('page-hidden');
    }
  }

  if (typeof document.addEventListener !== "undefined" && typeof hidden !== "undefined") {
    document.addEventListener(visibilityChange, handleVisibilityChange, false);
  }
}

// 初始化应用
function initApp() {
  // 渲染所有组件
  renderClockFace();
  updateClock();
  renderZodiacGrid();
  renderMeridianTable();
  
  // 初始化倒计时功能
  initCountdownForm();
  loadSavedCountdowns();
  
  // 设置定时器
  setInterval(updateClock, 1000);
  
  // 添加事件监听器
  addSmoothScrolling();
  addKeyboardNavigation();
  addVisibilityAPI();
  
  // 添加窗口大小变化监听
  window.addEventListener('resize', () => {
    renderClockFace();
  });
  
  // 添加页面加载动画
  document.body.classList.add('loaded');
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// 倒计时功能
let countdownInterval = null;
let currentCountdown = null;

// 首页倒计时功能
let homeCountdownInterval = null;
let homeCountdownData = {
  totalSeconds: 0,
  remainingSeconds: 0,
  isRunning: false,
  isPaused: false,
  startTime: null,
  pauseTime: null
};

// 倒计时数据
const countdownData = {
  title: '',
  targetDate: null,
  theme: 'default',
  message: '',
  isActive: false
};

// 主题配置
const themes = {
  default: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    textColor: 'white',
    boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)'
  },
  dark: {
    background: '#1f2937',
    textColor: 'white',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
  },
  minimal: {
    background: 'white',
    textColor: '#1f2937',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
  },
  colorful: {
    background: 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 50%, #45b7d1 100%)',
    textColor: 'white',
    boxShadow: '0 10px 25px rgba(255, 107, 107, 0.3)'
  },
  elegant: {
    background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
    textColor: 'white',
    boxShadow: '0 10px 25px rgba(44, 62, 80, 0.3)'
  }
};

// 初始化倒计时表单
function initCountdownForm() {
  const form = document.getElementById('countdown-form');
  if (form) {
    form.addEventListener('submit', handleCountdownSubmit);
  }
  
  // 设置默认日期为明天
  const dateInput = document.getElementById('event-date');
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(12, 0, 0, 0);
    dateInput.value = tomorrow.toISOString().slice(0, 16);
  }
}

// 处理倒计时表单提交
function handleCountdownSubmit(e) {
  e.preventDefault();
  
  const title = document.getElementById('event-title').value;
  const dateTime = document.getElementById('event-date').value;
  const theme = document.getElementById('countdown-theme').value;
  const message = document.getElementById('countdown-message').value;
  
  if (!title || !dateTime) {
    alert('Please fill in all required fields');
    return;
  }
  
  const targetDate = new Date(dateTime);
  if (targetDate <= new Date()) {
    alert('Please select a future date and time');
    return;
  }
  
  startCountdown(title, targetDate, theme, message);
  saveCountdown(title, targetDate, theme, message);
}

// 开始倒计时
function startCountdown(title, targetDate, theme = 'default', message = '') {
  // 停止现有倒计时
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
  
  countdownData.title = title;
  countdownData.targetDate = targetDate;
  countdownData.theme = theme;
  countdownData.message = message;
  countdownData.isActive = true;
  
  // 更新显示
  updateCountdownDisplay();
  applyTheme(theme);
  
  // 开始计时器
  countdownInterval = setInterval(updateCountdown, 1000);
}

// 更新倒计时显示
function updateCountdown() {
  const now = new Date().getTime();
  const target = countdownData.targetDate.getTime();
  const difference = target - now;
  
  if (difference <= 0) {
    // 倒计时完成
    clearInterval(countdownInterval);
    showCountdownComplete();
    return;
  }
  
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
  document.getElementById('days').textContent = days.toString().padStart(2, '0');
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// 更新倒计时显示区域
function updateCountdownDisplay() {
  const titleEl = document.getElementById('countdown-title');
  const subtitleEl = document.getElementById('countdown-subtitle');
  const timerEl = document.getElementById('countdown-timer');
  const completeEl = document.getElementById('countdown-complete');
  
  if (countdownData.isActive) {
    titleEl.textContent = countdownData.title;
    subtitleEl.textContent = `Countdown to ${countdownData.targetDate.toLocaleDateString()}`;
    timerEl.style.display = 'block';
    completeEl.style.display = 'none';
  } else {
    titleEl.textContent = 'No Countdown Set';
    subtitleEl.textContent = 'Create a new countdown to get started';
    timerEl.style.display = 'none';
    completeEl.style.display = 'none';
  }
}

// 显示倒计时完成
function showCountdownComplete() {
  const timerEl = document.getElementById('countdown-timer');
  const completeEl = document.getElementById('countdown-complete');
  const messageEl = document.getElementById('completion-message');
  
  timerEl.style.display = 'none';
  completeEl.style.display = 'block';
  
  if (countdownData.message) {
    messageEl.textContent = countdownData.message;
  } else {
    messageEl.textContent = 'Your event has arrived!';
  }
  
  countdownData.isActive = false;
}

// 应用主题
function applyTheme(themeName) {
  const theme = themes[themeName];
  const timeBoxes = document.querySelectorAll('.time-box');
  
  timeBoxes.forEach(box => {
    box.style.background = theme.background;
    box.style.color = theme.textColor;
    box.style.boxShadow = theme.boxShadow;
  });
}

// 预览主题
function previewTheme(themeName) {
  // 更新主题预览按钮状态
  document.querySelectorAll('.theme-preview').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-theme="${themeName}"]`).classList.add('active');
  
  // 应用主题预览
  applyTheme(themeName);
}

// 重置倒计时
function resetCountdown() {
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
  
  countdownData.isActive = false;
  updateCountdownDisplay();
  
  // 重置表单
  document.getElementById('countdown-form').reset();
  
  // 重置主题
  applyTheme('default');
  document.querySelectorAll('.theme-preview').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector('[data-theme="default"]').classList.add('active');
}

// 保存倒计时到本地存储
function saveCountdown(title, targetDate, theme, message) {
  const savedCountdowns = JSON.parse(localStorage.getItem('countdowns') || '[]');
  const newCountdown = {
    id: Date.now(),
    title,
    targetDate: targetDate.toISOString(),
    theme,
    message,
    createdAt: new Date().toISOString()
  };
  
  savedCountdowns.push(newCountdown);
  localStorage.setItem('countdowns', JSON.stringify(savedCountdowns));
  
  loadSavedCountdowns();
}

// 加载保存的倒计时
function loadSavedCountdowns() {
  const savedCountdowns = JSON.parse(localStorage.getItem('countdowns') || '[]');
  const container = document.getElementById('saved-countdowns');
  
  if (!container) return;
  
  container.innerHTML = '';
  
  savedCountdowns.forEach(countdown => {
    const countdownEl = document.createElement('div');
    countdownEl.className = 'flex items-center justify-between p-3 bg-gray-50 rounded-lg';
    countdownEl.innerHTML = `
      <div>
        <h5 class="font-semibold text-gray-800">${countdown.title}</h5>
        <p class="text-sm text-gray-600">${new Date(countdown.targetDate).toLocaleDateString()}</p>
      </div>
      <div class="flex gap-2">
        <button class="btn btn-primary text-sm" onclick="loadCountdown('${countdown.id}')">
          Load
        </button>
        <button class="btn btn-danger text-sm" onclick="deleteCountdown('${countdown.id}')">
          Delete
        </button>
      </div>
    `;
    container.appendChild(countdownEl);
  });
}

// 加载倒计时
function loadCountdown(id) {
  const savedCountdowns = JSON.parse(localStorage.getItem('countdowns') || '[]');
  const countdown = savedCountdowns.find(c => c.id.toString() === id);
  
  if (countdown) {
    startCountdown(
      countdown.title,
      new Date(countdown.targetDate),
      countdown.theme,
      countdown.message
    );
    
    // 更新表单
    document.getElementById('event-title').value = countdown.title;
    document.getElementById('event-date').value = countdown.targetDate.slice(0, 16);
    document.getElementById('countdown-theme').value = countdown.theme;
    document.getElementById('countdown-message').value = countdown.message;
  }
}

// 删除倒计时
function deleteCountdown(id) {
  const savedCountdowns = JSON.parse(localStorage.getItem('countdowns') || '[]');
  const filteredCountdowns = savedCountdowns.filter(c => c.id.toString() !== id);
  localStorage.setItem('countdowns', JSON.stringify(filteredCountdowns));
  loadSavedCountdowns();
}

// 首页倒计时功能

// 开始首页倒计时
function startHomeCountdown() {
  const hours = parseInt(document.getElementById('home-hours-input').value) || 0;
  const minutes = parseInt(document.getElementById('home-minutes-input').value) || 0;
  const seconds = parseInt(document.getElementById('home-seconds-input').value) || 0;
  
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  
  if (totalSeconds <= 0) {
    alert('Please set a valid time');
    return;
  }
  
  // 停止现有倒计时
  if (homeCountdownInterval) {
    clearInterval(homeCountdownInterval);
  }
  
  homeCountdownData.totalSeconds = totalSeconds;
  homeCountdownData.remainingSeconds = totalSeconds;
  homeCountdownData.isRunning = true;
  homeCountdownData.isPaused = false;
  homeCountdownData.startTime = new Date();
  homeCountdownData.pauseTime = null;
  
  // 更新显示
  updateHomeCountdownDisplay();
  updateHomeCountdownButtons();
  
  // 开始计时器
  homeCountdownInterval = setInterval(updateHomeCountdown, 1000);
  
  // 更新标题
  const timeString = formatTimeString(hours, minutes, seconds);
  document.getElementById('home-countdown-title').textContent = `Timer: ${timeString}`;
  document.getElementById('home-countdown-subtitle').textContent = 'Running...';
}

// 暂停首页倒计时
function pauseHomeCountdown() {
  if (homeCountdownData.isRunning && !homeCountdownData.isPaused) {
    homeCountdownData.isPaused = true;
    homeCountdownData.pauseTime = new Date();
    
    if (homeCountdownInterval) {
      clearInterval(homeCountdownInterval);
    }
    
    updateHomeCountdownButtons();
    document.getElementById('home-countdown-subtitle').textContent = 'Paused';
  }
}

// 恢复首页倒计时
function resumeHomeCountdown() {
  if (homeCountdownData.isRunning && homeCountdownData.isPaused) {
    homeCountdownData.isPaused = false;
    
    // 重新开始计时器
    homeCountdownInterval = setInterval(updateHomeCountdown, 1000);
    
    updateHomeCountdownButtons();
    document.getElementById('home-countdown-subtitle').textContent = 'Running...';
  }
}

// 重置首页倒计时
function resetHomeCountdown() {
  if (homeCountdownInterval) {
    clearInterval(homeCountdownInterval);
  }
  
  homeCountdownData = {
    totalSeconds: 0,
    remainingSeconds: 0,
    isRunning: false,
    isPaused: false,
    startTime: null,
    pauseTime: null
  };
  
  // 重置显示
  document.getElementById('home-hours').textContent = '00';
  document.getElementById('home-minutes').textContent = '00';
  document.getElementById('home-seconds').textContent = '00';
  
  document.getElementById('home-countdown-title').textContent = 'Ready to start';
  document.getElementById('home-countdown-subtitle').textContent = 'Set your time below';
  
  updateHomeCountdownButtons();
}

// 更新首页倒计时
function updateHomeCountdown() {
  if (homeCountdownData.remainingSeconds <= 0) {
    // 倒计时完成
    clearInterval(homeCountdownInterval);
    homeCountdownComplete();
    return;
  }
  
  homeCountdownData.remainingSeconds--;
  
  const hours = Math.floor(homeCountdownData.remainingSeconds / 3600);
  const minutes = Math.floor((homeCountdownData.remainingSeconds % 3600) / 60);
  const seconds = homeCountdownData.remainingSeconds % 60;
  
  document.getElementById('home-hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('home-minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('home-seconds').textContent = seconds.toString().padStart(2, '0');
}

// 首页倒计时完成
function homeCountdownComplete() {
  homeCountdownData.isRunning = false;
  homeCountdownData.isPaused = false;
  
  // 播放完成动画
  const timeBoxes = document.querySelectorAll('#home-countdown .time-box');
  timeBoxes.forEach((box, index) => {
    setTimeout(() => {
      box.style.transform = 'scale(1.1)';
      box.style.boxShadow = '0 0 30px rgba(16, 185, 129, 0.6)';
    }, index * 100);
    
    setTimeout(() => {
      box.style.transform = 'scale(1)';
      box.style.boxShadow = '';
    }, index * 100 + 500);
  });
  
  document.getElementById('home-countdown-title').textContent = 'Time\'s up!';
  document.getElementById('home-countdown-subtitle').textContent = 'Timer completed';
  
  updateHomeCountdownButtons();
  
  // 播放提示音（如果浏览器支持）
  if (typeof Audio !== 'undefined') {
    try {
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
      audio.play();
    } catch (e) {
      // 忽略音频播放错误
    }
  }
}

// 更新首页倒计时显示
function updateHomeCountdownDisplay() {
  const hours = Math.floor(homeCountdownData.remainingSeconds / 3600);
  const minutes = Math.floor((homeCountdownData.remainingSeconds % 3600) / 60);
  const seconds = homeCountdownData.remainingSeconds % 60;
  
  document.getElementById('home-hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('home-minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('home-seconds').textContent = seconds.toString().padStart(2, '0');
}

// 更新首页倒计时按钮状态
function updateHomeCountdownButtons() {
  const startBtn = document.getElementById('home-start-btn');
  const pauseBtn = document.getElementById('home-pause-btn');
  const resumeBtn = document.getElementById('home-resume-btn');
  const resetBtn = document.getElementById('home-reset-btn');
  
  if (homeCountdownData.isRunning) {
    if (homeCountdownData.isPaused) {
      startBtn.style.display = 'none';
      pauseBtn.style.display = 'none';
      resumeBtn.style.display = 'inline-flex';
    } else {
      startBtn.style.display = 'none';
      pauseBtn.style.display = 'inline-flex';
      resumeBtn.style.display = 'none';
    }
  } else {
    startBtn.style.display = 'inline-flex';
    pauseBtn.style.display = 'none';
    resumeBtn.style.display = 'none';
  }
}

// 设置预设时间
function setPresetTime(hours, minutes, seconds) {
  document.getElementById('home-hours-input').value = hours;
  document.getElementById('home-minutes-input').value = minutes;
  document.getElementById('home-seconds-input').value = seconds;
}

// 格式化时间字符串
function formatTimeString(hours, minutes, seconds) {
  const parts = [];
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);
  if (seconds > 0) parts.push(`${seconds}s`);
  return parts.join(' ') || '0s';
}

// 导出函数供HTML使用
window.showSection = showSection;
window.toggleMobileMenu = toggleMobileMenu;
window.resetCountdown = resetCountdown;
window.previewTheme = previewTheme;
window.startHomeCountdown = startHomeCountdown;
window.pauseHomeCountdown = pauseHomeCountdown;
window.resumeHomeCountdown = resumeHomeCountdown;
window.resetHomeCountdown = resetHomeCountdown;
window.setPresetTime = setPresetTime;