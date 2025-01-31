const list = [
    {
        name: 'Туфли народные женские',
        category: 'shoes',
        description: 'Сплошная подошва, наборной каблук',
        retail: 2150,
        wholesale: 1720,
        ozon: 'https://vk.com',
        wildberries: 'https://vk.com',
        image: './assets/images/shoes1.jpg'
    },
    {
        name: 'Туфли народные женские',
        category: 'shoes',
        description: 'Раздельная подошва, наборной каблук',
        retail: 2150,
        wholesale: 1720,
        ozon: 'https://vk.com',
        wildberries: 'https://vk.com',
        image: './assets/images/shoes2.jpg'
    },
    {
        name: 'Туфли народные женские',
        category: 'shoes',
        description: 'Сплошная подошва, обтяжной каблук',
        retail: 2150,
        wholesale: 1720,
        ozon: 'https://vk.com',
        wildberries: 'https://vk.com',
        image: './assets/images/shoes3.jpg'
    },
    {
        name: 'Туфли народные женские',
        category: 'shoes',
        description: 'Раздельная подошва, обтяжной каблук',
        retail: 2150,
        wholesale: 1720,
        ozon: 'https://vk.com',
        wildberries: 'https://vk.com',
        image: './assets/images/shoes4.jpg'
    },
    {
        name: 'Туфли народные женские',
        category: 'shoes',
        description: 'Сплошная подошва до каблука, обтяжной каблук',
        retail: 2150,
        wholesale: 1720,
        ozon: 'https://vk.com',
        wildberries: 'https://vk.com',
        image: './assets/images/shoes5.jpg'
    },
    {
        name: 'Сапоги мужские',
        category: 'boots',
        description: 'Сплошная подошва, наборной каблук',
        retail: 3200,
        wholesale: 2560,
        ozon: 'https://vk.com',
        wildberries: 'https://vk.com',
        image: './assets/images/boots1.jpg'
    },
    {
        name: 'Сапоги мужские',
        category: 'boots',
        description: 'Раздельная подошва, наборной каблук',
        retail: 3200,
        wholesale: 2560,
        ozon: 'https://vk.com',
        wildberries: 'https://vk.com',
        image: './assets/images/boots2.jpg'
    },
    {
        name: 'Сапоги женские',
        category: 'boots',
        description: 'Сплошная подошва, наборной каблук',
        retail: 3200,
        wholesale: 2560,
        ozon: 'https://vk.com',
        wildberries: 'https://vk.com',
        image: './assets/images/boots3.jpeg'
    },
    {
        name: 'Сапоги женские',
        category: 'boots',
        description: 'Раздельная подошва, наборной каблук',
        retail: 3200,
        wholesale: 2560,
        ozon: 'https://vk.com',
        wildberries: 'https://vk.com',
        image: './assets/images/boots4.jpg'
    },
    {
        name: 'Полусапожки “Кадрильки”',
        category: 'quadrilles',
        description: 'Сплошная подошва, наборной каблук',
        retail: 2700,
        wholesale: 2040,
        ozon: 'https://vk.com',
        wildberries: 'https://vk.com',
        image: './assets/images/quadrilles1.jpg'
    },
    {
        name: 'Полусапожки “Кадрильки”',
        category: 'quadrilles',
        description: 'Раздельная подошва, наборной каблук',
        retail: 2700,
        wholesale: 2040,
        ozon: 'https://vk.com',
        wildberries: 'https://vk.com',
        image: './assets/images/quadrilles2.jpg'
    },
    {
        name: 'Полусапожки “Кадрильки”',
        category: 'quadrilles',
        description: 'На молнии, сплошная подошва, наборной каблук',
        retail: 2700,
        wholesale: 2040,
        ozon: 'https://vk.com',
        wildberries: 'https://vk.com',
        image: './assets/images/quadrilles3.jpg'
    },
    {
        name: 'Полусапожки “Кадрильки”',
        category: 'quadrilles',
        description: 'Раздельная подошва, обтяжной каблук',
        retail: 2700,
        wholesale: 2040,
        ozon: 'https://vk.com',
        wildberries: 'https://vk.com',
        image: './assets/images/quadrilles4.jpg'
    },
    {
        name: 'Полусапожки “Кадрильки”',
        category: 'quadrilles',
        description: 'Высокие, сплошная подошва, наборной каблук',
        retail: 2700,
        wholesale: 2040,
        ozon: 'https://vk.com',
        wildberries: 'https://vk.com',
        image: './assets/images/quadrilles5.jpg'
    },
    {
        name: 'Полусапожки “Кадрильки”',
        category: 'quadrilles',
        description: 'Сплошная подошва до каблука, обтяжной каблук',
        retail: 2700,
        wholesale: 2040,
        ozon: 'https://vk.com',
        wildberries: 'https://vk.com',
        image: './assets/images/quadrilles6.jpg'
    },
    {
        name: 'Джазовки',
        category: 'other',
        description: 'Джазовки кожанные',
        retail: 950,
        wholesale: 760,
        ozon: 'https://vk.com',
        wildberries: 'https://vk.com',
        image: './assets/images/other1.jpg'
    },
    {
        name: 'Джазовки',
        category: 'other',
        description: 'Джазовки высокие кожанные',
        retail: 1450,
        wholesale: 1160,
        ozon: 'https://vk.com',
        wildberries: 'https://vk.com',
        image: './assets/images/other2.jpg'
    },
    {
        name: 'Туфли бальные мужские',
        category: 'shoes',
        description: 'Джазовки высокие кожанные',
        retail: 1650,
        wholesale: 1320,
        ozon: 'https://vk.com',
        wildberries: 'https://vk.com',
        image: './assets/images/shoes6.jpg'
    },
    {
        name: 'Туфли бальные детские',
        category: 'shoes',
        description: 'Джазовки высокие кожанные',
        retail: 1950,
        wholesale: 1560,
        ozon: 'https://vk.com',
        wildberries: 'https://vk.com',
        image: './assets/images/shoes7.jpg'
    },
    {
        name: 'Ичиги',
        category: 'other',
        description: 'Джазовки высокие кожанные',
        retail: 3500,
        wholesale: 2800,
        ozon: 'https://vk.com',
        wildberries: 'https://vk.com',
        image: './assets/images/other3.jpeg'
    }
]

document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    const swiperWrapper = document.getElementById("swiper-wrapper");
    const filterButtons = document.querySelectorAll(".filter-btn");
    let swiperInstance = null;

    function renderProducts(category) {
        productList.innerHTML = "";
        swiperWrapper.innerHTML = "";

        const filteredList = category === "all" ? list : list.filter(item => item.category === category);

        filteredList.forEach(item => {
            const productCard = `
                <div class="bg-white p-2 rounded-[2rem] flex flex-col h-full">
                    <img src="${item.image}" alt="${item.name}" class="w-full aspect-[4/3] object-cover border border-[#00000010] rounded-[24px]">
                    <div class="w-full flex flex-col gap-4 h-full justify-between p-4">
                        <div>
                            <h2 class="text-2xl font-bold">${item.name}</h2>
                            <p class="text-black/50">${item.description}</p>
                        </div>
                        <div class="flex justify-between h-full items-end">
                            <div>
                                <p><span class="opacity-50">Опт: </span><span class="font-bold">${item.wholesale} ₽</span></p>
                                <p><span class="opacity-50">Розница: </span><span class="font-bold">${item.retail} ₽</span></p>
                            </div>
                            <div class="flex gap-2">
                                <a href="${item.ozon}" target="_blank" class="w-[50px] h-[50px] bg-black text-white rounded-full flex items-center justify-center"><img src="./assets/svg/wildberries.svg"></a>
                                <a href="${item.wildberries}" target="_blank" class="w-[50px] h-[50px] bg-black text-white rounded-full flex items-center justify-center"><img src="./assets/svg/ozon.svg"></a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            const gridCard = document.createElement("div");
            gridCard.innerHTML = productCard;
            gridCard.className = "h-full";
            productList.appendChild(gridCard);
            const swiperSlide = document.createElement("div");
            swiperSlide.className = "swiper-slide";
            swiperSlide.innerHTML = productCard;
            swiperWrapper.appendChild(swiperSlide);
        });
        if (window.innerWidth < 768) {
            if (swiperInstance) swiperInstance.destroy(true, true);
            swiperInstance = new Swiper(".swiper", {
                slidesPerView: 1,
                spaceBetween: 16,
                autoHeight: true,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        }
    }

    function updateActiveButton(selectedCategory) {
        filterButtons.forEach(button => {
            if (button.getAttribute("data-category") === selectedCategory) {
                button.classList.add("bg-black", "text-white");
            } else {
                button.classList.remove("bg-black", "text-white");
            }
        });
    }

    renderProducts("all");
    updateActiveButton("all");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");
            renderProducts(category);
            updateActiveButton(category);
        });
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth < 768 && !swiperInstance) {
            renderProducts("all");
        } else if (window.innerWidth >= 768 && swiperInstance) {
            swiperInstance.destroy(true, true);
            swiperInstance = null;
        }
    });
});

const swiperScript = document.createElement("script");
swiperScript.src = "https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js";
document.body.appendChild(swiperScript);
