
// Accordion
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.accordion-header').forEach(btn => {
    btn.addEventListener('click', () => {
      const body = btn.nextElementSibling;
      body.style.display = body.style.display === 'block' ? 'none' : 'block';
    });
  });

  // Character filtering (simple mock data)
  const characters = [
    { name: '謝恩', nation: 'Desert Alliance', role: '主角' },
    { name: '愛麗絲', nation: 'Starlight Empire', role: '主角' },
    { name: '費拉妲・凜渥', nation: 'Desert Alliance', role: '配角' },
    { name: '莉莉安娜', nation: 'Starlight Empire', role: '配角' }
  ];
  const grid = document.getElementById('characterGrid');
  if (grid) { renderCharacters(characters); }
  function renderCharacters(data) {
    grid.innerHTML = data.map(c => \`<div class="card-char"><h4>\${c.name}</h4><p>\${c.role}</p><small>\${c.nation}</small></div>\`).join('');
  }
  const searchInput = document.getElementById('searchInput');
  const nationFilter = document.getElementById('nationFilter');
  if (searchInput) {
    searchInput.addEventListener('input', () => filterChars());
    nationFilter.addEventListener('change', () => filterChars());
  }
  function filterChars() {
    const term = searchInput.value.toLowerCase();
    const nationVal = nationFilter.value;
    const filtered = characters.filter(c => {
      const matchName = c.name.toLowerCase().includes(term);
      const matchNation = nationVal === 'all' || c.nation === nationVal;
      return matchName && matchNation;
    });
    renderCharacters(filtered);
  }

  // Map interaction
  const worldMap = document.getElementById('world-map');
  const tooltip = document.getElementById('map-tooltip');
  if (worldMap) {
    worldMap.addEventListener('mousemove', e => {
      tooltip.style.left = e.pageX + 'px';
      tooltip.style.top = e.pageY + 'px';
    });
    worldMap.addEventListener('click', e => {
      tooltip.classList.remove('hidden');
      tooltip.textContent = '此區域尚待標註';
    });
  }
});
