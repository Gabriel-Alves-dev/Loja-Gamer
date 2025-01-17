# Projeto Loja Gamer 🎮

## Demonstrações:



![Design sem nome (2)](https://github.com/user-attachments/assets/b15e0c60-051a-439b-99c0-0526925e28e5)


![Design sem nome (3)](https://github.com/user-attachments/assets/0c2e064d-1eb9-4867-84c1-681faece29ef)


---

## Sobre o projeto 🌐:

Foi um projeto básico para melhorar pratica e vivencia com front-end, utilizei dois arquivos CSS, dois JS e um index em HTML para facilitar na organização e separar a responsividade com maior clareza.
Assim ficou:

```bash
  Assets[]
  index.html
  script-desktop.js
  script-mobile.js
  styles-desktop.css
  style-mobile.css
```

- Em assets, deixei os icones usados;
  
- index o corpo geral e adicionei os links de ref:
  ```bash
  no head para os CSS:
  
  <link rel="stylesheet" href="styles-desktop.css" media="(min-width: 769px)">
  <link rel="stylesheet" href="styles-mobile.css" media="(max-width: 768px)">
  
  ------------------------------------------------

  e no final do body para o JavaScript:
  
  <script>
      function loadScript(src) {
          let script = document.createElement('script');
          script.src = src;
          document.head.appendChild(script);
      }
  
      if (window.innerWidth <= 768) {
          loadScript('script-mobile.js');
      } else {
          loadScript('script-desktop.js');
      }
  </script>
  ```

---

## Colaboração 🤝

Sinta-se a vontade para colaborar ou entrar em minhas redes sociais, estou sempre a disposição de discutir e compartilhar experiências sobre tecnologia!

### LinkeIn:
https://www.linkedin.com/in/gabriel-alves-787208250/
