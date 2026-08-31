const clientesInfopocos = [
  {
    nome: "Pain 1",
    imagem: "pain1img.png",
    link: "https://www.instagram.com/postopain/"
  },
  {
    nome: "Pain 2",
    imagem: "pain2img.png",
    link: "https://www.instagram.com/postopain/"
  },
  {
    nome: "Pain 3",
    imagem: "pain3img.jpg",
    link: "https://www.instagram.com/postopain/"
  },
  {
    nome: "Arco-Íris 1",
    imagem: "arcoiris1img.jpeg",
    link: "https://www.instagram.com/arcoiris.supermercados/"
  },
  {
    nome: "Arco-Íris 2",
    imagem: "arcoiris2img.jpeg",
    link: "https://www.instagram.com/arcoiris.supermercados/"
  },
  {
    nome: "Clínica Personne",
    imagem: "personnelogo.jpeg",
    link: "https://www.clinicapersonne.com.br"
  },
  {
    nome: "Labor Campos Lopes",
    imagem: "laborcampos.png",
    link: "https://www.instagram.com/laborcamposlopes/"
  },
  {
    nome: "Posto Santa Fé",
    imagem: "postosantafe.jpg",
    link: "https://www.instagram.com/_postosantafe/"
  }
];


function carregarClientes() {

  const containers = document.querySelectorAll(".clientes-grid-central");

  if (!containers.length) {
    return;
  }

  containers.forEach(container => {

    container.innerHTML = "";

    clientesInfopocos.forEach(cliente => {

      const card = document.createElement("div");
      card.className = "cliente";

      const link = document.createElement("a");
      link.href = cliente.link;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      const imagem = document.createElement("img");
      imagem.src = cliente.imagem;
      imagem.alt = cliente.nome;

      const nome = document.createElement("p");
      nome.textContent = cliente.nome;

      link.appendChild(imagem);

      card.appendChild(link);
      card.appendChild(nome);

      container.appendChild(card);

    });

  });

}


document.addEventListener("DOMContentLoaded", carregarClientes);
