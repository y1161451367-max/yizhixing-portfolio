const data = {
  cloud: { number: '01 / IP DESIGN', title: '忆朵云 IP 设计', copy: '毕业设计以楚辞云神传说与羌族祥云纹为文化源点，将传统卷云纹转化为三位各具性格的云朵角色，并延展至表情、插画、材质与周边。', tags: ['IP Visual', 'AIGC', 'Character Design'], file: 'files/毕设作品集.pdf' },
  ai: { number: '02 / AIGC VISUAL', title: 'AI 陪伴角色可视化', copy: '围绕 AI 陪聊场景完成小王子角色头像、情绪表情与剧情视觉探索，呈现从 Prompt 到成品精修的生成式工作流。', tags: ['AIGC', 'Prompt', 'Retouching'], file: 'files/AIGC小作品集.pdf' },
  brand: { number: '03 / BRAND IDENTITY', title: '茗堂品牌视觉', copy: '为专注户外定制徒步的工作室建立 Logo 与 VI 应用系统，让自然感、活力和可靠性贯穿每一个触点。', tags: ['Logo', 'VI System', 'Branding'], file: 'files/作品集.pdf' },
  guide: { number: '04 / WAYFINDING', title: '徐汇日月光中心导视', copy: '使用鲜明色彩区分功能区域，并以线性图形和多材料组合构建现代、清晰且富有活力的商业空间导视系统。', tags: ['Wayfinding', 'Spatial Design', 'Signage'], file: 'files/作品集.pdf' }
};

const modal = document.querySelector('#project-modal');
const loader = document.querySelector('.page-loader');
const showLoader = (duration = 420) => { loader.classList.add('is-loading'); window.setTimeout(() => loader.classList.remove('is-loading'), duration); };
const openProject = (key) => { const item = data[key]; showLoader(260); document.querySelector('#modal-number').textContent = item.number; document.querySelector('#modal-title').textContent = item.title; document.querySelector('#modal-copy').textContent = item.copy; document.querySelector('#modal-tags').innerHTML = item.tags.map(tag => `<span>${tag}</span>`).join(''); document.querySelector('#modal-link').href = item.file; window.setTimeout(() => modal.showModal(), 120); };
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => openProject(button.dataset.project)));
document.querySelector('.modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', event => { if (event.target === modal) modal.close(); });
document.querySelectorAll('.filters button').forEach(button => button.addEventListener('click', () => { showLoader(180); document.querySelector('.filters .active').classList.remove('active'); button.classList.add('active'); document.querySelectorAll('.project').forEach(card => card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter); }));
document.querySelector('#copy-phone').addEventListener('click', async event => { await navigator.clipboard.writeText(event.currentTarget.dataset.phone); const button = event.currentTarget; button.classList.add('copied'); const original = button.firstChild; original.textContent = '已复制号码 '; setTimeout(() => { original.textContent = '134 3475 9959 '; button.classList.remove('copied'); }, 1600); });
document.addEventListener('mousemove', event => { document.documentElement.style.setProperty('--x', `${event.clientX}px`); document.documentElement.style.setProperty('--y', `${event.clientY}px`); });
window.addEventListener('scroll', () => document.querySelector('.nav').classList.toggle('scrolled', window.scrollY > 30));
document.querySelectorAll('a[href^="#"], a[target="_blank"]').forEach(link => link.addEventListener('click', () => showLoader()));
lucide.createIcons();
