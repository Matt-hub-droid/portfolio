// EDIT HERE: Replace each placeholder concept with a real project when ready.
// You can change the title, description, tools, category, and nextSteps.
// When you've finished a project, set placeholder: false and replace nextSteps
// with truthful project highlights. Add a real project URL in link (optional).
const projects = [
  {
    id: 'excel-dashboard',
    title: 'Business Performance Dashboard',
    category: 'excel',
    tools: ['Excel', 'PivotTables', 'Dashboards'],
    description: 'An example dashboard concept for tracking revenue, costs, growth, and key business performance metrics.',
    visual: 'bars',
    placeholder: true,
    nextSteps: ['Find a public or synthetic business dataset', 'Clean and analyze data using Excel', 'Build a dashboard and explain the key findings'],
    link: ''
  },
  {
    id: 'powerbi-sales',
    title: 'Sales & Customer Insights',
    category: 'powerbi',
    tools: ['Power BI', 'Visualization', 'DAX'],
    description: 'An example interactive report concept exploring sales trends, product performance, and customer segments.',
    visual: 'line',
    placeholder: true,
    nextSteps: ['Prepare a dataset and define questions', 'Model the data in Power BI', 'Create interactive charts and a short findings summary'],
    link: ''
  },
  {
    id: 'sql-customers',
    title: 'Customer Behavior Analysis',
    category: 'sql',
    tools: ['SQL', 'Joins', 'CTEs'],
    description: 'An example SQL case study concept investigating purchasing patterns and returning-customer behavior.',
    visual: 'code',
    placeholder: true,
    nextSteps: ['Load a sample customer/orders dataset', 'Write SQL queries with joins and aggregates', 'Publish queries and a readable interpretation'],
    link: ''
  },
  {
    id: 'business-revenue',
    title: 'Rental Revenue Optimization',
    category: 'business',
    tools: ['Business Analytics', 'Excel', 'Strategy'],
    description: 'An example concept studying seasonal demand, occupancy, and pricing for a rental-property business.',
    visual: 'metrics',
    placeholder: true,
    nextSteps: ['Use anonymized or synthetic rental data only', 'Explore seasonality, occupancy, and pricing', 'Present defensible recommendations without disclosing private business data'],
    link: ''
  }
];

const grid = document.querySelector('#project-grid');
const dialog = document.querySelector('#project-dialog');
const dialogContent = document.querySelector('#dialog-content');
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
function projectVisual(type) {
  if(type === 'bars') return '<div class="mini-window"><div class="mini-top"><span>REVENUE OVERVIEW</span><span>EXAMPLE CHART</span></div><div class="mini-bars"><b></b><b></b><b></b><b></b><b></b><b></b></div></div>';
  if(type === 'line') return '<div class="mini-window"><div class="mini-top"><span>CUSTOMER TRENDS</span><span>EXAMPLE CHART</span></div><div class="mini-line"><svg viewBox="0 0 300 85" aria-hidden="true"><path d="M0 71 Q28 55 44 62 T88 42 T132 54 T170 30 T210 35 T253 20 T300 7" fill="none" stroke="#9ab1ff" stroke-width="3"/><path d="M0 71 Q28 55 44 62 T88 42 T132 54 T170 30 T210 35 T253 20 T300 7 L300 85 L0 85Z" fill="#8baaff20"/></svg></div></div>';
  if(type === 'code') return '<div class="mini-window sql"><div class="mini-top"><span>analysis.sql</span><span>EXAMPLE QUERY</span></div><div class="mini-code"><span class="kw">SELECT</span> customer_id,<br> &nbsp; <span class="kw">COUNT</span>(*) <span class="kw">AS</span> orders,<br> &nbsp; <span class="kw">SUM</span>(total) <span class="kw">AS</span> revenue<br><span class="kw">FROM</span> <span class="str">orders</span><br><span class="kw">GROUP BY</span> customer_id;</div></div>';
  return '<div class="mini-window"><div class="mini-top"><span>RENTAL ANALYTICS</span><span>EXAMPLE METRICS</span></div><div class="mini-statrow"><span>↗<small>SEASONALITY</small></span><span>▦<small>OCCUPANCY</small></span><span>◎<small>PRICING</small></span></div></div>';
}
function renderProjects(filter='all') {
  const filtered = projects.filter(p => filter==='all'||p.category===filter||p.tools.some(t => t.toLowerCase().replace(/\s/g,'')===filter));
  grid.innerHTML = filtered.map(p => `<article class="project-card"><div class="project-image"><span class="placeholder-badge">${p.placeholder ? 'PLACEHOLDER PROJECT' : 'COMPLETED PROJECT'}</span>${projectVisual(p.visual)}</div><div class="project-body"><div class="project-tags">${p.tools.map(t=>`<span class="tag">${escapeHTML(t)}</span>`).join('')}</div><h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.description)}</p><button type="button" class="project-view" data-project="${escapeHTML(p.id)}">${p.placeholder?'View project plan':'View project details'} <span aria-hidden="true">↗</span></button></div></article>`).join('');
}
renderProjects();
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(b => {b.classList.remove('active');b.setAttribute('aria-pressed','false')});
  button.classList.add('active');button.setAttribute('aria-pressed','true');renderProjects(button.dataset.filter);
}));
grid.addEventListener('click', e => {
  const button=e.target.closest('[data-project]');if(!button)return;
  const p=projects.find(item=>item.id===button.dataset.project);if(!p)return;
  const heading=p.placeholder?'How I could build this project':'Project highlights';
  dialogContent.innerHTML=`<h2 id="dialog-title">${escapeHTML(p.title)}</h2><p>${escapeHTML(p.description)}</p><h3>${heading}</h3><ul>${p.nextSteps.map(step=>`<li>${escapeHTML(step)}</li>`).join('')}</ul>${p.link?`<p><a class="text-link" target="_blank" rel="noopener noreferrer" href="${escapeHTML(p.link)}">Open project ↗</a></p>`:''}`;
  dialog.showModal();
});
document.querySelector('#dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
document.querySelector('#year').textContent=new Date().getFullYear();
const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav-links');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close menu':'Open menu')});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open menu')}));
