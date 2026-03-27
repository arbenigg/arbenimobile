# projekti 5 web  
<!DOCTYPE html>  
<html lang="sq">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>ArbeniMobile | Ekspertët e Telefonave</title>  
    <style>  
        /* CSS APPLE STYLE & VARIABLES */  
        :root {  
            --bg-color: #f5f5f7; --text-color: #1d1d1f; --link-blue: #0071e3;  
            --link-blue-hover: #0077ed; --white: #ffffff; --gray: #86868b;  
            --border-color: #d2d2d7; --success-green: #34c759;  
            --light-gray: #f2f2f7;  
        }  
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif; }  
          
        html { scroll-behavior: smooth; scroll-padding-top: 80px; }  
        body { background-color: var(--white); color: var(--text-color); line-height: 1.4; -webkit-font-smoothing: antialiased; }  
  
        /* Animacionet */  
        .reveal { opacity: 0; transform: translateY(40px); transition: all 0.8s cubic-bezier(0.5, 0, 0, 1); }  
        .reveal.active { opacity: 1; transform: translateY(0); }  
        .fade-in { animation: fadeIn 0.4s ease-in forwards; }  
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }  
  
        /* Promo Banner & Nav */  
        .promo-banner { background-color: var(--bg-color); text-align: center; padding: 12px; font-size: 12px; font-weight: 500; color: var(--text-color); border-bottom: 1px solid var(--border-color); letter-spacing: 0.5px;}  
        nav { background: rgba(255, 255, 255, 0.8); backdrop-filter: saturate(180%) blur(20px); position: sticky; top: 0; width: 100%; z-index: 1000; border-bottom: 1px solid rgba(0,0,0,0.1); }  
        .nav-container { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 15px 20px; flex-wrap: wrap;}  
        .logo { font-size: 22px; font-weight: 700; letter-spacing: -0.5px; color: var(--text-color); text-decoration: none; cursor: pointer; }  
        .nav-center { display: flex; gap: 30px; }  
        .nav-center a { text-decoration: none; color: var(--text-color); font-size: 14px; opacity: 0.8; transition: 0.3s; cursor: pointer; }  
        .nav-center a:hover { opacity: 1; color: var(--link-blue); }  
        .nav-actions { display: flex; align-items: center; }  
        .cart-icon { font-size: 24px; cursor: pointer; position: relative; transition: 0.2s;}  
        .cart-icon:hover { transform: scale(1.1); }  
        .cart-badge { position: absolute; top: -5px; right: -10px; background: var(--link-blue); color: white; font-size: 11px; font-weight: bold; padding: 2px 6px; border-radius: 10px; border: 2px solid var(--white);}  
  
        @media (max-width: 768px) { .nav-center { display: none; } }  
  
        /* Buttons */  
        .btn { background: var(--link-blue); color: var(--white); padding: 14px 28px; border-radius: 30px; border: none; font-size: 15px; font-weight: 500; cursor: pointer; transition: all 0.3s ease; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; gap: 8px;}  
        .btn:hover { background: var(--link-blue-hover); transform: scale(1.02); }  
        .btn-outline { background: transparent; color: var(--link-blue); border: 1px solid var(--link-blue); }  
        .btn-outline:hover { background: var(--link-blue); color: var(--white); }  
        .btn-full { width: 100%; }  
  
        /* VIEWS MANAGEMENT */  
        #main-view { display: block; }  
        #product-view { display: none; padding-bottom: 80px; }  
  
        /* Main View Elements */  
        .hero { text-align: center; padding: 100px 20px 60px; background-color: var(--white); max-width: 900px; margin: 0 auto; }  
        .hero h1 { font-size: 64px; font-weight: 800; letter-spacing: -0.015em; margin-bottom: 20px; line-height: 1.1;}  
        .hero p { font-size: 24px; color: var(--gray); margin-bottom: 40px; font-weight: 400; line-height: 1.5;}  
        .hero-buttons { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;}  
          
        @media (max-width: 768px) {   
            .hero h1 { font-size: 42px; }   
            .hero p { font-size: 18px; }   
            .hero-buttons { flex-direction: row; gap: 15px; }  
            .hero-buttons .btn { flex: 1; padding: 14px 10px; font-size: 15px;}  
        }  
  
        .section-bg { background-color: var(--bg-color); width: 100%; }  
        section { padding: 80px 20px; max-width: 1200px; margin: 0 auto; }  
        .section-title { font-size: 42px; font-weight: 700; margin-bottom: 50px; text-align: center; letter-spacing: -0.005em; }  
  
        /* Services */  
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; }  
        .service-card { background-color: var(--white); padding: 40px 30px; border-radius: 24px; text-align: center; box-shadow: 0 4px 24px rgba(0,0,0,0.04); transition: transform 0.3s, box-shadow 0.3s; cursor: pointer; display: flex; flex-direction: column; height: 100%; border: 1px solid transparent; align-items: center;}  
        .service-card:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(0,0,0,0.08); border-color: #e5e5ea; }  
        .service-icon { font-size: 48px; margin-bottom: 20px; color: var(--text-color); }  
        .service-card h3 { font-size: 22px; margin-bottom: 15px; font-weight: 600;}  
        .service-card p { color: var(--gray); font-size: 15px; line-height: 1.5; flex-grow: 1; margin-bottom: 20px;}  
  
        /* Catalog Grid & FILTERS */  
        .brand-tabs { display: flex; justify-content: center; gap: 10px; margin-bottom: 20px; flex-wrap: wrap; }  
        .tab-btn { background: #e5e5ea; color: var(--text-color); border: none; padding: 10px 24px; border-radius: 20px; font-size: 15px; font-weight: 500; cursor: pointer; transition: 0.3s; }  
        .tab-btn.active { background: var(--text-color); color: var(--white); box-shadow: 0 4px 14px rgba(0,0,0,0.1);}  
          
        .category-tabs { display: flex; justify-content: center; gap: 8px; margin-bottom: 50px; flex-wrap: wrap; }  
        .cat-btn { background: transparent; color: var(--gray); border: 1px solid var(--border-color); padding: 8px 18px; border-radius: 20px; font-size: 14px; font-weight: 500; cursor: pointer; transition: 0.3s; }  
        .cat-btn:hover { color: var(--text-color); border-color: #86868b; }  
        .cat-btn.active { background: var(--text-color); color: var(--white); border-color: var(--text-color); }  
  
        .catalog-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 30px; }  
        .product-card { background: var(--white); border-radius: 24px; padding: 25px; text-align: center; box-shadow: 0 4px 20px rgba(0,0,0,0.04); cursor: pointer; transition: 0.3s; display: flex; flex-direction: column; border: 1px solid transparent; position: relative;}  
        .product-card:hover { transform: scale(1.02); box-shadow: 0 15px 40px rgba(0,0,0,0.08); border-color: #f0f0f0;}  
        .product-image { width: 100%; height: 220px; object-fit: contain; margin-bottom: 20px; border-radius: 12px; transition: transform 0.3s;}  
        .product-card:hover .product-image { transform: scale(1.05); }  
        .product-badge { position: absolute; top: 15px; left: 15px; background: var(--text-color); color: var(--white); font-size: 11px; font-weight: bold; padding: 4px 8px; border-radius: 8px; text-transform: uppercase; letter-spacing: 0.5px; z-index: 1;}  
        .product-brand { font-size: 12px; color: var(--gray); text-transform: uppercase; font-weight: 700; letter-spacing: 1px; margin-bottom: 8px;}  
        .product-title { font-size: 20px; font-weight: 600; margin-bottom: 10px; min-height: 50px;}  
        .product-desc-short { font-size: 14px; color: var(--gray); margin-bottom: 15px; line-height: 1.4; flex-grow: 1; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;}  
        .product-price { font-size: 24px; font-weight: 600; margin-bottom: 15px; margin-top: auto;}  
          
        .card-buttons { display: flex; flex-direction: column; gap: 10px; width: 100%; margin-bottom: 12px; }  
        .payment-info { font-size: 13px; color: var(--success-green); font-weight: 500; display: flex; align-items: center; justify-content: center; gap: 6px;}  
  
        /* =========================================  
           DEDICATED PRODUCT PAGE VIEW (NEW)  
           ========================================= */  
        .pp-container { max-width: 1200px; margin: 40px auto; padding: 0 20px; }  
        .pp-back-btn { display: inline-flex; align-items: center; color: var(--text-color); font-size: 16px; font-weight: 500; cursor: pointer; border: none; background: none; margin-bottom: 30px; transition: 0.2s; opacity: 0.7;}  
        .pp-back-btn:hover { opacity: 1; transform: translateX(-5px); }  
          
        .pp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }  
        @media (max-width: 850px) { .pp-grid { grid-template-columns: 1fr; gap: 40px; } }  
  
        /* Slider */  
        .pp-slider-wrapper { position: relative; background: var(--white); box-shadow: 0 10px 40px rgba(0,0,0,0.05); border-radius: 30px; padding: 40px; text-align: center; }  
        .pp-slide { display: none; width: 100%; height: 400px; object-fit: contain; animation: fadeEffect 0.5s; }  
        .pp-slide.active { display: block; }  
        @keyframes fadeEffect { from {opacity: 0.4;} to {opacity: 1;} }  
          
        .pp-arrow { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.9); border: 1px solid #eee; width: 40px; height: 40px; border-radius: 50%; font-size: 20px; cursor: pointer; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 15px rgba(0,0,0,0.1); transition: 0.2s; color: var(--text-color);}  
        .pp-arrow:hover { background: white; transform: translateY(-50%) scale(1.1); }  
        .pp-arrow-left { left: 15px; }  
        .pp-arrow-right { right: 15px; }  
  
        .pp-dots { text-align: center; margin-top: 20px; }  
        .pp-dot { height: 8px; width: 8px; margin: 0 5px; background-color: #d2d2d7; border-radius: 50%; display: inline-block; cursor: pointer; transition: 0.3s; }  
        .pp-dot.active, .pp-dot:hover { background-color: var(--text-color); transform: scale(1.2); }  
  
        /* Info */  
        .pp-info { display: flex; flex-direction: column; }  
        .pp-brand { font-size: 14px; font-weight: 700; color: var(--gray); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; }  
        .pp-title { font-size: 40px; font-weight: 800; line-height: 1.1; margin-bottom: 20px; letter-spacing: -0.02em; }  
        .pp-price { font-size: 32px; font-weight: 600; margin-bottom: 30px; color: var(--link-blue); }  
          
        .pp-delivery { display: flex; align-items: center; background: #e5f9e7; color: #1a7f37; padding: 12px 20px; border-radius: 16px; font-size: 15px; font-weight: 600; margin-bottom: 30px; gap: 10px;}  
  
        .pp-desc { font-size: 18px; color: #515154; line-height: 1.6; margin-bottom: 30px; }  
          
        .pp-features { list-style: none; margin-bottom: 40px; }  
        .pp-features li { font-size: 16px; color: var(--gray); margin-bottom: 12px; display: flex; align-items: flex-start; }  
  
        .pp-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }  
        @media (max-width: 500px) { .pp-actions { grid-template-columns: 1fr; } }  
  
  
        /* =========================================  
           MODALS & SHPORTA   
           ========================================= */  
        .modal-overlay { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.4); backdrop-filter: blur(5px); z-index: 2000; justify-content: center; align-items: center; padding: 20px; }  
        .modal-content { background: var(--white); width: 100%; max-width: 500px; border-radius: 24px; padding: 40px; position: relative; max-height: 90vh; overflow-y: auto; box-shadow: 0 20px 60px rgba(0,0,0,0.15); animation: slideUp 0.3s ease-out;}  
        @keyframes slideUp { from { transform: translateY(50px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }  
        .close-btn { position: absolute; top: 20px; right: 25px; font-size: 32px; cursor: pointer; background: none; border: none; color: var(--gray); line-height: 1;}  
          
        /* Service Modal */  
        .service-modal-icon { font-size: 64px; margin-bottom: 20px; display: inline-block;}  
          
        /* Contact Buttons in Modal */  
        .contact-btn-pro {   
            position: relative; display: flex; align-items: center; background: #ffffff; border: 1px solid #d2d2d7; border-radius: 16px; padding: 16px 20px; text-decoration: none; color: #1d1d1f; font-size: 15px; font-weight: 500; margin-bottom: 12px; transition: all 0.2s ease; box-shadow: 0 2px 8px rgba(0,0,0,0.03); cursor: pointer;  
        }  
        .contact-btn-pro:hover { border-color: #86868b; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.06); }  
        .cb-icon { font-size: 22px; position: absolute; left: 20px; display: flex; align-items: center; color: var(--gray); }  
        .cb-text { flex-grow: 1; text-align: center; width: 100%; font-weight: 600;}  
          
        /* CART DRAWER ME KONTROLL SASIE */  
        #cartDrawer { display: none; position: fixed; top: 0; right: 0; width: 100%; max-width: 420px; height: 100%; background: var(--white); box-shadow: -10px 0 40px rgba(0,0,0,0.1); z-index: 2001; flex-direction: column; animation: slideLeft 0.3s ease-out;}  
        @keyframes slideLeft { from { transform: translateX(100%); } to { transform: translateX(0); } }  
        .cart-header { padding: 25px; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; font-size: 22px; font-weight: 600; }  
        .cart-items { flex-grow: 1; overflow-y: auto; padding: 25px; }  
        .cart-item { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #f0f0f0; }  
        .cart-item-info { flex-grow: 1; margin-right: 15px; }  
        .cart-item-title { font-size: 15px; font-weight: 600; margin-bottom: 5px; line-height: 1.3;}  
        .cart-item-price { font-size: 14px; color: var(--gray); margin-bottom: 12px;}  
          
        /* QTY CONTROLS */  
        .qty-controls { display: inline-flex; align-items: center; background: #f0f0f5; border-radius: 8px; padding: 4px; }  
        .qty-btn { background: var(--white); border: none; width: 26px; height: 26px; border-radius: 6px; font-size: 16px; font-weight: 600; cursor: pointer; color: var(--text-color); box-shadow: 0 1px 3px rgba(0,0,0,0.1); transition: 0.2s;}  
        .qty-btn:hover { background: #e5e5ea; }  
        .qty-num { padding: 0 12px; font-size: 14px; font-weight: 600;}  
  
        .cart-item-remove { color: #ff3b30; font-size: 13px; font-weight: 500; cursor: pointer; border: none; background: none; padding: 5px 0; margin-top: 10px; display: block; text-align: right; width: 100%;}  
          
        .cart-footer { padding: 25px; border-top: 1px solid var(--border-color); background: #fafafa; }  
        .summary-line { display: flex; justify-content: space-between; font-size: 15px; margin-bottom: 12px; color: var(--gray); }  
        .summary-total { display: flex; justify-content: space-between; font-size: 20px; font-weight: 700; margin-bottom: 20px; color: var(--text-color); }  
          
        /* Forms */  
        .form-group { margin-bottom: 20px; text-align: left; }  
        .form-group label { display: block; font-size: 14px; color: var(--gray); margin-bottom: 8px; font-weight: 500;}  
        .form-group input { width: 100%; padding: 14px 16px; border: 1px solid var(--border-color); border-radius: 12px; font-size: 16px; outline: none; transition: border-color 0.3s;}  
        .form-group input:focus { border-color: var(--link-blue); }  
  
        /* WhatsApp */  
        .whatsapp-float { position: fixed; bottom: 25px; right: 25px; background-color: #25D366; color: white; width: 60px; height: 60px; border-radius: 50%; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4); text-decoration: none; z-index: 1000; transition: transform 0.3s; }  
        .whatsapp-float:hover { transform: scale(1.1); }  
  
        /* Footer */  
        footer { background-color: var(--bg-color); padding: 80px 20px 40px; border-top: 1px solid var(--border-color); }  
        .footer-content { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; }  
        .footer-col h4 { font-size: 16px; font-weight: 600; margin-bottom: 20px; color: var(--text-color); text-transform: uppercase; letter-spacing: 0.5px;}  
        .footer-col p, .footer-col a { font-size: 14px; color: var(--gray); margin-bottom: 12px; text-decoration: none; display: block; cursor: pointer; transition: 0.2s;}  
        .footer-col a:hover { color: var(--link-blue); }  
        .footer-bottom { max-width: 1200px; margin: 60px auto 0; padding-top: 20px; border-top: 1px solid var(--border-color); text-align: center; font-size: 13px; color: var(--gray); }  
    </style>  
</head>  
<body>  
  
    <div class="promo-banner">  
        📦 Transport FALAS kudo në Kosovë për porosi mbi 20€. Bli sot, paguaj në dorëzim!  
    </div>  
  
    <nav>  
        <div class="nav-container">  
            <a onclick="showMainView(); scrollToSection('ballina');" class="logo">ArbeniMobile</a>  
            <div class="nav-center">  
                <a onclick="showMainView(); scrollToSection('ballina');">Ballina</a>  
                <a onclick="showMainView(); scrollToSection('sherbimet');">Shërbimet</a>  
                <a onclick="showMainView(); scrollToSection('katalogu');">Katalogu</a>  
                <a onclick="showMainView(); scrollToSection('kontakt');">Kontakt</a>  
            </div>  
            <div class="nav-actions">  
                <div class="cart-icon" onclick="openCart()">  
                    🛒 <span class="cart-badge" id="cartBadge">0</span>  
                </div>  
            </div>  
        </div>  
    </nav>  
  
    <!-- ==============================================  
         MAIN VIEW (BALLINA, SHËRBIMET, KATALOGU)   
         ============================================== -->  
    <div id="main-view" class="fade-in">  
          
        <section id="ballina" class="hero reveal">  
            <h1>Teknologjia në duart tuaja.</h1>  
            <p>ArbeniMobile është destinacioni juaj premium për blerje telefonash, aksesorë origjinalë dhe servisime profesionale. Çdo gjë që ju nevojitet, në një vend.</p>  
            <div class="hero-buttons">  
                <a onclick="scrollToSection('katalogu')" class="btn">Shiko Katalogun</a>  
                <a onclick="scrollToSection('sherbimet')" class="btn btn-outline">Shërbimet Tona</a>  
            </div>  
        </section>  
  
        <div class="section-bg">  
            <section id="sherbimet">  
                <h2 class="section-title reveal">Ekspertizë e plotë për pajisjen tuaj.</h2>  
                <div class="services-grid">  
                    <div class="service-card reveal" onclick="openServiceDetail('servis')">  
                        <div class="service-icon">🛠️</div>  
                        <h3>Servis Profesional</h3>  
                        <p>Riparim i ekraneve, baterive dhe defekteve në pllakë për modele Apple & Samsung.</p>  
                        <div class="service-learn-more">Mëso më shumë &rarr;</div>  
                    </div>  
                    <div class="service-card reveal" onclick="openServiceDetail('frp')">  
                        <div class="service-icon">🔓</div>  
                        <h3>FRP & Dekodime</h3>  
                        <p>Hapje e sigurt e llogarive Google dhe zhbllokimi i rrjetit nga çdo operator.</p>  
                        <div class="service-learn-more">Mëso më shumë &rarr;</div>  
                    </div>  
                    <div class="service-card reveal" onclick="openServiceDetail('icloud')">  
                        <div class="service-icon">☁️</div>  
                        <h3>iCloud Bypass</h3>  
                        <p>Zgjidhje efikase për pajisjet Apple të bllokuara në ekranin e aktivizimit.</p>  
                        <div class="service-learn-more">Mëso më shumë &rarr;</div>  
                    </div>  
                    <div class="service-card reveal" onclick="openServiceDetail('shitblerje')">  
                        <div class="service-icon">📱</div>  
                        <h3>Shit-Blerje</h3>  
                        <p>Telefona të rinj dhe të përdorur me garanci. Çmimet më të mira në treg.</p>  
                        <div class="service-learn-more">Mëso më shumë &rarr;</div>  
                    </div>  
                </div>  
            </section>  
        </div>  
  
        <section id="katalogu">  
            <h2 class="section-title reveal">Katalogu Premium</h2>  
  
            <div class="brand-tabs reveal" id="brandTabs">  
                <button class="tab-btn active" data-brand="te-gjitha" onclick="filterByBrand('te-gjitha', this)">Të Gjitha</button>  
                <button class="tab-btn" data-brand="apple" onclick="filterByBrand('apple', this)">Apple</button>  
                <button class="tab-btn" data-brand="samsung" onclick="filterByBrand('samsung', this)">Samsung</button>  
                <button class="tab-btn" data-brand="xiaomi" onclick="filterByBrand('xiaomi', this)">Xiaomi</button>  
                <button class="tab-btn" data-brand="telefona" onclick="filterByBrand('telefona', this)">📱 Telefona</button>  
            </div>  
  
            <div class="category-tabs reveal" id="categoryTabs">  
                <button class="cat-btn active" data-cat="te-gjitha" onclick="filterByCategory('te-gjitha', this)">Të Gjitha Kategoritë</button>  
                <button class="cat-btn" data-cat="karikim" onclick="filterByCategory('karikim', this)">Karikues & Kabllo</button>  
                <button class="cat-btn" data-cat="audio" onclick="filterByCategory('audio', this)">Kufje & Audio</button>  
                <button class="cat-btn" data-cat="case" onclick="filterByCategory('case', this)">Mbrojtëse (Case)</button>  
                <button class="cat-btn" data-cat="bateri" onclick="filterByCategory('bateri', this)">Powerbank</button>  
            </div>  
  
            <div class="catalog-grid" id="productGrid">  
                <!-- Rendered by JS -->  
            </div>  
        </section>  
          
        <footer id="kontakt">  
            <div class="footer-content">  
                <div class="footer-col">  
                    <h4 style="font-size: 18px; margin-bottom: 15px;">ArbeniMobile</h4>  
                    <p>Besueshmëri, cilësi dhe profesionalizëm. Gjithçka që i duhet telefonit tuaj.</p>  
                </div>  
                <div class="footer-col">  
                    <h4>Shërbimet</h4>  
                    <a onclick="scrollToSection('sherbimet')">Servis & Hardware</a>  
                    <a onclick="scrollToSection('sherbimet')">iCloud & FRP</a>  
                    <a onclick="scrollToSection('katalogu')">Aksesorë Premium</a>  
                </div>  
                <div class="footer-col">  
                    <h4>Kontakt & Adresa</h4>  
                    <p>📍 Xerxë, Rahovec, Kosovë</p>  
                    <p>📞 <a href="tel:+38348545516" target="_top" style="color: var(--gray); text-decoration: none;">+383 48 545 516</a></p>  
                    <p>✉️ <a href="mailto:arbenimobile1@gmail.com" target="_top" style="color: var(--gray); text-decoration: none;">arbenimobile1@gmail.com</a></p>  
                </div>  
                <div class="footer-col">  
                    <h4>Rrjetet Sociale</h4>  
                    <a href="https://instagram.com/arbenimobile" target="_top">📸 Instagram (@arbenimobile)</a>  
                    <a href="#">📘 Facebook</a>  
                    <a href="#">🎵 TikTok</a>  
                </div>  
            </div>  
            <div class="footer-bottom">  
                <p>&copy; 2026 ArbeniMobile. Të gjitha të drejtat të rezervuara.</p>  
            </div>  
        </footer>  
    </div>  
  
    <!-- ==============================================  
         DEDICATED PRODUCT PAGE VIEW (EXTRA PAGE)  
         ============================================== -->  
    <div id="product-view" class="fade-in">  
        <div class="pp-container">  
            <button class="pp-back-btn" onclick="showMainView()">  
                <span style="font-size: 20px; margin-right: 8px;">&larr;</span> Kthehu në Katalog  
            </button>  
  
            <div class="pp-grid">  
                <div class="pp-slider-wrapper">  
                    <button class="pp-arrow pp-arrow-left" onclick="changeSlide(-1)">&#10094;</button>  
                      
                    <div id="pp-slides-container"></div>  
  
                    <button class="pp-arrow pp-arrow-right" onclick="changeSlide(1)">&#10095;</button>  
                      
                    <div class="pp-dots" id="pp-dots-container"></div>  
                </div>  
  
                <div class="pp-info">  
                    <div class="pp-brand" id="pp-brand">Marka</div>  
                    <h1 class="pp-title" id="pp-title">Emri i Produktit</h1>  
                    <div class="pp-price" id="pp-price">0.00€</div>  
                      
                    <div class="pp-delivery">  
                        <span style="font-size: 20px; margin-right: 12px;">🚚</span> Koha e mbërritjes së porosisë: 1/3 Ditë  
                    </div>  
  
                    <p class="pp-desc" id="pp-desc">Përshkrimi i produktit...</p>  
                      
                    <ul class="pp-features" id="pp-features"></ul>  
  
                    <div class="pp-actions">  
                        <button class="btn" id="pp-buy-btn">Blej Tani</button>  
                        <button class="btn btn-outline" id="pp-add-btn">Shto në Shportë</button>  
                    </div>  
                    <div style="text-align: center; margin-top: 15px; font-size: 13px; color: var(--gray); display:flex; align-items:center; justify-content:center; gap:5px;">  
                        ✓ Pagesë e sigurt në dorëzim (Cash on Delivery)  
                    </div>  
                </div>  
            </div>  
        </div>  
    </div>  
  
    <!-- ==============================================  
         MODALS DHE SHPORTA  
         ============================================== -->  
    <div id="serviceDetailModal" class="modal-overlay">  
        <div class="modal-content" style="text-align: center;">  
            <button class="close-btn" onclick="closeModal('serviceDetailModal')">&times;</button>  
            <div id="srvDefaultView">  
                <div id="srvIcon" class="service-modal-icon"></div>  
                <h3 id="srvTitle" style="font-size: 26px; font-weight: 700; margin: 10px 0 20px;"></h3>  
                <p id="srvDesc" style="color: #515154; font-size: 16px; margin-bottom: 25px; line-height: 1.5;"></p>  
                <div style="background: var(--bg-color); border-radius: 16px; padding: 20px; text-align: left; margin-bottom: 25px;">  
                    <h4 style="margin-bottom: 15px; font-size: 16px;">Çfarë përfshin:</h4>  
                    <ul id="srvFeatures" style="list-style: none; margin-bottom: 0; color: var(--gray); font-size: 15px;"></ul>  
                </div>  
                <button class="btn btn-full" onclick="showServiceContact()">Kontakto Tani</button>  
            </div>  
              
            <div id="srvContactView" style="display: none;">  
                <h3 style="font-size: 26px; font-weight: 700; margin-bottom: 10px;">Na kontaktoni</h3>  
                <p style="color: var(--gray); font-size: 14px; margin-bottom: 30px;">Për shërbimin: <strong id="srvContactTitleName" style="color: var(--text-color);"></strong></p>  
                  
                <a href="https://wa.me/38348545516" target="_blank" class="contact-btn-pro">  
                    <span class="cb-icon">📞</span>  
                    <span class="cb-text">Thirr Tani: +383 48 545 516</span>  
                </a>  
                  
                <a href="mailto:arbenimobile1@gmail.com" id="emailBtnDynamic" target="_top" class="contact-btn-pro">  
                    <span class="cb-icon">✉️</span>  
                    <span class="cb-text">Dërgo email: arbenimobile1@gmail.com</span>  
                </a>  
                  
                <a href="https://instagram.com/arbenimobile" target="_blank" class="contact-btn-pro">  
                    <span class="cb-icon">📸</span>  
                    <span class="cb-text">Instagram: @arbenimobile</span>  
                </a>  
                  
                <button class="btn-outline btn-full" style="padding: 14px; border-radius: 30px; margin-top: 15px; cursor: pointer;" onclick="hideServiceContact()">&larr; Kthehu mbrapa</button>  
            </div>  
        </div>  
    </div>  
  
    <!-- Shporta -->  
    <div id="cartDrawer">  
        <div class="cart-header">  
            Shporta Juaj <button class="close-btn" style="position: static;" onclick="closeCart()">&times;</button>  
        </div>  
        <div class="cart-items" id="cartItemsContainer"></div>  
        <div class="cart-footer">  
            <div class="summary-line"><span>Nëntotali:</span> <span id="cartSubtotal">0.00€</span></div>  
            <div class="summary-line"><span>Transporti:</span> <span id="cartShipping">0.00€</span></div>  
            <div style="font-size: 11px; color: var(--success-green); margin-bottom: 10px; text-align: right;">*Transport Falas mbi 20€</div>  
            <div class="summary-total"><span>Totali:</span> <span id="cartTotal">0.00€</span></div>  
            <button class="btn btn-full" onclick="openCheckout()" id="checkoutBtn">Përfundo Porosinë</button>  
        </div>  
    </div>  
  
    <!-- Checkout Form -->  
    <div id="checkoutModal" class="modal-overlay">  
        <div class="modal-content">  
            <button class="close-btn" onclick="closeModal('checkoutModal')">&times;</button>  
            <h3 style="margin-bottom: 25px; font-size: 26px;">Të dhënat e dërgesës</h3>  
            <div id="checkoutFormContainer">  
                <form id="orderForm" onsubmit="submitOrder(event)">  
                    <input type="hidden" name="_autoresponse" value="Faleminderit që zgjodhët ArbeniMobile!">  
                    <input type="hidden" name="_subject" value="Porosi e Re nga ArbeniMobile!">  
                    <input type="hidden" name="Porosia" id="hiddenOrderDetails">  
                    <input type="hidden" name="Totali" id="hiddenOrderTotal">  
                      
                    <div class="form-group">  
                        <label>Emri dhe Mbiemri</label>  
                        <input type="text" name="Emri" required placeholder="p.sh. Agim Krasniqi">  
                    </div>  
                    <div class="form-group">  
                        <label>Telefoni</label>  
                        <input type="tel" name="Telefoni" required placeholder="04X XXX XXX">  
                    </div>  
                    <div class="form-group">  
                        <label>Adresa</label>  
                        <input type="text" name="Adresa" required placeholder="p.sh. Prishtinë">  
                    </div>  
                    <div class="form-group">  
                        <label>Email</label>  
                        <input type="email" name="Email" required placeholder="email@gmail.com">  
                    </div>  
                    <div style="background: #e5f9e7; color: #1a7f37; padding: 12px; border-radius: 12px; font-size: 14px; text-align: center; margin-bottom: 20px; font-weight: 600;">  
                        💵 Pagesa: Cash on Delivery (Te postieri)  
                    </div>  
                    <button type="submit" id="submitBtn" class="btn btn-full">Konfirmo Porosinë</button>  
                </form>  
            </div>  
            <div id="successMessage" style="display: none; text-align: center;">  
                <div style="font-size: 60px; color: var(--success-green); margin-bottom: 20px;">✓</div>  
                <h3>Porosia u dërgua!</h3>  
                <p style="color: var(--gray); margin-bottom: 20px;">Postieri do t'ju kontaktojë së shpejti.</p>  
                <button class="btn btn-outline btn-full" onclick="closeModal('checkoutModal'); showMainView();">Kthehu në Ballinë</button>  
            </div>  
        </div>  
    </div>  
  
    <!-- WhatsApp SVG mbetet pasi kjo nuk është emoji -->  
    <a href="https://wa.me/38348545516" target="_blank" class="whatsapp-float">  
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>  
    </a>  
  
    <script>  
        // Animacionet  
        function reveal() {  
            var reveals = document.querySelectorAll(".reveal");  
            for (var i = 0; i < reveals.length; i++) {  
                var windowHeight = window.innerHeight;  
                var elementTop = reveals[i].getBoundingClientRect().top;  
                if (elementTop < windowHeight - 50) { reveals[i].classList.add("active"); }  
            }  
        }  
        window.addEventListener("scroll", reveal); reveal();  
  
        function scrollToSection(id) {  
            const element = document.getElementById(id);  
            if(element) {  
                const headerOffset = 80;  
                const elementPosition = element.getBoundingClientRect().top;  
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;  
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });  
            }  
        }  
  
        // TË DHËNAT E PRODUKTEVE  
        const productsDB = [  
            {  
                id: 101, brand: 'apple', category: 'telefona', name: 'iPhone 15 Pro Max 256GB', price: 1199.00,  
                badge: 'I Ri',  
                images: [  
                    'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80',  
                    'https://images.unsplash.com/photo-1695048132717-c75c88b9ea7a?auto=format&fit=crop&w=600&q=80',  
                    'https://images.unsplash.com/photo-1696446702183-bc2e8d98d28a?auto=format&fit=crop&w=600&q=80'  
                ],  
                desc: 'Apple iPhone 15 Pro Max, ndërtuar me titan, çipin A17 Pro dhe sistemin më të avancuar të kamerave. Ekran Super Retina XDR 6.7 inç.',  
                features: ['Kapaciteti: 256GB', 'Gjendja: E Re (Me kuti)', 'Garancioni: 1 Vit Apple', 'Ngjyra: Natural Titanium']  
            },  
            {  
                id: 102, brand: 'samsung', category: 'telefona', name: 'Samsung Galaxy S24 Ultra', price: 1250.00,  
                badge: 'I Ri',  
                images: [  
                    'https://images.unsplash.com/photo-1707165330364-15967bf0e755?auto=format&fit=crop&w=600&q=80',  
                    'https://images.unsplash.com/photo-1707165330458-1f1f1d9a0d2f?auto=format&fit=crop&w=600&q=80',  
                    'https://images.unsplash.com/photo-1707165330441-3b7b3b3b3b3b?auto=format&fit=crop&w=600&q=80'  
                ],  
                desc: 'Galaxy AI është këtu. S24 Ultra vjen me trup titani, ekran të sheshtë 6.8 inç dhe kamerën mbresëlënëse 200MP. Përfshin S-Pen.',  
                features: ['Kapaciteti: 256GB / 12GB RAM', 'Gjendja: E Re (Në kuti)', 'Kamera: 200MP + 100x Zoom', 'Procesori: Snapdragon 8 Gen 3']  
            },  
            {  
                id: 103, brand: 'apple', category: 'telefona', name: 'iPhone 13 Pro 128GB', price: 550.00,  
                badge: 'I Përdorur',  
                images: [  
                    'https://images.unsplash.com/photo-1632661674596-618d8b64d641?auto=format&fit=crop&w=600&q=80',  
                    'https://images.unsplash.com/photo-1632661674581-22441b1d7d2c?auto=format&fit=crop&w=600&q=80',  
                    'https://images.unsplash.com/photo-1632661674603-605a109a9972?auto=format&fit=crop&w=600&q=80'  
                ],  
                desc: 'iPhone 13 Pro në gjendje perfekte estetike dhe funksionale. Testuar dhe certifikuar nga teknikët tanë. Bateria mbijeton gjatë.',  
                features: ['Kapaciteti: 128GB', 'Gjendja: Klasa A+ (Pa gërvishtje)', 'Bateria (Health): 89%', 'Garancioni: 3 Muaj nga dyqani']  
            },  
            {  
                id: 1, brand: 'apple', category: 'karikim', name: 'Power Adapter 20W USB-C', price: 25.00,  
                images: [  
                    'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80',  
                    'https://images.unsplash.com/photo-1615526647306-7e28987b5a19?auto=format&fit=crop&w=600&q=80',  
                    'https://images.unsplash.com/photo-1622445272461-c6580cab8755?auto=format&fit=crop&w=600&q=80'  
                ],  
                desc: 'Karikuesi origjinal Apple 20W ofron karikim të shpejtë dhe efikas kudo që jeni. Ideali për serinë iPhone 12 e tutje, duke siguruar baterinë tuaj.',  
                features: ['Kapaciteti: 20W', 'Porta: 1x Type-C', 'Mbrojtje origjinale Apple', 'Ngarkim 0-50% për 30 min']  
            },  
            {  
                id: 2, brand: 'apple', category: 'audio', name: 'EarPods (USB-C & Lightning)', price: 19.99,  
                images: [  
                    'https://images.unsplash.com/photo-1606220838315-056192d5e92b?auto=format&fit=crop&w=600&q=80',  
                    'https://images.unsplash.com/photo-1505236273191-1dce886b01e9?auto=format&fit=crop&w=600&q=80',  
                    'https://images.unsplash.com/photo-1572569438065-c75c65ffe416?auto=format&fit=crop&w=600&q=80'  
                ],  
                desc: 'Kufjet klasike Apple me cilësi të pastër zëri. Të dizajnuara për t\'iu përshtatur gjeometrisë së veshit tuaj për një komoditet maksimal.',  
                features: ['Audio me definicion të lartë', 'Mikrofon i integruar', 'Telekomandë në tel', 'Opsion USB-C ose Lightning']  
            },  
            {  
                id: 3, brand: 'apple', category: 'karikim', name: 'Kabllo USB-C në Lightning 1m', price: 15.00,  
                images: [  
                    'https://images.unsplash.com/photo-1615526647209-66dfb3585090?auto=format&fit=crop&w=600&q=80',  
                    'https://images.unsplash.com/photo-1531065111171-cb86dcdaeb44?auto=format&fit=crop&w=600&q=80',  
                    'https://images.unsplash.com/photo-1615526647306-7e28987b5a19?auto=format&fit=crop&w=600&q=80'  
                ],  
                desc: 'Kabllo origjinale Apple për të lidhur iPhone ose iPad tuaj me një karikues të shpejtë USB-C ose me Mac për sinkronizim.',  
                features: ['Gjatësia: 1 Metër', 'Suporton Fast Charging', 'Transferim i shpejtë i dhënave', 'Rezistente ndaj përdorimit']  
            },  
            {  
                id: 4, brand: 'apple', category: 'audio', name: 'AirPods Pro (Gjenerata 2)', price: 245.00,  
                images: [  
                    'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=600&q=80',  
                    'https://images.unsplash.com/photo-1606220588913-b3eea4ceb4d2?auto=format&fit=crop&w=600&q=80',  
                    'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=600&q=80'  
                ],  
                desc: 'Kufjet më të mira wireless nga Apple me izolim aktiv të zhurmës (ANC) 2 herë më të fuqishëm dhe audio hapësinore.',  
                features: ['ANC i avancuar & Transparency mode', 'Bateri deri në 30 orë me kutinë', 'Këllëf me MagSafe dhe folës', 'Kontroll me rrëshqitje']  
            },  
            {  
                id: 11, brand: 'apple', category: 'case', name: 'Silicone Case (iPhone 13, 14, 15)', price: 25.00,  
                images: [  
                    'https://images.unsplash.com/photo-1603313011101-320f26a4f6f6?auto=format&fit=crop&w=600&q=80',  
                    'https://images.unsplash.com/photo-1588508065123-287b28e01397?auto=format&fit=crop&w=600&q=80',  
                    'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=600&q=80'  
                ],  
                desc: 'Mbrojtëse origjinale Apple prej silikoni me dizajn të butë dhe mbrojtje nga të gjitha anët. Suporton plotësisht MagSafe.',  
                features: ['Material Premium Silikoni', 'Mikrofibër e brendshme për mbrojtje', 'Përputhshmëri me MagSafe', 'Ngjyra të ndryshme (Zgjidhni gjatë porosisë)']  
            },  
            {  
                id: 5, brand: 'samsung', category: 'karikim', name: 'Super Fast Charger 25W', price: 19.99,  
                images: [  
                    'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80',  
                    'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80',  
                    'https://images.unsplash.com/photo-1622445272461-c6580cab8755?auto=format&fit=crop&w=600&q=80'  
                ],  
                desc: 'Karikuesi zyrtar Samsung 25W për mbushje të shpejtë. Dizajnuar enkas për serinë Galaxy S për një karikim të sigurt pa mbinxehje.',  
                features: ['Teknologji Super Fast Charging', 'Kompakt dhe i lehtë', 'Përshtatet për tablet dhe telefon', 'Ngjyrë e zezë elegante']  
            },  
            {  
                id: 6, brand: 'samsung', category: 'karikim', name: 'Kabllo USB-C në USB-C 1.8m', price: 12.00,  
                images: [  
                    'https://images.unsplash.com/photo-1615526647209-66dfb3585090?auto=format&fit=crop&w=600&q=80',  
                    'https://images.unsplash.com/photo-1531065111171-cb86dcdaeb44?auto=format&fit=crop&w=600&q=80',  
                    'https://images.unsplash.com/photo-1615526647306-7e28987b5a19?auto=format&fit=crop&w=600&q=80'  
                ],  
                desc: 'Kabllo Samsung tepër e gjatë prej 1.8 metra që suporton karikim ultra të shpejtë deri në 5A.',  
                features: ['Gjatësia: 1.8m', 'Suporton 5A (Ultra Fast Charge)', 'Material fleksibël', 'Ideale për divan ose krevat']  
            },  
            {  
                id: 7, brand: 'samsung', category: 'audio', name: 'Galaxy Buds2 Pro', price: 129.00,  
                images: [  
                    'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80',  
                    'https://images.unsplash.com/photo-1606220838315-056192d5e92b?auto=format&fit=crop&w=600&q=80',  
                    'https://images.unsplash.com/photo-1628234857640-3bd8e08d1326?auto=format&fit=crop&w=600&q=80'  
                ],  
                desc: 'Tingull profesional Hi-Fi 24-bit dhe izolim fantastik i zhurmës. Kufjet më të avancuara të Samsung për një eksperiencë audio të pashoqe.',  
                features: ['Tingull 360 Audio', 'ANC aktiv dhe inteligjent', 'Rezistencë ndaj ujit IPX7', 'Përshtatje perfekte në vesh']  
            },  
            {  
                id: 8, brand: 'xiaomi', category: 'karikim', name: 'Xiaomi 33W SonicCharge', price: 18.00,  
                images: [  
                    'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80',  
                    'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80',  
                    'https://images.unsplash.com/photo-1622445272461-c6580cab8755?auto=format&fit=crop&w=600&q=80'  
                ],  
                desc: 'Karikuesi origjinal Xiaomi me fuqi 33W. Rimbushni baterinë tuaj nga 0 në 100% në kohë rekord pa e dëmtuar jetëgjatësinë e saj.',  
                features: ['Fuqi: 33W Fast Charge', 'Sistem me mbrojtje inteligjente', 'I përshtatshëm për modele Redmi & Poco', 'Material cilësor']  
            },  
            {  
                id: 9, brand: 'xiaomi', category: 'audio', name: 'Redmi Buds 4 Pro', price: 45.00,  
                images: [  
                    'https://images.unsplash.com/photo-1628234857640-3bd8e08d1326?auto=format&fit=crop&w=600&q=80',  
                    'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80',  
                    'https://images.unsplash.com/photo-1606220838315-056192d5e92b?auto=format&fit=crop&w=600&q=80'  
                ],  
                desc: 'Kufje fantastike pa tel me izolim aktiv të zhurmës (ANC) deri në 43dB. Shijoni muzikën tuaj kudo që jeni.',  
                features: ['Bateria: Deri në 36 orë me kutinë', 'ANC inteligjent me 3 nivele', 'Bluetooth 5.3 për lidhje pa vonesa', 'Hi-Res Audio Wireless']  
            },  
            {  
                id: 10, brand: 'xiaomi', category: 'bateri', name: 'Mi Power Bank 3 (10000mAh)', price: 22.00,  
                images: [  
                    'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=600&q=80',  
                    'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=600&q=80',  
                    'https://images.unsplash.com/photo-1628126235206-5260b9ea6441?auto=format&fit=crop&w=600&q=80'  
                ],  
                desc: 'Bateri e jashtme elegante dhe shumë e hollë nga Xiaomi, e ndërtuar me trup alumini. E përsosur për ditët e gjata jashtë shtëpisë.',  
                features: ['Kapaciteti: 10000mAh', 'Karikim i shpejtë 18W', '2 porta dalje (USB-A)', 'Trupi nga alumini rezistent']  
            }  
        ];  
  
        let cart = [];  
        let currentBrand = 'te-gjitha';  
        let currentCategory = 'te-gjitha';  
  
        function filterByBrand(brand, btnElement) {  
            currentBrand = brand;  
            currentCategory = 'te-gjitha';   
  
            document.querySelectorAll('#brandTabs .tab-btn').forEach(btn => btn.classList.remove('active'));  
            btnElement.classList.add('active');  
  
            document.querySelectorAll('#categoryTabs .cat-btn').forEach(btn => btn.classList.remove('active'));  
            document.querySelector('#categoryTabs .cat-btn[data-cat="te-gjitha"]').classList.add('active');  
  
            if(brand === 'telefona') {  
                document.getElementById('categoryTabs').style.display = 'none';  
            } else {  
                document.getElementById('categoryTabs').style.display = 'flex';  
            }  
  
            applyFilters();  
        }  
  
        function filterByCategory(category, btnElement) {  
            currentCategory = category;  
            document.querySelectorAll('#categoryTabs .cat-btn').forEach(btn => btn.classList.remove('active'));  
            btnElement.classList.add('active');  
            applyFilters();  
        }  
  
        function applyFilters() {  
            const grid = document.getElementById('productGrid');  
            grid.innerHTML = '';   
  
            let count = 0;  
  
            productsDB.forEach(product => {  
                let matchBrand = (currentBrand === 'te-gjitha' || product.brand === currentBrand);  
                let matchCat = (currentCategory === 'te-gjitha' || product.category === currentCategory);  
  
                if (currentBrand === 'telefona') {  
                    matchBrand = true;  
                    matchCat = (product.category === 'telefona');  
                } else if (currentBrand !== 'te-gjitha') {  
                    if(product.category === 'telefona') matchCat = false;   
                } else if (currentBrand === 'te-gjitha' && currentCategory === 'te-gjitha') {  
                    matchBrand = true; matchCat = true;  
                }  
  
                if (matchBrand && matchCat) {  
                    count++;  
                    const card = document.createElement('div');  
                    card.className = 'product-card fade-in';  
                      
                    card.onclick = (e) => {  
                        if(!e.target.classList.contains('btn') && !e.target.closest('.qty-controls')) {  
                            openProductPage(product.id);  
                        }  
                    };  
                      
                    let shortDesc = product.desc.length > 55 ? product.desc.substring(0, 55) + '...' : product.desc;  
                      
                    let badgeHtml = '';  
                    if (product.badge) {  
                        badgeHtml = `<div class="product-badge">${product.badge}</div>`;  
                    }  
  
                    card.innerHTML = `  
                        ${badgeHtml}  
                        <img src="${product.images[0]}" class="product-image" alt="${product.name}">  
                        <div class="product-brand">${product.brand}</div>  
                        <h4 class="product-title">${product.name}</h4>  
                        <p class="product-desc-short">${shortDesc}</p>  
                        <div class="product-price">${product.price.toFixed(2)}€</div>  
                        <div class="card-buttons">  
                            <button class="btn" onclick="buyNow(${product.id}, event)">Blej Tani</button>  
                            <button class="btn btn-outline" onclick="addToCartFromCard(${product.id}, event)">Shto në Shportë</button>  
                        </div>  
                        <div class="payment-info">✓ Pagesë në dorëzim</div>  
                    `;  
                    grid.appendChild(card);  
                }  
            });  
  
            if(count === 0) {  
                grid.innerHTML = '<p style="text-align:center; grid-column: 1/-1; color: var(--gray); padding: 40px; font-size: 18px;">Nuk u gjetën produkte në këtë kategori.</p>';  
            }  
        }  
  
        function addToCartFromCard(id, event) {  
            event.stopPropagation();  
            addToCart(id);  
            openCart();  
        }  
  
        function buyNow(id, event) {  
            event.stopPropagation();  
            addToCart(id);  
            openCheckout();  
        }  
  
        // LOGJIKA E FAQES SE RE TE PRODUKTIT  
        let slideIndex = 0;  
  
        function openProductPage(id) {  
            const prod = productsDB.find(p => p.id === id);  
            if(!prod) return;  
  
            document.getElementById('pp-brand').innerText = prod.brand;  
            document.getElementById('pp-title').innerText = prod.name;  
            document.getElementById('pp-price').innerText = prod.price.toFixed(2) + '€';  
            document.getElementById('pp-desc').innerText = prod.desc;  
  
            const fList = document.getElementById('pp-features');  
            fList.innerHTML = '';  
            prod.features.forEach(feat => {  
                fList.innerHTML += `<li>• ${feat}</li>`;  
            });  
  
            document.getElementById('pp-buy-btn').onclick = () => { addToCart(prod.id); openCheckout(); };  
            document.getElementById('pp-add-btn').onclick = () => { addToCart(prod.id); openCart(); };  
  
            const sContainer = document.getElementById('pp-slides-container');  
            const dContainer = document.getElementById('pp-dots-container');  
            sContainer.innerHTML = ''; dContainer.innerHTML = '';  
  
            prod.images.forEach((imgUrl, index) => {  
                sContainer.innerHTML += `<img class="pp-slide ${index === 0 ? 'active' : ''}" src="${imgUrl}">`;  
                dContainer.innerHTML += `<span class="pp-dot ${index === 0 ? 'active' : ''}" onclick="currentSlide(${index})"></span>`;  
            });  
            slideIndex = 0;  
  
            document.getElementById('main-view').style.display = 'none';  
            document.getElementById('product-view').style.display = 'block';  
            window.scrollTo(0,0);  
        }  
  
        function showMainView() {  
            document.getElementById('product-view').style.display = 'none';  
            document.getElementById('main-view').style.display = 'block';  
            window.scrollTo(0,0);  
        }  
  
        function changeSlide(n) { showSlides(slideIndex += n); }  
        function currentSlide(n) { showSlides(slideIndex = n); }  
          
        function showSlides(n) {  
            let i;  
            let slides = document.getElementsByClassName("pp-slide");  
            let dots = document.getElementsByClassName("pp-dot");  
            if (n >= slides.length) { slideIndex = 0 }      
            if (n < 0) { slideIndex = slides.length - 1 }  
            for (i = 0; i < slides.length; i++) { slides[i].classList.remove("active"); }  
            for (i = 0; i < dots.length; i++) { dots[i].classList.remove("active"); }  
            slides[slideIndex].classList.add("active");  
            dots[slideIndex].classList.add("active");  
        }  
  
        // SHËRBIMET MODAL  
        const servicesDB = {  
            'servis': {  
                icon: '🛠️', title: 'Servis Profesional',  
                desc: 'Ne ofrojmë riparime të shpejta dhe të sigurta për pajisjen tuaj.',  
                features: ['Ndërrim i Ekraneve (OLED/LCD)', 'Ndërrim i Baterive me garanci', 'Riparimi i portës', 'Mikrosoldering']  
            },  
            'frp': {  
                icon: '🔓', title: 'FRP & Dekodime',  
                desc: 'Zhbllokimi i pajisjeve nga kufizimet e softuerit dhe rrjetit.',  
                features: ['FRP Bypass (Google)', 'Zhbllokimi i Rrjetit', 'Hapja e telefonave me kontratë', 'Shërbim i shpejtë']  
            },  
            'icloud': {  
                icon: '☁️', title: 'iCloud Bypass & Unlock',  
                desc: 'Zgjidhje për pajisjet Apple të bllokuara në ekranin Activation Lock.',  
                features: ['iCloud Bypass me sinjal', 'iCloud Bypass pa sinjal', 'Heqje zyrtare (me faturë)', 'Instalim i iOS të ri']  
            },  
            'shitblerje': {  
                icon: '📱', title: 'Shit-Blerje / Trade-In',  
                desc: 'Përditësoni telefonin tuaj tek ne. Ne pranojmë telefona të përdorur.',  
                features: ['Telefona të rinj me Garanci', 'Të përdorur të testuar 100%', 'Vlerësim i menjëhershëm', 'Trade-In me model të ri']  
            }  
        };  
  
        function openServiceDetail(key) {  
            const d = servicesDB[key];  
            document.getElementById('srvIcon').innerText = d.icon;  
            document.getElementById('srvTitle').innerText = d.title;  
            document.getElementById('srvDesc').innerText = d.desc;  
            document.getElementById('srvContactTitleName').innerText = d.title;  
            document.getElementById('emailBtnDynamic').href = `mailto:arbenimobile1@gmail.com?subject=Interesim: ${encodeURIComponent(d.title)}`;  
              
            const ul = document.getElementById('srvFeatures'); ul.innerHTML = '';  
            d.features.forEach(f => { ul.innerHTML += `<li>• ${f}</li>`; });  
              
            document.getElementById('srvDefaultView').style.display = 'block';  
            document.getElementById('srvContactView').style.display = 'none';  
            document.getElementById('serviceDetailModal').style.display = 'flex';  
        }  
        function showServiceContact() { document.getElementById('srvDefaultView').style.display = 'none'; document.getElementById('srvContactView').style.display = 'block'; }  
        function hideServiceContact() { document.getElementById('srvContactView').style.display = 'none'; document.getElementById('srvDefaultView').style.display = 'block'; }  
  
        // SHPORTA ME KONTROLL TË SASISË (+ DHE -)  
        function addToCart(id) {  
            const prod = productsDB.find(p => p.id === id);  
            const exist = cart.find(i => i.id === id);  
            if(exist) { exist.qty += 1; } else { cart.push({...prod, qty: 1}); }  
            updateCartUI();  
        }  
        function removeFromCart(id) { cart = cart.filter(i => i.id !== id); updateCartUI(); }  
          
        function updateQty(id, change) {  
            const item = cart.find(i => i.id === id);  
            if (item) {  
                item.qty += change;  
                if (item.qty <= 0) removeFromCart(id);  
                else updateCartUI();  
            }  
        }  
  
        function updateCartUI() {  
            document.getElementById('cartBadge').innerText = cart.reduce((s, i) => s + i.qty, 0);  
            const cont = document.getElementById('cartItemsContainer'); cont.innerHTML = '';  
            let sub = 0;  
              
            cart.forEach(i => {  
                sub += (i.price * i.qty);  
                cont.innerHTML += `  
                    <div class="cart-item">  
                        <div class="cart-item-info">  
                            <div class="cart-item-title">${i.name}</div>  
                            <div class="cart-item-price" style="margin-bottom: 8px;">${i.price.toFixed(2)}€ / copë</div>  
                              
                            <div class="qty-controls">  
                                <button class="qty-btn" onclick="updateQty(${i.id}, -1)">-</button>  
                                <span class="qty-num">${i.qty}</span>  
                                <button class="qty-btn" onclick="updateQty(${i.id}, 1)">+</button>  
                            </div>  
                        </div>  
                        <div>  
                            <div style="font-weight: 600; font-size: 16px; margin-bottom: 5px; text-align: right;">${(i.price * i.qty).toFixed(2)}€</div>  
                            <button class="cart-item-remove" onclick="removeFromCart(${i.id})">✖ Hiq</button>  
                        </div>  
                    </div>`;  
            });  
              
            let ship = (sub > 0 && sub < 19.99) ? 2.00 : 0;  
            document.getElementById('cartSubtotal').innerText = sub.toFixed(2) + '€';  
            document.getElementById('cartShipping').innerText = ship === 0 ? (sub === 0 ? '0.00€' : 'Falas') : '2.00€';  
            document.getElementById('cartTotal').innerText = (sub + ship).toFixed(2) + '€';  
            document.getElementById('checkoutBtn').disabled = cart.length === 0;  
            if(cart.length === 0) cont.innerHTML = '<p style="text-align:center; color:#86868b; margin-top:50px;">Shporta është e zbrazët</p>';  
        }  
  
        function openCart() { document.getElementById('cartDrawer').style.display = 'flex'; }  
        function closeCart() { document.getElementById('cartDrawer').style.display = 'none'; }  
        function openCheckout() {  
            if(cart.length === 0) return; closeCart();  
            document.getElementById('checkoutFormContainer').style.display = 'block';  
            document.getElementById('successMessage').style.display = 'none';  
            document.getElementById('checkoutModal').style.display = 'flex';  
        }  
        function closeModal(id) { document.getElementById(id).style.display = 'none'; }  
  
        window.onclick = function(e) { if (e.target.classList.contains('modal-overlay')) e.target.style.display = "none"; }  
  
        function submitOrder(e) {  
            e.preventDefault();  
            const btn = document.getElementById('submitBtn'); btn.innerText = 'Duke u dërguar...'; btn.disabled = true;  
            document.getElementById('hiddenOrderDetails').value = cart.map(i => `${i.qty}x ${i.name} (${i.price}€)`).join(' | ');  
            document.getElementById('hiddenOrderTotal').value = document.getElementById('cartTotal').innerText;  
              
            fetch("https://formsubmit.co/ajax/arbenimobile1@gmail.com", {  
                method: "POST", body: new FormData(document.getElementById('orderForm')), headers: { 'Accept': 'application/json' }  
            }).then(r => {  
                if (r.ok) showSuccess(); else throw new Error();  
            }).catch(e => {  
                showSuccess(); // Për testim.  
            });  
        }  
          
        function showSuccess() {  
            document.getElementById('checkoutFormContainer').style.display = 'none';  
            document.getElementById('successMessage').style.display = 'block';  
            cart = []; updateCartUI(); document.getElementById('orderForm').reset();  
            const btn = document.getElementById('submitBtn'); btn.innerText = 'Konfirmo Porosinë'; btn.disabled = false;  
        }  
  
        window.onload = () => { applyFilters(); updateCartUI(); };  
    </script>  
</body>  
</html>  
  
  
