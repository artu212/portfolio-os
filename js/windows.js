const linkedin = 'https://www.linkedin.com/in/arthur-costa-258835216/';
const github = 'https://github.com/artu212';
const email = 'arthurdrc13@gmail.com';
const phone = '31998843146';
const resumePath = 'assets/documents/Currículo Arthur.pdf';

const apps = {
    about: {
        title: 'Sobre mim',
        content: `<h3>Olá, eu sou Arthur Costa.</h3>
      <p>Sou estudante de Análise e Desenvolvimento de Sistemas e estou construindo minha trajetória no desenvolvimento de software. Minha experiência na área administrativa me trouxe organização, atenção aos processos e contato com sistemas corporativos.</p>
      <p>Atualmente estudo programação e desenvolvo projetos para transformar conhecimento em experiência prática. Meu objetivo é crescer na área de tecnologia e explorar o desenvolvimento Full Stack.</p>`
    },
    projects: {
        title: 'Meus projetos',
        content: `<h3>Projetos em destaque</h3>
      <div class="info-card">
        <h4>MathLab</h4>
        <p>Calculadora web acadêmica com módulos de matemática, histórico, gráficos e recursos de PWA.</p>
        <span class="tag">HTML</span><span class="tag">CSS</span><span class="tag">JavaScript</span>
        <div class="window-links">
          <a href="https://mathlab-calculadora.netlify.app/" target="_blank" rel="noopener noreferrer">Abrir MathLab ↗</a>
          <a href="https://artu212.github.io/MathLab/" target="_blank" rel="noopener noreferrer">GitHub Pages ↗</a>
          <a href="https://github.com/artu212/MathLab" target="_blank" rel="noopener noreferrer">Código-fonte ↗</a>
        </div>
      </div>
      <div class="info-card">
        <h4>Essence</h4>
        <p>Sistema web de agendamentos para estabelecimentos e profissionais de serviços.</p>
        <span class="tag">HTML</span><span class="tag">CSS</span><span class="tag">JavaScript</span>
        <div class="window-links">
          <a href="https://artu212.github.io/Essence/" target="_blank" rel="noopener noreferrer">Abrir Essence ↗</a>
          <a href="https://github.com/artu212/Essence" target="_blank" rel="noopener noreferrer">Código-fonte ↗</a>
        </div>
      </div>`
    },
    skills: {
        title: 'Tecnologias',
        content: `<h3>Minha stack em evolução</h3>
      <p>Conhecimentos e tecnologias que estou praticando:</p>
      <div><span class="tag">Lógica de programação</span><span class="tag">Java</span><span class="tag">POO</span><span class="tag">Git / GitHub</span><span class="tag">HTML</span><span class="tag">CSS</span><span class="tag">JavaScript</span><span class="tag">SQL</span></div>
      <p>Estou em constante aprendizado. A lista representa minha trajetória de estudos, não uma certificação de proficiência.</p>`
    },
    career: {
        title: 'Trajetória',
        content: `<h3>Minha trajetória</h3>
      <div class="info-card"><h4>Hidrogeo Engenharia e Gestão de Projetos</h4><p>Assistente Administrativo — atualmente. Apoio a processos internos, planilhas, informações em sistemas e rotinas administrativas.</p></div>
      <div class="info-card"><h4>Grupo Mira (Cetus Oncologia)</h4><p>Aprendiz Financeiro / Estagiário Contábil — 2023 a 2024. Organização de documentos, controles e suporte a rotinas financeiras.</p></div>
      <div class="info-card"><h4>Formação</h4><p>Tecnólogo em Análise e Desenvolvimento de Sistemas — cursando. Técnico em Administração — concluído.</p></div>`
    },
    resume: {
        title: 'Currículo',
        content: `<h3>Currículo profissional</h3>
      <p>Consulte meu currículo em PDF ou faça o download.</p>
      <div class="window-links">
        <a href="${resumePath}" target="_blank" rel="noopener noreferrer">Visualizar PDF ↗</a>
        <a href="${resumePath}" download="Currículo Arthur.pdf">Baixar currículo ↓</a>
      </div>
      <p class="resume-notice">Atenção: esta cópia contém os dados pessoais presentes no currículo original. Antes de publicar o site, substitua-a por uma versão pública sem endereço residencial.</p>`
    },
    contact: {
        title: 'Contato',
        content: `<h3>Vamos conversar?</h3>
      <p>Estou aberto a conexões, oportunidades e conversas sobre tecnologia e desenvolvimento.</p>
      <div class="info-card"><p><strong>Telefone:</strong> <a href="tel:+55${phone}">(31) 99884-3146</a></p>
      <p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p></div>
      <div class="window-links">
        <a href="${linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        <a href="${github}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        <a href="mailto:${email}">Enviar e-mail ↗</a>
        <a href="https://wa.me/55${phone}" target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>
      </div>`
    }
};
const layer = document.getElementById('window-layer');
const openWindows = new Map();
let topZ = 20;

function syncScrollLock() {
    const hasWindows = openWindows.size > 0;
    document.documentElement.classList.toggle('window-open', hasWindows);
    document.body.classList.toggle('window-open', hasWindows);
}


function focusWindow(id) {
    const entry = openWindows.get(id);
    if (!entry) return;
    entry.window.hidden = false;
    entry.window.style.zIndex = String(++topZ);
}

function closeWindow(id) {
    const entry = openWindows.get(id);
    if (!entry) return;
    entry.window.remove();
    openWindows.delete(id);
    syncScrollLock();
}

function openWindow(id) {
    if (!apps[id]) return;
    if (openWindows.has(id)) {
        focusWindow(id);
        return;
    }
    const app = apps[id];
    const win = document.createElement('section');
    win.className = 'os-window';
    win.setAttribute('role', 'dialog');
    win.setAttribute('aria-label', app.title);
    win.innerHTML = `<header class="window-header"><span class="window-title">${app.title}</span><div class="window-controls"><button type="button" class="close" aria-label="Fechar ${app.title}">×</button></div></header><div class="window-body">${app.content}</div>`;
    layer.append(win);
    openWindows.set(id, {window: win});
    syncScrollLock();
    win.querySelector('.close').addEventListener('click', () => closeWindow(id));
    win.addEventListener('pointerdown', () => focusWindow(id));
    focusWindow(id);
    win.querySelector('.close').focus();
}

document.querySelectorAll('[data-open]').forEach(button => button.addEventListener('click', () => openWindow(button.dataset.open)));
document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        const visible = [...openWindows.entries()].filter(([, entry]) => !entry.window.hidden);
        if (visible.length) {
            const [id] = visible.sort((a, b) => Number(b[1].window.style.zIndex) - Number(a[1].window.style.zIndex))[0];
            closeWindow(id);
        }
    }
});
window.PortfolioWindows = {open: openWindow};
