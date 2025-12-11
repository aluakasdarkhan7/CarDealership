(function(){
  
  const INVENTORY = [
    {id:17,type:'suv',brand:'Toyota',model:'Highlander',price:15000,img:'https://s.auto.drom.ru/img5/catalog/photos/fullsize/toyota/highlander/toyota_highlander_220487.jpg',
      specs: {
        engine: '3.0L V6', power: '220 л.с.', consumption: '12.0 л/100км', year: 2002, transmission: 'Автомат', drive: 'Полный'
      }},
    {id:1,type:'sedan',brand:'Toyota',model:'Camry',price:30000,img:'https://aurum-motors.ru/wp-content/uploads/elementor/thumbs/Toyota-Camry-qnsmdy3pi7uh8bzrpcwm31lld6sulrlpr9t36kzfr4.jpg',
      specs: {
        engine: '2.5L', power: '203 л.с.', consumption: '7.8 л/100км', year: 2024, transmission: 'Автомат', drive: 'Передний'
      }},
    {id:2,type:'suv',brand:'Hyundai',model:'Santa Fe',price:45000,img:'https://bex-auto.com/storage/products/-Dw1GngEb.jpg',
      specs: {
        engine: '2.2L Diesel', power: '199 л.с.', consumption: '6.1 л/100км', year: 2023, transmission: 'Робот', drive: 'Полный'
      }},
    {id:3,type:'sedan',brand:'Honda',model:'Accord',price:28000,img:'https://s.auto.drom.ru/i24285/c/photos/fullsize/honda/accord/honda_accord_1159101.jpg',
      specs: {
        engine: '1.5L Turbo', power: '192 л.с.', consumption: '7.3 л/100км', year: 2023, transmission: 'Вариатор', drive: 'Передний'
      }},
    {id:4,type:'suv',brand:'Kia',model:'Sorento',price:42000,img:'https://www.avtogermes.ru/images/marks/kia/sorento/iv-restajling/colors/_2/kia-sorento-iv-restajling-seryj-metallik.8c3f020911d41356f0ee1d888c25f0c2.png',
      specs: {
        engine: '2.5L', power: '180 л.с.', consumption: '8.7 л/100км', year: 2024, transmission: 'Автомат', drive: 'Полный'
      }}
    ,
    {id:5,type:'suv',brand:'BMW',model:'X5',price:85000,img:'https://mystrongad.com/BMW/2024/X5/2025-BMW-X5-Silver.webp',
      specs: {
        engine: '3.0L', power: '335 л.с.', consumption: '9.2 л/100км', year: 2024, transmission: 'Автомат', drive: 'Полный'
      }},
    {id:6,type:'sedan',brand:'Mercedes-Benz',model:'E-Class',price:75000,img:'https://images.hgmsites.net/lrg/2023-mercedes-benz-e-class-amg-e-53-4matic-sedan-angular-front-exterior-view_100881685_l.jpg',
      specs: {
        engine: '2.0L Turbo', power: '255 л.с.', consumption: '8.0 л/100км', year: 2023, transmission: 'Автомат', drive: 'Задний'
      }},
    {id:7,type:'suv',brand:'Audi',model:'Q7',price:82000,img:'https://cdn.wheel-size.com/thumbs/1d/2b/1d2b6d78b2748220dc7923f9febd5cb1.jpg',
      specs: {
        engine: '3.0L V6', power: '335 л.с.', consumption: '10.5 л/100км', year: 2023, transmission: 'Автомат', drive: 'Полный'
      }},
    {id:8,type:'suv',brand:'Lexus',model:'RX',price:65000,img:'https://a3381f52-5e9a-4db6-babe-4d7b4a71b25f.selcdn.net/media/common/model_gallery_preview_large/tradeins.space/uploads/photo/11739036/957ad26af98cc95a81d9b2158926cfe2.png?v239',
      specs: {
        engine: '3.5L V6', power: '295 л.с.', consumption: '9.0 л/100км', year: 2022, transmission: 'Автомат', drive: 'Полный'
      }},
    {id:9,type:'suv',brand:'Ford',model:'Explorer',price:55000,img:'https://autopremiumgroup.ru/m/_versions/catalog/autos/2022/ford_explorer_2022_vnedorozhnik_5dv/st_line/black4_image_series.jpg',
      specs: {
        engine: '2.3L EcoBoost', power: '300 л.с.', consumption: '9.8 л/100км', year: 2022, transmission: 'Автомат', drive: 'Полный'
      }},
    {id:10,type:'suv',brand:'Chevrolet',model:'Tahoe',price:78000,img:'https://www.major-chevrolet.ru/images/models/model_image/crop_black_cherniy.jpg',
      specs: {
        engine: '5.3L V8', power: '355 л.с.', consumption: '12.5 л/100км', year: 2023, transmission: 'Автомат', drive: 'Полный'
      }},
    {id:11,type:'sedan',brand:'Volkswagen',model:'Passat',price:32000,img:'https://s3.amazonaws.com/cka-dash/212-1121-VG274/model1.png',
      specs: {
        engine: '2.0L TSI', power: '174 л.с.', consumption: '7.5 л/100км', year: 2022, transmission: 'Автомат', drive: 'Передний'
      }},
    {id:12,type:'sedan',brand:'Mazda',model:'6',price:29000,img:'https://imagecdnsa.zigwheels.ae/large/gallery/color/25/250/mazda-6-sedan-color-429727.jpg',
      specs: {
        engine: '2.5L', power: '187 л.с.', consumption: '8.1 л/100км'
      }},
    {id:13,type:'suv',brand:'Nissan',model:'Patrol',price:92000,img:'https://optimumcarrental.ae/wp-content/uploads/2024/03/Nissan-Petrol-2023-Car-Rental-In-Dubai.png',
      specs: {
        engine: '5.6L V8', power: '400 л.с.', consumption: '14.5 л/100км', year: 2023, transmission: 'Автомат', drive: 'Полный'
      }},
    {id:14,type:'sedan',brand:'Tesla',model:'Model 3',price:48000,img:'https://s.auto.drom.ru/i24285/c/photos/fullsize/tesla/model_3/tesla_model_3_1157527.jpg',
      specs: {
        engine: 'Electric', power: '283 л.с.', consumption: '15 кВтч/100км', year: 2024, transmission: 'Редуктор', drive: 'Задний'
      }},
    {id:15,type:'suv',brand:'Porsche',model:'Cayenne',price:110000,img:'https://d2ivfcfbdvj3sm.cloudfront.net/Od7DeZB5sShXhCmP/54271/stills_0640_png/MY2024/54271/54271_st0640_116.webp?c=172&p=164&m=1&o=png&s=WJmNaMFNxTfP_fQwhCsHcy',
      specs: {
        engine: '3.0L Turbo V6', power: '335 л.с.', consumption: '11.2 л/100км', year: 2024, transmission: 'Автомат', drive: 'Полный'
      }},
    {id:16,type:'sedan',brand:'BMW',model:'5 Series',price:68000,img:'https://mkt-vehicleimages-prd.autotradercdn.ca/photos/chrome/Expanded/White/2023BMC070017/2023BMC07001701.jpg',
      specs: {
        engine: '2.0L Turbo', power: '248 л.с.', consumption: '7.9 л/100км', year: 2023, transmission: 'Автомат', drive: 'Полный'
      }}
  ]

  function qs(sel){return document.querySelector(sel)}
  function qsa(sel){return document.querySelectorAll(sel)}

  // --- ГЛОБАЛЬНОЕ СОСТОЯНИЕ ---
  let currentPage = 1;
  const itemsPerPage = 8;
  let comparisonList = [];
  let adminBookings = [];
  let adminSort = { key: 'date', order: 'desc' };

  function formatPrice(n){return n.toLocaleString() + '$'}

  function renderInventory(){
    const container = qs('#inventory'); if(!container) return;
    
    const filter = qs('#filter-type')?.value ?? 'all';
    const searchTerm = qs('#search-input')?.value.toLowerCase().trim() ?? '';

    // 1. Фильтрация
    let items = INVENTORY.filter(i => {
      const typeMatch = filter === 'all' || i.type === filter;
      const searchMatch = searchTerm === '' || (i.brand + ' ' + i.model).toLowerCase().includes(searchTerm);
      return typeMatch && searchMatch;
    });

    // 2. Пагинация
    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const paginatedItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    container.innerHTML = '';

    paginatedItems.forEach(it => {
      const card = document.createElement('article'); card.className='card'; card.dataset.id = it.id;
      // Если фото не найдено, будет показана стандартная иконка
      card.innerHTML = `<img src="${it.img}" alt="${it.brand} ${it.model}" style="width:100%;height:160px;object-fit:cover;border-radius: 8px 8px 0 0;" onerror="this.onerror=null;this.src='assets/img/car-sedan.svg';this.style.objectFit='contain';">
                        <h3>${it.brand} ${it.model}</h3>
                        <ul class="specs">
                          <li><strong>Двигатель:</strong> ${it.specs.engine}</li>
                          <li><strong>Мощность:</strong> ${it.specs.power}</li>
                          <li><strong>Расход:</strong> ${it.specs.consumption}</li>
                        </ul>
                        <p><strong>${formatPrice(it.price)}</strong></p>
                        <div class="card-actions">
                          <button class="icon-btn" data-id="${it.id}" data-action="compare" title="Салыстыруға қосу">&#10753;</button>
                          <button class="btn" data-id="${it.id}" data-action="book">Тест-драйв</button>
                          <button class="btn ghost" data-id="${it.id}" data-action="buy">Сатып алу</button>
                        </div>`;
      container.appendChild(card);
    });

    renderPagination(totalPages);
    populateSelect();
  }

  function renderPagination(totalPages) {
    const container = qs('#pagination-container'); if(!container) return;
    container.innerHTML = '';
    if (totalPages <= 1) return;

    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement('button');
      btn.textContent = i;
      if (i === currentPage) btn.classList.add('active');
      btn.addEventListener('click', () => {
        currentPage = i;
        renderInventory();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      container.appendChild(btn);
    }
  }

  function populateSelect(){
    const sel = qs('#car-select'); if(!sel) return;
    sel.innerHTML = '';
    INVENTORY.forEach(it => {
      const opt = document.createElement('option'); opt.value=it.id; opt.textContent=`${it.brand} ${it.model} — ${formatPrice(it.price)}`;
      sel.appendChild(opt);
    });
  }

  // --- API Integration ---
  // Check if the site is running on a server (like Flask) or as a local file.
  const isApiAvailable = window.location.protocol.startsWith('http');

  async function loadBookings() {
    if (!isApiAvailable) {
      return JSON.parse(localStorage.getItem('bookings_v2') || '[]');
    }
    try {
      const response = await fetch('/api/bookings');
      if (!response.ok) return [];
      return await response.json();
    } catch (e) {
      console.error("API is not available. Falling back to local storage.", e);
      return JSON.parse(localStorage.getItem('bookings_v2') || '[]');
    }
  }

  async function saveBooking(booking) {
    if (!isApiAvailable) {
      const bookings = await loadBookings();
      bookings.push(booking);
      localStorage.setItem('bookings_v2', JSON.stringify(bookings));
      return { ok: true };
    }
    return fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(booking)
    });
  }
  // --- End of API Integration ---

  async function renderBookings(){
    const el = qs('#bookings-list'); if(!el) return;
    const list = await loadBookings();
    if(list.length===0){ el.innerHTML='<p class="muted" style="text-align:center;">Тіркелген тест-драйвтар жоқ.</p>'; return; }
    el.innerHTML = '<h3>Тіркелген тест-драйвтар</h3>';
    list.forEach(b => {
      const d = document.createElement('div'); d.className='card'; d.style.marginTop='8px';
      d.innerHTML = `<strong>${b.name}</strong> | ${b.phone} | ${b.car} | ${b.date}`;
      el.appendChild(d);
    });
  }

  function handleCardActions(e) {
    const button = e.target.closest('button[data-action]');
    const card = e.target.closest('.card');
    if (!card) return;

    const carId = +card.dataset.id;
    const car = INVENTORY.find(c => c.id === carId);

    // Если кликнули на кнопку внутри карточки
    if (button) {
      e.stopPropagation(); // Предотвращаем открытие модального окна
      const action = button.dataset.action;

      if (action === 'book') {
        const select = qs('#car-select');
        if (select) {
          select.value = carId;
          qs('#booking-form').scrollIntoView({ behavior: 'smooth' });
          qs('#name').focus();
        }
      } else if (action === 'buy') {
        alert(`Сатып алу сұранысы: ${car.brand} ${car.model}`);
      } else if (action === 'compare') {
        addToComparison(carId);
      }
    } else {
      // Если кликнули на саму карточку
      showModal(car);
    }
  }

  function showModal(car) {
    const modal = qs('#car-modal');
    const body = qs('#modal-body');
    if (!modal || !body) return;

    body.innerHTML = `
      <img src="${car.img}" alt="${car.brand} ${car.model}" onerror="this.onerror=null;this.src='assets/img/car-sedan.svg';this.style.objectFit='contain';">
      <h2>${car.brand} ${car.model} (${car.specs.year})</h2>
      <ul class="specs">
        <li><strong>Двигатель:</strong> ${car.specs.engine}</li>
        <li><strong>Мощность:</strong> ${car.specs.power}</li>
        <li><strong>Расход:</strong> ${car.specs.consumption}</li>
        <li><strong>Трансмиссия:</strong> ${car.specs.transmission}</li>
        <li><strong>Привод:</strong> ${car.specs.drive}</li>
      </ul>
      <h3>${formatPrice(car.price)}</h3>
      <div class="card-actions" style="margin-top: 24px;">
        <button class="btn" data-id="${car.id}" data-action="book">Тест-драйв</button>
        <button class="btn ghost" data-id="${car.id}" data-action="buy">Сатып алу</button>
      </div>
    `;
    modal.style.display = 'flex';
  }

  function closeModal() {
    const modal = qs('#car-modal');
    if (modal) modal.style.display = 'none';
  }

  function addToComparison(carId) {
    if (comparisonList.includes(carId)) return;
    if (comparisonList.length >= 4) {
      alert('Ең көбі 4 автомобильді салыстыруға болады.');
      return;
    }
    comparisonList.push(carId);
    renderComparison();
  }

  function removeFromComparison(carId) {
    comparisonList = comparisonList.filter(id => id !== carId);
    renderComparison();
  }

  function renderComparison() {
    const section = qs('#comparison-section');
    if (!section) return;

    if (comparisonList.length === 0) {
      section.style.display = 'none';
      return;
    }

    const carsToCompare = comparisonList.map(id => INVENTORY.find(c => c.id === id));
    const specsToCompare = ['brand', 'model', 'price', 'year', 'engine', 'power', 'consumption', 'transmission', 'drive'];
    const specLabels = { brand: 'Бренд', model: 'Модель', price: 'Бағасы', year: 'Жылы', engine: 'Қозғалтқыш', power: 'Қуаты', consumption: 'Шығын', transmission: 'Трансмиссия', drive: 'Жетел' };

    let tableHTML = `<h3>Салыстыру кестесі</h3><div class="comparison-table-container"><table class="comparison-table"><thead><tr><th>Сипаттама</th>`;
    carsToCompare.forEach(car => {
      tableHTML += `<th>${car.brand} ${car.model} <button class="remove icon-btn" data-id="${car.id}">&times;</button></th>`;
    });
    tableHTML += `</tr></thead><tbody>`;

    specsToCompare.forEach(spec => {
      tableHTML += `<tr><td class="spec-label">${specLabels[spec] || spec}</td>`;
      carsToCompare.forEach(car => {
        let value = car[spec] ?? car.specs[spec] ?? '---';
        if (spec === 'price') value = formatPrice(value);
        tableHTML += `<td>${value}</td>`;
      });
      tableHTML += `</tr>`;
    });

    tableHTML += `</tbody></table></div>`;
    section.innerHTML = tableHTML;
    section.style.display = 'block';

    qsa('.comparison-table .remove').forEach(btn => {
      btn.addEventListener('click', () => removeFromComparison(+btn.dataset.id));
    });
  }

  async function renderAdminDashboard() {
    adminBookings = await loadBookings();
    renderAdminStats(adminBookings);
    renderAdminTable(adminBookings);

    // Add event listeners
    const searchInput = qs('#admin-search');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const filteredBookings = adminBookings.filter(b => 
          b.name.toLowerCase().includes(searchTerm) ||
          b.phone.toLowerCase().includes(searchTerm) ||
          b.car.toLowerCase().includes(searchTerm)
        );
        renderAdminTable(filteredBookings);
      });
    }

    qsa('#admin-table th[data-sort]').forEach(th => {
      th.addEventListener('click', () => {
        const sortKey = th.dataset.sort;
        if (adminSort.key === sortKey) {
          adminSort.order = adminSort.order === 'asc' ? 'desc' : 'asc';
        } else {
          adminSort.key = sortKey;
          adminSort.order = 'asc';
        }
        
        const sortedBookings = [...adminBookings].sort((a, b) => {
          const valA = a[sortKey];
          const valB = b[sortKey];
          if (valA < valB) return adminSort.order === 'asc' ? -1 : 1;
          if (valA > valB) return adminSort.order === 'asc' ? 1 : -1;
          return 0;
        });

        renderAdminTable(sortedBookings);
        updateSortIndicators();
      });
    });
  }

  function updateSortIndicators() {
    qsa('#admin-table th[data-sort]').forEach(th => {
      th.classList.remove('sorted-asc', 'sorted-desc');
      if (th.dataset.sort === adminSort.key) {
        th.classList.add(adminSort.order === 'asc' ? 'sorted-asc' : 'sorted-desc');
      }
    });
  }

  function renderAdminStats(bookings) {
    const statsContainer = qs('#admin-stats');
    if (!statsContainer) return;
    
    const carModels = bookings.map(b => b.car);
    const mostPopular = carModels.length ? Object.entries(carModels.reduce((acc, car) => (acc[car] = (acc[car] || 0) + 1, acc), {})).sort((a,b) => b[1] - a[1])[0][0] : 'Жоқ';
    
    const dates = bookings.map(b => b.date);
    const mostActiveDay = dates.length ? Object.entries(dates.reduce((acc, date) => (acc[date] = (acc[date] || 0) + 1, acc), {})).sort((a,b) => b[1] - a[1])[0][0] : 'Жоқ';

    statsContainer.innerHTML = `
      <div class="card"><h3>Жалпы тапсырыстар</h3><p style="font-size: 24px; margin:0;">${bookings.length}</p></div>
      <div class="card"><h3>Ең танымал авто</h3><p style="font-size: 18px; margin:0;">${mostPopular}</p></div>
      <div class="card"><h3>Ең белсенді күн</h3><p style="font-size: 18px; margin:0;">${mostActiveDay}</p></div>
    `;
  }

  function renderAdminTable(bookings) {
    const listContainer = qs('#admin-list');
    if (!listContainer) return;
    listContainer.innerHTML = bookings.map(b => `<tr><td>${b.name}</td><td>${b.phone}</td><td>${b.car}</td><td>${b.date}</td></tr>`).join('');
  }

  // events
  document.addEventListener('DOMContentLoaded', function(){
    // inventory page render & filter
    const filter = qs('#filter-type');
    const search = qs('#search-input');
    if(filter || search){ 
      [filter, search].forEach(el => el?.addEventListener('input', () => {
        currentPage = 1; // Сбрасываем на первую страницу при поиске/фильтрации
        renderInventory();
      })); 
      renderInventory(); 
    }

    const inventoryEl = qs('#inventory'); if(inventoryEl) { inventoryEl.addEventListener('click', handleCardActions); }

    // booking form
    const form = qs('#booking-form');
    if(form){
      form.addEventListener('submit', async function(e){
        e.preventDefault();
        const customerName = qs('#name').value.trim(), customerPhone = qs('#phone').value.trim(), carId = +qs('#car-select').value, bookingDate = qs('#date').value;
        if(!customerName||!customerPhone||!bookingDate){ alert('Өтінеміз, барлық өрістерді толтырыңыз.'); return; }
        const car = INVENTORY.find(i => i.id===carId);
        const bookingData = { name: customerName, phone: customerPhone, car: car.brand + ' ' + car.model, date: bookingDate, created: new Date().toISOString() };
        
        const response = await saveBooking(bookingData);
        if (response.ok) {
          alert('Рахмет! Сіз тест-драйвқа сәтті жазылдыңыз.');
          form.reset();
          renderBookings();
        } else {
          alert('Қате пайда болды. Серверге жіберу мүмкін болмады.');
        }
      });
      renderBookings();
    }

    // admin page - download JSON
    const dlBtn = qs('#download-json');
    if(dlBtn){
      dlBtn.addEventListener('click', async function(){
        const bookings = await loadBookings();
        const data = JSON.stringify(bookings, null, 2);
        const blob = new Blob([data], {type:'application/json'});
        const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'bookings.json'; a.click();
      });
      renderAdminDashboard();
    }

    // contact form demo
    const contact = qs('#contact-form');
    if(contact){
      contact.addEventListener('submit', function(e){
        e.preventDefault();
        qs('#contact-result').textContent = 'Хабарламаңыз қабылданды. Біз сізбен жақын арада хабарласамыз.';
        contact.reset();
      });
    }

    // Modal events
    const modal = qs('#car-modal');
    if (modal) modal.addEventListener('click', (e) => { if (e.target === modal || e.target.classList.contains('modal-close')) closeModal(); });
    qs('#modal-body')?.addEventListener('click', e => e.stopPropagation()); // Prevent closing modal when clicking inside

    // hero image fallback
    const heroImg = qs('.hero-visual img');
    if(heroImg){ heroImg.onerror = ()=>heroImg.style.display='none' }

    // --- Chat Widget Logic ---
    const chatBubble = qs('#chat-bubble');
    const chatWidget = qs('#chat-widget');
    const chatClose = qs('#chat-close');
    const chatBody = qs('#chat-body');
    const chatInput = qs('#chat-input');
    const chatSend = qs('#chat-send');

    if (chatBubble && chatWidget && chatClose && chatBody && chatInput && chatSend) {
      chatBubble.addEventListener('click', () => {
        chatWidget.style.display = 'flex';
        chatBubble.style.display = 'none';
      });

      chatClose.addEventListener('click', () => {
        chatWidget.style.display = 'none';
        chatBubble.style.display = 'block';
      });

      const sendMessage = async () => {
        const userPrompt = chatInput.value.trim();
        if (!userPrompt) return;

        // Display user message
        const userMessageEl = document.createElement('div');
        userMessageEl.className = 'chat-message user';
        userMessageEl.textContent = userPrompt;
        chatBody.appendChild(userMessageEl);
        chatInput.value = '';
        chatBody.scrollTop = chatBody.scrollHeight;

        // Display typing indicator
        const typingEl = document.createElement('div');
        typingEl.className = 'chat-message typing';
        typingEl.textContent = 'Печатает';
        chatBody.appendChild(typingEl);
        chatBody.scrollTop = chatBody.scrollHeight;

        try {
          const response = await fetch('/ask', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ prompt: userPrompt }) });
          const data = await response.json();
          
          // Remove typing indicator
          typingEl.remove();

          // Display bot response
          const botMessageEl = document.createElement('div');
          botMessageEl.className = 'chat-message bot';
          botMessageEl.textContent = data.response || 'Извините, произошла ошибка.';
          chatBody.appendChild(botMessageEl);
          chatBody.scrollTop = chatBody.scrollHeight;
        } catch (error) {
          console.error('Chat bot error:', error);
          typingEl.remove(); // Also remove on error
        }
      };

      chatSend.addEventListener('click', sendMessage);
      chatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });
    }
  });
})();
