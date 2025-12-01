// 多语言配置
const i18n = {
    'zh-CN': {
        'nav.home': '首页', 'nav.features': '功能', 'nav.faq': '常见问题',
        'title': '智能图片裁剪工具',
        'subtitle': '免费在线智能图片裁剪，支持批量处理和多种格式导出',
        'upload.text': '点击或拖拽图片到此处上传',
        'btn.smartCrop': '⚡ 智能裁剪', 
        'btn.manualCrop': '🖐 手动裁剪', 
        'btn.reset': '🔄 重置', 
        'btn.downloadAll': '📥 打包下载',
        'loading': '正在智能裁剪...',
        'results.title': '裁剪结果',
        'result.size': '尺寸:', 
        'btn.download': '下载', 
        'btn.delete': '删除',
        'f.title.1': '智能识别', 'f.desc.1': '无需手动框选，自动识别素材区域',
        'f.title.2': '批量处理', 'f.desc.2': '支持批量上传和导出，效率倍增',
        'f.title.3': '隐私安全', 'f.desc.3': '所有处理在浏览器本地完成，不上传服务器',
        'faq.title': '常见问题',
        'faq.q1': '这款图片裁剪工具是否免费？',
        'faq.a1': '是的，智能图片裁剪工具是完全免费的在线工具，没有使用次数限制，也不需要注册账号。',
        'faq.q2': '支持哪些图片格式？',
        'faq.a2': '支持 JPG, PNG, WebP格式的图片，导出格式为PNG',
        'faq.q3': '图片会被上传吗？',
        'faq.a3': '不会，所有图片处理都在本地浏览器中完成，您的图片不会被上传到任何服务器，保护您的隐私安全。',
        'faq.q4': '如果智能裁剪结果不理想，我该怎么办？',
        'faq.a4': '如果智能裁剪结果不理想，您可以尝试使用手动裁剪功能，手动调整裁剪区域。同时，确保图片背景色与素材颜色有明显区别。',
        'copyright': '© 2025 智能图片裁剪工具. 保留所有权利.',
        'alert.image': '请上传图片文件！'
    },
    'en': {
        'nav.home': 'Home', 'nav.features': 'Features', 'nav.faq': 'FAQ',
        'title': 'Smart Image Cropper',
        'subtitle': 'Free online AI cropping tool, supports batch processing',
        'upload.text': 'Click or drag image here to upload',
        'btn.smartCrop': '⚡ Smart Crop', 
        'btn.manualCrop': '🖐 Manual Crop', 
        'btn.reset': '🔄 Reset', 
        'btn.downloadAll': '📥 Download All',
        'loading': 'Processing...',
        'results.title': 'Results',
        'result.size': 'Size:', 
        'btn.download': 'Download', 
        'btn.delete': 'Delete',
        'f.title.1': 'AI Detection', 'f.desc.1': 'Automatically detects and crops objects.',
        'f.title.2': 'Batch Mode', 'f.desc.2': 'Process multiple images at once.',
        'f.title.3': 'Privacy First', 'f.desc.3': 'Processing happens in your browser locally.',
        'faq.title': 'FAQ',
        'faq.q1': 'Is this image cropping tool free?',
        'faq.a1': 'Yes, Smart Image Cropper is a completely free online tool with no usage limits and no registration required.',
        'faq.q2': 'What image formats are supported?',
        'faq.a2': 'Supports JPG, PNG, and WebP formats; exports as PNG.',
        'faq.q3': 'Will images be uploaded?',
        'faq.a3': 'No, all processing is done locally in your browser. Images are not uploaded to any server, protecting your privacy.',
        'faq.q4': 'What if the smart crop result is not ideal?',
        'faq.a4': 'If the result is not ideal, try using the manual crop feature. Also, ensure there is a clear distinction between the background and the object.',
        'copyright': '© 2025 Smart Image Cropper. All Rights Reserved.',
        'alert.image': 'Please upload an image file!'
    },
    'ja': {
        'nav.home': 'ホーム', 'nav.features': '機能', 'nav.faq': 'FAQ',
        'title': 'スマート画像切り抜き',
        'subtitle': 'AI自動認識、一括処理対応の無料オンラインツール',
        'upload.text': 'クリックまたはドラッグしてアップロード',
        'btn.smartCrop': '⚡ AI切り抜き', 
        'btn.manualCrop': '🖐 手動切り抜き', 
        'btn.reset': '🔄 リセット', 
        'btn.downloadAll': '📥 一括DL',
        'loading': '処理中...',
        'results.title': '結果',
        'result.size': 'サイズ:', 
        'btn.download': 'DL', 
        'btn.delete': '削除',
        'f.title.1': 'AI認識', 'f.desc.1': '素材を自動認識して切り抜きます',
        'f.title.2': '一括処理', 'f.desc.2': '複数の画像を一度に処理可能',
        'f.title.3': '安全', 'f.desc.3': 'ブラウザ内で処理され、アップロードされません',
        'faq.q1': 'このツールは無料ですか？',
        'faq.a1': 'はい、完全無料のオンラインツールです。回数制限や登録は不要です。',
        'faq.q2': '対応フォーマットは？',
        'faq.a2': 'JPG、PNG、WebPに対応しており、PNGでエクスポートされます。',
        'faq.q3': '画像はアップロードされますか？',
        'faq.a3': 'いいえ、すべての処理はローカルブラウザで行われます。プライバシーは保護されます。',
        'faq.q4': '自動切り抜きがうまくいかない場合は？',
        'faq.a4': '結果が理想的でない場合は、手動切り抜きを試してください。また、背景色と被写体の色がはっきり区別されているか確認してください。',
        'copyright': '© 2025 Smart Image Cropper. All Rights Reserved.',
        'alert.image': '画像ファイルをアップロードしてください！'
    },
    'ko': {
        'nav.home': '홈', 'nav.features': '기능', 'nav.faq': 'FAQ',
        'title': '스마트 이미지 자르기',
        'subtitle': '무료 온라인 AI 자르기 도구, 일괄 처리 지원',
        'upload.text': '클릭하거나 드래그하여 업로드',
        'btn.smartCrop': '⚡ 스마트 자르기', 
        'btn.manualCrop': '🖐 수동 자르기', 
        'btn.reset': '🔄 초기화', 
        'btn.downloadAll': '📥 전체 다운로드',
        'loading': '처리 중...',
        'results.title': '결과',
        'result.size': '크기:', 
        'btn.download': '다운로드', 
        'btn.delete': '삭제',
        'f.title.1': 'AI 인식', 'f.desc.1': '객체를 자동으로 감지하고 자릅니다.',
        'f.title.2': '일괄 처리', 'f.desc.2': '한 번에 여러 이미지를 처리합니다.',
        'f.title.3': '개인 정보 보호', 'f.desc.3': '모든 처리는 브라우저에서 로컬로 수행됩니다.',
        'faq.title': '자주 묻는 질문',
        'faq.q1': '무료인가요?',
        'faq.a1': '네, 사용 횟수 제한이나 가입이 필요 없는 완전 무료 도구입니다.',
        'faq.q2': '지원 형식은?',
        'faq.a2': 'JPG, PNG, WebP 형식을 지원하며 PNG로 내보냅니다.',
        'faq.q3': '이미지가 업로드되나요?',
        'faq.a3': '아니요, 모든 처리는 로컬 브라우저에서 이루어집니다. 개인정보가 보호됩니다.',
        'faq.q4': '자동 자르기 결과가 좋지 않으면요?',
        'faq.a4': '결과가 만족스럽지 않으면 수동 자르기 기능을 사용해 보세요. 배경과 피사체의 색상 차이가 명확한지 확인하세요.',
        'copyright': '© 2025 Smart Image Cropper. All Rights Reserved.',
        'alert.image': '이미지 파일을 업로드해주세요!'
    }
};

let cropper = null;
let croppedImages = [];
let currentLang = 'zh-CN';

// 路径映射
const langToPath = { 'zh-CN': '/zh', 'en': '/en', 'ja': '/ja', 'ko': '/ko' };
const pathToLang = { '/zh': 'zh-CN', '/en': 'en', '/ja': 'ja', '/ko': 'ko' };

document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('fileInput');
    const uploadArea = document.getElementById('uploadArea');
    const cropBtn = document.getElementById('cropBtn');
    const manualCropBtn = document.getElementById('manualCropBtn');
    const resetBtn = document.getElementById('resetBtn');
    const downloadAllBtn = document.getElementById('downloadAllBtn');

    // 1. 初始化多语言
    initI18n();

    // 2. 上传逻辑 (修复双重弹窗问题)
    uploadArea.addEventListener('click', function(e) {
        // 只有点击区域本身才触发 input，避免如果点到里面的子元素触发冒泡
        // 但由于 fileInput 是 hidden 的，直接 click 即可
        fileInput.click();
    });
    
    // 阻止 input click 冒泡 (防止无限循环，虽然 hidden 不容易点到)
    fileInput.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // 拖拽上传
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#4f46e5';
        uploadArea.style.background = '#eef2ff';
    });
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.borderColor = '';
        uploadArea.style.background = '';
    });
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '';
        uploadArea.style.background = '';
        if (e.dataTransfer.files.length > 0) handleFile(e.dataTransfer.files[0]);
    });

    fileInput.addEventListener('change', function() {
        if (this.files.length > 0) handleFile(this.files[0]);
    });

    // 按钮事件
    cropBtn.addEventListener('click', smartCrop);
    manualCropBtn.addEventListener('click', manualCrop);
    resetBtn.addEventListener('click', reset);
    downloadAllBtn.addEventListener('click', downloadAll);
});

// 文件处理函数 (修复预览消失问题)
function handleFile(file) {
    if (!file.type.startsWith('image/')) {
        alert(i18n[currentLang]['alert.image']);
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const image = document.getElementById('image');
        image.src = e.target.result;
        
        // 强制显示预览容器
        const previewContainer = document.getElementById('previewContainer');
        previewContainer.style.display = 'block'; 

        if (cropper) cropper.destroy();
        
        cropper = new Cropper(image, {
            viewMode: 1,
            autoCropArea: 1,
            responsive: true,
            background: false // 不显示网格背景，显得更干净
        });

        // 启用按钮
        document.getElementById('cropBtn').disabled = false;
        document.getElementById('manualCropBtn').disabled = false;
        document.getElementById('resetBtn').disabled = false;
        
        // 隐藏上传提示，只留图
        document.querySelector('.upload-hint').style.display = 'none';
        document.querySelector('.upload-icon').style.display = 'none';
    };
    reader.readAsDataURL(file);
}

// 从URL中获取语言
function getLanguageFromURL() {
    const path = window.location.pathname;
    // 处理带斜杠的情况，如 /zh/
    const normalizedPath = path.endsWith('/') ? path.slice(0, -1) : path;
    
    if (pathToLang[normalizedPath]) {
        return pathToLang[normalizedPath];
    }
    
    // 处理更复杂的路径，如 /zh/some/path
    const firstSegment = normalizedPath.split('/')[1] || '';
    const langPath = '/' + firstSegment;
    if (pathToLang[langPath]) {
        return pathToLang[langPath];
    }
    
    return null;
}

// 更新URL
function updateURL() {
    const path = langToPath[currentLang] || '';
    const url = window.location.origin + path + window.location.search + window.location.hash;
    history.pushState({ lang: currentLang }, '', url);
}

// 初始化多语言
function initI18n() {
    // 优先从URL获取语言
    const urlLang = getLanguageFromURL();
    if (urlLang && i18n[urlLang]) {
        currentLang = urlLang;
        document.getElementById('language').value = urlLang;
        localStorage.setItem('language', urlLang);
    } else {
        // 从localStorage获取上次使用的语言
        const savedLang = localStorage.getItem('language');
        if (savedLang && i18n[savedLang]) {
            currentLang = savedLang;
            document.getElementById('language').value = savedLang;
        }
        // 更新URL为当前语言
        updateURL();
    }
    
    // 应用多语言
    applyI18n();
}

// 应用多语言
function applyI18n() {
    const t = i18n[currentLang];
    if (!t) return;

    // 辅助函数：安全设置文本
    const setText = (selector, key) => {
        const el = document.querySelector(selector);
        if (el && t[key]) el.textContent = t[key];
    };

    // 导航
    setText('.nav-home', 'nav.home');
    setText('.nav-features', 'nav.features');
    setText('.nav-faq', 'nav.faq');

    // 头部
    setText('.page-title', 'title');
    setText('.page-subtitle', 'subtitle');

    // 上传
    setText('.upload-hint', 'upload.text');

    // 按钮
    const btns = {
        'cropBtn': 'btn.smartCrop',
        'manualCropBtn': 'btn.manualCrop',
        'resetBtn': 'btn.reset',
        'downloadAllBtn': 'btn.downloadAll'
    };
    for (let id in btns) {
        const btn = document.getElementById(id);
        if (btn) btn.textContent = t[btns[id]];
    }
    
    // 结果标题
    setText('.results-title', 'results.title');
    
    // Loading
    setText('.loading-text', 'loading');

    // Features (用类名定位)
    setText('.f-title-1', 'f.title.1'); setText('.f-desc-1', 'f.desc.1');
    setText('.f-title-2', 'f.title.2'); setText('.f-desc-2', 'f.desc.2');
    setText('.f-title-3', 'f.title.3'); setText('.f-desc-3', 'f.desc.3');

    // FAQ
    setText('.faq-header', 'faq.title');
    
    setText('.q1', 'faq.q1'); 
    setText('.a1', 'faq.a1');
    
    setText('.q2', 'faq.q2'); 
    setText('.a2', 'faq.a2');
    
    setText('.q3', 'faq.q3'); 
    setText('.a3', 'faq.a3');
    
    // 新增的第4个问题
    setText('.q4', 'faq.q4'); 
    setText('.a4', 'faq.a4');

    // 页脚
    setText('.copyright', 'copyright');
}

// 切换语言
function changeLanguage() {
    const langSelect = document.getElementById('language');
    currentLang = langSelect.value;
    localStorage.setItem('language', currentLang);
    
    // 更新 URL (不刷新)
    const path = langToPath[currentLang] || '/';
    window.history.replaceState(null, '', path);
    
    applyI18n();
}

// 智能裁剪
function smartCrop() {
    const loading = document.getElementById('loading');
    loading.style.display = 'inline-block';
    document.getElementById('cropBtn').disabled = true;
    document.getElementById('manualCropBtn').disabled = true;
    
    // 获取完整的图片数据
    const canvas = cropper.getCroppedCanvas();
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    
    // 智能检测素材区域
    const regions = detectRange(imageData);
    
    // 裁剪每个素材
    croppedImages = [];
    regions.forEach((region, index) => {
        const croppedCanvas = document.createElement('canvas');
        croppedCanvas.width = region.width;
        croppedCanvas.height = region.height;
        const croppedCtx = croppedCanvas.getContext('2d');
        
        // 裁剪并绘制到新画布
        croppedCtx.drawImage(canvas, region.x, region.y, region.width, region.height, 0, 0, region.width, region.height);
        
        const dataURL = croppedCanvas.toDataURL('image/png');
        croppedImages.push({
            id: index,
            dataURL: dataURL,
            width: region.width,
            height: region.height
        });
    });
    
    displayResults();
    loading.style.display = 'none';
    document.getElementById('cropBtn').disabled = false;
    document.getElementById('manualCropBtn').disabled = false;
    document.getElementById('downloadAllBtn').disabled = false;
}

// 手动裁剪
function manualCrop() {
    // 获取用户手动选择的裁剪区域
    const croppedCanvas = cropper.getCroppedCanvas();
    
    // 将裁剪结果转换为dataURL
    const dataURL = croppedCanvas.toDataURL('image/png');
    
    // 将裁剪结果添加到croppedImages数组中
    croppedImages.push({
        id: croppedImages.length,
        dataURL: dataURL,
        width: croppedCanvas.width,
        height: croppedCanvas.height
    });
    
    // 显示裁剪结果
    displayResults();
    
    // 确保下载所有按钮变为可用状态
    document.getElementById('downloadAllBtn').disabled = false;
}

// 检测素材区域的核心算法
function detectRange(imageData) {
    const { width, height, data } = imageData;
    
    // 获取背景色（使用左上角像素作为背景色）
    const bgR = data[0];
    const bgG = data[1];
    const bgB = data[2];
    const bgA = data[3];
    
    // 基于网格的聚类，网格大小为10像素
    const gridSize = 10;
    const grid = {};
    
    // 第一步：将非背景像素分配到网格中
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const index = (y * width + x) * 4;
            const r = data[index];
            const g = data[index + 1];
            const b = data[index + 2];
            const a = data[index + 3];
            
            // 如果不是背景色
            if (!isBackgroundColor(r, g, b, a, bgR, bgG, bgB, bgA)) {
                const gridX = Math.floor(x / gridSize);
                const gridY = Math.floor(y / gridSize);
                const gridKey = `${gridX},${gridY}`;
                
                if (!grid[gridKey]) {
                    grid[gridKey] = {
                        minX: x,
                        maxX: x,
                        minY: y,
                        maxY: y,
                        count: 0
                    };
                }
                
                const cell = grid[gridKey];
                cell.minX = Math.min(cell.minX, x);
                cell.maxX = Math.max(cell.maxX, x);
                cell.minY = Math.min(cell.minY, y);
                cell.maxY = Math.max(cell.maxY, y);
                cell.count++;
            }
        }
    }
    
    // 第二步：合并相邻的非空网格
    const visitedGrids = new Set();
    const regions = [];
    
    // 遍历所有非空网格
    Object.keys(grid).forEach(gridKey => {
        if (!visitedGrids.has(gridKey)) {
            // 使用广度优先搜索合并相邻网格
            const queue = [gridKey];
            visitedGrids.add(gridKey);
            
            let minX = Infinity;
            let maxX = -Infinity;
            let minY = Infinity;
            let maxY = -Infinity;
            
            while (queue.length > 0) {
                const currentKey = queue.shift();
                const currentGrid = grid[currentKey];
                
                // 更新边界
                minX = Math.min(minX, currentGrid.minX);
                maxX = Math.max(maxX, currentGrid.maxX);
                minY = Math.min(minY, currentGrid.minY);
                maxY = Math.max(maxY, currentGrid.maxY);
                
                // 检查8个相邻网格
                const [gridX, gridY] = currentKey.split(',').map(Number);
                for (let dy = -1; dy <= 1; dy++) {
                    for (let dx = -1; dx <= 1; dx++) {
                        if (dx === 0 && dy === 0) continue;
                        
                        const neighborKey = `${gridX + dx},${gridY + dy}`;
                        if (grid[neighborKey] && !visitedGrids.has(neighborKey)) {
                            visitedGrids.add(neighborKey);
                            queue.push(neighborKey);
                        }
                    }
                }
            }
            
            // 生成边界框
            const region = {
                x: minX,
                y: minY,
                width: maxX - minX + 1,
                height: maxY - minY + 1
            };
            
            // 过滤掉太小的区域（可能是噪点）
            if (region.width > 10 && region.height > 10) {
                regions.push(region);
            }
        }
    });
    
    return regions;
}

// 判断是否为背景色
function isBackgroundColor(r, g, b, a, bgR, bgG, bgB, bgA) {
    // 颜色相似度判断（容差为20）
    const colorDiff = Math.abs(r - bgR) + Math.abs(g - bgG) + Math.abs(b - bgB);
    return colorDiff < 60 && Math.abs(a - bgA) < 50;
}

// 显示裁剪结果
function displayResults() {
    const resultsSection = document.getElementById('resultsSection');
    const grid = document.getElementById('resultsGrid');
    
    // 只有当有图片时才显示结果区域
    if (croppedImages.length > 0) {
        resultsSection.style.display = 'block';
    } else {
        resultsSection.style.display = 'none';
        return;
    }
    
    grid.innerHTML = '';
    const lang = i18n[currentLang]; // 获取当前语言包
    
    croppedImages.forEach((img, index) => {
        const div = document.createElement('div');
        div.className = 'result-item';
        
        // 使用 innerHTML 插入图片、尺寸信息、下载按钮、删除按钮
        // 注意：按钮使用了不同的样式类 (btn-primary, btn-outline) 以区分主次
        div.innerHTML = `
            <img src="${img.dataURL}" alt="${lang['results.title']} ${index + 1}">
            <div style="font-size: 0.9em; color: #666; margin: 5px 0;">
                ${lang['result.size']} ${Math.round(img.width)}x${Math.round(img.height)}
            </div>
            <div style="display: flex; gap: 5px; margin-top: 5px;">
                <button class="btn btn-primary" style="flex:1; padding:6px; font-size:13px;" onclick="downloadImage(${index})">
                    ${lang['btn.download']}
                </button>
                <button class="btn btn-outline" style="padding:6px 12px; font-size:13px;" onclick="deleteImage(${index})">
                    ${lang['btn.delete']}
                </button>
            </div>
        `;
        
        grid.appendChild(div);
    });
}

// 下载单个图片
function downloadImage(index) {
    const img = croppedImages[index];
    const link = document.createElement('a');
    link.download = `cropped_${index + 1}.png`;
    link.href = img.dataURL;
    link.click();
}

// 删除单个图片
function deleteImage(index) {
    croppedImages.splice(index, 1);
    displayResults();
    
    if (croppedImages.length === 0) {
        document.getElementById('downloadAllBtn').disabled = true;
    }
}

// 打包下载所有图片
function downloadAll() {
    if (croppedImages.length === 0) return;
    
    const zip = new JSZip();
    
    croppedImages.forEach((img, index) => {
        // 将 base64 转换为 blob
        const base64Data = img.dataURL.split(',')[1];
        const blob = base64ToBlob(base64Data, 'image/png');
        zip.file(`cropped_${index + 1}.png`, blob);
    });
    
    zip.generateAsync({ type: 'blob' }).then(function(content) {
        saveAs(content, 'cropped_images.zip');
    });
}

// base64 转 blob
function base64ToBlob(base64, mime) {
    const byteCharacters = atob(base64);
    const byteArrays = [];
    
    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
        const slice = byteCharacters.slice(offset, offset + 512);
        const byteNumbers = new Array(slice.length);
        
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    
    return new Blob(byteArrays, { type: mime });
}

// 重置
function reset() {
    if (cropper) {
        cropper.destroy();
        cropper = null;
    }
    
    const image = document.getElementById('image');
    image.src = '';
    image.style.display = 'none';
    
    document.getElementById('cropBtn').disabled = true;
    document.getElementById('manualCropBtn').disabled = true;
    document.getElementById('resetBtn').disabled = true;
    document.getElementById('downloadAllBtn').disabled = true;
    
    clearResults();
    originalImage = null;
    croppedImages = [];
}

// 清空结果
function clearResults() {
    const resultsGrid = document.getElementById('resultsGrid');
    resultsGrid.innerHTML = '';
    croppedImages = [];
    document.getElementById('downloadAllBtn').disabled = true;
}