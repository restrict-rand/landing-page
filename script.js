/**
 * UMAMI Restaurant - Main JavaScript
 * Optimized with throttling, lazy loading, and accessibility improvements
 */

// ДАННЫЕ МЕНЮ
const menuItems = [
    // СУШИ (6 шт)
    { id: 1, category: 'sushi', title: 'Филадельфия Люкс', price: '790 ₽', desc: 'Свежайший лосось, сливочный сыр, хрустящий огурец и спелое авокадо.', img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { id: 2, category: 'sushi', title: 'Дракон Ролл', price: '850 ₽', desc: 'Копченый угорь, сливочный сыр, кунжут, соус унаги и икра тобико.', img: 'https://images.unsplash.com/photo-1761315412187-1d3b5f327d01?q=80&w=776&auto=format&fit=crop' },
    { id: 3, category: 'sushi', title: 'Острый Тунец', price: '650 ₽', desc: 'Свежий тунец, фирменный острый соус спайси, огурец и зеленый лук.', img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { id: 4, category: 'sushi', title: 'Нигири Сет', price: '1200 ₽', desc: 'Большое ассорти суши: лосось, тунец, тигровая креветка, угорь.', img: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { id: 5, category: 'sushi', title: 'Калифорния Краб', price: '690 ₽', desc: 'Настоящее мясо снежного краба, авокадо, огурец, японский майонез.', img: 'https://images.unsplash.com/photo-1558985250-27a406d64cb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { id: 6, category: 'sushi', title: 'Маки с Лососем', price: '450 ₽', desc: 'Традиционные небольшие роллы с лососем и рисом в листе нори.', img: 'https://images.unsplash.com/photo-1548907368-35e5ea8cbc8a?q=80&w=800&auto=format&fit=crop' },
    // ВОК И РАМЕН (6 шт)
    { id: 7, category: 'wok', title: 'Тонкоцу Рамен', price: '550 ₽', desc: 'Наваристый свиной бульон, пшеничная лапша, маринованное яйцо.', img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { id: 8, category: 'wok', title: 'Пад Тай', price: '490 ₽', desc: 'Рисовая лапша, обжаренная с креветками, яйцом, арахисом.', img: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { id: 9, category: 'wok', title: 'Том Ям', price: '620 ₽', desc: 'Знаменитый тайский кисло-острый суп на кокосовом молоке.', img: 'https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?auto=format&fit=crop&w=800&q=80' },
    { id: 10, category: 'wok', title: 'Жареный Рис', price: '420 ₽', desc: 'Рис жасмин, обжаренный на воке с куриным филе и овощами.', img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80' },
    { id: 11, category: 'wok', title: 'Удон с Говядиной', price: '510 ₽', desc: 'Толстая пшеничная лапша удон в соусе черный перец.', img: 'https://images.unsplash.com/photo-1478749485505-2a903a729c63?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { id: 12, category: 'wok', title: 'Мисо Суп', price: '250 ₽', desc: 'Японский суп на основе пасты мисо с водорослями вакаме.', img: 'https://images.unsplash.com/photo-1684866907269-2248f7334a09?w=500&auto=format&fit=crop&q=60' },
    // НАПИТКИ (6 шт)
    { id: 13, category: 'drinks', title: 'Матча Латте', price: '350 ₽', desc: 'Японский порошковый зеленый чай матча с кокосовым молоком.', img: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { id: 14, category: 'drinks', title: 'Лимонад Юдзу', price: '300 ₽', desc: 'Освежающий авторский лимонад на основе японского цитруса.', img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { id: 15, category: 'drinks', title: 'Японское Пиво', price: '400 ₽', desc: 'Импортное японское светлое пиво (Asahi / Kirin).', img: 'https://images.unsplash.com/photo-1700325339552-27abdc74b68c?q=80&w=800&auto=format&fit=crop' },
    { id: 16, category: 'drinks', title: 'Саке', price: '500 ₽', desc: 'Традиционный японский алкогольный напиток из риса.', img: 'https://plus.unsplash.com/premium_photo-1723673092212-3bef31bceeba?q=80&w=800&auto=format&fit=crop' },
    { id: 17, category: 'drinks', title: 'Зеленый Чай Сенча', price: '250 ₽', desc: 'Чайник классического японского зеленого чая.', img: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { id: 18, category: 'drinks', title: 'Манго Шейк', price: '450 ₽', desc: 'Густой и насыщенный шейк из спелого тайского манго.', img: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }
];

// DOM Elements
const menuGrid = document.getElementById('menu-grid');
const tabs = document.querySelectorAll('.tab-btn');
const modal = document.getElementById('food-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalPrice = document.getElementById('modal-price');
const closeModal = document.querySelector('.close-modal');
const mobileBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');
const navbar = document.getElementById('navbar');
const scrollToTopBtn = document.getElementById('scroll-to-top');
const heroSection = document.getElementById('hero');
const heroOverlay = document.querySelector('.hero-overlay');

// Утилита: Throttle для scroll событий
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// РЕНДЕРИНГ МЕНЮ
function renderMenu(category) {
    if (!menuGrid) return;
    
    menuGrid.innerHTML = '';
    const filteredItems = category === 'all' ? menuItems : menuItems.filter(item => item.category === category);
    
    filteredItems.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'menu-item';
        card.setAttribute('data-id', item.id);
        card.setAttribute('role', 'listitem');
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <img src="${item.img}" alt="${item.title}" loading="lazy">
            <div class="menu-info">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
                <span class="price">${item.price}</span>
            </div>
        `;
        card.addEventListener('click', () => openModal(item));
        menuGrid.appendChild(card);
    });
}

// МОДАЛЬНОЕ ОКНО
function openModal(item) {
    if (!modal || !modalImg || !modalTitle || !modalDesc || !modalPrice) return;
    
    modalImg.src = item.img;
    modalImg.alt = item.title;
    modalTitle.textContent = item.title;
    modalDesc.textContent = item.desc;
    modalPrice.textContent = item.price;
    modal.classList.add('active');
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    
    // Accessibility: фокус на кнопку закрытия
    closeModal.focus();
}

function closeModalHandler() {
    if (!modal) return;
    modal.classList.remove('active');
    modal.hidden = true;
    document.body.style.overflow = 'auto';
}

// МОБИЛЬНОЕ МЕНЮ
function toggleMobileMenu() {
    if (!navLinks || !mobileBtn) return;
    
    const isActive = navLinks.classList.toggle('active');
    const icon = mobileBtn.querySelector('i');
    
    if (icon) {
        icon.classList.toggle('fa-bars', !isActive);
        icon.classList.toggle('fa-times', isActive);
    }
    
    mobileBtn.setAttribute('aria-expanded', isActive);
    mobileBtn.setAttribute('aria-label', isActive ? 'Закрыть меню' : 'Открыть меню');
}

// Закрытие мобильного меню при клике на ссылку
function closeMobileMenuOnLink() {
    if (!navLinks || !mobileBtn) return;
    navLinks.classList.remove('active');
    const icon = mobileBtn.querySelector('i');
    if (icon) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    }
    mobileBtn.setAttribute('aria-expanded', 'false');
    mobileBtn.setAttribute('aria-label', 'Открыть меню');
}

// ЛИПКОЕ МЕНЮ + SCROLL TO TOP
const handleScroll = throttle(() => {
    const scrollY = window.scrollY;
    
    // Navbar shrink
    if (navbar) {
        if (scrollY > 50) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.background = 'rgba(18, 18, 18, 0.98)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.background = 'rgba(18, 18, 18, 0.9)';
        }
    }
    
    // Scroll to top button
    if (scrollToTopBtn) {
        if (scrollY > 500) {
            scrollToTopBtn.classList.add('visible');
            scrollToTopBtn.hidden = false;
        } else {
            scrollToTopBtn.classList.remove('visible');
            setTimeout(() => { scrollToTopBtn.hidden = true; }, 300);
        }
    }
    
    // Hero overlay fade
    if (heroSection && heroOverlay) {
        const heroHeight = heroSection.offsetHeight;
        let opacity = scrollY / (heroHeight * 0.9);
        opacity = Math.max(0, Math.min(1, opacity));
        heroOverlay.style.opacity = opacity;
    }
}, 16); // ~60fps

// ПРОКРУТКА НАВЕРХ
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ИНИЦИАЛИЗАЦИЯ
function init() {
    // Рендер меню
    renderMenu('all');
    
    // Табы меню
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');
            renderMenu(tab.dataset.category);
        });
    });
    
    // Модальное окно
    if (closeModal) {
        closeModal.addEventListener('click', closeModalHandler);
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModalHandler();
        });
    }
    
    // Закрытие модалки по ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModalHandler();
        }
    });
    
    // Мобильное меню
    if (mobileBtn) {
        mobileBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Закрытие мобильного меню при клике на ссылки
    if (navLinks) {
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMobileMenuOnLink);
        });
    }
    
    // Scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Scroll to top
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', scrollToTop);
    }
}

// Запуск при загрузке DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
