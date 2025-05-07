// load-menu.js
function loadMenu() {
    fetch('menu.html')
        .then(response => response.text())
        .then(html => {
            // Cria a estrutura wrapper
            const wrapper = document.createElement('div');
            wrapper.className = 'wrapper';
            
            // Insere o menu no wrapper
            wrapper.innerHTML = html;
            
            // Insere o wrapper no início do body
            document.body.insertBefore(wrapper, document.body.firstChild);
            
            // Move o conteúdo existente para dentro do wrapper
            const content = document.createElement('div');
            content.id = 'content';
            content.className = 'p-4';
            
            // Seleciona todo o conteúdo exceto o wrapper
            const mainContent = Array.from(document.body.childNodes).filter(node => 
                node.nodeType === Node.ELEMENT_NODE && node.className !== 'wrapper'
            );
            
            // Move o conteúdo para dentro da div content
            mainContent.forEach(node => content.appendChild(node));
            
            // Adiciona a div content ao wrapper
            wrapper.appendChild(content);
        })
        .catch(error => console.error('Erro ao carregar o menu:', error));
}

// Carrega o menu quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', loadMenu);    