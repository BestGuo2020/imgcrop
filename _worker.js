export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // 1. 定义多语言配置包
    // 这里包含了标题、描述、关键词以及社交媒体分享的文案
    const translations = {
      '/en': {
        lang: 'en',
        title: 'Smart Image Splitter - Auto Crop & Extract Sprites Online',
        description: 'Free online tool to auto-split sprite sheets and scanned photos into separate PNG images. One-click batch extraction. Local processing, privacy safe.',
        keywords: 'image splitter, sprite sheet cutter, auto crop multiple photos, extract images from image, sprite slicer, online image separator',
        ogTitle: 'Smart Image Splitter - Extract Multiple Images in One Click',
        ogDesc: 'Automatically detect and split multiple objects from a single image. Export as separate PNGs. 100% local processing.'
      },
      '/ja': {
        lang: 'ja',
        title: '画像自動分割ツール - スプライトシートや素材を一括切り抜き',
        description: 'スプライトシートやスキャンした写真を自動的に個別のPNG画像に分割・切り抜きできる無料オンラインツール。ブラウザ完結でプライバシーも安心。',
        keywords: '画像分割, スプライトシート分割, 画像切り抜き, 自動切り抜き, 一括保存, 素材抽出, オンラインツール',
        ogTitle: '画像自動分割ツール - 複数の素材を一括切り抜き',
        ogDesc: '一枚の画像に含まれる複数の要素を自動認識して分割し、個別のPNGとして保存します。インストール不要、完全無料。'
      },
      '/ko': {
        lang: 'ko',
        title: '스마트 이미지 분할 도구 - 스프라이트 및 사진 자동 자르기',
        description: '스프라이트 시트나 스캔한 사진에서 여러 이미지를 자동으로 감지하여 개별 PNG로 분할해 주는 무료 온라인 도구입니다. 100% 로컬 처리로 안전합니다.',
        keywords: '이미지 분할, 스프라이트 자르기, 사진 자동 자르기, 이미지 추출, 누끼따기, 온라인 이미지 편집',
        ogTitle: '스마트 이미지 분할 도구 - 한 번의 클릭으로 이미지 추출',
        ogDesc: '하나의 이미지에 포함된 여러 요소를 자동으로 인식하여 분할하고 저장합니다. 서버 업로드 없이 브라우저에서 바로 처리하세요.'
      }
    };

    // 2. 检查当前请求路径是否匹配某种语言 (去掉末尾斜杠以防万一)
    // 比如访问 /en/ 会被视为 /en
    const cleanPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
    const config = translations[cleanPath];

    // 3. 如果是静态资源 (js, css, png) 或者不匹配语言包，直接放行 (Pass-through)
    // 注意：如果访问的是根目录 / (中文)，也会直接放行，显示原始 index.html
    if (!config || path.includes('.')) {
      return env.ASSETS.fetch(request);
    }

    // 4. 获取原始的 index.html (作为模板)
    // 无论用户访问 /en 还是 /ja，我们都去拿根目录的 index.html
    const originalResponse = await env.ASSETS.fetch(new URL("/", request.url));

    // 5. 使用 HTMLRewriter 动态替换 Meta 信息
    return new HTMLRewriter()
      // 修改 <html lang="...">
      .on('html', {
        element(e) { e.setAttribute('lang', config.lang); }
      })
      // 修改 <title>
      .on('title', {
        element(e) { e.setInnerContent(config.title); }
      })
      // 修改 meta description
      .on('meta[name="description"]', {
        element(e) { e.setAttribute('content', config.description); }
      })
      // 修改 meta keywords
      .on('meta[name="keywords"]', {
        element(e) { e.setAttribute('content', config.keywords); }
      })
      // 修改 Open Graph Title (og:title)
      .on('meta[property="og:title"]', {
        element(e) { e.setAttribute('content', config.ogTitle); }
      })
      // 修改 Open Graph Description (og:description)
      .on('meta[property="og:description"]', {
        element(e) { e.setAttribute('content', config.ogDesc); }
      })
      // 修改 Twitter Title
      .on('meta[name="twitter:title"]', {
        element(e) { e.setAttribute('content', config.ogTitle); }
      })
      // 修改 Twitter Description
      .on('meta[name="twitter:description"]', {
        element(e) { e.setAttribute('content', config.ogDesc); }
      })
      // 执行转换
      .transform(originalResponse);
  }
};